-- Add global filter parameters to analytics RPCs (deployed 2026-03-07)
-- Both RPCs now accept optional device_type, utm_source, and page_filter parameters
-- All WHERE clauses updated with: AND (p_param IS NULL OR column = p_param)

-- get_analytics_v2: added p_device_type, p_utm_source, p_page_filter
-- get_advanced_analytics: added p_device_type, p_utm_source, p_page_filter
-- Both use NULL defaults for backward compatibility

-- Note: Full RPC definitions are in:
--   20260302_get_analytics_v2_rpc.sql
--   20260309_advanced_analytics_rpc.sql
-- This migration documents the parameter additions applied via execute_sql in production.

-- Example of the filter pattern applied to every WHERE clause:
--   AND (p_device_type IS NULL OR device_type = p_device_type)
--   AND (p_utm_source IS NULL OR utm_source = p_utm_source)
--   AND (p_page_filter IS NULL OR page_path = p_page_filter)
