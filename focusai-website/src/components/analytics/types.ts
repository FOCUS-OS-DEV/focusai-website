/* ─── Analytics Dashboard — Types & Constants ─── */

export const SUPABASE_URL = 'https://ueewnvfydrlhyxmbgsus.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZXdudmZ5ZHJsaHl4bWJnc3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDI4ODcsImV4cCI6MjA4NjQxODg4N30.4EjvZekhleRdufJPxBEgXRkUbhGbG5cjjjBFUa20mjQ';

export const T = {
  bg: '#f5f5f7',
  cardBg: 'rgba(255,255,255,0.72)',
  cardBorder: 'rgba(0,0,0,0.06)',
  cardShadow: '0 2px 12px rgba(0,0,0,0.04), 0 0 1px rgba(0,0,0,0.06)',
  headerBg: 'rgba(255,255,255,0.5)',
  headerBorder: 'rgba(0,0,0,0.05)',
  grid: 'rgba(0,0,0,0.06)',
  axisText: '#86868b',
  purple: '#7c3aed',
  purpleLight: '#a78bfa',
  purpleDark: '#6d28d9',
  purpleGlow: 'rgba(124,58,237,0.15)',
  purpleBg: 'rgba(124,58,237,0.08)',
  green: '#059669',
  greenBg: 'rgba(5,150,105,0.08)',
  red: '#dc2626',
  redBg: 'rgba(220,38,38,0.06)',
  cyan: '#0891b2',
  cyanBg: 'rgba(8,145,178,0.08)',
  orange: '#d97706',
  orangeBg: 'rgba(217,119,6,0.06)',
  textPrimary: '#1d1d1f',
  textSecondary: '#6e6e73',
  textMuted: '#aeaeb2',
  tooltipBg: 'rgba(29,29,31,0.92)',
  tooltipBorder: 'rgba(124,58,237,0.4)',
  rowBorder: 'rgba(0,0,0,0.04)',
} as const;

export const DEVICE_COLORS = [T.purple, T.purpleLight, T.purpleDark];
export const DEVICE_LABELS: Record<string, string> = { desktop: 'מחשב', mobile: 'נייד', tablet: 'טאבלט' };
export const DEVICE_ICONS: Record<string, string> = { desktop: '💻', mobile: '📱', tablet: '📟' };

export const CATEGORY_LABELS: Record<string, string> = {
  homepage: 'דף הבית', academy: 'אקדמיה', services: 'שירותים',
  blog: 'חדשות AI', campaigns: 'קמפיינים', skills: 'Claude Skills',
  courses: 'קורסים', other: 'אחר',
};
export const CATEGORY_COLORS: Record<string, string> = {
  homepage: T.purple, academy: T.cyan, services: T.green,
  blog: T.orange, campaigns: T.purpleLight, skills: T.purpleDark,
  courses: '#ec4899', other: T.textMuted,
};

export const TABS = [
  { id: 'overview', label: 'סקירה כללית', icon: '📊' },
  { id: 'leads', label: 'לידים', icon: '📋' },
  { id: 'journeys', label: 'מסעות לקוח', icon: '🎯' },
  { id: 'assets', label: 'נכסים דיגיטליים', icon: '📦' },
  { id: 'behavior', label: 'התנהגות', icon: '🔬' },
  { id: 'cro', label: 'CRO', icon: '🧪' },
  { id: 'insights', label: 'תובנות', icon: '💡' },
  { id: 'changelog', label: 'שינויים', icon: '📝' },
] as const;

