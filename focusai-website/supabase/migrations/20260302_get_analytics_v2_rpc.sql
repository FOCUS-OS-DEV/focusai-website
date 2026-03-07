-- get_analytics_v2 RPC (extracted from production 2026-03-07)
-- Main analytics dashboard RPC - returns all data for Overview, Content, Sources, Conversions tabs

CREATE OR REPLACE FUNCTION public.get_analytics_v2(p_password text, p_days integer DEFAULT 30)
 RETURNS json
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
  stored_hash text;
  result json;
  v_start timestamptz := now() - (p_days || ' days')::interval;
  v_prev_start timestamptz := now() - (p_days * 2 || ' days')::interval;
BEGIN
  SELECT value INTO stored_hash FROM public.dashboard_config WHERE key = 'password_hash';
  IF stored_hash IS NULL OR stored_hash != encode(digest(p_password, 'sha256'), 'hex') THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  SELECT json_build_object(
    'total_pageviews', (SELECT count(*) FROM events WHERE event_type = 'pageview' AND created_at > v_start),
    'total_clicks', (SELECT count(*) FROM events WHERE event_type = 'click' AND created_at > v_start),
    'total_forms', (SELECT count(*) FROM events WHERE event_type = 'form_submit' AND created_at > v_start),
    'prev_total_pageviews', (SELECT count(*) FROM events WHERE event_type = 'pageview' AND created_at > v_prev_start AND created_at <= v_start),
    'prev_total_clicks', (SELECT count(*) FROM events WHERE event_type = 'click' AND created_at > v_prev_start AND created_at <= v_start),
    'prev_total_forms', (SELECT count(*) FROM events WHERE event_type = 'form_submit' AND created_at > v_prev_start AND created_at <= v_start),

    'top_pages', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT page_path, count(*) as views
        FROM events WHERE event_type = 'pageview' AND created_at > v_start
        GROUP BY page_path ORDER BY views DESC LIMIT 20
      ) t
    ),
    'top_clicks', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT click_url, click_text, click_type, count(*) as clicks
        FROM events WHERE event_type = 'click' AND created_at > v_start
        GROUP BY click_url, click_text, click_type ORDER BY clicks DESC LIMIT 30
      ) t
    ),
    'referrers', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT referrer, count(*) as visits
        FROM events WHERE event_type = 'pageview' AND referrer IS NOT NULL AND referrer != '' AND created_at > v_start
        GROUP BY referrer ORDER BY visits DESC LIMIT 20
      ) t
    ),
    'utm_campaigns', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT utm_source, utm_medium, utm_campaign, count(*) as visits
        FROM events WHERE utm_source IS NOT NULL AND created_at > v_start
        GROUP BY utm_source, utm_medium, utm_campaign ORDER BY visits DESC LIMIT 20
      ) t
    ),
    'devices', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT device_type, count(*) as count
        FROM events WHERE created_at > v_start
        GROUP BY device_type ORDER BY count DESC
      ) t
    ),
    'daily_views', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT date_trunc('day', created_at)::date as day, count(*) as views
        FROM events WHERE event_type = 'pageview' AND created_at > v_start
        GROUP BY day ORDER BY day
      ) t
    ),
    'page_details', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT
          p.page_path,
          COALESCE(p.views, 0) as views,
          COALESCE(c.clicks, 0) as clicks,
          COALESCE(f.forms, 0) as forms,
          COALESCE(r.unique_sources, 0) as unique_sources
        FROM (
          SELECT page_path, count(*) as views
          FROM events WHERE event_type = 'pageview' AND created_at > v_start
          GROUP BY page_path
        ) p
        LEFT JOIN (
          SELECT page_path, count(*) as clicks
          FROM events WHERE event_type = 'click' AND created_at > v_start
          GROUP BY page_path
        ) c ON c.page_path = p.page_path
        LEFT JOIN (
          SELECT page_path, count(*) as forms
          FROM events WHERE event_type = 'form_submit' AND created_at > v_start
          GROUP BY page_path
        ) f ON f.page_path = p.page_path
        LEFT JOIN (
          SELECT page_path, count(DISTINCT
            CASE
              WHEN utm_source IS NOT NULL THEN utm_source
              WHEN referrer IS NOT NULL AND referrer != '' AND referrer NOT LIKE '%focusai.co.il%'
                THEN split_part(split_part(referrer, '://', 2), '/', 1)
              ELSE NULL
            END
          ) as unique_sources
          FROM events WHERE event_type = 'pageview' AND created_at > v_start
          GROUP BY page_path
        ) r ON r.page_path = p.page_path
        ORDER BY views DESC LIMIT 30
      ) t
    ),
    'form_details', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT page_path, TRIM(click_text) as button_text, count(*) as submissions
        FROM events WHERE event_type = 'form_submit' AND created_at > v_start
        GROUP BY page_path, TRIM(click_text) ORDER BY submissions DESC LIMIT 30
      ) t
    ),
    'source_pages', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT
          COALESCE(
            utm_source,
            CASE
              WHEN referrer LIKE '%facebook.com%' OR referrer LIKE '%m.facebook.com%' THEN 'facebook'
              WHEN referrer LIKE '%instagram.com%' OR referrer LIKE '%l.instagram.com%' THEN 'instagram'
              WHEN referrer LIKE '%google.%' THEN 'google'
              WHEN referrer LIKE '%t.co%' OR referrer LIKE '%twitter.com%' OR referrer LIKE '%x.com%' THEN 'twitter/x'
              WHEN referrer LIKE '%linkedin.com%' THEN 'linkedin'
              WHEN referrer LIKE '%wa.me%' OR referrer LIKE '%whatsapp.com%' THEN 'whatsapp'
              WHEN referrer IS NOT NULL AND referrer != '' AND referrer NOT LIKE '%focusai.co.il%'
                THEN split_part(split_part(referrer, '://', 2), '/', 1)
              ELSE NULL
            END
          ) as source,
          utm_medium,
          page_path,
          count(*) as visits
        FROM events
        WHERE event_type = 'pageview'
          AND created_at > v_start
          AND (utm_source IS NOT NULL OR (referrer IS NOT NULL AND referrer != '' AND referrer NOT LIKE '%focusai.co.il%'))
        GROUP BY source, utm_medium, page_path
        ORDER BY visits DESC LIMIT 50
      ) t
    ),
    'landing_pages', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT
          page_path,
          count(*) as external_entries,
          count(DISTINCT COALESCE(
            utm_source,
            CASE
              WHEN referrer LIKE '%facebook.com%' OR referrer LIKE '%m.facebook.com%' THEN 'facebook'
              WHEN referrer LIKE '%instagram.com%' OR referrer LIKE '%l.instagram.com%' THEN 'instagram'
              WHEN referrer LIKE '%google.%' THEN 'google'
              WHEN referrer LIKE '%wa.me%' OR referrer LIKE '%whatsapp.com%' THEN 'whatsapp'
              WHEN referrer IS NOT NULL AND referrer != '' AND referrer NOT LIKE '%focusai.co.il%'
                THEN split_part(split_part(referrer, '://', 2), '/', 1)
              ELSE NULL
            END
          )) as distinct_sources,
          count(*) FILTER (WHERE utm_medium = 'paid') as paid_entries,
          count(*) FILTER (WHERE utm_medium IS NULL OR utm_medium != 'paid') as organic_entries
        FROM events
        WHERE event_type = 'pageview'
          AND created_at > v_start
          AND (utm_source IS NOT NULL OR (referrer IS NOT NULL AND referrer != '' AND referrer NOT LIKE '%focusai.co.il%'))
        GROUP BY page_path
        ORDER BY external_entries DESC LIMIT 20
      ) t
    ),

    -- V2 NEW FIELDS --

    'conversion_rate', (
      SELECT ROUND(
        CASE WHEN pv.c = 0 THEN 0
        ELSE (fs.c::numeric / pv.c * 100)
        END, 2
      )
      FROM
        (SELECT count(*) as c FROM events WHERE event_type = 'pageview' AND created_at > v_start) pv,
        (SELECT count(*) as c FROM events WHERE event_type = 'form_submit' AND created_at > v_start) fs
    ),
    'prev_conversion_rate', (
      SELECT ROUND(
        CASE WHEN pv.c = 0 THEN 0
        ELSE (fs.c::numeric / pv.c * 100)
        END, 2
      )
      FROM
        (SELECT count(*) as c FROM events WHERE event_type = 'pageview' AND created_at > v_prev_start AND created_at <= v_start) pv,
        (SELECT count(*) as c FROM events WHERE event_type = 'form_submit' AND created_at > v_prev_start AND created_at <= v_start) fs
    ),

    'whatsapp_clicks', (SELECT count(*) FROM events WHERE event_type = 'click' AND click_type = 'whatsapp' AND created_at > v_start),
    'prev_whatsapp_clicks', (SELECT count(*) FROM events WHERE event_type = 'click' AND click_type = 'whatsapp' AND created_at > v_prev_start AND created_at <= v_start),
    'phone_clicks', (SELECT count(*) FROM events WHERE event_type = 'click' AND click_type = 'phone' AND created_at > v_start),
    'email_clicks', (SELECT count(*) FROM events WHERE event_type = 'click' AND click_type = 'email' AND created_at > v_start),

    'daily_clicks', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT date_trunc('day', created_at)::date as day, count(*) as clicks
        FROM events WHERE event_type = 'click' AND created_at > v_start
        GROUP BY day ORDER BY day
      ) t
    ),
    'daily_forms', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT date_trunc('day', created_at)::date as day, count(*) as forms
        FROM events WHERE event_type = 'form_submit' AND created_at > v_start
        GROUP BY day ORDER BY day
      ) t
    ),

    'hourly_distribution', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT extract(hour FROM created_at AT TIME ZONE 'Asia/Jerusalem')::int as hour, count(*) as count
        FROM events WHERE event_type = 'pageview' AND created_at > v_start
        GROUP BY hour ORDER BY hour
      ) t
    ),

    'page_categories', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT
          CASE
            WHEN page_path = '/' THEN 'homepage'
            WHEN page_path LIKE '/academy%' OR page_path LIKE '/bot-camp%' THEN 'academy'
            WHEN page_path LIKE '/ai-agents%' OR page_path LIKE '/services%' OR page_path LIKE '/ai-workshop%' THEN 'services'
            WHEN page_path LIKE '/ai-news%' THEN 'blog'
            WHEN page_path LIKE '/webinar%' OR page_path LIKE '/content-automation%' THEN 'campaigns'
            WHEN page_path LIKE '/claude-%' THEN 'skills'
            WHEN page_path LIKE '/ai-dev%' OR page_path LIKE '/ai-builder%' THEN 'courses'
            ELSE 'other'
          END as category,
          count(*) as views
        FROM events WHERE event_type = 'pageview' AND created_at > v_start
        GROUP BY category ORDER BY views DESC
      ) t
    ),

    'session_stats', (
      SELECT json_build_object(
        'total_sessions', COALESCE(s.total, 0),
        'avg_pages_per_session', COALESCE(ROUND(s.avg_pages::numeric, 1), 0),
        'bounce_rate', COALESCE(ROUND(s.bounce_pct::numeric, 1), 0)
      )
      FROM (
        SELECT
          count(DISTINCT session_id) as total,
          avg(pg_count) as avg_pages,
          (count(*) FILTER (WHERE pg_count = 1))::numeric / NULLIF(count(*), 0) * 100 as bounce_pct
        FROM (
          SELECT session_id, count(*) as pg_count
          FROM events
          WHERE event_type = 'pageview' AND session_id IS NOT NULL AND created_at > v_start
          GROUP BY session_id
        ) sess
      ) s
    ),

    'top_content', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT
          p.page_path,
          COALESCE(p.views, 0) as views,
          COALESCE(c.clicks, 0) as clicks,
          COALESCE(f.forms, 0) as forms,
          CASE WHEN COALESCE(p.views, 0) = 0 THEN 0
            ELSE ROUND(COALESCE(f.forms, 0)::numeric / p.views * 100, 1)
          END as conversion_rate
        FROM (
          SELECT page_path, count(*) as views
          FROM events WHERE event_type = 'pageview' AND page_path LIKE '/ai-news/%'
            AND page_path != '/ai-news/' AND created_at > v_start
          GROUP BY page_path
        ) p
        LEFT JOIN (
          SELECT page_path, count(*) as clicks
          FROM events WHERE event_type = 'click' AND page_path LIKE '/ai-news/%' AND created_at > v_start
          GROUP BY page_path
        ) c ON c.page_path = p.page_path
        LEFT JOIN (
          SELECT page_path, count(*) as forms
          FROM events WHERE event_type = 'form_submit' AND page_path LIKE '/ai-news/%' AND created_at > v_start
          GROUP BY page_path
        ) f ON f.page_path = p.page_path
        ORDER BY views DESC LIMIT 20
      ) t
    ),

    'conversion_funnel', (
      SELECT json_build_object(
        'pageviews', (SELECT count(*) FROM events WHERE event_type = 'pageview' AND created_at > v_start),
        'clicks', (SELECT count(*) FROM events WHERE event_type = 'click' AND created_at > v_start),
        'contact_clicks', (SELECT count(*) FROM events WHERE event_type = 'click'
          AND click_type IN ('whatsapp', 'phone', 'email') AND created_at > v_start),
        'whatsapp', (SELECT count(*) FROM events WHERE event_type = 'click' AND click_type = 'whatsapp' AND created_at > v_start),
        'phone', (SELECT count(*) FROM events WHERE event_type = 'click' AND click_type = 'phone' AND created_at > v_start),
        'email', (SELECT count(*) FROM events WHERE event_type = 'click' AND click_type = 'email' AND created_at > v_start),
        'forms', (SELECT count(*) FROM events WHERE event_type = 'form_submit' AND created_at > v_start)
      )
    ),

    'recent_events', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT event_type, page_path, click_type, click_text, device_type, created_at
        FROM events ORDER BY created_at DESC LIMIT 20
      ) t
    ),

    'utm_campaigns_v2', (
      SELECT json_agg(row_to_json(t)) FROM (
        SELECT
          utm_source, utm_medium, utm_campaign,
          count(*) FILTER (WHERE event_type = 'pageview') as visits,
          count(*) FILTER (WHERE event_type = 'click') as clicks,
          count(*) FILTER (WHERE event_type = 'form_submit') as forms,
          CASE WHEN count(*) FILTER (WHERE event_type = 'pageview') = 0 THEN 0
            ELSE ROUND(count(*) FILTER (WHERE event_type = 'form_submit')::numeric /
              count(*) FILTER (WHERE event_type = 'pageview') * 100, 1)
          END as conversion_rate
        FROM events
        WHERE utm_source IS NOT NULL AND created_at > v_start
        GROUP BY utm_source, utm_medium, utm_campaign
        ORDER BY visits DESC LIMIT 20
      ) t
    )

  ) INTO result;

  RETURN result;
END;
$function$;
