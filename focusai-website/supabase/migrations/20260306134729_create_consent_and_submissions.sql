-- =============================================
-- Focus AI — Consent Log + Form Submissions
-- Run in Supabase Dashboard → SQL Editor
-- =============================================

-- 1. CONSENT LOG — Immutable audit trail (append-only)
-- Records every form submission's consent state for legal compliance
CREATE TABLE IF NOT EXISTS consent_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  phone TEXT,
  consent_privacy BOOLEAN NOT NULL DEFAULT true,
  consent_marketing BOOLEAN NOT NULL DEFAULT false,
  consent_text_version TEXT NOT NULL DEFAULT 'v1.0',
  consent_privacy_text TEXT NOT NULL DEFAULT 'קראתי ואני מסכים/ה לתנאי השימוש ולמדיניות הפרטיות.',
  consent_marketing_text TEXT NOT NULL DEFAULT 'אני מסכים/ה לקבל עדכונים, תכנים שיווקיים והצעות מ-Focus AI בדוא"ל ו/או SMS. ניתן לבטל בכל עת.',
  form_source TEXT NOT NULL,
  page_url TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Index for lookups by email (e.g., "show me all consent records for this person")
CREATE INDEX IF NOT EXISTS idx_consent_log_email ON consent_log(email);
CREATE INDEX IF NOT EXISTS idx_consent_log_created ON consent_log(created_at);

-- RLS: Allow anon insert only (no read, no update, no delete from client)
ALTER TABLE consent_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_consent_log"
  ON consent_log FOR INSERT
  TO anon
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies for anon = truly append-only from client
-- Service role can always read (for dashboard/audit)

COMMENT ON TABLE consent_log IS 'Immutable audit trail for form consent. Never delete rows. Required by Israeli Privacy Protection Law + Amendment 30A.';


-- 2. FORM SUBMISSIONS — Leads with full tracking data
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  form_source TEXT NOT NULL,
  page_url TEXT NOT NULL,

  -- UTM tracking (all ad platforms)
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,

  -- Meta (Facebook + Instagram) tracking
  fbclid TEXT,
  fbc TEXT,
  fbp TEXT,

  -- Google Ads tracking
  gclid TEXT,

  -- Deduplication
  event_id TEXT,

  -- Consent state (snapshot at submission time)
  consent_privacy BOOLEAN NOT NULL DEFAULT true,
  consent_marketing BOOLEAN NOT NULL DEFAULT false,

  -- Meta data
  ip_address TEXT,
  user_agent TEXT,
  referrer TEXT,
  device_type TEXT,
  session_id TEXT,

  -- CAPI tracking
  fb_capi_sent BOOLEAN DEFAULT false,
  fb_capi_sent_at TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_form_subs_email ON form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_form_subs_created ON form_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_form_subs_utm ON form_submissions(utm_source, utm_campaign);
CREATE INDEX IF NOT EXISTS idx_form_subs_source ON form_submissions(form_source);

-- RLS: Allow anon insert only
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_form_submissions"
  ON form_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

-- Service role can read (for dashboard)

COMMENT ON TABLE form_submissions IS 'All form submissions with full tracking data. Links to consent_log via email+created_at.';