export type JourneyStep = { label: string; path: string; metric: 'views' | 'forms' };
export type Journey = { id: string; name: string; color: string; steps: JourneyStep[] };
export const JOURNEYS: Journey[] = [
  { id: 'skills-he', name: 'Claude Skills (מפתחים)', color: '#7c3aed', steps: [
    { label: 'דף נחיתה', path: '/claude-skills-he/', metric: 'views' },
    { label: 'צפייה במדריך', path: '/claude-code-guide/', metric: 'views' },
  ]},
  { id: 'skills-managers', name: 'Claude Skills (מנהלים)', color: '#0891b2', steps: [
    { label: 'דף נחיתה', path: '/claude-skills-managers/', metric: 'views' },
    { label: 'צפייה במדריך', path: '/claude-code-guide-managers/', metric: 'views' },
  ]},
  { id: 'skills-marketing', name: 'Claude Skills (שיווק)', color: '#059669', steps: [
    { label: 'דף נחיתה', path: '/claude-skills-marketing/', metric: 'views' },
    { label: 'צפייה במדריך', path: '/claude-code-guide-marketing/', metric: 'views' },
  ]},
  { id: 'botcamp', name: 'Bot-Camp', color: '#d97706', steps: [
    { label: 'דף נחיתה', path: '/academy/', metric: 'views' },
    { label: 'שליחת טופס', path: '/academy/', metric: 'forms' },
    { label: 'דף תודה', path: '/academy/thank-you/', metric: 'views' },
    { label: 'צפייה בסילבוס', path: '/bot-camp-syllabus/', metric: 'views' },
  ]},
  { id: 'webinar-n8n', name: 'וובינר N8N', color: '#8b5cf6', steps: [
    { label: 'דף נחיתה', path: '/webinar-n8n-agent/', metric: 'views' },
    { label: 'שליחת טופס', path: '/webinar-n8n-agent/', metric: 'forms' },
    { label: 'דף תודה', path: '/webinar-n8n-thank-you/', metric: 'views' },
  ]},
  { id: 'content-automation', name: 'אוטומציית תוכן', color: '#ec4899', steps: [
    { label: 'דף נחיתה', path: '/content-automation-course/', metric: 'views' },
    { label: 'שליחת טופס', path: '/content-automation-course/', metric: 'forms' },
    { label: 'צפייה בהדרכה', path: '/content-automation-watch/', metric: 'views' },
  ]},
  { id: 'ai-dev', name: 'AI Dev', color: '#06b6d4', steps: [
    { label: 'דף נחיתה', path: '/ai-dev/', metric: 'views' },
    { label: 'שליחת טופס', path: '/ai-dev/', metric: 'forms' },
  ]},
  { id: 'ai-agents', name: 'סוכני AI', color: '#f59e0b', steps: [
    { label: 'דף נחיתה', path: '/ai-agents/', metric: 'views' },
    { label: 'שליחת טופס', path: '/ai-agents/', metric: 'forms' },
  ]},
  { id: 'ai-workshop', name: 'סדנאות AI', color: '#10b981', steps: [
    { label: 'דף נחיתה', path: '/ai-workshop/', metric: 'views' },
    { label: 'שליחת טופס', path: '/ai-workshop/', metric: 'forms' },
  ]},
];

export const ASSETS = [
  { id: 'homepage', name: 'דף הבית', paths: ['/'], icon: '🏠' },
  { id: 'academy', name: 'Bot-Camp', paths: ['/academy/'], icon: '🎓' },
  { id: 'ai-dev', name: 'AI Dev', paths: ['/ai-dev/'], icon: '💻' },
  { id: 'skills-he', name: 'Claude Skills (מפתחים)', paths: ['/claude-skills-he/', '/claude-code-guide/'], icon: '🛠' },
  { id: 'skills-mgr', name: 'Claude Skills (מנהלים)', paths: ['/claude-skills-managers/', '/claude-code-guide-managers/'], icon: '📊' },
  { id: 'skills-mkt', name: 'Claude Skills (שיווק)', paths: ['/claude-skills-marketing/', '/claude-code-guide-marketing/'], icon: '📢' },
  { id: 'ai-agents', name: 'סוכני AI', paths: ['/ai-agents/'], icon: '🤖' },
  { id: 'blog', name: 'חדשות AI', paths: ['/ai-news/'], icon: '📰' },
  { id: 'webinar', name: 'וובינר N8N', paths: ['/webinar-n8n-agent/'], icon: '🎥' },
  { id: 'content-auto', name: 'אוטומציית תוכן', paths: ['/content-automation-course/'], icon: '📝' },
  { id: 'workshop', name: 'סדנאות AI', paths: ['/ai-workshop/'], icon: '🎓' },
  { id: 'whatsapp', name: 'WhatsApp', paths: [], icon: '💬' },
] as const;

