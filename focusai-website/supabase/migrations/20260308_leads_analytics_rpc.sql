-- =============================================
-- Focus AI — Leads Analytics RPC
-- Reads from form_submissions for dashboard
-- Password-protected (same as get_analytics_v2)
-- =============================================

CREATE OR REPLACE FUNCTION public.get_leads_analytics(p_password TEXT, p_days INT DEFAULT 30)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $func$
DECLARE
  v_start TIMESTAMPTZ;
  v_prev_start TIMESTAMPTZ;
  v_result JSON;
BEGIN
  -- Password check (same as analytics dashboard)
  IF p_password IS DISTINCT FROM current_setting('app.analytics_password', true) THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  v_start := NOW() - (p_days || ' days')::INTERVAL;
  v_prev_start := v_start - (p_days || ' days')::INTERVAL;

  SELECT json_build_object(
    -- Total leads current period
    'total_leads', (
      SELECT COUNT(*) FROM form_submissions WHERE created_at >= v_start
    ),
    -- Total leads previous period
    'prev_total_leads', (
      SELECT COUNT(*) FROM form_submissions WHERE created_at >= v_prev_start AND created_at < v_start
    ),

    -- Leads by form_source
    'leads_by_source', (
      SELECT COALESCE(json_agg(r ORDER BY r.count DESC), '[]'::json) FROM (
        SELECT form_source, COUNT(*)::INT AS count
        FROM form_submissions WHERE created_at >= v_start
        GROUP BY form_source
      ) r
    ),

    -- Leads by UTM source
    'leads_by_utm_source', (
      SELECT COALESCE(json_agg(r ORDER BY r.count DESC), '[]'::json) FROM (
        SELECT COALESCE(utm_source, 'direct') AS utm_source, COUNT(*)::INT AS count
        FROM form_submissions WHERE created_at >= v_start
        GROUP BY COALESCE(utm_source, 'direct')
      ) r
    ),

    -- Leads by UTM medium
    'leads_by_utm_medium', (
      SELECT COALESCE(json_agg(r ORDER BY r.count DESC), '[]'::json) FROM (
        SELECT COALESCE(utm_medium, 'none') AS utm_medium, COUNT(*)::INT AS count
        FROM form_submissions WHERE created_at >= v_start
        GROUP BY COALESCE(utm_medium, 'none')
      ) r
    ),

    -- Full UTM breakdown (source + medium + campaign)
    'leads_by_campaign', (
      SELECT COALESCE(json_agg(r ORDER BY r.count DESC), '[]'::json) FROM (
        SELECT
          COALESCE(utm_source, 'direct') AS utm_source,
          COALESCE(utm_medium, 'none') AS utm_medium,
          COALESCE(utm_campaign, '') AS utm_campaign,
          COALESCE(utm_content, '') AS utm_content,
          COUNT(*)::INT AS count
        FROM form_submissions WHERE created_at >= v_start
        GROUP BY COALESCE(utm_source, 'direct'), COALESCE(utm_medium, 'none'),
                 COALESCE(utm_campaign, ''), COALESCE(utm_content, '')
      ) r
    ),

    -- Daily leads trend
    'daily_leads', (
      SELECT COALESCE(json_agg(r ORDER BY r.day), '[]'::json) FROM (
        SELECT DATE(created_at AT TIME ZONE 'Asia/Jerusalem') AS day, COUNT(*)::INT AS count
        FROM form_submissions WHERE created_at >= v_start
        GROUP BY DATE(created_at AT TIME ZONE 'Asia/Jerusalem')
      ) r
    ),

    -- Hourly distribution
    'hourly_leads', (
      SELECT COALESCE(json_agg(r ORDER BY r.hour), '[]'::json) FROM (
        SELECT EXTRACT(HOUR FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT AS hour, COUNT(*)::INT AS count
        FROM form_submissions WHERE created_at >= v_start
        GROUP BY EXTRACT(HOUR FROM created_at AT TIME ZONE 'Asia/Jerusalem')
      ) r
    ),

    -- Day-of-week distribution
    'dow_leads', (
      SELECT COALESCE(json_agg(r ORDER BY r.dow), '[]'::json) FROM (
        SELECT EXTRACT(DOW FROM created_at AT TIME ZONE 'Asia/Jerusalem')::INT AS dow, COUNT(*)::INT AS count
        FROM form_submissions WHERE created_at >= v_start
        GROUP BY EXTRACT(DOW FROM created_at AT TIME ZONE 'Asia/Jerusalem')
      ) r
    ),

    -- Leads by device type
    'leads_by_device', (
      SELECT COALESCE(json_agg(r ORDER BY r.count DESC), '[]'::json) FROM (
        SELECT COALESCE(device_type, 'unknown') AS device_type, COUNT(*)::INT AS count
        FROM form_submissions WHERE created_at >= v_start
        GROUP BY COALESCE(device_type, 'unknown')
      ) r
    ),

    -- Marketing consent rate
    'consent_marketing_rate', (
      SELECT CASE WHEN COUNT(*) > 0
        THEN ROUND((COUNT(*) FILTER (WHERE consent_marketing = true)::NUMERIC / COUNT(*)) * 100, 1)
        ELSE 0 END
      FROM form_submissions WHERE created_at >= v_start
    ),

    -- Recent leads (last 20)
    'recent_leads', (
      SELECT COALESCE(json_agg(r), '[]'::json) FROM (
        SELECT
          first_name,
          SUBSTRING(email FROM 1 FOR 3) || '***' AS email_masked,
          form_source,
          COALESCE(utm_source, '') AS utm_source,
          COALESCE(utm_medium, '') AS utm_medium,
          COALESCE(utm_campaign, '') AS utm_campaign,
          COALESCE(device_type, '') AS device_type,
          created_at
        FROM form_submissions
        WHERE created_at >= v_start
        ORDER BY created_at DESC
        LIMIT 20
      ) r
    ),

    -- CAPI success rate
    'capi_sent_count', (
      SELECT COUNT(*) FROM form_submissions WHERE created_at >= v_start AND fb_capi_sent = true
    ),
    'capi_total', (
      SELECT COUNT(*) FROM form_submissions WHERE created_at >= v_start
    ),

    -- Leads by page_url (top landing pages)
    'leads_by_page', (
      SELECT COALESCE(json_agg(r ORDER BY r.count DESC), '[]'::json) FROM (
        SELECT page_url, COUNT(*)::INT AS count
        FROM form_submissions WHERE created_at >= v_start
        GROUP BY page_url
      ) r
    )

  ) INTO v_result;

  RETURN v_result;
END;
$func$;

COMMENT ON FUNCTION public.get_leads_analytics IS 'Password-protected RPC for leads analytics dashboard. Reads from form_submissions.';
