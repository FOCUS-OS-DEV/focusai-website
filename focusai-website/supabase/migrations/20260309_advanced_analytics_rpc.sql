-- =============================================
-- Focus AI — Advanced Analytics RPC
-- Heatmap, session depth, DOW patterns, user flows
-- For the manager-friendly dashboard
-- =============================================

CREATE OR REPLACE FUNCTION public.get_advanced_analytics(
  p_password TEXT DEFAULT NULL,
  p_days INT DEFAULT 30,
  p_start_date DATE DEFAULT NULL,
  p_end_date DATE DEFAULT NULL,
  p_dow_filter INT DEFAULT NULL,      -- 0=Sunday..6=Saturday, NULL=all
  p_hour_start INT DEFAULT NULL,      -- 0-23, NULL=all
  p_hour_end INT DEFAULT NULL         -- 0-23, NULL=all
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $func$
DECLARE
  v_start TIMESTAMPTZ;
  v_end TIMESTAMPTZ;
  v_prev_start TIMESTAMPTZ;
  v_result JSON;
BEGIN
  -- Password check (matches get_analytics_v2 behavior — skip if setting is null)
  IF current_setting('app.analytics_password', true) IS NOT NULL
     AND p_password IS DISTINCT FROM current_setting('app.analytics_password', true) THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  -- Date range: custom or relative
  IF p_start_date IS NOT NULL AND p_end_date IS NOT NULL THEN
    v_start := p_start_date::TIMESTAMPTZ;
    v_end := (p_end_date + 1)::TIMESTAMPTZ;  -- include end date fully
  ELSE
    v_end := NOW();
    v_start := v_end - (p_days || ' days')::INTERVAL;
  END IF;
  v_prev_start := v_start - (v_end - v_start);  -- same-length previous period

  SELECT json_build_object(
    -- ═══ HEATMAP: day-of-week × hour matrix ═══
    'heatmap', (
      SELECT COALESCE(json_agg(row_to_json(h)), '[]'::JSON)
      FROM (
        SELECT
          EXTRACT(DOW FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT AS dow,
          EXTRACT(HOUR FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT AS hour,
          COUNT(*)::INT AS count,
          COUNT(*) FILTER (WHERE event_type = 'pageview')::INT AS pageviews,
          COUNT(*) FILTER (WHERE event_type = 'click')::INT AS clicks,
          COUNT(*) FILTER (WHERE event_type = 'form_submit')::INT AS forms
        FROM events
        WHERE created_at >= v_start AND created_at < v_end
          AND (p_dow_filter IS NULL OR EXTRACT(DOW FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT = p_dow_filter)
          AND (p_hour_start IS NULL OR EXTRACT(HOUR FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT >= p_hour_start)
          AND (p_hour_end IS NULL OR EXTRACT(HOUR FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT <= p_hour_end)
        GROUP BY dow, hour
        ORDER BY dow, hour
      ) h
    ),

    -- ═══ SESSION DEPTH: pages per session distribution ═══
    'session_depth', (
      SELECT COALESCE(json_agg(row_to_json(sd)), '[]'::JSON)
      FROM (
        SELECT depth, COUNT(*)::INT AS sessions
        FROM (
          SELECT session_id,
            LEAST(COUNT(*) FILTER (WHERE event_type = 'pageview'), 10) AS depth
          FROM events
          WHERE created_at >= v_start AND created_at < v_end
            AND session_id IS NOT NULL
          GROUP BY session_id
        ) sub
        GROUP BY depth
        ORDER BY depth
      ) sd
    ),

    -- ═══ SESSION DEPTH STATS ═══
    'session_depth_stats', (
      SELECT json_build_object(
        'avg_depth', ROUND(AVG(pv_count), 2),
        'max_depth', MAX(pv_count),
        'single_page_pct', ROUND(
          100.0 * COUNT(*) FILTER (WHERE pv_count = 1) / NULLIF(COUNT(*), 0), 1
        ),
        'deep_sessions_pct', ROUND(
          100.0 * COUNT(*) FILTER (WHERE pv_count >= 3) / NULLIF(COUNT(*), 0), 1
        ),
        'total_sessions', COUNT(*)::INT
      )
      FROM (
        SELECT session_id, COUNT(*) FILTER (WHERE event_type = 'pageview') AS pv_count
        FROM events
        WHERE created_at >= v_start AND created_at < v_end
          AND session_id IS NOT NULL
        GROUP BY session_id
      ) sub
    ),

    -- ═══ TOP USER FLOWS: page A → page B ═══
    'top_flows', (
      SELECT COALESCE(json_agg(row_to_json(f)), '[]'::JSON)
      FROM (
        SELECT from_page, to_page, count
        FROM (
          SELECT
            a.page_path AS from_page,
            b.page_path AS to_page,
            COUNT(*)::INT AS count
          FROM events a
          JOIN events b ON a.session_id = b.session_id
            AND b.event_type = 'pageview'
            AND a.event_type = 'pageview'
            AND b.created_at > a.created_at
            AND b.created_at < a.created_at + INTERVAL '30 minutes'
            AND NOT EXISTS (
              SELECT 1 FROM events c
              WHERE c.session_id = a.session_id
                AND c.event_type = 'pageview'
                AND c.created_at > a.created_at
                AND c.created_at < b.created_at
            )
          WHERE a.created_at >= v_start AND a.created_at < v_end
            AND a.page_path != b.page_path
          GROUP BY a.page_path, b.page_path
          HAVING COUNT(*) >= 2
          ORDER BY count DESC
          LIMIT 20
        ) sub
      ) f
    ),

    -- ═══ DOW WEEKLY PATTERN: performance by day-of-week across weeks ═══
    'dow_weekly', (
      SELECT COALESCE(json_agg(row_to_json(dw)), '[]'::JSON)
      FROM (
        SELECT
          EXTRACT(DOW FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT AS dow,
          COUNT(*) FILTER (WHERE event_type = 'pageview')::INT AS pageviews,
          COUNT(*) FILTER (WHERE event_type = 'click')::INT AS clicks,
          COUNT(*) FILTER (WHERE event_type = 'form_submit')::INT AS forms,
          COUNT(DISTINCT session_id)::INT AS sessions,
          ROUND(100.0 * COUNT(*) FILTER (WHERE event_type = 'form_submit') / NULLIF(COUNT(*) FILTER (WHERE event_type = 'pageview'), 0), 2) AS conversion_rate
        FROM events
        WHERE created_at >= v_start AND created_at < v_end
        GROUP BY dow
        ORDER BY dow
      ) dw
    ),

    -- ═══ WEEKLY TREND: week-by-week performance ═══
    'weekly_trend', (
      SELECT COALESCE(json_agg(row_to_json(wt)), '[]'::JSON)
      FROM (
        SELECT
          DATE_TRUNC('week', created_at AT TIME ZONE 'Asia/Jerusalem')::DATE AS week_start,
          COUNT(*) FILTER (WHERE event_type = 'pageview')::INT AS pageviews,
          COUNT(*) FILTER (WHERE event_type = 'click')::INT AS clicks,
          COUNT(*) FILTER (WHERE event_type = 'form_submit')::INT AS forms,
          COUNT(DISTINCT session_id)::INT AS sessions
        FROM events
        WHERE created_at >= v_start AND created_at < v_end
        GROUP BY week_start
        ORDER BY week_start
      ) wt
    ),

    -- ═══ PAGE PERFORMANCE: bounce, engagement, exit ═══
    'page_performance', (
      SELECT COALESCE(json_agg(row_to_json(pp)), '[]'::JSON)
      FROM (
        SELECT
          page_path,
          pageviews,
          clicks,
          forms,
          unique_sessions,
          ROUND(100.0 * bounce_sessions / NULLIF(unique_sessions, 0), 1) AS bounce_rate,
          ROUND(100.0 * forms / NULLIF(pageviews, 0), 2) AS conversion_rate,
          ROUND(100.0 * exit_sessions / NULLIF(unique_sessions, 0), 1) AS exit_rate
        FROM (
          SELECT
            e.page_path,
            COUNT(*) FILTER (WHERE e.event_type = 'pageview')::INT AS pageviews,
            COUNT(*) FILTER (WHERE e.event_type = 'click')::INT AS clicks,
            COUNT(*) FILTER (WHERE e.event_type = 'form_submit')::INT AS forms,
            COUNT(DISTINCT e.session_id)::INT AS unique_sessions,
            -- Bounce: sessions where this was the only page
            COUNT(DISTINCT e.session_id) FILTER (
              WHERE e.session_id IN (
                SELECT session_id FROM events
                WHERE created_at >= v_start AND created_at < v_end
                  AND event_type = 'pageview' AND session_id IS NOT NULL
                GROUP BY session_id HAVING COUNT(*) = 1
              )
            )::INT AS bounce_sessions,
            -- Exit: sessions where this was the last page
            COUNT(DISTINCT e.session_id) FILTER (
              WHERE NOT EXISTS (
                SELECT 1 FROM events e2
                WHERE e2.session_id = e.session_id
                  AND e2.event_type = 'pageview'
                  AND e2.created_at > e.created_at
                  AND e2.created_at < v_end
              )
            )::INT AS exit_sessions
          FROM events e
          WHERE e.created_at >= v_start AND e.created_at < v_end
          GROUP BY e.page_path
          HAVING COUNT(*) FILTER (WHERE e.event_type = 'pageview') >= 3
          ORDER BY COUNT(*) FILTER (WHERE e.event_type = 'pageview') DESC
          LIMIT 25
        ) sub
      ) pp
    ),

    -- ═══ ENTRY & EXIT PAGES ═══
    'entry_pages', (
      SELECT COALESCE(json_agg(row_to_json(ep)), '[]'::JSON)
      FROM (
        SELECT page_path, COUNT(*)::INT AS entries
        FROM (
          SELECT DISTINCT ON (session_id)
            session_id, page_path
          FROM events
          WHERE created_at >= v_start AND created_at < v_end
            AND event_type = 'pageview' AND session_id IS NOT NULL
          ORDER BY session_id, created_at ASC
        ) sub
        GROUP BY page_path
        ORDER BY entries DESC
        LIMIT 15
      ) ep
    ),
    'exit_pages', (
      SELECT COALESCE(json_agg(row_to_json(xp)), '[]'::JSON)
      FROM (
        SELECT page_path, COUNT(*)::INT AS exits
        FROM (
          SELECT DISTINCT ON (session_id)
            session_id, page_path
          FROM events
          WHERE created_at >= v_start AND created_at < v_end
            AND event_type = 'pageview' AND session_id IS NOT NULL
          ORDER BY session_id, created_at DESC
        ) sub
        GROUP BY page_path
        ORDER BY exits DESC
        LIMIT 15
      ) xp
    ),

    -- ═══ DEVICE + SCREEN WIDTH BREAKDOWN ═══
    'device_breakdown', (
      SELECT COALESCE(json_agg(row_to_json(db)), '[]'::JSON)
      FROM (
        SELECT
          COALESCE(device_type, 'unknown') AS device_type,
          COUNT(DISTINCT session_id)::INT AS sessions,
          COUNT(*) FILTER (WHERE event_type = 'pageview')::INT AS pageviews,
          COUNT(*) FILTER (WHERE event_type = 'form_submit')::INT AS forms,
          ROUND(100.0 * COUNT(*) FILTER (WHERE event_type = 'form_submit') /
            NULLIF(COUNT(*) FILTER (WHERE event_type = 'pageview'), 0), 2) AS conversion_rate
        FROM events
        WHERE created_at >= v_start AND created_at < v_end
        GROUP BY COALESCE(device_type, 'unknown')
        ORDER BY sessions DESC
      ) db
    ),

    -- ═══ HOURLY PATTERN PER DOW (for "show me every Sunday") ═══
    'dow_hourly', (
      SELECT COALESCE(json_agg(row_to_json(dh)), '[]'::JSON)
      FROM (
        SELECT
          EXTRACT(DOW FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT AS dow,
          EXTRACT(HOUR FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT AS hour,
          COUNT(*) FILTER (WHERE event_type = 'pageview')::INT AS pageviews
        FROM events
        WHERE created_at >= v_start AND created_at < v_end
        GROUP BY dow, hour
        ORDER BY dow, hour
      ) dh
    ),

    -- ═══ PERIOD COMPARISON SUMMARY ═══
    'period_comparison', (
      SELECT json_build_object(
        'current_pageviews', (SELECT COUNT(*) FROM events WHERE created_at >= v_start AND created_at < v_end AND event_type = 'pageview')::INT,
        'prev_pageviews', (SELECT COUNT(*) FROM events WHERE created_at >= v_prev_start AND created_at < v_start AND event_type = 'pageview')::INT,
        'current_sessions', (SELECT COUNT(DISTINCT session_id) FROM events WHERE created_at >= v_start AND created_at < v_end)::INT,
        'prev_sessions', (SELECT COUNT(DISTINCT session_id) FROM events WHERE created_at >= v_prev_start AND created_at < v_start)::INT,
        'current_forms', (SELECT COUNT(*) FROM events WHERE created_at >= v_start AND created_at < v_end AND event_type = 'form_submit')::INT,
        'prev_forms', (SELECT COUNT(*) FROM events WHERE created_at >= v_prev_start AND created_at < v_start AND event_type = 'form_submit')::INT,
        'current_clicks', (SELECT COUNT(*) FROM events WHERE created_at >= v_start AND created_at < v_end AND event_type = 'click')::INT,
        'prev_clicks', (SELECT COUNT(*) FROM events WHERE created_at >= v_prev_start AND created_at < v_start AND event_type = 'click')::INT
      )
    ),

    -- ═══ NEW VS RETURNING (approximate by session count per "user" = session_id prefix) ═══
    'engagement_segments', (
      SELECT json_build_object(
        'one_page_sessions', COUNT(*) FILTER (WHERE pv = 1)::INT,
        'two_page_sessions', COUNT(*) FILTER (WHERE pv = 2)::INT,
        'three_plus_sessions', COUNT(*) FILTER (WHERE pv >= 3)::INT,
        'clicked_sessions', COUNT(*) FILTER (WHERE has_click)::INT,
        'converted_sessions', COUNT(*) FILTER (WHERE has_form)::INT
      )
      FROM (
        SELECT
          session_id,
          COUNT(*) FILTER (WHERE event_type = 'pageview') AS pv,
          BOOL_OR(event_type = 'click') AS has_click,
          BOOL_OR(event_type = 'form_submit') AS has_form
        FROM events
        WHERE created_at >= v_start AND created_at < v_end
          AND session_id IS NOT NULL
        GROUP BY session_id
      ) sub
    ),

    -- Meta: date range used
    'date_range', json_build_object(
      'start', v_start,
      'end', v_end,
      'days', EXTRACT(DAY FROM v_end - v_start)::INT
    )
  ) INTO v_result;

  RETURN v_result;
END;
$func$;

-- Grant access to anon role (dashboard uses anon key)
GRANT EXECUTE ON FUNCTION public.get_advanced_analytics TO anon;
GRANT EXECUTE ON FUNCTION public.get_advanced_analytics TO authenticated;