export const PAGE_NAMES: Record<string, string> = {
  '/': 'דף הבית',
  '/academy/': 'Bot-Camp (אקדמיה)',
  '/ai-agents/': 'סוכני AI',
  '/ai-news/': 'חדשות AI',
  '/ai-dev/': 'AI Dev',
  '/ai-workshop/': 'סדנאות AI',
  '/about/': 'אודות',
  '/tools/': 'כלי AI',
  '/careers/': 'דרושים',
  '/claude-skills-he/': 'Claude Skills (מפתחים)',
  '/claude-skills-managers/': 'Claude Skills (מנהלים)',
  '/claude-skills-marketing/': 'Claude Skills (שיווק)',
  '/claude-code-guide/': 'מדריך Claude Code',
  '/claude-code-guide-managers/': 'מדריך Claude Code (מנהלים)',
  '/claude-code-guide-marketing/': 'מדריך Claude Code (שיווק)',
  '/bot-camp-syllabus/': 'סילבוס Bot-Camp',
  '/academy/thank-you/': 'תודה (אקדמיה)',
  '/claude-skills-thank-you/': 'תודה (Skills)',
  '/webinar-n8n-agent/': 'וובינר N8N',
  '/webinar-n8n-thank-you/': 'תודה (וובינר)',
  '/content-automation-course/': 'קורס אוטומציה',
  '/content-automation-watch/': 'צפייה (אוטומציה)',
  '/links/': 'קישורים',
  '/privacy-policy/': 'מדיניות פרטיות',
  '/terms/': 'תנאי שימוש',
};

export const UTM_MEDIUM_LABELS: Record<string, { label: string; desc: string; color: string }> = {
  'paid': { label: 'ממומן', desc: 'מודעות בתשלום (פייסבוק, אינסטגרם, גוגל)', color: '#a855f7' },
  'cpc': { label: 'לחיצה בתשלום', desc: 'עלות לקליק (גוגל אדס, בינג)', color: '#7c3aed' },
  'social': { label: 'רשתות חברתיות', desc: 'פוסטים אורגניים (ללא תשלום)', color: '#06b6d4' },
  'email': { label: 'דוא"ל', desc: 'קמפיינים, ניוזלטרים', color: '#f59e0b' },
  'referral': { label: 'הפניה', desc: 'קישור מאתר אחר', color: '#10b981' },
  'organic': { label: 'אורגני', desc: 'חיפוש טבעי בגוגל', color: '#22c55e' },
  'direct': { label: 'ישיר', desc: 'כניסה ישירה לאתר', color: '#6a6a80' },
  'none': { label: 'לא מוגדר', desc: 'ללא UTM medium', color: '#6a6a80' },
};

export const FORM_SOURCE_LABELS: Record<string, string> = {
  'bot-camp-syllabus': 'סילבוס Bot-Camp',
  'bot-camp-mid-page': 'Bot-Camp (אמצע דף)',
  'bot-camp-contact': 'Bot-Camp (צור קשר)',
  'homepage-academy-consult': 'דף הבית (ייעוץ)',
  'homepage-contact': 'דף הבית (צור קשר)',
  'ai-agents-contact': 'סוכני AI',
  'strategy-contact': 'ייעוץ אסטרטגי',
  'agents-service-contact': 'שירות סוכנים',
  'development-contact': 'פיתוח',
  'ai-workshop': 'סדנת AI',
  'webinar-n8n-agent': 'וובינר N8N',
  'content-automation-course': 'קורס אוטומציה',
  'free-webinar-onboard': 'וובינר חינמי',
  'ai-dev': 'AI Dev',
  'ai-dev-quick': 'AI Dev (מהיר)',
  'blog-newsletter': 'ניוזלטר בלוג',
  'blog-article-botcamp': 'כתבה (Bot-Camp)',
  'blog-article-agents': 'כתבה (סוכנים)',
  'blog-article-consulting': 'כתבה (ייעוץ)',
  'claude-skills-he': 'Claude Skills (עברית)',
  'claude-skills-managers': 'Claude Skills (מנהלים)',
  'claude-skills-marketing': 'Claude Skills (שיווק)',
};

export const DOW_LABELS: Record<number, string> = {
  0: 'ראשון', 1: 'שני', 2: 'שלישי', 3: 'רביעי', 4: 'חמישי', 5: 'שישי', 6: 'שבת',
};
export const DOW_SHORT: Record<number, string> = {
  0: 'א׳', 1: 'ב׳', 2: 'ג׳', 3: 'ד׳', 4: 'ה׳', 5: 'ו׳', 6: 'ש׳',
};

/* ─── Data Interfaces ─── */
export interface LeadsData {
  total_leads: number;
  prev_total_leads: number;
  leads_by_source: { form_source: string; count: number }[];
  leads_by_utm_source: { utm_source: string; count: number }[];
  leads_by_utm_medium: { utm_medium: string; count: number }[];
  leads_by_campaign: { utm_source: string; utm_medium: string; utm_campaign: string; utm_content: string; count: number }[];
  daily_leads: { day: string; count: number }[];
  hourly_leads: { hour: number; count: number }[];
  dow_leads: { dow: number; count: number }[];
  leads_by_device: { device_type: string; count: number }[];
  consent_marketing_rate: number;
  recent_leads: { first_name: string; email_masked: string; form_source: string; utm_source: string; utm_medium: string; utm_campaign: string; device_type: string; created_at: string }[];
  capi_sent_count: number;
  capi_total: number;
  leads_by_page: { page_url: string; count: number }[];
}

