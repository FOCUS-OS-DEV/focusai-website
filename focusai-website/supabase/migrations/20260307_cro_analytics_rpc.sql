-- CRO (Conversion Rate Optimization) analytics RPC
-- Queries new event types: scroll_depth, time_on_page, form_start, form_abandon
-- Created 2026-03-07

CREATE OR REPLACE FUNCTION public.get_cro_data(p_password text DEFAULT NULL, p_days integer DEFAULT 30, p_device_type text DEFAULT NULL, p_utm_source text DEFAULT NULL, p_page_filter text DEFAULT NULL)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
DECLARE
  stored_hash text;
  result json;
  v_start timestamptz := now() - (p_days || ' days')::interval;
BEGIN
  SELECT value INTO stored_hash FROM public.dashboard_config WHERE key = 'password_hash';
  IF stored_hash IS NULL OR stored_hash != encode(digest(COALESCE(p_password, ''), 'sha256'), 'hex') THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  SELECT json_build_object(
    'scroll_depth', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT page_path, click_text as depth, count(*) as count
        FROM events
        WHERE event_type = 'scroll_depth' AND created_at > v_start
          AND (p_device_type IS NULL OR device_type = p_device_type)
          AND (p_utm_source IS NULL OR utm_source = p_utm_source)
          AND (p_page_filter IS NULL OR page_path = p_page_filter)
        GROUP BY page_path, click_text
        ORDER BY page_path, depth
      ) t
    ),

    'scroll_summary', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT click_text as depth, count(*) as count
        FROM events
        WHERE event_type = 'scroll_depth' AND created_at > v_start
          AND (p_device_type IS NULL OR device_type = p_device_type)
          AND (p_utm_source IS NULL OR utm_source = p_utm_source)
          AND (p_page_filter IS NULL OR page_path = p_page_filter)
        GROUP BY click_text
        ORDER BY depth
      ) t
    ),

    'time_on_page', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT page_path,
          count(*) as sessions,
          ROUND(avg(click_text::numeric), 1) as avg_seconds,
          ROUND(percentile_cont(0.5) WITHIN GROUP (ORDER BY click_text::numeric)::numeric, 1) as median_seconds,
          max(click_text::numeric) as max_seconds
        FROM events
        WHERE event_type = 'time_on_page' AND created_at > v_start
          AND click_text ~ '^\d+$'
          AND (p_device_type IS NULL OR device_type = p_device_type)
          AND (p_utm_source IS NULL OR utm_source = p_utm_source)
          AND (p_page_filter IS NULL OR page_path = p_page_filter)
        GROUP BY page_path
        ORDER BY avg_seconds DESC
        LIMIT 30
      ) t
    ),

    'time_buckets', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT
          CASE
            WHEN click_text::int < 10 THEN '0-10s'
            WHEN click_text::int < 30 THEN '10-30s'
            WHEN click_text::int < 60 THEN '30-60s'
            WHEN click_text::int < 180 THEN '1-3min'
            WHEN click_text::int < 300 THEN '3-5min'
            ELSE '5min+'
          END as bucket,
          count(*) as count
        FROM events
        WHERE event_type = 'time_on_page' AND created_at > v_start
          AND click_text ~ '^\d+$'
          AND (p_device_type IS NULL OR device_type = p_device_type)
          AND (p_utm_source IS NULL OR utm_source = p_utm_source)
          AND (p_page_filter IS NULL OR page_path = p_page_filter)
        GROUP BY bucket
        ORDER BY min(click_text::int)
      ) t
    ),

    'form_engagement', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT
          s.form_id, s.starts,
          COALESCE(sub.submits, 0) as submits,
          COALESCE(ab.abandons, 0) as abandons,
          CASE WHEN s.starts = 0 THEN 0
            ELSE ROUND(COALESCE(ab.abandons, 0)::numeric / s.starts * 100, 1)
          END as abandon_rate,
          COALESCE(ab.avg_time_before_abandon, 0) as avg_time_before_abandon
        FROM (
          SELECT click_text as form_id, count(*) as starts
          FROM events WHERE event_type = 'form_start' AND created_at > v_start
            AND (p_device_type IS NULL OR device_type = p_device_type)
            AND (p_utm_source IS NULL OR utm_source = p_utm_source)
          GROUP BY click_text
        ) s
        LEFT JOIN (
          SELECT click_text as form_id, count(*) as submits
          FROM events WHERE event_type = 'form_submit' AND created_at > v_start
            AND (p_device_type IS NULL OR device_type = p_device_type)
            AND (p_utm_source IS NULL OR utm_source = p_utm_source)
          GROUP BY click_text
        ) sub ON sub.form_id = s.form_id
        LEFT JOIN (
          SELECT click_text as form_id, count(*) as abandons,
            ROUND(avg(CASE WHEN click_url ~ '^\d+$' THEN click_url::numeric ELSE 0 END), 1) as avg_time_before_abandon
          FROM events WHERE event_type = 'form_abandon' AND created_at > v_start
            AND (p_device_type IS NULL OR device_type = p_device_type)
            AND (p_utm_source IS NULL OR utm_source = p_utm_source)
          GROUP BY click_text
        ) ab ON ab.form_id = s.form_id
        ORDER BY s.starts DESC
      ) t
    ),

    'page_flows', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT from_page, to_page, count(*) as transitions
        FROM (
          SELECT
            page_path as from_page,
            LEAD(page_path) OVER (PARTITION BY session_id ORDER BY created_at) as to_page
          FROM events
          WHERE event_type = 'pageview' AND session_id IS NOT NULL AND created_at > v_start
            AND (p_device_type IS NULL OR device_type = p_device_type)
            AND (p_utm_source IS NULL OR utm_source = p_utm_source)
        ) flows
        WHERE to_page IS NOT NULL AND from_page != to_page
        GROUP BY from_page, to_page
        ORDER BY transitions DESC
        LIMIT 30
      ) t
    ),

    'entry_pages', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT page_path, count(*) as entries
        FROM (
          SELECT DISTINCT ON (session_id) session_id, page_path
          FROM events
          WHERE event_type = 'pageview' AND session_id IS NOT NULL AND created_at > v_start
            AND (p_device_type IS NULL OR device_type = p_device_type)
            AND (p_utm_source IS NULL OR utm_source = p_utm_source)
          ORDER BY session_id, created_at ASC
        ) first_pages
        GROUP BY page_path
        ORDER BY entries DESC
        LIMIT 20
      ) t
    ),

    'exit_pages', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT page_path, count(*) as exits
        FROM (
          SELECT DISTINCT ON (session_id) session_id, page_path
          FROM events
          WHERE event_type = 'pageview' AND session_id IS NOT NULL AND created_at > v_start
            AND (p_device_type IS NULL OR device_type = p_device_type)
            AND (p_utm_source IS NULL OR utm_source = p_utm_source)
          ORDER BY session_id, created_at DESC
        ) last_pages
        GROUP BY page_path
        ORDER BY exits DESC
        LIMIT 20
      ) t
    ),

    'daily_engagement', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT
          date_trunc('day', created_at)::date as day,
          count(*) FILTER (WHERE event_type = 'scroll_depth' AND click_text = '100%') as deep_scrolls,
          count(*) FILTER (WHERE event_type = 'form_start') as form_starts,
          count(*) FILTER (WHERE event_type = 'form_abandon') as form_abandons,
          ROUND(avg(CASE WHEN event_type = 'time_on_page' AND click_text ~ '^\d+$' THEN click_text::numeric END), 0) as avg_time
        FROM events
        WHERE created_at > v_start
          AND event_type IN ('scroll_depth', 'time_on_page', 'form_start', 'form_abandon')
          AND (p_device_type IS NULL OR device_type = p_device_type)
          AND (p_utm_source IS NULL OR utm_source = p_utm_source)
        GROUP BY day
        ORDER BY day
      ) t
    )

  ) INTO result;

  RETURN result;
END;
$function$;