export interface AnalyticsData {
  total_pageviews: number; total_clicks: number; total_forms: number;
  prev_total_pageviews: number; prev_total_clicks: number; prev_total_forms: number;
  top_pages: { page_path: string; views: number }[] | null;
  top_clicks: { click_url: string; click_text: string; click_type: string; clicks: number }[] | null;
  referrers: { referrer: string; visits: number }[] | null;
  utm_campaigns: { utm_source: string; utm_medium: string; utm_campaign: string; visits: number }[] | null;
  devices: { device_type: string; count: number }[] | null;
  daily_views: { day: string; views: number }[] | null;
  page_details: { page_path: string; views: number; clicks: number; forms: number; unique_sources: number }[] | null;
  form_details: { page_path: string; button_text: string; submissions: number }[] | null;
  source_pages: { source: string; utm_medium: string | null; page_path: string; visits: number }[] | null;
  landing_pages: { page_path: string; external_entries: number; distinct_sources: number; paid_entries: number; organic_entries: number }[] | null;
  conversion_rate: number; prev_conversion_rate: number;
  whatsapp_clicks: number; prev_whatsapp_clicks: number;
  phone_clicks: number; email_clicks: number;
  daily_clicks: { day: string; clicks: number }[] | null;
  daily_forms: { day: string; forms: number }[] | null;
  hourly_distribution: { hour: number; count: number }[] | null;
  page_categories: { category: string; views: number }[] | null;
  session_stats: { total_sessions: number; avg_pages_per_session: number; bounce_rate: number } | null;
  top_content: { page_path: string; views: number; clicks: number; forms: number; conversion_rate: number }[] | null;
  conversion_funnel: { pageviews: number; clicks: number; contact_clicks: number; whatsapp: number; phone: number; email: number; forms: number } | null;
  recent_events: { event_type: string; page_path: string; click_type: string | null; click_text: string | null; device_type: string | null; created_at: string }[] | null;
  utm_campaigns_v2: { utm_source: string; utm_medium: string; utm_campaign: string; visits: number; clicks: number; forms: number; conversion_rate: number }[] | null;
  whatsapp_by_page: { page_path: string; clicks: number; unique_sessions: number }[] | null;
  whatsapp_daily: { day: string; clicks: number }[] | null;
}

export interface AdvancedData {
  heatmap: { dow: number; hour: number; count: number; pageviews: number; clicks: number; forms: number }[];
  session_depth: { depth: number; sessions: number }[];
  session_depth_stats: { avg_depth: number; max_depth: number; single_page_pct: number; deep_sessions_pct: number; total_sessions: number };
  top_flows: { from_page: string; to_page: string; count: number }[];
  dow_weekly: { dow: number; pageviews: number; clicks: number; forms: number; sessions: number; conversion_rate: number }[];
  weekly_trend: { week_start: string; pageviews: number; clicks: number; forms: number; sessions: number }[];
  page_performance: { page_path: string; pageviews: number; clicks: number; forms: number; unique_sessions: number; bounce_rate: number; conversion_rate: number; exit_rate: number }[];
  entry_pages: { page_path: string; entries: number }[];
  exit_pages: { page_path: string; exits: number }[];
  device_breakdown: { device_type: string; sessions: number; pageviews: number; forms: number; conversion_rate: number }[];
  dow_hourly: { dow: number; hour: number; pageviews: number }[];
  period_comparison: { current_pageviews: number; prev_pageviews: number; current_sessions: number; prev_sessions: number; current_forms: number; prev_forms: number; current_clicks: number; prev_clicks: number };
  engagement_segments: { one_page_sessions: number; two_page_sessions: number; three_plus_sessions: number; clicked_sessions: number; converted_sessions: number };
  date_range: { start: string; end: string; days: number };
}

export type MarketingInsight = {
  priority: 'critical' | 'high' | 'medium' | 'low';
  category: 'conversion' | 'campaigns' | 'content' | 'technical' | 'timing' | 'opportunity' | 'journeys';
  title: string;
  body: string;
  action: string;
  metric?: string;
};
