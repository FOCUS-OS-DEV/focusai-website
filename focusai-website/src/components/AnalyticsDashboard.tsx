import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, PieChart, Pie, Cell,
  BarChart, Bar, Legend,
} from 'recharts';

/* ─── Constants ─── */
const SUPABASE_URL = 'https://ueewnvfydrlhyxmbgsus.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZXdudmZ5ZHJsaHl4bWJnc3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDI4ODcsImV4cCI6MjA4NjQxODg4N30.4EjvZekhleRdufJPxBEgXRkUbhGbG5cjjjBFUa20mjQ';

const T = {
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

const DEVICE_COLORS = [T.purple, T.purpleLight, T.purpleDark];
const DEVICE_LABELS: Record<string, string> = { desktop: 'מחשב', mobile: 'נייד', tablet: 'טאבלט' };
const DEVICE_ICONS: Record<string, string> = { desktop: '💻', mobile: '📱', tablet: '📟' };

const CATEGORY_LABELS: Record<string, string> = {
  homepage: 'דף הבית', academy: 'אקדמיה', services: 'שירותים',
  blog: 'חדשות AI', campaigns: 'קמפיינים', skills: 'Claude Skills',
  courses: 'קורסים', other: 'אחר',
};
const CATEGORY_COLORS: Record<string, string> = {
  homepage: T.purple, academy: T.cyan, services: T.green,
  blog: T.orange, campaigns: T.purpleLight, skills: T.purpleDark,
  courses: '#ec4899', other: T.textMuted,
};

const TABS = [
  { id: 'overview', label: 'סקירה כללית', icon: '📊' },
  { id: 'leads', label: 'לידים', icon: '📋' },
  { id: 'journeys', label: 'מסעות לקוח', icon: '🎯' },
  { id: 'assets', label: 'נכסים דיגיטליים', icon: '📦' },
  { id: 'behavior', label: 'התנהגות', icon: '🔬' },
  { id: 'cro', label: 'CRO', icon: '🧪' },
  { id: 'insights', label: 'תובנות', icon: '💡' },
  { id: 'changelog', label: 'שינויים', icon: '📝' },
] as const;

/* ─── Customer Journey Definitions ─── */
type JourneyStep = { label: string; path: string; metric: 'views' | 'forms' };
type Journey = { id: string; name: string; color: string; steps: JourneyStep[] };
const JOURNEYS: Journey[] = [
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

/* ─── Digital Asset Definitions ─── */
const ASSETS = [
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

/* ─── Friendly page names ─── */
const PAGE_NAMES: Record<string, string> = {
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

/* ─── UTM Medium Hebrew Legend ─── */
const UTM_MEDIUM_LABELS: Record<string, { label: string; desc: string; color: string }> = {
  'paid': { label: 'ממומן', desc: 'מודעות בתשלום (פייסבוק, אינסטגרם, גוגל)', color: '#a855f7' },
  'cpc': { label: 'לחיצה בתשלום', desc: 'עלות לקליק (גוגל אדס, בינג)', color: '#7c3aed' },
  'social': { label: 'רשתות חברתיות', desc: 'פוסטים אורגניים (ללא תשלום)', color: '#06b6d4' },
  'email': { label: 'דוא"ל', desc: 'קמפיינים, ניוזלטרים', color: '#f59e0b' },
  'referral': { label: 'הפניה', desc: 'קישור מאתר אחר', color: '#10b981' },
  'organic': { label: 'אורגני', desc: 'חיפוש טבעי בגוגל', color: '#22c55e' },
  'direct': { label: 'ישיר', desc: 'כניסה ישירה לאתר', color: '#6a6a80' },
  'none': { label: 'לא מוגדר', desc: 'ללא UTM medium', color: '#6a6a80' },
};

const FORM_SOURCE_LABELS: Record<string, string> = {
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

const DOW_LABELS: Record<number, string> = {
  0: 'ראשון', 1: 'שני', 2: 'שלישי', 3: 'רביעי', 4: 'חמישי', 5: 'שישי', 6: 'שבת',
};
const DOW_SHORT: Record<number, string> = {
  0: 'א׳', 1: 'ב׳', 2: 'ג׳', 3: 'ד׳', 4: 'ה׳', 5: 'ו׳', 6: 'ש׳',
};

/* ─── Types ─── */
interface LeadsData {
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

interface AnalyticsData {
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
  // V2 fields
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

interface AdvancedData {
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

/* ─── Helpers ─── */
function decodePath(p: string): string {
  try {
    const decoded = decodeURIComponent(p);
    const withSlash = decoded.endsWith('/') || decoded === '/' ? decoded : decoded + '/';
    const withoutSlash = decoded.endsWith('/') && decoded.length > 1 ? decoded.slice(0, -1) : decoded;
    return PAGE_NAMES[decoded] || PAGE_NAMES[withSlash] || PAGE_NAMES[withoutSlash] || decoded;
  } catch { return p; }
}
function calcTrend(current: number, previous: number): { value: number; direction: 'up' | 'down' | 'flat' } {
  if (previous === 0) return { value: 0, direction: current > 0 ? 'up' : 'flat' };
  const pct = Math.round(((current - previous) / previous) * 100);
  return { value: Math.abs(pct), direction: pct > 0 ? 'up' : pct < 0 ? 'down' : 'flat' };
}
function formatDate(d: string): string {
  try { return new Date(d).toLocaleDateString('he-IL', { day: 'numeric', month: 'short' }); } catch { return d; }
}
function extractHostname(url: string): string {
  try { return new URL(url).hostname; } catch { return url; }
}
function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  return sec > 0 ? `${min}m ${sec}s` : `${min}m`;
}
function timeAgo(ts: string): string {
  const diff = Math.floor((Date.now() - new Date(ts).getTime()) / 1000);
  if (diff < 60) return 'עכשיו';
  if (diff < 3600) return `לפני ${Math.floor(diff / 60)} דק׳`;
  if (diff < 86400) return `לפני ${Math.floor(diff / 3600)} שע׳`;
  return `לפני ${Math.floor(diff / 86400)} ימים`;
}

function exportCSV(rows: any[], filename: string) {
  if (!rows?.length) return;
  const keys = Object.keys(rows[0]);
  const csv = [keys.join(','), ...rows.map(r => keys.map(k => JSON.stringify(r[k] ?? '')).join(','))].join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `${filename}.csv`; a.click();
  URL.revokeObjectURL(url);
}

function mergeDaily(views: any[] | null, clicks: any[] | null, forms: any[] | null) {
  const map: Record<string, { day: string; views: number; clicks: number; forms: number }> = {};
  (views || []).forEach(d => { map[d.day] = { day: d.day, views: d.views, clicks: 0, forms: 0 }; });
  (clicks || []).forEach(d => { if (map[d.day]) map[d.day].clicks = d.clicks; else map[d.day] = { day: d.day, views: 0, clicks: d.clicks, forms: 0 }; });
  (forms || []).forEach(d => { if (map[d.day]) map[d.day].forms = d.forms; else map[d.day] = { day: d.day, views: 0, clicks: 0, forms: d.forms }; });
  return Object.values(map).sort((a, b) => a.day.localeCompare(b.day));
}

function aggregateByGranularity(data: { day: string; views: number; clicks: number; forms: number }[], granularity: 'day' | 'week' | 'month') {
  if (granularity === 'day') return data;
  const map: Record<string, { day: string; views: number; clicks: number; forms: number }> = {};
  data.forEach(d => {
    const date = new Date(d.day);
    let key: string;
    if (granularity === 'week') {
      const dayOfWeek = date.getDay();
      const weekStart = new Date(date);
      weekStart.setDate(date.getDate() - dayOfWeek);
      key = weekStart.toISOString().slice(0, 10);
    } else {
      key = d.day.slice(0, 7) + '-01';
    }
    if (!map[key]) map[key] = { day: key, views: 0, clicks: 0, forms: 0 };
    map[key].views += d.views;
    map[key].clicks += d.clicks;
    map[key].forms += d.forms;
  });
  return Object.values(map).sort((a, b) => a.day.localeCompare(b.day));
}

type MarketingInsight = {
  priority: 'critical' | 'high' | 'medium' | 'low';
  category: 'conversion' | 'campaigns' | 'content' | 'technical' | 'timing' | 'opportunity' | 'journeys';
  title: string;
  body: string;
  action: string;
  metric?: string;
};

function generateMarketingInsights(data: AnalyticsData, advancedData: AdvancedData | null, leadsData: LeadsData | null): MarketingInsight[] {
  const insights: MarketingInsight[] = [];

  // ─── 1. Landing Page Health ───
  if (data.page_details) {
    // Pages with high traffic but zero conversions
    const highTrafficNoConv = data.page_details
      .filter(p => p.views > 20 && p.forms === 0 && !p.page_path.includes('thank-you') && !p.page_path.includes('privacy') && !p.page_path.includes('terms'))
      .sort((a, b) => b.views - a.views);
    if (highTrafficNoConv.length > 0) {
      const top3 = highTrafficNoConv.slice(0, 3);
      const totalWasted = top3.reduce((s, p) => s + p.views, 0);
      insights.push({
        priority: totalWasted > 100 ? 'critical' : 'high',
        category: 'conversion',
        title: 'דפים עם תנועה ללא המרה',
        body: `${highTrafficNoConv.length} דפים מקבלים תנועה (${totalWasted} צפיות בסה"כ) אבל אף אחד לא ממלא טופס. הדפים הבולטים: ${top3.map(p => `${decodePath(p.page_path)} (${p.views})`).join(', ')}`,
        action: 'הוסף טופס או CTA ברור בדפים הללו. אם יש טופס, בדוק שהוא מעל ה-fold (חלק העליון של הדף) ושה-CTA ברור וספציפי',
        metric: `${totalWasted} צפיות מבוזבזות`,
      });
    }

    // Pages with good conversion rate - what's working
    const goodConverters = data.page_details
      .filter(p => p.views > 10 && p.forms > 0)
      .map(p => ({ ...p, conv: (p.forms / p.views) * 100 }))
      .sort((a, b) => b.conv - a.conv);
    if (goodConverters.length > 0) {
      const best = goodConverters[0];
      insights.push({
        priority: 'low',
        category: 'opportunity',
        title: 'הדף הכי ממיר שלך',
        body: `${decodePath(best.page_path)} ממיר ${best.conv.toFixed(1)}% (${best.forms} טפסים מתוך ${best.views} צפיות). זה הנכס הכי חזק שלך.`,
        action: 'שקול להפנות יותר תנועה ממומנת לדף הזה. בדוק מה עובד בו (מבנה, כותרת, CTA) והעתק את הנוסחה לדפים אחרים',
        metric: `${best.conv.toFixed(1)}% המרה`,
      });
    }
  }

  // ─── 2. Campaign ROI Analysis ───
  if (data.utm_campaigns_v2 && data.utm_campaigns_v2.length > 0) {
    const campaigns = data.utm_campaigns_v2;
    // Campaigns with traffic but no conversions
    const wastedCampaigns = campaigns.filter(c => c.visits > 5 && c.forms === 0);
    const convertingCampaigns = campaigns.filter(c => c.forms > 0).sort((a, b) => b.conversion_rate - a.conversion_rate);

    if (wastedCampaigns.length > 0 && convertingCampaigns.length > 0) {
      const totalWastedVisits = wastedCampaigns.reduce((s, c) => s + c.visits, 0);
      const bestCampaign = convertingCampaigns[0];
      insights.push({
        priority: 'high',
        category: 'campaigns',
        title: 'תקציב ממומן לא ממיר',
        body: `${wastedCampaigns.length} קמפיינים מביאים ${totalWastedVisits} ביקורים בלי אף המרה. לעומת זאת, קמפיין "${bestCampaign.utm_campaign || bestCampaign.utm_source}" ממיר ${bestCampaign.conversion_rate}% (${bestCampaign.forms} טפסים מ-${bestCampaign.visits} ביקורים).`,
        action: `העבר תקציב מהקמפיינים שלא ממירים ל-"${bestCampaign.utm_campaign || bestCampaign.utm_source}". בדוק האם הבעיה בקהל, בקריאייטיב, או בדף הנחיתה`,
        metric: `${totalWastedVisits} ביקורים מבוזבזים`,
      });
    }

    // Paid vs organic performance
    const paidCampaigns = campaigns.filter(c => c.utm_medium === 'paid' || c.utm_medium === 'cpc');
    const organicCampaigns = campaigns.filter(c => c.utm_medium !== 'paid' && c.utm_medium !== 'cpc');
    if (paidCampaigns.length > 0 && organicCampaigns.length > 0) {
      const paidForms = paidCampaigns.reduce((s, c) => s + c.forms, 0);
      const paidVisits = paidCampaigns.reduce((s, c) => s + c.visits, 0);
      const organicForms = organicCampaigns.reduce((s, c) => s + c.forms, 0);
      const organicVisits = organicCampaigns.reduce((s, c) => s + c.visits, 0);
      const paidRate = paidVisits > 0 ? (paidForms / paidVisits) * 100 : 0;
      const organicRate = organicVisits > 0 ? (organicForms / organicVisits) * 100 : 0;
      if (paidRate > 0 || organicRate > 0) {
        insights.push({
          priority: 'medium',
          category: 'campaigns',
          title: 'ממומן מול אורגני',
          body: `ממומן: ${paidVisits} ביקורים, ${paidForms} טפסים (${paidRate.toFixed(1)}%). אורגני: ${organicVisits} ביקורים, ${organicForms} טפסים (${organicRate.toFixed(1)}%).`,
          action: paidRate > organicRate
            ? 'הממומן ממיר טוב יותר. הגדל תקציב בהדרגה ועקוב אחרי CPA'
            : 'האורגני ממיר טוב יותר. השקע בתוכן ו-SEO, צמצם ממומן לא ממיר',
          metric: `ממומן ${paidRate.toFixed(1)}% | אורגני ${organicRate.toFixed(1)}%`,
        });
      }
    }
  }

  // ─── 3. Journey Funnel Analysis ───
  for (const journey of JOURNEYS) {
    const stepValues = journey.steps.map(step => {
      if (step.metric === 'forms') {
        return (data.form_details || []).filter(f => f.page_path === step.path).reduce((s, f) => s + f.submissions, 0);
      }
      return data.page_details?.find(p => p.page_path === step.path)?.views || 0;
    });

    if (stepValues[0] === 0) continue;

    // Find the biggest drop-off
    let biggestDrop = 0, dropIdx = -1;
    for (let i = 1; i < stepValues.length; i++) {
      if (stepValues[i - 1] > 0) {
        const dropRate = 1 - (stepValues[i] / stepValues[i - 1]);
        if (dropRate > biggestDrop) { biggestDrop = dropRate; dropIdx = i; }
      }
    }

    if (dropIdx > 0 && biggestDrop > 0.7 && stepValues[0] > 10) {
      const droppedCount = stepValues[dropIdx - 1] - stepValues[dropIdx];
      insights.push({
        priority: biggestDrop > 0.9 ? 'critical' : 'high',
        category: 'journeys',
        title: `צוואר בקבוק: ${journey.name}`,
        body: `${Math.round(biggestDrop * 100)}% נשירה בין "${journey.steps[dropIdx - 1].label}" (${stepValues[dropIdx - 1]}) ל-"${journey.steps[dropIdx].label}" (${stepValues[dropIdx]}). ${droppedCount} אנשים נפלו בשלב הזה.`,
        action: dropIdx === 1 && journey.steps[dropIdx].metric === 'forms'
          ? 'בדוק את הטופס: מיקום, כמות שדות, נוסח CTA. הטופס צריך להיות מעל ה-fold עם מינימום שדות'
          : `בדוק למה אנשים לא ממשיכים מ-"${journey.steps[dropIdx - 1].label}" ל-"${journey.steps[dropIdx].label}". שפר את ה-CTA והניווט`,
        metric: `${droppedCount} נפלו (${Math.round(biggestDrop * 100)}%)`,
      });
    }

    // Overall journey conversion
    const overallConv = stepValues[0] > 0 ? (stepValues[stepValues.length - 1] / stepValues[0]) * 100 : 0;
    if (overallConv > 0 && overallConv < 5 && stepValues[0] > 20) {
      insights.push({
        priority: 'medium',
        category: 'journeys',
        title: `המרה נמוכה: ${journey.name}`,
        body: `רק ${overallConv.toFixed(1)}% משלימים את כל המסע (${stepValues[stepValues.length - 1]} מתוך ${stepValues[0]}). המסע כולל ${journey.steps.length} שלבים.`,
        action: 'קצר את המסע: צמצם שלבים, הסר חיכוך מיותר, ודא שכל שלב מוביל בצורה ברורה לשלב הבא',
        metric: `${overallConv.toFixed(1)}% המרה כוללת`,
      });
    }
  }

  // ─── 4. Device Performance Gap ───
  if (advancedData?.device_breakdown && advancedData.device_breakdown.length >= 2) {
    const mobile = advancedData.device_breakdown.find(d => d.device_type === 'mobile');
    const desktop = advancedData.device_breakdown.find(d => d.device_type === 'desktop');
    if (mobile && desktop && mobile.sessions > 10 && desktop.sessions > 10) {
      const gap = desktop.conversion_rate - mobile.conversion_rate;
      if (gap > 2) {
        insights.push({
          priority: gap > 5 ? 'high' : 'medium',
          category: 'technical',
          title: 'פער המרה מובייל מול דסקטופ',
          body: `דסקטופ ממיר ${desktop.conversion_rate.toFixed(1)}% (${desktop.forms} טפסים מ-${desktop.sessions} sessions). מובייל ממיר ${mobile.conversion_rate.toFixed(1)}% (${mobile.forms} טפסים מ-${mobile.sessions} sessions). פער של ${gap.toFixed(1)} נקודות.`,
          action: 'בדוק את חווית המובייל: גודל כפתורים (מינימום 44px), מהירות טעינה, מיקום הטופס. האם הטופס נראה טוב במסך קטן?',
          metric: `פער ${gap.toFixed(1)}pp`,
        });
      }
    }
  }

  // ─── 5. Bounce Rate Analysis ───
  if (data.session_stats && data.session_stats.bounce_rate > 60 && data.session_stats.total_sessions > 20) {
    insights.push({
      priority: data.session_stats.bounce_rate > 80 ? 'critical' : 'high',
      category: 'content',
      title: 'שיעור נטישה גבוה',
      body: `${data.session_stats.bounce_rate}% מהגולשים עוזבים אחרי דף אחד בלבד (ממוצע ${data.session_stats.avg_pages_per_session.toFixed(1)} דפים ל-session).`,
      action: 'בדוק: זמן טעינה מהיר? תוכן רלוונטי לקהל? CTA ברור בחלק העליון? קישורים פנימיים לדפים נוספים?',
      metric: `${data.session_stats.bounce_rate}% bounce rate`,
    });
  }

  // ─── 6. Timing Optimization ───
  if (data.hourly_distribution && data.hourly_distribution.length > 0) {
    const sorted = [...data.hourly_distribution].sort((a, b) => b.count - a.count);
    const peakHours = sorted.slice(0, 3).map(h => h.hour);
    const deadHours = sorted.filter(h => h.count < sorted[0].count * 0.1).map(h => h.hour);
    if (peakHours.length > 0) {
      insights.push({
        priority: 'medium',
        category: 'timing',
        title: 'שעות פעילות שיא',
        body: `שעות השיא: ${peakHours.map(h => `${h}:00`).join(', ')}. ${deadHours.length > 0 ? `שעות מתות (כמעט ללא תנועה): ${deadHours.slice(0, 3).map(h => `${h}:00`).join(', ')}` : ''}`,
        action: 'פרסם קמפיינים ותוכן ברשתות בשעות השיא. תזמן מודעות ממומנות 30 דקות לפני שעת השיא',
        metric: `שיא: ${peakHours[0]}:00`,
      });
    }
  }

  if (advancedData?.dow_weekly && advancedData.dow_weekly.length > 0) {
    const bestDay = [...advancedData.dow_weekly].sort((a, b) => b.forms - a.forms)[0];
    const worstDay = [...advancedData.dow_weekly].sort((a, b) => a.forms - b.forms)[0];
    if (bestDay.forms > 0) {
      insights.push({
        priority: 'low',
        category: 'timing',
        title: 'היום הכי ממיר בשבוע',
        body: `יום ${DOW_LABELS[bestDay.dow]} הכי ממיר: ${bestDay.forms} טפסים (${bestDay.conversion_rate.toFixed(1)}% המרה). יום ${DOW_LABELS[worstDay.dow]} הכי חלש: ${worstDay.forms} טפסים.`,
        action: `הגדל תקציב ממומן ביום ${DOW_LABELS[bestDay.dow]} וצמצם ביום ${DOW_LABELS[worstDay.dow]}`,
        metric: `${DOW_LABELS[bestDay.dow]} = ${bestDay.forms} טפסים`,
      });
    }
  }

  // ─── 7. WhatsApp vs Forms ───
  if (data.whatsapp_clicks > 0 && data.total_forms > 0) {
    const ratio = data.whatsapp_clicks / data.total_forms;
    if (ratio > 2) {
      insights.push({
        priority: 'medium',
        category: 'opportunity',
        title: 'גולשים מעדיפים וואטסאפ על טפסים',
        body: `${data.whatsapp_clicks} לחיצות וואטסאפ מול ${data.total_forms} שליחות טופס (יחס ${ratio.toFixed(1)}:1). הגולשים בוחרים בערוץ המיידי.`,
        action: 'הדגש את כפתור הוואטסאפ בכל דף נחיתה. שקול להחליף את ה-CTA הראשי מ-"מלא טופס" ל-"שלח וואטסאפ"',
        metric: `${ratio.toFixed(1)}x וואטסאפ מול טפסים`,
      });
    }
  }

  // ─── 8. Traffic Sources Quality ───
  if (data.referrers && data.referrers.length > 0 && data.landing_pages && data.landing_pages.length > 0) {
    const totalPaid = data.landing_pages.reduce((s, p) => s + p.paid_entries, 0);
    const totalOrganic = data.landing_pages.reduce((s, p) => s + p.organic_entries, 0);
    const topReferrer = data.referrers[0];
    if (totalPaid > 0 || totalOrganic > 0) {
      insights.push({
        priority: 'low',
        category: 'campaigns',
        title: 'מפת מקורות תנועה',
        body: `ממומן: ${totalPaid} כניסות | אורגני: ${totalOrganic} כניסות. מקור מוביל: ${topReferrer.source === 'direct' ? 'ישיר (direct)' : topReferrer.source} (${topReferrer.visits} ביקורים).`,
        action: totalPaid > totalOrganic
          ? 'השקע בתוכן ו-SEO כדי לגוון מקורות ולהפחית תלות בממומן'
          : 'תנועה אורגנית חזקה. הוסף רימרקטינג לקהל שביקר אבל לא המיר',
        metric: `${totalPaid} paid | ${totalOrganic} organic`,
      });
    }
  }

  // ─── 9. Entry/Exit Page Analysis ───
  if (advancedData?.entry_pages && advancedData?.exit_pages) {
    const topEntry = advancedData.entry_pages[0];
    const topExit = advancedData.exit_pages[0];
    if (topEntry && topExit && topEntry.page_path === topExit.page_path) {
      insights.push({
        priority: 'high',
        category: 'content',
        title: 'דף כניסה = דף יציאה',
        body: `${decodePath(topEntry.page_path)} הוא גם דף הכניסה וגם דף היציאה הנפוץ ביותר (${topEntry.entries} כניסות, ${topExit.exits} יציאות). גולשים נכנסים ועוזבים בלי לעבור לדף אחר.`,
        action: 'הוסף קישורים פנימיים ברורים, CTA שמוביל לדף הבא, או תוכן שגורם לגלילה. ודא שהמסר ברור ב-3 השניות הראשונות',
        metric: `${topExit.exits} יציאות`,
      });
    }
  }

  // ─── 10. Engagement Segments ───
  if (advancedData?.engagement_segments) {
    const seg = advancedData.engagement_segments;
    const total = seg.one_page_sessions + seg.two_page_sessions + seg.three_plus_sessions;
    if (total > 10) {
      const singlePct = Math.round((seg.one_page_sessions / total) * 100);
      const deepPct = Math.round((seg.three_plus_sessions / total) * 100);
      const convertedPct = total > 0 ? Math.round((seg.converted_sessions / total) * 100) : 0;
      if (singlePct > 70) {
        insights.push({
          priority: 'high',
          category: 'content',
          title: 'רוב הגולשים רואים דף אחד בלבד',
          body: `${singlePct}% צפו בדף אחד (${seg.one_page_sessions} sessions). רק ${deepPct}% הגיעו ל-3+ דפים. ${convertedPct}% המירו.`,
          action: 'צור "נתיב מומלץ" עם קישורים פנימיים ברורים. הוסף "מומלץ לקרוא גם" בסוף כל דף',
          metric: `${singlePct}% single-page`,
        });
      }
    }
  }

  // ─── 11. Conversion Rate Trend ───
  if (data.conversion_rate !== undefined && data.prev_conversion_rate !== undefined) {
    const change = data.conversion_rate - data.prev_conversion_rate;
    if (Math.abs(change) > 1 && data.total_pageviews > 50) {
      insights.push({
        priority: change < -2 ? 'high' : 'low',
        category: 'conversion',
        title: change > 0 ? 'אחוז המרה עולה' : 'אחוז המרה יורד',
        body: `המרה עכשיו: ${data.conversion_rate.toFixed(1)}% (קודם: ${data.prev_conversion_rate.toFixed(1)}%). ${change > 0 ? 'עלייה' : 'ירידה'} של ${Math.abs(change).toFixed(1)} נקודות.`,
        action: change > 0
          ? 'מה השתנה? זהה מה עובד (דף חדש? קמפיין? שינוי CTA?) והגבר אותו'
          : 'בדוק מה השתנה: קמפיין חדש עם קהל לא רלוונטי? שינוי בדף? בעיה טכנית בטופס?',
        metric: `${change > 0 ? '+' : ''}${change.toFixed(1)}pp`,
      });
    }
  }

  // Sort: critical first, then high, medium, low
  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  insights.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return insights;
}

/* ─── Skeleton Loader ─── */
function Skeleton({ height = 120 }: { height?: number }) {
  return (
    <div style={{
      background: `linear-gradient(90deg, ${T.cardBg} 25%, rgba(0,0,0,0.04) 50%, ${T.cardBg} 75%)`,
      backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite',
      borderRadius: '16px', height: `${height}px`, border: `1px solid ${T.cardBorder}`,
    }} />
  );
}

/* ─── Custom Tooltip ─── */
function ChartTooltip({ active, payload, label, suffix }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: T.tooltipBg, backdropFilter: 'blur(12px)', border: `1px solid ${T.tooltipBorder}`,
      borderRadius: '10px', padding: '10px 14px', direction: 'rtl',
    }}>
      <div style={{ fontSize: '12px', color: T.textSecondary, marginBottom: '4px' }}>
        {typeof label === 'string' && label.includes('-') ? formatDate(label) : label}
      </div>
      {payload.map((p: any, i: number) => (
        <div key={i} style={{ fontSize: '14px', fontWeight: 700, color: p.color || T.purple, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color || T.purple }} />
          {p.value?.toLocaleString('he-IL')} {suffix || p.name || ''}
        </div>
      ))}
    </div>
  );
}

/* ─── KPI Card ─── */
function KPI({ label, value, displayValue, trend, sparkData, sparkKey, color, icon }: {
  label: string; value?: number; displayValue?: string;
  trend?: { value: number; direction: 'up' | 'down' | 'flat' };
  sparkData?: any[]; sparkKey?: string; color?: string; icon?: string;
}) {
  const c = color || T.purple;
  const gradId = `spark-${label.replace(/\s/g, '')}`;
  return (
    <div style={{
      background: T.cardBg, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${T.cardBorder}`, borderRadius: '16px', padding: '20px',
      boxShadow: T.cardShadow,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: c, boxShadow: `0 0 6px ${c}40` }} />
        <span style={{ fontSize: '12px', color: T.textSecondary }}>{icon ? `${icon} ` : ''}{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <span style={{ fontSize: '32px', fontWeight: 700, color: c }}>
          {displayValue ?? (value?.toLocaleString('he-IL') ?? '---')}
        </span>
        {trend && trend.direction !== 'flat' && (
          <span style={{ fontSize: '13px', fontWeight: 600, color: trend.direction === 'up' ? T.green : T.red, display: 'flex', alignItems: 'center', gap: '2px' }}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}%
          </span>
        )}
        {trend && trend.direction === 'flat' && <span style={{ fontSize: '13px', color: T.textMuted }}>→</span>}
      </div>
      {sparkData && sparkData.length > 1 && (
        <div style={{ height: '36px', marginTop: '10px', direction: 'ltr' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkData}>
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={c} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={c} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey={sparkKey || 'views'} stroke={c} fill={`url(#${gradId})`} strokeWidth={1.5} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

/* ─── Card Wrapper ─── */
function Card({ title, children, headerRight, exportData, exportName }: {
  title: string; children: React.ReactNode; headerRight?: React.ReactNode;
  exportData?: any[]; exportName?: string;
}) {
  return (
    <div style={{
      background: T.cardBg, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${T.cardBorder}`, borderRadius: '16px', marginBottom: '16px',
      boxShadow: T.cardShadow, overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 20px', borderBottom: `1px solid ${T.headerBorder}`, background: T.headerBg,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', direction: 'rtl' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.purple, boxShadow: `0 0 6px ${T.purpleGlow}` }} />
          <span style={{ fontSize: '14px', fontWeight: 600, color: T.textPrimary }}>{title}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {exportData && exportData.length > 0 && (
            <button onClick={() => exportCSV(exportData, exportName || title)} style={{
              padding: '4px 10px', borderRadius: '6px', border: `1px solid ${T.cardBorder}`,
              background: 'transparent', color: T.textMuted, cursor: 'pointer', fontSize: '12px',
            }}>CSV ↓</button>
          )}
          {headerRight}
        </div>
      </div>
      <div style={{ padding: '20px' }}>{children}</div>
    </div>
  );
}

/* ─── Data Table ─── */
function DataTable({ rows, columns }: {
  rows: any[];
  columns: { key: string; label: string; align?: string; render?: (v: any, row: any) => React.ReactNode; sortable?: boolean }[];
}) {
  if (!rows || rows.length === 0) return <p style={{ color: T.textMuted, fontSize: '14px', textAlign: 'center', margin: '12px 0' }}>אין נתונים</p>;
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', direction: 'rtl' }}>
        <thead>
          <tr>
            {columns.map(c => (
              <th key={c.key} style={{
                textAlign: (c.align as any) || 'right', padding: '10px 8px',
                borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary,
                fontWeight: 500, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px',
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ transition: 'background 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              {columns.map(c => (
                <td key={c.key} style={{
                  textAlign: (c.align as any) || 'right', padding: '8px',
                  borderBottom: `1px solid ${T.rowBorder}`, color: T.textPrimary,
                  maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>{c.render ? c.render(row[c.key], row) : row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Conversion Funnel ─── */
function Funnel({ data }: { data: { pageviews: number; clicks: number; contact_clicks: number; forms: number } }) {
  const steps = [
    { label: 'צפיות', value: data.pageviews, color: T.purple },
    { label: 'לחיצות', value: data.clicks, color: T.cyan },
    { label: 'יצירת קשר', value: data.contact_clicks, color: T.orange },
    { label: 'טפסים', value: data.forms, color: T.green },
  ];
  const max = Math.max(data.pageviews, 1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', direction: 'rtl' }}>
      {steps.map((step, i) => {
        const pct = (step.value / max) * 100;
        const dropPct = i > 0 ? Math.round((step.value / steps[i - 1].value) * 100) || 0 : 100;
        return (
          <div key={step.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '13px', color: T.textSecondary }}>{step.label}</span>
              <span style={{ fontSize: '13px', color: step.color, fontWeight: 600 }}>
                {step.value.toLocaleString('he-IL')}
                {i > 0 && <span style={{ color: T.textMuted, fontWeight: 400, marginRight: '6px' }}>({dropPct}%)</span>}
              </span>
            </div>
            <div style={{ height: '28px', background: 'rgba(0,0,0,0.02)', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: `${Math.max(pct, 2)}%`, background: `linear-gradient(90deg, ${step.color}, ${step.color}80)`,
                borderRadius: '8px', transition: 'width 0.6s ease',
              }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Event Badge ─── */
function EventBadge({ type }: { type: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    pageview: { bg: T.purpleBg, color: T.purple, label: 'צפייה' },
    click: { bg: T.cyanBg, color: T.cyan, label: 'לחיצה' },
    form_submit: { bg: T.greenBg, color: T.green, label: 'טופס' },
  };
  const s = map[type] || { bg: 'rgba(0,0,0,0.04)', color: T.textMuted, label: type };
  return (
    <span style={{
      padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600,
      background: s.bg, color: s.color,
    }}>{s.label}</span>
  );
}

/* ─── Main Component ─── */
export default function AnalyticsDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [leadsData, setLeadsData] = useState<LeadsData | null>(null);
  const [leadsLoading, setLeadsLoading] = useState(false);
  const [aiInsights, setAiInsights] = useState<{ title: string; body: string; action: string; priority: string; category: string }[] | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [advancedData, setAdvancedData] = useState<AdvancedData | null>(null);
  const [advancedLoading, setAdvancedLoading] = useState(false);
  const [croData, setCroData] = useState<any>(null);
  const [croLoading, setCroLoading] = useState(false);
  const [changelogData, setChangelogData] = useState<any[] | null>(null);
  const [changelogTotal, setChangelogTotal] = useState(0);
  const [changelogLoading, setChangelogLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [days, setDays] = useState(30);
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [pageFilter, setPageFilter] = useState<string[]>([]);
  const [deviceFilter, setDeviceFilter] = useState('');
  const [utmSourceFilter, setUtmSourceFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState<'all' | 'paid' | 'organic'>('all');
  const [pageSort, setPageSort] = useState<{ key: string; dir: 'asc' | 'desc' }>({ key: 'views', dir: 'desc' });
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [tableSearch, setTableSearch] = useState('');
  const [granularity, setGranularity] = useState<'day' | 'week' | 'month'>('day');
  const [heatmapMetric, setHeatmapMetric] = useState<'count' | 'pageviews' | 'clicks' | 'forms'>('count');
  const [showViews, setShowViews] = useState(true);
  const [showClicks, setShowClicks] = useState(true);
  const [showForms, setShowForms] = useState(true);
  const passwordRef = useRef('');

  const fetchData = useCallback(async (pw: string, d: number, device?: string, utm?: string, page?: string[], startDate?: string, endDate?: string) => {
    setLoading(true); setError('');
    try {
      const body: Record<string, unknown> = { p_password: pw, p_days: d };
      if (device) body.p_device_type = device;
      if (utm) body.p_utm_source = utm;
      if (page && page.length > 0) body.p_page_filter = page;
      if (startDate && endDate) { body.p_start_date = startDate; body.p_end_date = endDate; }
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_analytics_v2`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Unauthorized');
      }
      const result = await res.json();
      setData(result); setIsAuthed(true); setLastUpdated(new Date());
    } catch (e: any) {
      const msg = e.message || 'Error';
      setError(msg === 'Failed to fetch' ? 'שגיאת חיבור — נסה לרענן את הדף או לבדוק חוסם פרסומות' : msg);
      if (!data) setIsAuthed(false);
    } finally { setLoading(false); }
  }, [data]);

  const fetchLeadsData = useCallback(async (pw: string, d: number, startDate?: string, endDate?: string) => {
    setLeadsLoading(true);
    try {
      const body: Record<string, unknown> = { p_password: null, p_days: d };
      if (startDate && endDate) { body.p_start_date = startDate; body.p_end_date = endDate; }
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_leads_analytics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const err = await res.text().catch(() => '');
        console.error('Leads RPC error:', res.status, err);
        return;
      }
      const result = await res.json();
      setLeadsData(result);
    } catch (e) { console.error('Leads fetch error:', e); }
    finally { setLeadsLoading(false); }
  }, []);

  const fetchAiInsights = useCallback(async (pw: string) => {
    if (!data) return;
    setAiLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/ai-insights`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({ password: pw, analytics: data, leads: leadsData }),
      });
      if (!res.ok) return;
      const result = await res.json();
      if (result.insights) setAiInsights(result.insights);
    } catch { /* ignore */ }
    finally { setAiLoading(false); }
  }, [data, leadsData]);

  const fetchAdvancedData = useCallback(async (d: number, device?: string, utm?: string, page?: string[], startDate?: string, endDate?: string) => {
    setAdvancedLoading(true);
    try {
      const body: Record<string, unknown> = { p_password: null, p_days: d };
      if (device) body.p_device_type = device;
      if (utm) body.p_utm_source = utm;
      if (page && page.length > 0) body.p_page_filter = page[0];
      if (startDate && endDate) { body.p_start_date = startDate; body.p_end_date = endDate; }
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_advanced_analytics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify(body),
      });
      if (!res.ok) { console.error('Advanced RPC error:', res.status); return; }
      const result = await res.json();
      setAdvancedData(result);
    } catch (e) { console.error('Advanced fetch error:', e); }
    finally { setAdvancedLoading(false); }
  }, []);

  const fetchCroData = useCallback(async (d: number, device?: string, utm?: string, page?: string[], startDate?: string, endDate?: string) => {
    setCroLoading(true);
    try {
      const body: Record<string, unknown> = { p_password: passwordRef.current, p_days: d };
      if (device) body.p_device_type = device;
      if (utm) body.p_utm_source = utm;
      if (page && page.length > 0) body.p_page_filter = page[0];
      if (startDate && endDate) { body.p_start_date = startDate; body.p_end_date = endDate; }
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_cro_data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify(body),
      });
      if (!res.ok) { console.error('CRO RPC error:', res.status); return; }
      const result = await res.json();
      setCroData(result);
    } catch (e) { console.error('CRO fetch error:', e); }
    finally { setCroLoading(false); }
  }, []);

  const fetchChangelog = useCallback(async (offset = 0, append = false) => {
    setChangelogLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_changelog`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({ p_password: passwordRef.current, p_limit: 20, p_offset: offset }),
      });
      if (!res.ok) { console.error('Changelog RPC error:', res.status); return; }
      const result = await res.json();
      setChangelogTotal(result.total || 0);
      if (append) {
        setChangelogData(prev => [...(prev || []), ...(result.entries || [])]);
      } else {
        setChangelogData(result.entries || []);
      }
    } catch (e) { console.error('Changelog fetch error:', e); }
    finally { setChangelogLoading(false); }
  }, []);

  const getDateParams = (): [string | undefined, string | undefined] => customStart && customEnd ? [customStart, customEnd] : [undefined, undefined];
  const handleLogin = (e: React.FormEvent) => { e.preventDefault(); passwordRef.current = password; fetchData(password, days); };
  const changeDays = (d: number) => {
    const end = new Date().toISOString().split('T')[0];
    const start = new Date(Date.now() - (d - 1) * 86400000).toISOString().split('T')[0];
    setDays(d); setCustomStart(start); setCustomEnd(end); setLeadsData(null); setAdvancedData(null); setCroData(null);
    fetchData(passwordRef.current, d, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, start, end);
    if (activeTab === 'leads') fetchLeadsData(passwordRef.current, d, start, end);
    if (activeTab === 'behavior') fetchAdvancedData(d, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, start, end);
    if (activeTab === 'cro' || activeTab === 'journeys') fetchCroData(d, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, start, end);
  };
  const applyCustomRange = (start: string, end: string) => {
    setCustomStart(start); setCustomEnd(end); setDays(0); setLeadsData(null); setAdvancedData(null); setCroData(null);
    fetchData(passwordRef.current, 30, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, start, end);
    if (activeTab === 'leads') fetchLeadsData(passwordRef.current, 30, start, end);
    if (activeTab === 'behavior') fetchAdvancedData(30, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, start, end);
    if (activeTab === 'cro' || activeTab === 'journeys') fetchCroData(30, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, start, end);
  };
  const applyFilters = (device: string, utm: string) => {
    setDeviceFilter(device); setUtmSourceFilter(utm);
    setLeadsData(null); setAdvancedData(null); setCroData(null);
    const [sd, ed] = getDateParams();
    fetchData(passwordRef.current, days, device || undefined, utm || undefined, pageFilter.length > 0 ? pageFilter : undefined, sd, ed);
  };
  const toggleSort = (key: string) => setPageSort(prev => ({ key, dir: prev.key === key && prev.dir === 'desc' ? 'asc' : 'desc' }));

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh || !isAuthed) return;
    const [sd, ed] = getDateParams();
    const id = setInterval(() => fetchData(passwordRef.current, days, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, sd, ed), 60000);
    return () => clearInterval(id);
  }, [autoRefresh, isAuthed, days, customStart, customEnd, deviceFilter, utmSourceFilter, pageFilter, fetchData]);

  // Fetch leads data when tab switches to leads
  useEffect(() => {
    if (activeTab !== 'leads' || !isAuthed || leadsData) return;
    const [sd, ed] = getDateParams();
    fetchLeadsData(passwordRef.current, days, sd, ed);
  }, [activeTab, isAuthed, days, customStart, customEnd, leadsData, fetchLeadsData]);

  // Fetch advanced data when behavior or insights tab opens
  useEffect(() => {
    if ((activeTab !== 'behavior' && activeTab !== 'insights') || !isAuthed || advancedData) return;
    const [sd, ed] = getDateParams();
    fetchAdvancedData(days, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, sd, ed);
  }, [activeTab, isAuthed, days, customStart, customEnd, advancedData, deviceFilter, utmSourceFilter, pageFilter, fetchAdvancedData]);

  // Fetch CRO data when CRO tab opens
  useEffect(() => {
    if (activeTab !== 'cro' || !isAuthed || croData) return;
    const [sd, ed] = getDateParams();
    fetchCroData(days, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, sd, ed);
  }, [activeTab, isAuthed, days, customStart, customEnd, croData, deviceFilter, utmSourceFilter, pageFilter, fetchCroData]);

  // Fetch changelog when changelog tab opens
  useEffect(() => {
    if (activeTab !== 'changelog' || !isAuthed || changelogData) return;
    fetchChangelog();
  }, [activeTab, isAuthed, changelogData, fetchChangelog]);

  // Real-time tab polling (30s)
  useEffect(() => {
    if (activeTab !== 'realtime' || !isAuthed) return;
    const [sd, ed] = getDateParams();
    const id = setInterval(() => fetchData(passwordRef.current, days, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, sd, ed), 30000);
    return () => clearInterval(id);
  }, [activeTab, isAuthed, days, customStart, customEnd, deviceFilter, utmSourceFilter, pageFilter, fetchData]);

  /* ─── Derived Data ─── */
  const allPages = useMemo(() => data?.page_details?.map(p => p.page_path).sort() || [], [data]);
  const utmSources = useMemo(() => {
    if (!data?.utm_campaigns_v2) return [];
    const sources = new Set(data.utm_campaigns_v2.map((c: any) => c.utm_source).filter(Boolean));
    return Array.from(sources).sort() as string[];
  }, [data]);

  const filteredPageDetails = useMemo(() => {
    if (!data?.page_details) return [];
    let arr = data.page_details;
    if (tableSearch) {
      const q = tableSearch.toLowerCase();
      arr = arr.filter(r => decodePath(r.page_path).toLowerCase().includes(q));
    }
    return [...arr].sort((a: any, b: any) => {
      const av = a[pageSort.key], bv = b[pageSort.key];
      const cmp = typeof av === 'number' ? av - bv : String(av).localeCompare(String(bv));
      return pageSort.dir === 'desc' ? -cmp : cmp;
    });
  }, [data, pageFilter, pageSort, tableSearch]);

  const filteredSourcePages = useMemo(() => {
    if (!data?.source_pages) return [];
    let arr = data.source_pages;
    if (sourceFilter === 'paid') arr = arr.filter(r => r.utm_medium === 'paid');
    else if (sourceFilter === 'organic') arr = arr.filter(r => !r.utm_medium || r.utm_medium !== 'paid');
    return arr;
  }, [data, pageFilter, sourceFilter]);

  const trends = useMemo(() => {
    if (!data) return {};
    return {
      views: calcTrend(data.total_pageviews, data.prev_total_pageviews),
      clicks: calcTrend(data.total_clicks, data.prev_total_clicks),
      forms: calcTrend(data.total_forms, data.prev_total_forms),
      conversion: calcTrend(data.conversion_rate, data.prev_conversion_rate),
      whatsapp: calcTrend(data.whatsapp_clicks, data.prev_whatsapp_clicks),
    };
  }, [data]);

  const topPagesChart = useMemo(() => {
    if (!data?.top_pages) return [];
    return data.top_pages.slice(0, 10).map(p => ({ ...p, name: decodePath(p.page_path) })).reverse();
  }, [data]);

  const dailyMerged = useMemo(() => mergeDaily(data?.daily_views ?? null, data?.daily_clicks ?? null, data?.daily_forms ?? null), [data]);
  const chartData = useMemo(() => aggregateByGranularity(dailyMerged, granularity), [dailyMerged, granularity]);

  const hourlyFull = useMemo(() => {
    const map: Record<number, number> = {};
    for (let i = 0; i < 24; i++) map[i] = 0;
    (data?.hourly_distribution || []).forEach(h => { map[h.hour] = h.count; });
    return Object.entries(map).map(([h, c]) => ({ hour: `${h}:00`, count: c, hourNum: +h }));
  }, [data]);

  const marketingInsights = useMemo(() => data ? generateMarketingInsights(data, advancedData, leadsData) : [], [data, advancedData, leadsData]);

  // Anomaly detection
  const anomalies = useMemo(() => {
    if (!data?.daily_views || data.daily_views.length < 5) return [];
    const vals = data.daily_views.map(d => d.views);
    const mean = vals.reduce((s, v) => s + v, 0) / vals.length;
    const std = Math.sqrt(vals.reduce((s, v) => s + (v - mean) ** 2, 0) / vals.length);
    if (std === 0) return [];
    return data.daily_views
      .filter(d => Math.abs(d.views - mean) > 2 * std)
      .map(d => ({
        day: d.day, views: d.views, mean: Math.round(mean),
        type: d.views > mean ? 'spike' as const : 'drop' as const,
      }));
  }, [data]);

  /* ─── Login Screen ─── */
  if (!isAuthed) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.bg }}>
        <style>{`@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`}</style>
        <form onSubmit={handleLogin} style={{
          background: T.cardBg, border: `1px solid ${T.cardBorder}`, borderRadius: '16px',
          padding: '40px', backdropFilter: 'blur(20px)', width: '100%', maxWidth: '380px',
          textAlign: 'center', boxShadow: T.cardShadow,
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>📊</div>
          <h2 style={{ color: T.textPrimary, fontSize: '20px', marginBottom: '24px', fontFamily: 'Heebo, sans-serif' }}>Focus AI Analytics</h2>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="סיסמה" dir="rtl"
            style={{
              width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1px solid ${T.cardBorder}`,
              background: 'rgba(255,255,255,0.8)', color: T.textPrimary, fontSize: '16px', marginBottom: '16px',
              boxSizing: 'border-box', outline: 'none', fontFamily: 'Heebo, sans-serif',
            }}
          />
          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: T.purple,
            color: '#ffffff', fontSize: '16px', cursor: 'pointer', fontFamily: 'Heebo, sans-serif', fontWeight: 600,
          }}>{loading ? '...' : 'כניסה'}</button>
          {error && <p style={{ color: T.red, marginTop: '12px', fontSize: '14px' }}>{error}</p>}
        </form>
      </div>
    );
  }

  /* ─── Dashboard ─── */
  return (
    <div style={{ minHeight: '100vh', background: T.bg, color: T.textPrimary, padding: '24px', fontFamily: 'Heebo, sans-serif' }}>
      <style>{`@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 style={{ fontSize: '22px', margin: 0, fontWeight: 700 }}>📊 Focus AI Analytics</h1>
          {lastUpdated && <span style={{ fontSize: '12px', color: T.textMuted }}>עדכון: {lastUpdated.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}</span>}
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <select value={deviceFilter} onChange={e => applyFilters(e.target.value, utmSourceFilter)} dir="rtl" style={{
            padding: '8px 12px', borderRadius: '8px', border: `1px solid ${deviceFilter ? T.purple : T.cardBorder}`,
            background: deviceFilter ? T.purpleBg : T.cardBg, color: deviceFilter ? T.purple : T.textSecondary,
            fontSize: '13px', cursor: 'pointer', outline: 'none', fontFamily: 'Heebo, sans-serif',
          }}>
            <option value="">כל המכשירים</option>
            <option value="desktop">💻 מחשב</option>
            <option value="mobile">📱 נייד</option>
            <option value="tablet">📟 טאבלט</option>
          </select>
          <select value={utmSourceFilter} onChange={e => applyFilters(deviceFilter, e.target.value)} dir="rtl" style={{
            padding: '8px 12px', borderRadius: '8px', border: `1px solid ${utmSourceFilter ? T.purple : T.cardBorder}`,
            background: utmSourceFilter ? T.purpleBg : T.cardBg, color: utmSourceFilter ? T.purple : T.textSecondary,
            fontSize: '13px', cursor: 'pointer', outline: 'none', fontFamily: 'Heebo, sans-serif',
          }}>
            <option value="">כל המקורות</option>
            {utmSources.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={pageFilter.length === 1 ? pageFilter[0] : ''} onChange={e => { const val = e.target.value ? [e.target.value] : []; setPageFilter(val); setLeadsData(null); setAdvancedData(null); const [sd, ed] = getDateParams(); fetchData(passwordRef.current, days, deviceFilter || undefined, utmSourceFilter || undefined, val.length > 0 ? val : undefined, sd, ed); }} dir="rtl" style={{
            padding: '8px 12px', borderRadius: '8px', border: `1px solid ${pageFilter.length > 0 ? T.purple : T.cardBorder}`,
            background: pageFilter.length > 0 ? T.purpleBg : T.cardBg, color: pageFilter.length > 0 ? T.purple : T.textSecondary,
            fontSize: '13px', cursor: 'pointer', outline: 'none', maxWidth: '200px', fontFamily: 'Heebo, sans-serif',
          }}>
            <option value="">כל הדפים</option>
            {allPages.map(p => <option key={p} value={p}>{decodePath(p)}</option>)}
          </select>
          {(deviceFilter || utmSourceFilter || pageFilter.length > 0) && (
            <button onClick={() => { setDeviceFilter(''); setUtmSourceFilter(''); setPageFilter([]); setLeadsData(null); setAdvancedData(null); const [sd, ed] = getDateParams(); fetchData(passwordRef.current, days, undefined, undefined, undefined, sd, ed); }} style={{
              padding: '8px 12px', borderRadius: '8px', border: `1px solid ${T.red}`,
              background: T.redBg, color: T.red, cursor: 'pointer', fontSize: '12px', fontFamily: 'Heebo, sans-serif',
            }}>✕ נקה פילטרים</button>
          )}
          <button onClick={() => setAutoRefresh(!autoRefresh)} style={{
            padding: '8px 12px', borderRadius: '8px', border: `1px solid ${autoRefresh ? T.green : T.cardBorder}`,
            background: autoRefresh ? T.greenBg : T.cardBg, color: autoRefresh ? T.green : T.textMuted,
            cursor: 'pointer', fontSize: '12px', fontFamily: 'Heebo, sans-serif',
          }}>{autoRefresh ? '⏸ עצור' : '▶ רענון אוטומטי'}</button>
          <button onClick={() => { const [sd, ed] = getDateParams(); fetchData(passwordRef.current, days, deviceFilter || undefined, utmSourceFilter || undefined, pageFilter.length > 0 ? pageFilter : undefined, sd, ed); }} disabled={loading} style={{
            padding: '8px 12px', borderRadius: '8px', border: `1px solid ${T.cardBorder}`,
            background: T.cardBg, color: loading ? T.textMuted : T.green, cursor: loading ? 'default' : 'pointer', fontSize: '14px',
          }}>{loading ? '⏳' : '🔄'}</button>
          {(() => {
            const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
            const presets: { d: number; label: string; start?: string; end?: string }[] = [
              { d: 1, label: 'היום' },
              { d: -1, label: 'אתמול', start: yesterday, end: yesterday },
              { d: 3, label: '3 ימים' },
              { d: 7, label: '7 ימים' },
              { d: 14, label: '14 ימים' },
              { d: 30, label: '30 ימים' },
              { d: 90, label: '90 ימים' },
            ];
            return presets.map(p => {
              const isActive = p.d === -1
                ? (customStart === yesterday && customEnd === yesterday && days === 0)
                : days === p.d;
              return (
                <button key={p.d} onClick={() => p.d === -1 ? applyCustomRange(yesterday, yesterday) : changeDays(p.d)} style={{
                  padding: '8px 16px', borderRadius: '8px',
                  border: isActive ? `1px solid ${T.purple}` : `1px solid ${T.cardBorder}`,
                  background: isActive ? T.purpleBg : T.cardBg,
                  color: isActive ? T.purple : T.textSecondary, cursor: 'pointer', fontSize: '14px', fontWeight: isActive ? 600 : 400,
                }}>{p.label}</button>
              );
            });
          })()}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '8px',
            border: days === 0 ? `1px solid ${T.purple}` : `1px solid ${T.cardBorder}`,
            background: days === 0 ? T.purpleBg : T.cardBg }}>
            <input type="date" value={customStart} onChange={e => {
              const v = e.target.value;
              setCustomStart(v);
              if (v && customEnd && v <= customEnd) applyCustomRange(v, customEnd);
            }} style={{
              background: 'transparent', border: 'none', color: customStart ? T.purple : T.textSecondary,
              fontSize: '13px', outline: 'none', cursor: 'pointer', fontFamily: 'monospace',
              colorScheme: 'light', width: '130px',
            }} />
            <span style={{ color: T.textMuted, fontSize: '12px' }}>→</span>
            <input type="date" value={customEnd} onChange={e => {
              const v = e.target.value;
              setCustomEnd(v);
              if (customStart && v && customStart <= v) applyCustomRange(customStart, v);
            }} style={{
              background: 'transparent', border: 'none', color: customEnd ? T.purple : T.textSecondary,
              fontSize: '13px', outline: 'none', cursor: 'pointer', fontFamily: 'monospace',
              colorScheme: 'light', width: '130px',
            }} />
            {days === 0 && (
              <button onClick={() => changeDays(30)} style={{
                background: 'none', border: 'none', color: T.red, cursor: 'pointer', fontSize: '12px', padding: '0 4px',
              }}>✕</button>
            )}
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{
        display: 'flex', gap: '6px', marginBottom: '24px', overflowX: 'auto', direction: 'rtl',
        paddingBottom: '4px', scrollbarWidth: 'none',
      }}>
        {TABS.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: '10px 18px', borderRadius: '10px', border: `1px solid ${activeTab === tab.id ? T.purple : T.cardBorder}`,
            background: activeTab === tab.id ? T.purpleBg : T.cardBg,
            color: activeTab === tab.id ? T.purple : T.textSecondary,
            cursor: 'pointer', fontSize: '14px', fontWeight: activeTab === tab.id ? 600 : 400,
            whiteSpace: 'nowrap', fontFamily: 'Heebo, sans-serif',
            display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s',
          }}>
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      {/* Active Filters Indicator */}
      {(deviceFilter || utmSourceFilter || pageFilter.length > 0) && (
        <div style={{
          display: 'flex', gap: '8px', marginBottom: '16px', direction: 'rtl', alignItems: 'center', flexWrap: 'wrap',
          padding: '8px 16px', borderRadius: '10px', background: T.purpleBg, border: `1px solid ${T.purple}30`,
        }}>
          <span style={{ fontSize: '12px', color: T.purple, fontWeight: 600 }}>🔍 פילטרים פעילים:</span>
          {deviceFilter && <span style={{ fontSize: '12px', color: T.textPrimary, padding: '2px 10px', borderRadius: '6px', background: 'rgba(0,0,0,0.04)' }}>{DEVICE_LABELS[deviceFilter] || deviceFilter}</span>}
          {utmSourceFilter && <span style={{ fontSize: '12px', color: T.textPrimary, padding: '2px 10px', borderRadius: '6px', background: 'rgba(0,0,0,0.04)' }}>{utmSourceFilter}</span>}
          {pageFilter.length > 0 && (() => {
            const matchedAsset = ASSETS.find(a => a.paths.length > 0 && a.paths.every(p => pageFilter.includes(p)) && pageFilter.every(p => a.paths.includes(p)));
            return <span style={{ fontSize: '12px', color: T.textPrimary, padding: '2px 10px', borderRadius: '6px', background: 'rgba(0,0,0,0.04)', display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }} onClick={() => { setPageFilter([]); setLeadsData(null); setAdvancedData(null); const [sd, ed] = getDateParams(); fetchData(passwordRef.current, days, deviceFilter || undefined, utmSourceFilter || undefined, undefined, sd, ed); }}>
              {matchedAsset ? `${matchedAsset.icon} ${matchedAsset.name}` : pageFilter.map(p => decodePath(p)).join(', ')} ✕
            </span>;
          })()}
        </div>
      )}

      {loading && !data && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          {[1, 2, 3, 4, 5, 6].map(i => <Skeleton key={i} height={130} />)}
        </div>
      )}

      {data && (
        <>
          {/* ═══ OVERVIEW TAB ═══ */}
          {activeTab === 'overview' && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                <KPI label="צפיות" value={data.total_pageviews} trend={trends.views} sparkData={data.daily_views || undefined} icon="👁" />
                <KPI label="סשנים" value={data.session_stats?.total_sessions || undefined}
                  displayValue={data.session_stats?.total_sessions ? data.session_stats.total_sessions.toLocaleString('he-IL') : '---'}
                  color={T.cyan} icon="👤" />
                <KPI label="טפסים" value={data.total_forms} trend={trends.forms} sparkData={data.daily_forms || undefined} sparkKey="forms" color={T.green} icon="📝" />
                <KPI label="אחוז המרה" displayValue={`${data.conversion_rate}%`} trend={trends.conversion} color={T.orange} icon="🎯" />
                <KPI label="WhatsApp" value={data.whatsapp_clicks} trend={trends.whatsapp} color="#25D366" icon="💬" />
                <KPI label="נטישה" displayValue={data.session_stats?.bounce_rate ? `${data.session_stats.bounce_rate}%` : '---'} color={T.red} icon="🚪" />
              </div>

              {/* Multi-metric chart */}
              {chartData.length > 0 && (
                <Card title={granularity === 'day' ? 'מגמות יומיות' : granularity === 'week' ? 'מגמות שבועיות' : 'מגמות חודשיות'}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', direction: 'rtl', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[
                        { key: 'views', label: 'צפיות', color: T.purple, show: showViews, toggle: setShowViews },
                        { key: 'clicks', label: 'לחיצות', color: T.cyan, show: showClicks, toggle: setShowClicks },
                        { key: 'forms', label: 'טפסים', color: T.green, show: showForms, toggle: setShowForms },
                      ].map(s => (
                        <button key={s.key} onClick={() => s.toggle(!s.show)} style={{
                          display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '6px',
                          border: `1px solid ${s.show ? s.color : T.cardBorder}`, background: s.show ? `${s.color}15` : 'transparent',
                          color: s.show ? s.color : T.textMuted, cursor: 'pointer', fontSize: '12px', fontFamily: 'Heebo, sans-serif',
                        }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.show ? s.color : T.textMuted }} />
                          {s.label}
                        </button>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '4px', background: T.cardBg, borderRadius: '8px', padding: '2px', border: `1px solid ${T.cardBorder}` }}>
                      {([['day', 'יום'], ['week', 'שבוע'], ['month', 'חודש']] as const).map(([g, label]) => (
                        <button key={g} onClick={() => setGranularity(g)} style={{
                          padding: '4px 12px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer', fontFamily: 'Heebo, sans-serif',
                          border: 'none', background: granularity === g ? T.purpleBg : 'transparent',
                          color: granularity === g ? T.purple : T.textMuted, fontWeight: granularity === g ? 600 : 400,
                        }}>{label}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ direction: 'ltr', height: '280px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="gViews" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={T.purple} stopOpacity={0.3} /><stop offset="100%" stopColor={T.purple} stopOpacity={0} /></linearGradient>
                          <linearGradient id="gClicks" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={T.cyan} stopOpacity={0.3} /><stop offset="100%" stopColor={T.cyan} stopOpacity={0} /></linearGradient>
                          <linearGradient id="gForms" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={T.green} stopOpacity={0.3} /><stop offset="100%" stopColor={T.green} stopOpacity={0} /></linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={T.grid} vertical={false} />
                        <XAxis dataKey="day" tickFormatter={formatDate} stroke={T.grid} tick={{ fill: T.axisText, fontSize: 12 }} tickLine={false} axisLine={false} />
                        <YAxis stroke={T.grid} tick={{ fill: T.axisText, fontSize: 12 }} tickLine={false} axisLine={false} width={40} />
                        <Tooltip content={<ChartTooltip />} />
                        {showViews && <Area type="monotone" dataKey="views" name="צפיות" stroke={T.purple} fill="url(#gViews)" strokeWidth={2} dot={false} />}
                        {showClicks && <Area type="monotone" dataKey="clicks" name="לחיצות" stroke={T.cyan} fill="url(#gClicks)" strokeWidth={2} dot={false} />}
                        {showForms && <Area type="monotone" dataKey="forms" name="טפסים" stroke={T.green} fill="url(#gForms)" strokeWidth={2} dot={false} />}
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
                {/* Devices Donut */}
                <Card title="מכשירים">
                  {data.devices && data.devices.length > 0 ? (
                    <>
                      <div style={{ direction: 'ltr', height: '200px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={data.devices} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="count" nameKey="device_type" stroke="none">
                              {data.devices.map((_, i) => <Cell key={i} fill={DEVICE_COLORS[i % DEVICE_COLORS.length]} />)}
                            </Pie>
                            <Tooltip content={({ active, payload }: any) => {
                              if (!active || !payload?.length) return null;
                              const d = payload[0].payload;
                              const total = data.devices!.reduce((s, x) => s + x.count, 0);
                              return (
                                <div style={{ background: T.tooltipBg, border: `1px solid ${T.tooltipBorder}`, borderRadius: '10px', padding: '10px 14px', direction: 'rtl' }}>
                                  <div style={{ color: T.textSecondary, fontSize: '12px' }}>{DEVICE_ICONS[d.device_type]} {DEVICE_LABELS[d.device_type] || d.device_type}</div>
                                  <div style={{ color: T.purple, fontWeight: 700, fontSize: '16px' }}>{d.count} ({total > 0 ? Math.round((d.count / total) * 100) : 0}%)</div>
                                </div>
                              );
                            }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', direction: 'rtl' }}>
                        {data.devices.map((d, i) => {
                          const total = data.devices!.reduce((s, x) => s + x.count, 0);
                          return (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: T.textSecondary }}>
                              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: DEVICE_COLORS[i % DEVICE_COLORS.length] }} />
                              {DEVICE_ICONS[d.device_type]} {DEVICE_LABELS[d.device_type]} {total > 0 ? Math.round((d.count / total) * 100) : 0}%
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : <p style={{ color: T.textMuted, textAlign: 'center' }}>אין נתונים</p>}
                </Card>

                {/* Hourly Heatmap */}
                <Card title="שעות שיא (Israel Time)">
                  {hourlyFull.length > 0 ? (
                    <div style={{ direction: 'ltr', height: '200px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={hourlyFull} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke={T.grid} horizontal={false} />
                          <XAxis dataKey="hour" tick={{ fill: T.axisText, fontSize: 10 }} axisLine={false} tickLine={false} interval={2} />
                          <YAxis tick={{ fill: T.axisText, fontSize: 11 }} axisLine={false} tickLine={false} width={30} />
                          <Tooltip content={<ChartTooltip suffix="צפיות" />} />
                          <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={20}>
                            {hourlyFull.map((h, i) => {
                              const max = Math.max(...hourlyFull.map(x => x.count), 1);
                              const intensity = h.count / max;
                              return <Cell key={i} fill={`rgba(168,85,247,${0.2 + intensity * 0.8})`} />;
                            })}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  ) : <p style={{ color: T.textMuted, textAlign: 'center' }}>אין נתונים</p>}
                </Card>
              </div>

              {/* Conversion Funnel */}
              {data.conversion_funnel && (
                <div style={{ marginTop: '16px' }}>
                  <Card title="משפך המרה">
                    <Funnel data={data.conversion_funnel} />
                  </Card>
                </div>
              )}
            </>
          )}

          {/* ═══ LEADS TAB ═══ */}
          {activeTab === 'leads' && (
            <>
              {leadsLoading && !leadsData && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                  {[1, 2, 3, 4].map(i => <Skeleton key={i} height={130} />)}
                </div>
              )}

              {leadsData && (
                <>
                  {/* KPIs */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                    <KPI label="סה״כ לידים" value={leadsData.total_leads}
                      trend={calcTrend(leadsData.total_leads, leadsData.prev_total_leads)}
                      sparkData={leadsData.daily_leads?.map(d => ({ ...d, views: d.count }))}
                      color={T.green} icon="📋" />
                    <KPI label="הסכמה שיווקית" displayValue={`${leadsData.consent_marketing_rate}%`} color={T.orange} icon="✉" />
                    <KPI label="CAPI נשלח" displayValue={`${leadsData.capi_sent_count}/${leadsData.capi_total}`}
                      color={leadsData.capi_sent_count === leadsData.capi_total ? T.green : T.orange} icon="📡" />
                    <KPI label="מקורות שונים" value={leadsData.leads_by_utm_source?.length || 0} color={T.cyan} icon="🔗" />
                  </div>

                  {/* Daily leads chart */}
                  {leadsData.daily_leads && leadsData.daily_leads.length > 0 && (
                    <Card title="לידים לפי יום">
                      <div style={{ direction: 'ltr', height: '240px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={leadsData.daily_leads} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                              <linearGradient id="gLeads" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={T.green} stopOpacity={0.3} />
                                <stop offset="100%" stopColor={T.green} stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke={T.grid} vertical={false} />
                            <XAxis dataKey="day" tickFormatter={formatDate} stroke={T.grid} tick={{ fill: T.axisText, fontSize: 12 }} tickLine={false} axisLine={false} />
                            <YAxis stroke={T.grid} tick={{ fill: T.axisText, fontSize: 12 }} tickLine={false} axisLine={false} width={30} allowDecimals={false} />
                            <Tooltip content={<ChartTooltip suffix="לידים" />} />
                            <Area type="monotone" dataKey="count" name="לידים" stroke={T.green} fill="url(#gLeads)" strokeWidth={2} dot={{ r: 3, fill: T.green }} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px' }}>
                    {/* Leads by form source */}
                    <Card title="לפי טופס" exportData={leadsData.leads_by_source} exportName="leads-by-source">
                      <DataTable
                        rows={leadsData.leads_by_source || []}
                        columns={[
                          { key: 'form_source', label: 'טופס', render: (v: string) => FORM_SOURCE_LABELS[v] || v },
                          { key: 'count', label: 'לידים', align: 'center', render: (v: number) => <span style={{ color: T.green, fontWeight: 600 }}>{v}</span> },
                        ]}
                      />
                    </Card>

                    {/* Leads by UTM source */}
                    <Card title="לפי מקור תנועה (UTM Source)" exportData={leadsData.leads_by_utm_source} exportName="leads-by-utm-source">
                      {leadsData.leads_by_utm_source && leadsData.leads_by_utm_source.length > 0 ? (
                        <>
                          <div style={{ direction: 'ltr', height: Math.max(leadsData.leads_by_utm_source.length * 36, 120) + 'px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={leadsData.leads_by_utm_source} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke={T.grid} horizontal={false} />
                                <XAxis type="number" tick={{ fill: T.axisText, fontSize: 12 }} axisLine={false} tickLine={false} allowDecimals={false} />
                                <YAxis type="category" dataKey="utm_source" width={120} tick={{ fill: T.textPrimary, fontSize: 12 }} axisLine={false} tickLine={false} />
                                <Tooltip content={<ChartTooltip suffix="לידים" />} />
                                <Bar dataKey="count" radius={[0, 6, 6, 0]} maxBarSize={24} fill={T.green} />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </>
                      ) : <p style={{ color: T.textMuted, textAlign: 'center' }}>אין נתונים</p>}
                    </Card>
                  </div>

                  {/* UTM Medium Legend + Breakdown */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px', marginTop: '16px' }}>
                    <Card title="מקרא UTM Medium">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', direction: 'rtl' }}>
                        {Object.entries(UTM_MEDIUM_LABELS).map(([key, info]) => {
                          const leadCount = leadsData.leads_by_utm_medium?.find(m => m.utm_medium === key)?.count || 0;
                          return (
                            <div key={key} style={{
                              display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px',
                              background: leadCount > 0 ? `${info.color}10` : 'transparent',
                              borderRadius: '8px', border: `1px solid ${leadCount > 0 ? `${info.color}30` : T.rowBorder}`,
                            }}>
                              <span style={{
                                padding: '2px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 600,
                                background: `${info.color}20`, color: info.color, minWidth: '60px', textAlign: 'center',
                              }}>{key}</span>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '13px', color: T.textPrimary, fontWeight: 500 }}>{info.label}</div>
                                <div style={{ fontSize: '12px', color: T.textMuted }}>{info.desc}</div>
                              </div>
                              {leadCount > 0 && (
                                <span style={{ fontSize: '14px', fontWeight: 700, color: info.color }}>{leadCount}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </Card>

                    {/* Campaigns breakdown */}
                    <Card title="קמפיינים (UTM מלא)" exportData={leadsData.leads_by_campaign} exportName="leads-by-campaign">
                      <DataTable
                        rows={(leadsData.leads_by_campaign || []).filter(c => c.utm_source !== 'direct')}
                        columns={[
                          { key: 'utm_source', label: 'Source' },
                          { key: 'utm_medium', label: 'Medium', align: 'center', render: (v: string) => {
                            const info = UTM_MEDIUM_LABELS[v];
                            return (
                              <span style={{
                                padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600,
                                background: info ? `${info.color}20` : 'rgba(0,0,0,0.04)',
                                color: info?.color || T.textSecondary,
                              }}>{info?.label || v}</span>
                            );
                          }},
                          { key: 'utm_campaign', label: 'Campaign', render: (v: string) => v || '-' },
                          { key: 'count', label: 'לידים', align: 'center', render: (v: number) => <span style={{ color: T.green, fontWeight: 600 }}>{v}</span> },
                        ]}
                      />
                    </Card>
                  </div>

                  {/* Hourly + Day of Week */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px', marginTop: '16px' }}>
                    {/* Hourly distribution */}
                    <Card title="לידים לפי שעה">
                      {leadsData.hourly_leads && leadsData.hourly_leads.length > 0 ? (
                        <div style={{ direction: 'ltr', height: '200px' }}>
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={(() => {
                              const map: Record<number, number> = {};
                              for (let i = 0; i < 24; i++) map[i] = 0;
                              leadsData.hourly_leads.forEach(h => { map[h.hour] = h.count; });
                              return Object.entries(map).map(([h, c]) => ({ hour: `${h}:00`, count: c }));
                            })()} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke={T.grid} horizontal={false} />
                              <XAxis dataKey="hour" tick={{ fill: T.axisText, fontSize: 10 }} axisLine={false} tickLine={false} interval={2} />
                              <YAxis tick={{ fill: T.axisText, fontSize: 11 }} axisLine={false} tickLine={false} width={25} allowDecimals={false} />
                              <Tooltip content={<ChartTooltip suffix="לידים" />} />
                              <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={18} fill={T.green} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      ) : <p style={{ color: T.textMuted, textAlign: 'center' }}>אין נתונים</p>}
                    </Card>

                    {/* Day of week */}
                    <Card title="לידים לפי יום בשבוע">
                      {leadsData.dow_leads && leadsData.dow_leads.length > 0 ? (
                        <div style={{ direction: 'ltr', height: '200px' }}>
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={(() => {
                              const map: Record<number, number> = {};
                              for (let i = 0; i < 7; i++) map[i] = 0;
                              leadsData.dow_leads.forEach(d => { map[d.dow] = d.count; });
                              return Object.entries(map).map(([d, c]) => ({ day: DOW_LABELS[+d] || d, count: c }));
                            })()} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                              <CartesianGrid strokeDasharray="3 3" stroke={T.grid} horizontal={false} />
                              <XAxis dataKey="day" tick={{ fill: T.axisText, fontSize: 12 }} axisLine={false} tickLine={false} />
                              <YAxis tick={{ fill: T.axisText, fontSize: 11 }} axisLine={false} tickLine={false} width={25} allowDecimals={false} />
                              <Tooltip content={<ChartTooltip suffix="לידים" />} />
                              <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={32}>
                                {[0, 1, 2, 3, 4, 5, 6].map(i => (
                                  <Cell key={i} fill={i === 5 || i === 6 ? 'rgba(16,185,129,0.3)' : T.green} />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      ) : <p style={{ color: T.textMuted, textAlign: 'center' }}>אין נתונים</p>}
                    </Card>
                  </div>

                  {/* Recent Leads */}
                  <div style={{ marginTop: '16px' }}>
                    <Card title="לידים אחרונים" exportData={leadsData.recent_leads} exportName="recent-leads">
                      <DataTable
                        rows={leadsData.recent_leads || []}
                        columns={[
                          { key: 'created_at', label: 'זמן', render: (v: string) => timeAgo(v) },
                          { key: 'first_name', label: 'שם', render: (v: string) => v || '-' },
                          { key: 'email_masked', label: 'מייל' },
                          { key: 'form_source', label: 'טופס', render: (v: string) => (
                            <span style={{ fontSize: '12px' }}>{FORM_SOURCE_LABELS[v] || v}</span>
                          )},
                          { key: 'utm_source', label: 'Source', render: (v: string) => v || <span style={{ color: T.textMuted }}>direct</span> },
                          { key: 'utm_medium', label: 'Medium', align: 'center', render: (v: string) => {
                            if (!v) return <span style={{ color: T.textMuted, fontSize: '12px' }}>-</span>;
                            const info = UTM_MEDIUM_LABELS[v];
                            return (
                              <span style={{
                                padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600,
                                background: info ? `${info.color}20` : 'rgba(0,0,0,0.04)',
                                color: info?.color || T.textSecondary,
                              }}>{info?.label || v}</span>
                            );
                          }},
                          { key: 'device_type', label: 'מכשיר', align: 'center', render: (v: string) => DEVICE_ICONS[v] || v || '-' },
                        ]}
                      />
                    </Card>
                  </div>

                  {/* Device breakdown */}
                  {leadsData.leads_by_device && leadsData.leads_by_device.length > 0 && (
                    <div style={{ marginTop: '16px' }}>
                      <Card title="לידים לפי מכשיר">
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', direction: 'rtl', flexWrap: 'wrap' }}>
                          {leadsData.leads_by_device.map((d, i) => {
                            const total = leadsData.leads_by_device.reduce((s, x) => s + x.count, 0);
                            const pct = total > 0 ? Math.round((d.count / total) * 100) : 0;
                            return (
                              <div key={i} style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                                padding: '16px 24px', background: T.cardBg, border: `1px solid ${T.cardBorder}`,
                                borderRadius: '12px', minWidth: '120px',
                              }}>
                                <span style={{ fontSize: '28px' }}>{DEVICE_ICONS[d.device_type] || '📱'}</span>
                                <span style={{ fontSize: '12px', color: T.textSecondary }}>{DEVICE_LABELS[d.device_type] || d.device_type}</span>
                                <span style={{ fontSize: '24px', fontWeight: 700, color: T.green }}>{d.count}</span>
                                <span style={{ fontSize: '12px', color: T.textMuted }}>{pct}%</span>
                              </div>
                            );
                          })}
                        </div>
                      </Card>
                    </div>
                  )}
                </>
              )}

              {!leadsLoading && !leadsData && (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: T.textMuted }}>
                  <p style={{ fontSize: '16px' }}>לא ניתן לטעון נתוני לידים</p>
                  <p style={{ fontSize: '13px', marginTop: '4px' }}>בדוק ב-Console לפרטי השגיאה</p>
                  <button onClick={() => { const [sd, ed] = getDateParams(); fetchLeadsData(passwordRef.current, days, sd, ed); }} style={{
                    marginTop: '12px', padding: '8px 20px', borderRadius: '8px', border: `1px solid ${T.purple}`,
                    background: T.purpleBg, color: T.purple, cursor: 'pointer', fontSize: '14px', fontFamily: 'Heebo, sans-serif',
                  }}>נסה שוב</button>
                </div>
              )}
            </>
          )}

          {/* ═══ JOURNEYS TAB ═══ */}
          {activeTab === 'journeys' && (
            <>
              {/* Disclaimer */}
              <div style={{
                padding: '14px 20px', borderRadius: '12px', marginBottom: '20px', direction: 'rtl',
                background: T.purpleBg, border: `1px solid ${T.purple}20`,
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{ fontSize: '16px' }}>ℹ️</span>
                <span style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.6 }}>
                  מעקב כולל פעילות באתר בלבד: כניסה לדף, התחלת טופס, שליחת טופס, צפייה בדף יעד. לא ניתן לעקוב אחרי פתיחת מיילים, לחיצות במייל, או הצטרפות לקבוצת WhatsApp.
                </span>
              </div>

              {/* Journey Funnels */}
              {JOURNEYS.map(journey => {
                const stepValues = journey.steps.map(step => {
                  if (step.metric === 'forms') {
                    return (data.form_details || []).filter(f => f.page_path === step.path).reduce((s, f) => s + f.submissions, 0);
                  }
                  return data.page_details?.find(p => p.page_path === step.path)?.views || 0;
                });
                const maxStep = Math.max(stepValues[0], 1);
                const hasData = stepValues.some(v => v > 0);

                if (!hasData) return null;

                return (
                  <Card key={journey.id} title={journey.name}>
                    <div style={{ direction: 'rtl' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {journey.steps.map((step, i) => {
                          const value = stepValues[i];
                          const pct = (value / maxStep) * 100;
                          const dropPct = i > 0 && stepValues[i - 1] > 0 ? Math.round((value / stepValues[i - 1]) * 100) : 100;
                          const dropped = i > 0 && stepValues[i - 1] > 0 ? stepValues[i - 1] - value : 0;
                          return (
                            <div key={step.label + step.path}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: journey.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>{i + 1}</span>
                                  <span style={{ fontSize: '14px', color: T.textPrimary, fontWeight: 500 }}>{step.label}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <span style={{ fontSize: '16px', color: journey.color, fontWeight: 700 }}>{value.toLocaleString('he-IL')}</span>
                                  {i > 0 && <span style={{ fontSize: '12px', color: dropPct > 50 ? T.green : dropPct > 20 ? T.orange : T.red, fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: dropPct > 50 ? T.greenBg : dropPct > 20 ? T.orangeBg : T.redBg }}>{dropPct}%</span>}
                                </div>
                              </div>
                              <div style={{ height: '10px', background: 'rgba(0,0,0,0.03)', borderRadius: '5px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: `${Math.max(pct, 2)}%`, background: `linear-gradient(90deg, ${journey.color}, ${journey.color}90)`, borderRadius: '5px', transition: 'width 0.6s ease' }} />
                              </div>
                              {i > 0 && dropped > 0 && (
                                <div style={{ fontSize: '12px', color: T.red, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                  <span>↓</span> {dropped.toLocaleString('he-IL')} נשרו ({100 - dropPct}%)
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      {/* Overall conversion */}
                      {stepValues[0] > 0 && stepValues.length > 1 && (
                        <div style={{ marginTop: '16px', padding: '12px 16px', borderRadius: '10px', background: T.purpleBg, border: `1px solid ${journey.color}15` }}>
                          <span style={{ fontSize: '13px', color: T.textSecondary }}>המרה כוללת (שלב 1 → {journey.steps.length}): </span>
                          <span style={{ fontSize: '14px', color: journey.color, fontWeight: 600 }}>{Math.round((stepValues[stepValues.length - 1] / stepValues[0]) * 100)}%</span>
                          <span style={{ fontSize: '12px', color: T.textMuted, marginRight: '8px' }}>({stepValues[stepValues.length - 1].toLocaleString('he-IL')} / {stepValues[0].toLocaleString('he-IL')})</span>
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}

              {/* Journey Comparison Grid */}
              <Card title="השוואת מסעות">
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', direction: 'rtl' }}>
                    <thead>
                      <tr>
                        {['מסע', 'כניסות', 'המרות (אחרון)', 'המרה %', 'שלבים'].map(h => (
                          <th key={h} style={{ padding: '12px 8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontWeight: 500, fontSize: '12px', textAlign: h === 'מסע' ? 'right' : 'center' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {JOURNEYS.map(j => {
                        const firstStep = j.steps[0];
                        const lastStep = j.steps[j.steps.length - 1];
                        const firstVal = firstStep.metric === 'forms'
                          ? (data.form_details || []).filter(f => f.page_path === firstStep.path).reduce((s, f) => s + f.submissions, 0)
                          : data.page_details?.find(p => p.page_path === firstStep.path)?.views || 0;
                        const lastVal = lastStep.metric === 'forms'
                          ? (data.form_details || []).filter(f => f.page_path === lastStep.path).reduce((s, f) => s + f.submissions, 0)
                          : data.page_details?.find(p => p.page_path === lastStep.path)?.views || 0;
                        const conv = firstVal > 0 ? Math.round((lastVal / firstVal) * 100) : 0;
                        if (firstVal === 0) return null;
                        return (
                          <tr key={j.id} onMouseEnter={e => (e.currentTarget.style.background = 'rgba(124,58,237,0.04)')} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                            <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, fontWeight: 600 }}>
                              <span style={{ color: j.color }}>●</span> {j.name}
                            </td>
                            <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center', color: T.purple, fontWeight: 600 }}>{firstVal.toLocaleString('he-IL')}</td>
                            <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center', color: T.green, fontWeight: 600 }}>{lastVal.toLocaleString('he-IL')}</td>
                            <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center' }}>
                              <span style={{ padding: '2px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, background: conv > 5 ? T.greenBg : conv > 0 ? T.orangeBg : T.redBg, color: conv > 5 ? T.green : conv > 0 ? T.orange : T.red }}>{conv}%</span>
                            </td>
                            <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center', color: T.textSecondary }}>{j.steps.length}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Conversion Funnel (moved from overview/conversions) */}
              {data.conversion_funnel && (
                <Card title="משפך המרה כללי">
                  <Funnel data={data.conversion_funnel} />
                </Card>
              )}

              {/* Forms breakdown */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px' }}>
                <Card title="טפסים" exportData={data.form_details ?? undefined} exportName="form-submissions">
                  <DataTable
                    rows={data.form_details || []}
                    columns={[
                      { key: 'page_path', label: 'דף', render: (v: string) => decodePath(v) },
                      { key: 'button_text', label: 'כפתור' },
                      { key: 'submissions', label: 'שליחות', align: 'center', render: (v: number) => <span style={{ color: T.green, fontWeight: 600 }}>{v}</span> },
                    ]}
                  />
                </Card>

                <Card title="דפי נחיתה" exportData={data.landing_pages ?? undefined} exportName="landing-pages">
                  <DataTable
                    rows={data.landing_pages || []}
                    columns={[
                      { key: 'page_path', label: 'דף', render: (v: string) => decodePath(v) },
                      { key: 'external_entries', label: 'כניסות', align: 'center', render: (v: number) => <span style={{ color: T.purple, fontWeight: 600 }}>{v}</span> },
                      { key: 'distinct_sources', label: 'מקורות', align: 'center' },
                      { key: 'paid_entries', label: 'Paid', align: 'center', render: (v: number) => v > 0 ? <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, background: T.purpleBg, color: T.purple }}>{v}</span> : <span style={{ color: T.textMuted }}>0</span> },
                      { key: 'organic_entries', label: 'Organic', align: 'center', render: (v: number) => v > 0 ? <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, background: T.greenBg, color: T.green }}>{v}</span> : <span style={{ color: T.textMuted }}>0</span> },
                    ]}
                  />
                </Card>
              </div>
            </>
          )}

          {/* ═══ ASSETS TAB ═══ */}
          {activeTab === 'assets' && (
            <>
              {/* Asset Summary Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '20px' }}>
                {ASSETS.map(asset => {
                  const visits = asset.id === 'whatsapp'
                    ? (data.top_clicks || []).filter(c => c.click_type === 'whatsapp').reduce((s, c) => s + c.clicks, 0)
                    : asset.paths.reduce((sum, p) => sum + (data.page_details?.find(pd => pd.page_path === p)?.views || 0), 0);
                  const forms = asset.id === 'whatsapp' ? 0
                    : asset.paths.reduce((sum, p) => sum + (data.page_details?.find(pd => pd.page_path === p)?.forms || 0), 0);
                  const conv = visits > 0 ? Math.round((forms / visits) * 100) : 0;
                  const topSource = asset.paths.length > 0
                    ? (data.source_pages || []).filter(sp => asset.paths.includes(sp.page_path)).sort((a, b) => b.visits - a.visits)[0]?.source
                    : null;

                  const isSelected = asset.paths.length > 0 && asset.paths.length === pageFilter.length && asset.paths.every(p => pageFilter.includes(p));
                  const isWhatsapp = asset.id === 'whatsapp';

                  return (
                    <div key={asset.id} onClick={() => {
                      if (asset.paths.length === 0 && !isWhatsapp) return;
                      // Toggle: click same asset again to deselect
                      if (isSelected) {
                        setPageFilter([]); setLeadsData(null); setAdvancedData(null);
                        const [sd, ed] = getDateParams();
                        fetchData(passwordRef.current, days, deviceFilter || undefined, utmSourceFilter || undefined, undefined, sd, ed);
                      } else {
                        setPageFilter(asset.paths); setLeadsData(null); setAdvancedData(null);
                        const [sd, ed] = getDateParams();
                        fetchData(passwordRef.current, days, deviceFilter || undefined, utmSourceFilter || undefined, asset.paths.length > 0 ? asset.paths : undefined, sd, ed);
                      }
                    }} style={{
                      background: isSelected ? 'rgba(124,58,237,0.06)' : T.cardBg,
                      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                      border: `2px solid ${isSelected ? T.purple : T.cardBorder}`,
                      borderRadius: '16px', padding: '20px', cursor: (asset.paths.length > 0 || isWhatsapp) ? 'pointer' : 'default',
                      boxShadow: isSelected ? `0 4px 20px rgba(124,58,237,0.15)` : T.cardShadow,
                      transition: 'all 0.2s', transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <span style={{ fontSize: '24px' }}>{asset.icon}</span>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: T.textPrimary }}>{asset.name}</span>
                      </div>
                      <div style={{ fontSize: '28px', fontWeight: 700, color: T.purple, marginBottom: '4px' }}>
                        {visits.toLocaleString('he-IL')}
                      </div>
                      <div style={{ fontSize: '12px', color: T.textSecondary, marginBottom: '8px' }}>
                        {asset.id === 'whatsapp' ? 'לחיצות' : 'צפיות'}
                      </div>
                      {forms > 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                          <span style={{ fontSize: '12px', color: T.green, fontWeight: 600 }}>{forms} טפסים</span>
                          <span style={{ fontSize: '12px', padding: '1px 6px', borderRadius: '4px', background: T.greenBg, color: T.green }}>{conv}%</span>
                        </div>
                      )}
                      {topSource && (
                        <div style={{ fontSize: '12px', color: T.textMuted }}>
                          מקור מוביל: <span style={{ color: T.textSecondary }}>{topSource}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Selected Asset Drill-Down */}
              {pageFilter.length > 0 && (() => {
                const selectedAsset = ASSETS.find(a => a.paths.length > 0 && a.paths.every(p => pageFilter.includes(p)));
                if (!selectedAsset) return null;
                const assetSources = (data.source_pages || []).sort((a, b) => b.visits - a.visits);
                const assetForms = data.form_details || [];
                const assetLandings = data.landing_pages || [];
                const totalPaid = assetLandings.reduce((s, l) => s + l.paid_entries, 0);
                const totalOrganic = assetLandings.reduce((s, l) => s + l.organic_entries, 0);
                return (
                  <div style={{
                    padding: '20px', borderRadius: '16px', marginBottom: '20px', direction: 'rtl',
                    background: 'rgba(124,58,237,0.04)', border: `1px solid ${T.purple}20`,
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '24px' }}>{selectedAsset.icon}</span>
                        <span style={{ fontSize: '18px', fontWeight: 700, color: T.textPrimary }}>{selectedAsset.name}</span>
                        <span style={{ fontSize: '13px', color: T.textMuted, fontFamily: 'monospace' }}>{pageFilter.join(', ')}</span>
                      </div>
                      <button onClick={() => { setPageFilter([]); setLeadsData(null); setAdvancedData(null); const [sd, ed] = getDateParams(); fetchData(passwordRef.current, days, deviceFilter || undefined, utmSourceFilter || undefined, undefined, sd, ed); }} style={{
                        padding: '6px 14px', borderRadius: '8px', border: `1px solid ${T.purple}30`, background: T.purpleBg,
                        color: T.purple, cursor: 'pointer', fontSize: '13px', fontWeight: 600, fontFamily: 'Heebo, sans-serif',
                      }}>✕ סגור</button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                      {totalPaid + totalOrganic > 0 && (
                        <div style={{ padding: '14px', borderRadius: '12px', background: T.cardBg, border: `1px solid ${T.cardBorder}`, textAlign: 'center' }}>
                          <div style={{ fontSize: '12px', color: T.textMuted, marginBottom: '6px' }}>ממומן / אורגני</div>
                          <div style={{ fontSize: '16px', fontWeight: 700 }}>
                            <span style={{ color: T.purple }}>{totalPaid}</span>
                            <span style={{ color: T.textMuted }}> / </span>
                            <span style={{ color: T.green }}>{totalOrganic}</span>
                          </div>
                        </div>
                      )}
                      {assetSources.length > 0 && (
                        <div style={{ padding: '14px', borderRadius: '12px', background: T.cardBg, border: `1px solid ${T.cardBorder}`, textAlign: 'center' }}>
                          <div style={{ fontSize: '12px', color: T.textMuted, marginBottom: '6px' }}>מקורות תנועה</div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: T.textPrimary }}>{assetSources.length} מקורות</div>
                          <div style={{ fontSize: '12px', color: T.textSecondary, marginTop: '4px' }}>מוביל: {assetSources[0].source}</div>
                        </div>
                      )}
                      {assetForms.length > 0 && (
                        <div style={{ padding: '14px', borderRadius: '12px', background: T.cardBg, border: `1px solid ${T.cardBorder}`, textAlign: 'center' }}>
                          <div style={{ fontSize: '12px', color: T.textMuted, marginBottom: '6px' }}>טפסים</div>
                          <div style={{ fontSize: '16px', fontWeight: 700, color: T.green }}>{assetForms.reduce((s, f) => s + f.submissions, 0)}</div>
                          <div style={{ fontSize: '12px', color: T.textSecondary, marginTop: '4px' }}>{assetForms.map(f => f.button_text).filter(Boolean).join(', ') || 'שליחות'}</div>
                        </div>
                      )}
                      {assetSources.length > 0 && (
                        <div style={{ padding: '14px', borderRadius: '12px', background: T.cardBg, border: `1px solid ${T.cardBorder}`, textAlign: 'center' }}>
                          <div style={{ fontSize: '12px', color: T.textMuted, marginBottom: '6px' }}>Top 3 מקורות</div>
                          {assetSources.slice(0, 3).map((s, i) => (
                            <div key={i} style={{ fontSize: '12px', color: i === 0 ? T.purple : T.textSecondary, fontWeight: i === 0 ? 600 : 400 }}>
                              {s.source} ({s.visits})
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p style={{ fontSize: '12px', color: T.green, marginTop: '12px', marginBottom: 0 }}>
                      כל הנתונים בדשבורד מסוננים לנכס הנבחר. לחץ על הנכס שוב או על "סגור" כדי לחזור לתצוגה הכללית.
                    </p>
                  </div>
                );
              })()}

              {/* WhatsApp Analytics */}
              {data.whatsapp_by_page && data.whatsapp_by_page.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <Card title="💬 לחיצות WhatsApp לפי דף" exportData={data.whatsapp_by_page} exportName="whatsapp-by-page">
                    <DataTable
                      rows={data.whatsapp_by_page}
                      columns={[
                        { key: 'page_path', label: 'דף', render: (v: string) => decodePath(v) },
                        { key: 'clicks', label: 'לחיצות', align: 'center', render: (v: number) => <span style={{ color: '#25D366', fontWeight: 600 }}>{v}</span> },
                        { key: 'unique_sessions', label: 'סשנים', align: 'center', render: (v: number) => <span style={{ color: T.textSecondary }}>{v}</span> },
                      ]}
                    />
                    <div style={{ marginTop: '12px', padding: '10px 14px', borderRadius: '10px', background: 'rgba(37,211,102,0.06)', border: '1px solid rgba(37,211,102,0.15)' }}>
                      <div style={{ fontSize: '13px', color: T.textSecondary, direction: 'rtl' }}>
                        סה"כ: <span style={{ color: '#25D366', fontWeight: 700, fontSize: '16px' }}>{data.whatsapp_clicks}</span> לחיצות וואטסאפ בתקופה
                        {data.prev_whatsapp_clicks > 0 && (
                          <span style={{ marginRight: '8px', fontSize: '12px', color: data.whatsapp_clicks >= data.prev_whatsapp_clicks ? T.green : T.red }}>
                            ({data.whatsapp_clicks >= data.prev_whatsapp_clicks ? '↑' : '↓'}{Math.abs(Math.round(((data.whatsapp_clicks - data.prev_whatsapp_clicks) / data.prev_whatsapp_clicks) * 100))}% מהתקופה הקודמת)
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>

                  {data.whatsapp_daily && data.whatsapp_daily.length > 1 && (
                    <Card title="💬 מגמת WhatsApp יומית">
                      <div style={{ direction: 'ltr', height: '200px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={data.whatsapp_daily} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
                            <defs>
                              <linearGradient id="whatsappGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#25D366" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#25D366" stopOpacity={0.02} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke={T.grid} />
                            <XAxis dataKey="day" tick={{ fill: T.axisText, fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={v => new Date(v).toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric' })} />
                            <YAxis allowDecimals={false} tick={{ fill: T.axisText, fontSize: 12 }} axisLine={false} tickLine={false} width={30} />
                            <Tooltip content={<ChartTooltip suffix="לחיצות" />} />
                            <Area type="monotone" dataKey="clicks" stroke="#25D366" strokeWidth={2} fill="url(#whatsappGrad)" dot={{ r: 3, fill: '#25D366', strokeWidth: 0 }} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </Card>
                  )}
                </div>
              )}

              {/* Page Categories Chart */}
              {data.page_categories && data.page_categories.length > 0 && (
                <Card title="קטגוריות תוכן" exportData={data.page_categories} exportName="page-categories">
                  <div style={{ direction: 'ltr', height: Math.max(data.page_categories.length * 40, 200) + 'px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data.page_categories.map(c => ({ ...c, name: CATEGORY_LABELS[c.category] || c.category }))} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={T.grid} horizontal={false} />
                        <XAxis type="number" tick={{ fill: T.axisText, fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis type="category" dataKey="name" width={120} tick={{ fill: T.textPrimary, fontSize: 12 }} axisLine={false} tickLine={false} />
                        <Tooltip content={<ChartTooltip suffix="צפיות" />} />
                        <Bar dataKey="views" radius={[0, 6, 6, 0]} maxBarSize={28}>
                          {data.page_categories.map((c, i) => <Cell key={i} fill={CATEGORY_COLORS[c.category] || T.textMuted} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              )}

              {/* Sources & UTM (moved from sources tab) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px' }}>
                <Card title="מקורות תנועה" exportData={data.referrers ?? undefined} exportName="referrers">
                  <DataTable
                    rows={data.referrers || []}
                    columns={[
                      { key: 'referrer', label: 'מקור', render: (v: string) => extractHostname(v) },
                      { key: 'visits', label: 'ביקורים', align: 'center', render: (v: number) => <span style={{ color: T.purple, fontWeight: 600 }}>{v}</span> },
                    ]}
                  />
                </Card>

                <Card title="קמפיינים (UTM)" exportData={data.utm_campaigns_v2 ?? undefined} exportName="utm-campaigns">
                  <DataTable
                    rows={data.utm_campaigns_v2 || []}
                    columns={[
                      { key: 'utm_source', label: 'Source' },
                      { key: 'utm_medium', label: 'Medium', align: 'center', render: (v: string) => {
                        const info = UTM_MEDIUM_LABELS[v];
                        return (
                          <span style={{
                            padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600,
                            background: info ? `${info.color}15` : 'rgba(0,0,0,0.04)',
                            color: info?.color || T.textSecondary,
                          }}>{info?.label || v}</span>
                        );
                      }},
                      { key: 'utm_campaign', label: 'Campaign' },
                      { key: 'visits', label: 'ביקורים', align: 'center', render: (v: number) => <span style={{ color: T.purple, fontWeight: 600 }}>{v}</span> },
                      { key: 'forms', label: 'טפסים', align: 'center', render: (v: number) => <span style={{ color: v > 0 ? T.green : T.textMuted }}>{v}</span> },
                      { key: 'conversion_rate', label: 'המרה %', align: 'center', render: (v: number) => (
                        <span style={{ color: v > 3 ? T.green : v > 0 ? T.orange : T.textMuted, fontWeight: 600 }}>{v}%</span>
                      )},
                    ]}
                  />
                </Card>
              </div>

              {/* Page Details Table */}
              <Card title="ביצועי דפים" exportData={filteredPageDetails} exportName="page-details" headerRight={
                <input value={tableSearch} onChange={e => setTableSearch(e.target.value)} placeholder="🔍 חיפוש דף..." dir="rtl" style={{
                  padding: '6px 12px', borderRadius: '6px', border: `1px solid ${tableSearch ? T.purple : T.cardBorder}`,
                  background: 'rgba(255,255,255,0.8)', color: T.textPrimary, fontSize: '12px', outline: 'none', width: '160px', fontFamily: 'Heebo, sans-serif',
                }} />
              }>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', direction: 'rtl' }}>
                    <thead>
                      <tr>
                        {[
                          { key: 'page_path', label: 'דף' },
                          { key: 'views', label: 'צפיות' },
                          { key: 'clicks', label: 'לחיצות' },
                          { key: 'forms', label: 'טפסים' },
                          { key: 'conv', label: 'המרה %' },
                          { key: 'unique_sources', label: 'מקורות' },
                        ].map(col => (
                          <th key={col.key} onClick={() => col.key !== 'conv' && toggleSort(col.key)} style={{
                            textAlign: col.key === 'page_path' ? 'right' : 'center',
                            padding: '10px 8px', borderBottom: `1px solid ${T.headerBorder}`,
                            color: pageSort.key === col.key ? T.purple : T.textSecondary,
                            fontWeight: 500, cursor: col.key !== 'conv' ? 'pointer' : 'default', fontSize: '12px',
                          }}>
                            {col.label} {pageSort.key === col.key ? (pageSort.dir === 'desc' ? '▼' : '▲') : ''}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPageDetails.map((row, i) => {
                        const conv = row.views > 0 ? Math.round((row.forms / row.views) * 1000) / 10 : 0;
                        return (
                          <tr key={i} onMouseEnter={e => (e.currentTarget.style.background = 'rgba(124,58,237,0.04)')} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                            <td style={{ textAlign: 'right', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.textPrimary, maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{decodePath(row.page_path)}</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.purple, fontWeight: 600 }}>{row.views}</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.textSecondary }}>{row.clicks}</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: row.forms > 0 ? T.green : T.textMuted, fontWeight: row.forms > 0 ? 600 : 400 }}>{row.forms}</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: conv > 0 ? T.green : T.textMuted }}>{conv}%</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.textSecondary }}>{row.unique_sources}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Card>
            </>
          )}


          {/* ═══ BEHAVIOR TAB ═══ */}
          {activeTab === 'behavior' && (
            <>
              {advancedLoading && !advancedData && (
                <div style={{ display: 'grid', gap: '16px' }}>
                  <Skeleton height={200} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <Skeleton height={180} /><Skeleton height={180} />
                  </div>
                </div>
              )}
              {advancedData && (
                <>
                  {/* ── Period Comparison KPIs ── */}
                  {advancedData.period_comparison && (() => {
                    const pc = advancedData.period_comparison;
                    return (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                        <KPI label="צפיות" value={pc.current_pageviews} trend={calcTrend(pc.current_pageviews, pc.prev_pageviews)} icon="👁" />
                        <KPI label="סשנים" value={pc.current_sessions} trend={calcTrend(pc.current_sessions, pc.prev_sessions)} color={T.cyan} icon="👤" />
                        <KPI label="טפסים" value={pc.current_forms} trend={calcTrend(pc.current_forms, pc.prev_forms)} color={T.green} icon="📝" />
                        <KPI label="לחיצות" value={pc.current_clicks} trend={calcTrend(pc.current_clicks, pc.prev_clicks)} color={T.orange} icon="🖱" />
                        {advancedData.session_depth_stats && (
                          <>
                            <KPI label="עומק ממוצע" displayValue={`${advancedData.session_depth_stats.avg_depth} דפים`} color={T.cyan} icon="📑" />
                            <KPI label="סשנים עמוקים (3+)" displayValue={`${advancedData.session_depth_stats.deep_sessions_pct}%`} color={T.green} icon="🎯" />
                          </>
                        )}
                      </div>
                    );
                  })()}

                  {/* ── Heatmap: DOW × Hour ── */}
                  <Card title="מפת חום — יום ושעה" headerRight={
                    <div style={{ display: 'flex', gap: '4px', background: T.cardBg, borderRadius: '6px', padding: '2px', border: `1px solid ${T.cardBorder}` }}>
                      {([['count', 'הכל'], ['pageviews', 'צפיות'], ['clicks', 'לחיצות'], ['forms', 'טפסים']] as const).map(([m, label]) => (
                        <button key={m} onClick={() => setHeatmapMetric(m)} style={{
                          padding: '3px 10px', borderRadius: '5px', fontSize: '12px', cursor: 'pointer', fontFamily: 'Heebo, sans-serif',
                          border: 'none', background: heatmapMetric === m ? T.purpleBg : 'transparent',
                          color: heatmapMetric === m ? T.purple : T.textMuted, fontWeight: heatmapMetric === m ? 600 : 400,
                        }}>{label}</button>
                      ))}
                    </div>
                  }>
                    <div style={{ direction: 'rtl' }}>
                      <p style={{ fontSize: '12px', color: T.textMuted, marginBottom: '16px' }}>
                        מתי הגולשים הכי פעילים? צבע כהה = פעילות גבוהה
                      </p>
                      {(() => {
                        const matrix: Record<string, number> = {};
                        let maxCount = 1;
                        (advancedData.heatmap || []).forEach(h => {
                          const key = `${h.dow}-${h.hour}`;
                          const val = h[heatmapMetric] ?? h.count;
                          matrix[key] = val;
                          if (val > maxCount) maxCount = val;
                        });
                        const hours = Array.from({ length: 24 }, (_, i) => i);
                        const days = [0, 1, 2, 3, 4, 5, 6];
                        return (
                          <div style={{ overflowX: 'auto' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: `60px repeat(24, 1fr)`, gap: '2px', minWidth: '700px' }}>
                              {/* Hour headers */}
                              <div />
                              {hours.map(h => (
                                <div key={h} style={{ fontSize: '12px', color: T.textMuted, textAlign: 'center', padding: '4px 0' }}>
                                  {h}
                                </div>
                              ))}
                              {/* Rows */}
                              {days.map(dow => (
                                <React.Fragment key={dow}>
                                  <div style={{ fontSize: '12px', color: T.textSecondary, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingRight: '8px' }}>
                                    {DOW_LABELS[dow]}
                                  </div>
                                  {hours.map(h => {
                                    const val = matrix[`${dow}-${h}`] || 0;
                                    const intensity = val / maxCount;
                                    const bg = val === 0
                                      ? 'rgba(0,0,0,0.02)'
                                      : `rgba(168,85,247,${0.1 + intensity * 0.7})`;
                                    return (
                                      <div key={`${dow}-${h}`} title={`${DOW_LABELS[dow]} ${h}:00 — ${val} אירועים`} style={{
                                        background: bg, borderRadius: '3px', aspectRatio: '1',
                                        minHeight: '20px', cursor: 'default', transition: 'transform 0.1s',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '9px', color: intensity > 0.5 ? '#fff' : 'transparent',
                                        fontWeight: 600,
                                      }}>
                                        {val > 0 ? val : ''}
                                      </div>
                                    );
                                  })}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </Card>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px' }}>
                    {/* ── Session Depth Distribution ── */}
                    <Card title="עומק סשן — כמה דפים לביקור">
                      <div style={{ direction: 'rtl' }}>
                        {advancedData.session_depth_stats && (
                          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                            <div style={{ padding: '10px 16px', borderRadius: '10px', background: T.purpleBg, border: `1px solid rgba(168,85,247,0.2)` }}>
                              <div style={{ fontSize: '12px', color: T.textSecondary }}>דף אחד בלבד</div>
                              <div style={{ fontSize: '22px', fontWeight: 700, color: T.red }}>{advancedData.session_depth_stats.single_page_pct}%</div>
                            </div>
                            <div style={{ padding: '10px 16px', borderRadius: '10px', background: T.greenBg, border: `1px solid rgba(16,185,129,0.2)` }}>
                              <div style={{ fontSize: '12px', color: T.textSecondary }}>3 דפים ומעלה</div>
                              <div style={{ fontSize: '22px', fontWeight: 700, color: T.green }}>{advancedData.session_depth_stats.deep_sessions_pct}%</div>
                            </div>
                          </div>
                        )}
                        <div style={{ height: '200px', direction: 'ltr' }}>
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={(advancedData.session_depth || []).map(d => ({
                              depth: d.depth === 10 ? '10+' : `${d.depth}`,
                              sessions: d.sessions,
                            }))}>
                              <CartesianGrid strokeDasharray="3 3" stroke={T.grid} />
                              <XAxis dataKey="depth" tick={{ fill: T.axisText, fontSize: 12 }} axisLine={false} />
                              <YAxis tick={{ fill: T.axisText, fontSize: 11 }} axisLine={false} />
                              <Tooltip content={<ChartTooltip suffix="סשנים" />} />
                              <Bar dataKey="sessions" radius={[4, 4, 0, 0]} maxBarSize={36}>
                                {(advancedData.session_depth || []).map((d, i) => (
                                  <Cell key={i} fill={d.depth === 1 ? 'rgba(239,68,68,0.5)' : d.depth >= 3 ? T.green : T.purple} />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Card>

                    {/* ── Engagement Segments ── */}
                    <Card title="מעורבות גולשים">
                      <div style={{ direction: 'rtl' }}>
                        {advancedData.engagement_segments && (() => {
                          const seg = advancedData.engagement_segments;
                          const total = seg.one_page_sessions + seg.two_page_sessions + seg.three_plus_sessions;
                          const segments = [
                            { label: 'דף אחד', value: seg.one_page_sessions, color: T.red, icon: '🔴' },
                            { label: '2 דפים', value: seg.two_page_sessions, color: T.orange, icon: '🟡' },
                            { label: '3+ דפים', value: seg.three_plus_sessions, color: T.green, icon: '🟢' },
                            { label: 'לחצו', value: seg.clicked_sessions, color: T.cyan, icon: '🖱' },
                            { label: 'מילאו טופס', value: seg.converted_sessions, color: T.purple, icon: '📝' },
                          ];
                          return (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                              {segments.map(s => {
                                const pct = total > 0 ? Math.round((s.value / total) * 100) : 0;
                                return (
                                  <div key={s.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                      <span style={{ fontSize: '13px', color: T.textSecondary }}>{s.icon} {s.label}</span>
                                      <span style={{ fontSize: '13px', color: s.color, fontWeight: 600 }}>
                                        {s.value.toLocaleString('he-IL')} ({pct}%)
                                      </span>
                                    </div>
                                    <div style={{ height: '8px', background: 'rgba(0,0,0,0.03)', borderRadius: '4px', overflow: 'hidden' }}>
                                      <div style={{ height: '100%', width: `${Math.max(pct, 1)}%`, background: s.color, borderRadius: '4px', transition: 'width 0.4s' }} />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })()}
                      </div>
                    </Card>
                  </div>

                  {/* ── DOW Weekly Pattern ── */}
                  <Card title="ביצועים לפי יום בשבוע">
                    <div style={{ direction: 'rtl' }}>
                      <p style={{ fontSize: '12px', color: T.textMuted, marginBottom: '16px' }}>
                        איזה ימים הכי אפקטיביים? ההשוואה מראה צפיות, לחיצות, טפסים ואחוז המרה
                      </p>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                          <thead>
                            <tr>
                              {['יום', 'צפיות', 'לחיצות', 'טפסים', 'סשנים', 'המרה'].map(h => (
                                <th key={h} style={{ padding: '10px 8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontWeight: 500, fontSize: '12px', textAlign: 'center' }}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {(advancedData.dow_weekly || []).map(row => {
                              const maxPv = Math.max(...(advancedData.dow_weekly || []).map(r => r.pageviews), 1);
                              const intensity = row.pageviews / maxPv;
                              return (
                                <tr key={row.dow} style={{ background: `rgba(168,85,247,${intensity * 0.08})` }}
                                  onMouseEnter={e => (e.currentTarget.style.background = `rgba(168,85,247,${Math.max(intensity * 0.12, 0.04)})`)}
                                  onMouseLeave={e => (e.currentTarget.style.background = `rgba(168,85,247,${intensity * 0.08})`)}>
                                  <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, fontWeight: 600, color: T.textPrimary, textAlign: 'center' }}>
                                    {DOW_LABELS[row.dow]}
                                  </td>
                                  <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center', color: T.purple, fontWeight: 600 }}>
                                    {row.pageviews.toLocaleString('he-IL')}
                                  </td>
                                  <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center', color: T.cyan }}>
                                    {row.clicks.toLocaleString('he-IL')}
                                  </td>
                                  <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center', color: T.green, fontWeight: 600 }}>
                                    {row.forms}
                                  </td>
                                  <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center', color: T.textSecondary }}>
                                    {row.sessions.toLocaleString('he-IL')}
                                  </td>
                                  <td style={{ padding: '10px 8px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center' }}>
                                    <span style={{
                                      padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600,
                                      background: row.conversion_rate > 2 ? T.greenBg : row.conversion_rate > 0 ? T.orangeBg : T.redBg,
                                      color: row.conversion_rate > 2 ? T.green : row.conversion_rate > 0 ? T.orange : T.red,
                                    }}>
                                      {row.conversion_rate}%
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Card>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px' }}>
                    {/* ── Top User Flows ── */}
                    <Card title="מסלולי גלישה נפוצים">
                      <div style={{ direction: 'rtl' }}>
                        <p style={{ fontSize: '12px', color: T.textMuted, marginBottom: '12px' }}>
                          מאיפה לאן: הדפים שגולשים עוברים ביניהם
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {(advancedData.top_flows || []).slice(0, 12).map((flow, i) => {
                            const maxFlow = Math.max(...(advancedData.top_flows || []).map(f => f.count), 1);
                            const pct = (flow.count / maxFlow) * 100;
                            return (
                              <div key={i} style={{ position: 'relative', padding: '10px 14px', borderRadius: '8px', background: 'rgba(0,0,0,0.02)', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', inset: 0, width: `${pct}%`, background: `linear-gradient(90deg, rgba(168,85,247,0.08), transparent)`, borderRadius: '8px' }} />
                                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                                  <span style={{ color: T.textPrimary, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {decodePath(flow.from_page)}
                                  </span>
                                  <span style={{ color: T.purple, fontSize: '14px', flexShrink: 0 }}>→</span>
                                  <span style={{ color: T.textPrimary, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
                                    {decodePath(flow.to_page)}
                                  </span>
                                  <span style={{ color: T.purple, fontWeight: 700, fontSize: '14px', flexShrink: 0, minWidth: '28px', textAlign: 'left' }}>
                                    {flow.count}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Card>

                    {/* ── Page Performance ── */}
                    <Card title="ביצועי דפים" exportData={advancedData.page_performance} exportName="page-performance">
                      <div style={{ direction: 'rtl', overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                          <thead>
                            <tr>
                              {['דף', 'צפיות', 'נטישה', 'המרה', 'יציאה'].map(h => (
                                <th key={h} style={{ padding: '8px 6px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontWeight: 500, fontSize: '12px', textAlign: h === 'דף' ? 'right' : 'center' }}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {(advancedData.page_performance || []).slice(0, 15).map((p, i) => (
                              <tr key={i}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.04)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                <td style={{ padding: '8px 6px', borderBottom: `1px solid ${T.rowBorder}`, maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: T.textPrimary }}>
                                  {decodePath(p.page_path)}
                                </td>
                                <td style={{ padding: '8px 6px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center', color: T.purple, fontWeight: 600 }}>
                                  {p.pageviews}
                                </td>
                                <td style={{ padding: '8px 6px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center' }}>
                                  <span style={{ color: p.bounce_rate > 70 ? T.red : p.bounce_rate > 50 ? T.orange : T.green, fontWeight: 600 }}>
                                    {p.bounce_rate}%
                                  </span>
                                </td>
                                <td style={{ padding: '8px 6px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center' }}>
                                  <span style={{
                                    padding: '2px 6px', borderRadius: '4px', fontSize: '12px', fontWeight: 600,
                                    background: p.conversion_rate > 0 ? T.greenBg : 'transparent',
                                    color: p.conversion_rate > 0 ? T.green : T.textMuted,
                                  }}>
                                    {p.conversion_rate}%
                                  </span>
                                </td>
                                <td style={{ padding: '8px 6px', borderBottom: `1px solid ${T.rowBorder}`, textAlign: 'center', color: T.textMuted }}>
                                  {p.exit_rate}%
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px' }}>
                    {/* ── Entry Pages ── */}
                    <Card title="דפי כניסה">
                      <div style={{ direction: 'rtl' }}>
                        <p style={{ fontSize: '12px', color: T.textMuted, marginBottom: '10px' }}>מאיפה גולשים מתחילים את הביקור</p>
                        {(advancedData.entry_pages || []).slice(0, 10).map((p, i) => {
                          const maxEntries = Math.max(...(advancedData.entry_pages || []).map(e => e.entries), 1);
                          return (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                              <span style={{ flex: 1, fontSize: '12px', color: T.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {decodePath(p.page_path)}
                              </span>
                              <div style={{ width: '80px', height: '6px', background: 'rgba(0,0,0,0.03)', borderRadius: '3px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: `${(p.entries / maxEntries) * 100}%`, background: T.green, borderRadius: '3px' }} />
                              </div>
                              <span style={{ fontSize: '12px', color: T.green, fontWeight: 600, minWidth: '30px', textAlign: 'left' }}>{p.entries}</span>
                            </div>
                          );
                        })}
                      </div>
                    </Card>

                    {/* ── Exit Pages ── */}
                    <Card title="דפי יציאה">
                      <div style={{ direction: 'rtl' }}>
                        <p style={{ fontSize: '12px', color: T.textMuted, marginBottom: '10px' }}>מאיפה גולשים עוזבים את האתר</p>
                        {(advancedData.exit_pages || []).slice(0, 10).map((p, i) => {
                          const maxExits = Math.max(...(advancedData.exit_pages || []).map(e => e.exits), 1);
                          return (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                              <span style={{ flex: 1, fontSize: '12px', color: T.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {decodePath(p.page_path)}
                              </span>
                              <div style={{ width: '80px', height: '6px', background: 'rgba(0,0,0,0.03)', borderRadius: '3px', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: `${(p.exits / maxExits) * 100}%`, background: T.red, borderRadius: '3px' }} />
                              </div>
                              <span style={{ fontSize: '12px', color: T.red, fontWeight: 600, minWidth: '30px', textAlign: 'left' }}>{p.exits}</span>
                            </div>
                          );
                        })}
                      </div>
                    </Card>
                  </div>

                  {/* ── Weekly Trend ── */}
                  {(advancedData.weekly_trend || []).length > 1 && (
                    <Card title="מגמה שבועית">
                      <div style={{ direction: 'rtl' }}>
                        <p style={{ fontSize: '12px', color: T.textMuted, marginBottom: '12px' }}>
                          ביצועים שבוע אחרי שבוע — זיהוי צמיחה או ירידה
                        </p>
                        <div style={{ height: '250px', direction: 'ltr' }}>
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={(advancedData.weekly_trend || []).map(w => ({
                              ...w,
                              week: new Date(w.week_start).toLocaleDateString('he-IL', { day: 'numeric', month: 'short' }),
                            }))}>
                              <CartesianGrid strokeDasharray="3 3" stroke={T.grid} />
                              <XAxis dataKey="week" tick={{ fill: T.axisText, fontSize: 11 }} axisLine={false} />
                              <YAxis tick={{ fill: T.axisText, fontSize: 11 }} axisLine={false} />
                              <Tooltip content={<ChartTooltip />} />
                              <Legend wrapperStyle={{ fontSize: '12px', color: T.textSecondary }} />
                              <Bar dataKey="pageviews" name="צפיות" fill={T.purple} radius={[4, 4, 0, 0]} maxBarSize={40} />
                              <Bar dataKey="clicks" name="לחיצות" fill={T.cyan} radius={[4, 4, 0, 0]} maxBarSize={40} />
                              <Bar dataKey="forms" name="טפסים" fill={T.green} radius={[4, 4, 0, 0]} maxBarSize={40} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* ── Device Breakdown ── */}
                  {(advancedData.device_breakdown || []).length > 0 && (
                    <Card title="התפלגות מכשירים">
                      <div style={{ direction: 'rtl', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                        {advancedData.device_breakdown.map((d, i) => {
                          const totalSessions = advancedData.device_breakdown.reduce((s, x) => s + x.sessions, 0);
                          const pct = totalSessions > 0 ? Math.round((d.sessions / totalSessions) * 100) : 0;
                          const icon = DEVICE_ICONS[d.device_type] || '🖥';
                          const label = DEVICE_LABELS[d.device_type] || d.device_type;
                          return (
                            <div key={i} style={{
                              padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.02)',
                              border: `1px solid ${T.cardBorder}`, textAlign: 'center',
                            }}>
                              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
                              <div style={{ fontSize: '14px', fontWeight: 600, color: T.textPrimary, marginBottom: '4px' }}>{label}</div>
                              <div style={{ fontSize: '24px', fontWeight: 700, color: T.purple }}>{pct}%</div>
                              <div style={{ fontSize: '12px', color: T.textSecondary, marginTop: '4px' }}>
                                {d.sessions.toLocaleString('he-IL')} סשנים
                              </div>
                              {d.conversion_rate > 0 && (
                                <div style={{ fontSize: '12px', color: T.green, marginTop: '4px', fontWeight: 600 }}>
                                  {d.conversion_rate}% המרה
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </Card>
                  )}

                  {/* ── Smart Insights ── */}
                  <Card title="תובנות חכמות">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', direction: 'rtl' }}>
                      {(() => {
                        const insights: { text: string; type: 'success' | 'warning' | 'info' }[] = [];
                        const seg = advancedData.engagement_segments;
                        const stats = advancedData.session_depth_stats;
                        const pc = advancedData.period_comparison;
                        const dowData = advancedData.dow_weekly || [];

                        // Session depth insight
                        if (stats && stats.single_page_pct > 70) {
                          insights.push({ text: `${stats.single_page_pct}% מהסשנים רואים דף אחד בלבד. שקול להוסיף קישורים פנימיים ו-CTA שמובילים לדפים נוספים`, type: 'warning' });
                        } else if (stats && stats.deep_sessions_pct > 30) {
                          insights.push({ text: `${stats.deep_sessions_pct}% מהגולשים צופים ב-3 דפים ומעלה. הגולשים מעורבים ומעוניינים בתוכן`, type: 'success' });
                        }

                        // Conversion trend
                        if (pc && pc.prev_forms > 0) {
                          const formChange = Math.round(((pc.current_forms - pc.prev_forms) / pc.prev_forms) * 100);
                          if (formChange > 20) {
                            insights.push({ text: `עלייה של ${formChange}% בטפסים לעומת התקופה הקודמת`, type: 'success' });
                          } else if (formChange < -20) {
                            insights.push({ text: `ירידה של ${Math.abs(formChange)}% בטפסים לעומת התקופה הקודמת. בדוק שינויים אחרונים בדפי הנחיתה`, type: 'warning' });
                          }
                        }

                        // Best day
                        if (dowData.length > 0) {
                          const bestDay = [...dowData].sort((a, b) => b.forms - a.forms)[0];
                          const bestTrafficDay = [...dowData].sort((a, b) => b.pageviews - a.pageviews)[0];
                          if (bestDay.forms > 0) {
                            insights.push({ text: `יום ${DOW_LABELS[bestDay.dow]} הוא הטוב ביותר להמרות (${bestDay.forms} טפסים). שקול לפרסם קמפיינים ביום זה`, type: 'info' });
                          }
                          if (bestTrafficDay.dow !== bestDay.dow) {
                            insights.push({ text: `יום ${DOW_LABELS[bestTrafficDay.dow]} מביא הכי הרבה תנועה (${bestTrafficDay.pageviews} צפיות) אבל לא הכי הרבה המרות`, type: 'info' });
                          }
                        }

                        // Entry vs exit mismatch
                        const topEntry = (advancedData.entry_pages || [])[0];
                        const topExit = (advancedData.exit_pages || [])[0];
                        if (topEntry && topExit && topEntry.page_path === topExit.page_path) {
                          insights.push({ text: `הדף ${decodePath(topEntry.page_path)} הוא גם דף הכניסה וגם דף היציאה הנפוץ ביותר. גולשים נוטשים לפני שהם ממשיכים. שפר את ה-CTA בדף`, type: 'warning' });
                        }

                        // Engagement
                        if (seg && seg.converted_sessions > 0) {
                          const total = seg.one_page_sessions + seg.two_page_sessions + seg.three_plus_sessions;
                          const convPct = total > 0 ? ((seg.converted_sessions / total) * 100).toFixed(1) : '0';
                          insights.push({ text: `${convPct}% מהסשנים הסתיימו בהמרה (מילוי טופס)`, type: seg.converted_sessions > 10 ? 'success' : 'info' });
                        }

                        // Top flow insight
                        const topFlow = (advancedData.top_flows || [])[0];
                        if (topFlow) {
                          insights.push({ text: `המסלול הנפוץ ביותר: ${decodePath(topFlow.from_page)} → ${decodePath(topFlow.to_page)} (${topFlow.count} פעמים)`, type: 'info' });
                        }

                        if (insights.length === 0) {
                          insights.push({ text: 'אין מספיק נתונים לתובנות. נסה טווח ימים ארוך יותר', type: 'info' });
                        }

                        const typeStyles = {
                          success: { bg: T.greenBg, border: 'rgba(16,185,129,0.2)', icon: '✅' },
                          warning: { bg: T.orangeBg, border: 'rgba(245,158,11,0.2)', icon: '⚠️' },
                          info: { bg: T.purpleBg, border: 'rgba(168,85,247,0.2)', icon: '💡' },
                        };

                        return insights.map((ins, i) => {
                          const style = typeStyles[ins.type];
                          return (
                            <div key={i} style={{
                              display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px',
                              background: style.bg, borderRadius: '10px', border: `1px solid ${style.border}`,
                            }}>
                              <span style={{ fontSize: '18px', flexShrink: 0 }}>{style.icon}</span>
                              <span style={{ fontSize: '13px', color: T.textPrimary, lineHeight: 1.7 }}>{ins.text}</span>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </Card>
                </>
              )}
            </>
          )}

          {/* ═══ CRO TAB ═══ */}
          {activeTab === 'cro' && (
            <>
              {croLoading && !croData && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                  {[1, 2, 3, 4].map(i => <Skeleton key={i} height={200} />)}
                </div>
              )}

              {croData && (
                <>
                  {/* Scroll Depth Summary */}
                  <Card title="עומק גלילה — כמה מהתוכן באמת נצפה">
                    <div style={{ direction: 'rtl' }}>
                      {croData.scroll_summary && croData.scroll_summary.length > 0 ? (
                        <>
                          <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                            {['25%', '50%', '75%', '100%'].map(depth => {
                              const item = (croData.scroll_summary || []).find((s: any) => s.depth === depth);
                              const count = item?.count || 0;
                              const total = (croData.scroll_summary || []).reduce((sum: number, s: any) => s.depth === '25%' ? s.count : sum, 0) || 1;
                              const pct = depth === '25%' ? 100 : Math.round((count / total) * 100);
                              const colors: Record<string, string> = { '25%': T.purple, '50%': T.cyan, '75%': T.orange, '100%': T.green };
                              return (
                                <div key={depth} style={{ flex: '1', minWidth: '120px', padding: '16px', borderRadius: '12px', background: T.cardBg, border: `1px solid ${T.cardBorder}`, textAlign: 'center' }}>
                                  <div style={{ fontSize: '28px', fontWeight: 700, color: colors[depth] }}>{pct}%</div>
                                  <div style={{ fontSize: '12px', color: T.textMuted, marginTop: '4px' }}>הגיעו ל-{depth}</div>
                                  <div style={{ fontSize: '12px', color: T.textMuted }}>({count} סשנים)</div>
                                </div>
                              );
                            })}
                          </div>
                          <p style={{ fontSize: '12px', color: T.textMuted }}>
                            אם פחות מ-50% מגיעים ל-75%, שקול לקצר תוכן או להעלות CTA למעלה
                          </p>
                        </>
                      ) : (
                        <p style={{ color: T.textMuted, fontSize: '14px', textAlign: 'center', padding: '30px 0' }}>
                          אין עדיין נתוני גלילה. הנתונים יתחילו להגיע אחרי פריסה לפרודקשן.
                        </p>
                      )}
                    </div>
                  </Card>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px' }}>
                    {/* Time on Page */}
                    <Card title="זמן שהייה בדף">
                      <div style={{ direction: 'rtl' }}>
                        {croData.time_on_page && croData.time_on_page.length > 0 ? (
                          <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                              <thead>
                                <tr>
                                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>דף</th>
                                  <th style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>ממוצע</th>
                                  <th style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>חציון</th>
                                  <th style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>סשנים</th>
                                </tr>
                              </thead>
                              <tbody>
                                {croData.time_on_page.slice(0, 15).map((row: any, i: number) => (
                                  <tr key={i} onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.04)')} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                    <td style={{ textAlign: 'right', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.textPrimary, maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{decodePath(row.page_path)}</td>
                                    <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.purple, fontWeight: 600 }}>{formatDuration(row.avg_seconds)}</td>
                                    <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.textSecondary }}>{formatDuration(row.median_seconds)}</td>
                                    <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.textMuted }}>{row.sessions}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <p style={{ color: T.textMuted, fontSize: '14px', textAlign: 'center', padding: '30px 0' }}>אין נתונים עדיין</p>
                        )}
                      </div>
                    </Card>

                    {/* Time Distribution */}
                    <Card title="התפלגות זמן שהייה">
                      <div style={{ direction: 'rtl' }}>
                        {croData.time_buckets && croData.time_buckets.length > 0 ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {croData.time_buckets.map((b: any, i: number) => {
                              const maxCount = Math.max(...croData.time_buckets.map((x: any) => x.count));
                              const pct = (b.count / maxCount) * 100;
                              return (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  <span style={{ fontSize: '12px', color: T.textSecondary, minWidth: '60px', textAlign: 'left' }}>{b.bucket}</span>
                                  <div style={{ flex: 1, height: '24px', background: T.cardBg, borderRadius: '6px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: `${pct}%`, background: `linear-gradient(90deg, ${T.purpleDark}, ${T.purple})`, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '8px' }}>
                                      <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>{b.count}</span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <p style={{ color: T.textMuted, fontSize: '14px', textAlign: 'center', padding: '30px 0' }}>אין נתונים עדיין</p>
                        )}
                      </div>
                    </Card>
                  </div>

                  {/* Form Engagement */}
                  <Card title="מעורבות טפסים — התחלה, שליחה, נטישה">
                    <div style={{ direction: 'rtl' }}>
                      {croData.form_engagement && croData.form_engagement.length > 0 ? (
                        <div style={{ overflowX: 'auto' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                            <thead>
                              <tr>
                                <th style={{ textAlign: 'right', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>טופס</th>
                                <th style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>התחלות</th>
                                <th style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>שליחות</th>
                                <th style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>נטישות</th>
                                <th style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>% נטישה</th>
                                <th style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>זמן לפני נטישה</th>
                              </tr>
                            </thead>
                            <tbody>
                              {croData.form_engagement.map((row: any, i: number) => {
                                const formLabel = FORM_SOURCE_LABELS[row.form_id] || row.form_id;
                                return (
                                  <tr key={i} onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.04)')} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                    <td style={{ textAlign: 'right', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.textPrimary }}>{formLabel}</td>
                                    <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.purple, fontWeight: 600 }}>{row.starts}</td>
                                    <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.green, fontWeight: 600 }}>{row.submits}</td>
                                    <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: row.abandons > 0 ? T.red : T.textMuted }}>{row.abandons}</td>
                                    <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}` }}>
                                      <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, background: row.abandon_rate > 50 ? T.redBg : row.abandon_rate > 20 ? T.orangeBg : T.greenBg, color: row.abandon_rate > 50 ? T.red : row.abandon_rate > 20 ? T.orange : T.green }}>
                                        {row.abandon_rate}%
                                      </span>
                                    </td>
                                    <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.textMuted }}>{row.avg_time_before_abandon > 0 ? `${row.avg_time_before_abandon}s` : '—'}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p style={{ color: T.textMuted, fontSize: '14px', textAlign: 'center', padding: '30px 0' }}>אין נתונים עדיין. נתוני מעורבות טפסים יתחילו להגיע אחרי פריסה.</p>
                      )}
                    </div>
                  </Card>

                  {/* Page Flows */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '16px' }}>
                    <Card title="זרימת ניווט — מאיפה לאיפה">
                      <div style={{ direction: 'rtl' }}>
                        {croData.page_flows && croData.page_flows.length > 0 ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {croData.page_flows.slice(0, 15).map((flow: any, i: number) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 10px', borderRadius: '8px', background: i < 3 ? T.purpleBg : 'transparent' }}>
                                <span style={{ fontSize: '12px', color: T.textPrimary, flex: 1, textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{decodePath(flow.from_page)}</span>
                                <span style={{ fontSize: '14px', color: T.purple }}>→</span>
                                <span style={{ fontSize: '12px', color: T.textPrimary, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{decodePath(flow.to_page)}</span>
                                <span style={{ fontSize: '12px', color: T.purple, fontWeight: 600, minWidth: '30px', textAlign: 'center' }}>{flow.transitions}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p style={{ color: T.textMuted, fontSize: '14px', textAlign: 'center', padding: '30px 0' }}>אין נתונים עדיין</p>
                        )}
                      </div>
                    </Card>

                    {/* Entry + Exit Pages */}
                    <Card title="דפי כניסה ויציאה">
                      <div style={{ direction: 'rtl' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                          <div>
                            <h4 style={{ fontSize: '13px', color: T.green, marginBottom: '8px', fontWeight: 600 }}>🚪 כניסה</h4>
                            {(croData.entry_pages || []).slice(0, 8).map((p: any, i: number) => (
                              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: `1px solid ${T.rowBorder}` }}>
                                <span style={{ fontSize: '12px', color: T.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '150px' }}>{decodePath(p.page_path)}</span>
                                <span style={{ fontSize: '12px', color: T.green, fontWeight: 600 }}>{p.entries}</span>
                              </div>
                            ))}
                          </div>
                          <div>
                            <h4 style={{ fontSize: '13px', color: T.red, marginBottom: '8px', fontWeight: 600 }}>🚶 יציאה</h4>
                            {(croData.exit_pages || []).slice(0, 8).map((p: any, i: number) => (
                              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: `1px solid ${T.rowBorder}` }}>
                                <span style={{ fontSize: '12px', color: T.textPrimary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '150px' }}>{decodePath(p.page_path)}</span>
                                <span style={{ fontSize: '12px', color: T.red, fontWeight: 600 }}>{p.exits}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Scroll Depth per Page */}
                  {croData.scroll_depth && croData.scroll_depth.length > 0 && (
                    <Card title="עומק גלילה לפי דף">
                      <div style={{ direction: 'rtl', overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                          <thead>
                            <tr>
                              <th style={{ textAlign: 'right', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>דף</th>
                              {['25%', '50%', '75%', '100%'].map(d => (
                                <th key={d} style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary, fontSize: '12px' }}>{d}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {(() => {
                              const pages: Record<string, Record<string, number>> = {};
                              (croData.scroll_depth || []).forEach((r: any) => {
                                if (!pages[r.page_path]) pages[r.page_path] = {};
                                pages[r.page_path][r.depth] = r.count;
                              });
                              return Object.entries(pages).sort((a, b) => ((b[1]['25%'] || 0) - (a[1]['25%'] || 0))).slice(0, 15).map(([path, depths], i) => (
                                <tr key={i} onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.04)')} onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                                  <td style={{ textAlign: 'right', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.textPrimary, maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{decodePath(path)}</td>
                                  {['25%', '50%', '75%', '100%'].map(d => (
                                    <td key={d} style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: depths[d] ? T.purple : T.textMuted, fontWeight: depths[d] ? 600 : 400 }}>{depths[d] || 0}</td>
                                  ))}
                                </tr>
                              ));
                            })()}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  )}
                </>
              )}

              {!croLoading && !croData && (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: T.textMuted }}>
                  <p style={{ fontSize: '16px', marginBottom: '8px' }}>טוען נתוני CRO...</p>
                </div>
              )}
            </>
          )}

          {/* ═══ CHANGELOG TAB ═══ */}
          {activeTab === 'changelog' && (
            <>
              {changelogLoading && !changelogData && (
                <div style={{ display: 'grid', gap: '12px' }}>
                  {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} height={80} />)}
                </div>
              )}

              {changelogData && changelogData.length > 0 ? (
                <Card title={`לוג שינויים`} headerRight={
                  <span style={{ fontSize: '12px', color: T.textMuted }}>{changelogData.length} מתוך {changelogTotal} רשומות</span>
                }>
                  <div style={{ direction: 'rtl' }}>
                    {/* Changelog Filters */}
                    {(() => {
                      const allPages = Array.from(new Set(changelogData.flatMap((e: any) => e.pages_affected || []))).sort();
                      const allTypes = Array.from(new Set(changelogData.map((e: any) => e.change_type))).sort();
                      return (
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                          <select
                            value={(window as any).__cl_page || ''}
                            onChange={(e) => { (window as any).__cl_page = e.target.value; setChangelogData([...changelogData]); }}
                            style={{ padding: '6px 10px', borderRadius: '8px', background: 'rgba(0,0,0,0.04)', border: `1px solid rgba(0,0,0,0.08)`, color: T.textSecondary, fontSize: '12px', direction: 'ltr' }}
                          >
                            <option value="">כל הדפים</option>
                            {allPages.map((p: string) => <option key={p} value={p}>{p}</option>)}
                          </select>
                          <select
                            value={(window as any).__cl_type || ''}
                            onChange={(e) => { (window as any).__cl_type = e.target.value; setChangelogData([...changelogData]); }}
                            style={{ padding: '6px 10px', borderRadius: '8px', background: 'rgba(0,0,0,0.04)', border: `1px solid rgba(0,0,0,0.08)`, color: T.textSecondary, fontSize: '12px' }}
                          >
                            <option value="">כל הסוגים</option>
                            {allTypes.map((t: string) => <option key={t} value={t}>{t}</option>)}
                          </select>
                          <select
                            value={(window as any).__cl_severity || ''}
                            onChange={(e) => { (window as any).__cl_severity = e.target.value; setChangelogData([...changelogData]); }}
                            style={{ padding: '6px 10px', borderRadius: '8px', background: 'rgba(0,0,0,0.04)', border: `1px solid rgba(0,0,0,0.08)`, color: T.textSecondary, fontSize: '12px' }}
                          >
                            <option value="">כל החומרות</option>
                            <option value="major">major</option>
                            <option value="minor">minor</option>
                            <option value="patch">patch</option>
                          </select>
                          {((window as any).__cl_page || (window as any).__cl_type || (window as any).__cl_severity) && (
                            <button
                              onClick={() => { (window as any).__cl_page = ''; (window as any).__cl_type = ''; (window as any).__cl_severity = ''; setChangelogData([...changelogData]); }}
                              style={{ padding: '6px 10px', borderRadius: '8px', background: 'rgba(168,85,247,0.15)', border: 'none', color: T.purple, fontSize: '12px', cursor: 'pointer' }}
                            >נקה פילטרים</button>
                          )}
                        </div>
                      );
                    })()}
                    {(() => {
                      const pf = (window as any).__cl_page || '';
                      const tf = (window as any).__cl_type || '';
                      const sf = (window as any).__cl_severity || '';
                      const filtered = changelogData.filter((entry: any) => {
                        if (pf && !(entry.pages_affected || []).includes(pf)) return false;
                        if (tf && entry.change_type !== tf) return false;
                        if (sf && entry.severity !== sf) return false;
                        return true;
                      });
                      if (filtered.length === 0) return (
                        <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                          <p style={{ fontSize: '14px', color: T.textMuted }}>אין שינויים תואמים לפילטרים שנבחרו</p>
                        </div>
                      );
                      const typeColors: Record<string, { bg: string; color: string; label: string }> = {
                        feat: { bg: T.greenBg, color: T.green, label: 'פיצ׳ר' },
                        fix: { bg: T.redBg, color: T.red, label: 'תיקון' },
                        content: { bg: T.cyanBg, color: T.cyan, label: 'תוכן' },
                        style: { bg: T.purpleBg, color: T.purple, label: 'עיצוב' },
                        copy: { bg: T.orangeBg, color: T.orange, label: 'קופי' },
                        refactor: { bg: 'rgba(0,0,0,0.04)', color: T.textSecondary, label: 'ריפקטור' },
                        build: { bg: 'rgba(0,0,0,0.04)', color: T.textMuted, label: 'build' },
                      };
                      // Group by date
                      let lastDateStr = '';
                      return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                      {(pf || tf || sf) && <p style={{ fontSize: '12px', color: T.textMuted, marginBottom: '12px' }}>מציג {filtered.length} מתוך {changelogData.length}</p>}
                      {filtered.map((entry: any, i: number) => {
                        const tc = typeColors[entry.change_type] || typeColors.build;
                        const date = new Date(entry.created_at);
                        const dateStr = date.toLocaleDateString('he-IL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
                        const showDateHeader = dateStr !== lastDateStr;
                        lastDateStr = dateStr;
                        return (
                          <div key={entry.id || i}>
                            {showDateHeader && (
                              <div style={{ padding: '12px 16px 8px', marginTop: i > 0 ? '8px' : '0', borderTop: i > 0 ? `1px solid ${T.rowBorder}` : 'none' }}>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: T.purple }}>{dateStr}</span>
                              </div>
                            )}
                            <div style={{
                              display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '12px 16px',
                              background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
                              borderRadius: '8px',
                            }}>
                              {/* Type badge */}
                              <div style={{ minWidth: '60px', paddingTop: '2px' }}>
                                <span style={{ display: 'inline-block', padding: '3px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, background: tc.bg, color: tc.color, textAlign: 'center', width: '100%' }}>{tc.label}</span>
                              </div>
                              {/* Content */}
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                                  <span style={{ fontSize: '14px', color: T.textPrimary, fontWeight: 500 }}>{entry.title}</span>
                                  {entry.severity === 'major' && <span style={{ padding: '1px 6px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, background: T.orangeBg, color: T.orange }}>major</span>}
                                </div>
                                {entry.description && <p style={{ margin: '2px 0 0', fontSize: '13px', color: T.textSecondary, lineHeight: '1.5' }}>{entry.description}</p>}
                                {entry.pages_affected && entry.pages_affected.length > 0 && (
                                  <div style={{ display: 'flex', gap: '4px', marginTop: '6px', flexWrap: 'wrap' }}>
                                    {entry.pages_affected.map((p: string, j: number) => (
                                      <span key={j} style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '12px', background: 'rgba(0,0,0,0.03)', color: T.textMuted, border: `1px solid ${T.rowBorder}` }}>{p}</span>
                                    ))}
                                  </div>
                                )}
                              </div>
                              {/* Time + commit */}
                              <div style={{ minWidth: '70px', textAlign: 'left', paddingTop: '2px' }}>
                                <span style={{ fontSize: '12px', color: T.textMuted }}>{date.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}</span>
                                {entry.commit_hash && <div style={{ fontSize: '12px', color: T.textMuted, fontFamily: 'monospace', marginTop: '2px' }}>{entry.commit_hash.substring(0, 8)}</div>}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                      );
                    })()}
                    {changelogData.length < changelogTotal && (
                      <div style={{ textAlign: 'center', marginTop: '16px' }}>
                        <button
                          onClick={() => fetchChangelog(changelogData.length, true)}
                          disabled={changelogLoading}
                          style={{
                            padding: '10px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: 500,
                            background: T.purpleBg, border: `1px solid ${T.purple}40`, color: T.purple,
                            cursor: changelogLoading ? 'not-allowed' : 'pointer', opacity: changelogLoading ? 0.5 : 1,
                          }}
                        >
                          {changelogLoading ? 'טוען...' : `טען עוד (${changelogTotal - changelogData.length} נותרו)`}
                        </button>
                      </div>
                    )}
                  </div>
                </Card>
              ) : !changelogLoading ? (
                <Card title="לוג שינויים">
                  <div style={{ textAlign: 'center', padding: '40px 20px', direction: 'rtl' }}>
                    <p style={{ fontSize: '40px', marginBottom: '12px' }}>📝</p>
                    <p style={{ fontSize: '16px', color: T.textPrimary, marginBottom: '8px' }}>עדיין אין שינויים מתועדים</p>
                    <p style={{ fontSize: '13px', color: T.textMuted, lineHeight: '1.6' }}>
                      שינויים באתר מתועדים כאן אוטומטית אחרי כל deploy.
                      <br />כל שינוי כולל תאריך, סוג, תיאור והדפים שהושפעו.
                    </p>
                  </div>
                </Card>
              ) : null}
            </>
          )}

          {/* ═══ INSIGHTS TAB ═══ */}
          {activeTab === 'insights' && (
            <>
              {/* Anomalies */}
              {anomalies.length > 0 && (
                <Card title="התראות חריגה">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', direction: 'rtl' }}>
                    {anomalies.map((a, i) => (
                      <div key={i} style={{
                        padding: '12px', borderRadius: '10px',
                        background: a.type === 'spike' ? T.greenBg : T.redBg,
                        border: `1px solid ${a.type === 'spike' ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}`,
                        display: 'flex', alignItems: 'center', gap: '10px',
                      }}>
                        <span style={{ fontSize: '20px' }}>{a.type === 'spike' ? '📈' : '📉'}</span>
                        <div>
                          <div style={{ fontSize: '13px', color: T.textPrimary, fontWeight: 600 }}>
                            {a.type === 'spike' ? 'ספייק בתנועה' : 'ירידה חדה'} — {formatDate(a.day)}
                          </div>
                          <div style={{ fontSize: '12px', color: T.textSecondary }}>
                            {a.views} צפיות (ממוצע: {a.mean})
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Marketing Insights Engine */}
              {marketingInsights.length > 0 && (
                <Card title={`המלצות שיווק (${marketingInsights.length})`} headerRight={
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {(['critical', 'high', 'medium', 'low'] as const).map(p => {
                      const count = marketingInsights.filter(i => i.priority === p).length;
                      if (count === 0) return null;
                      const colors = { critical: '#ef4444', high: '#f59e0b', medium: '#3b82f6', low: '#10b981' };
                      const labels = { critical: 'קריטי', high: 'גבוה', medium: 'בינוני', low: 'נמוך' };
                      return <span key={p} style={{ fontSize: '12px', padding: '2px 8px', borderRadius: '9999px', background: `${colors[p]}18`, color: colors[p], fontWeight: 600 }}>{count} {labels[p]}</span>;
                    })}
                  </div>
                }>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', direction: 'rtl' }}>
                    {marketingInsights.map((insight, i) => {
                      const priorityConfig = {
                        critical: { bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.15)', badge: '#ef4444', badgeLabel: 'קריטי' },
                        high: { bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.15)', badge: '#f59e0b', badgeLabel: 'גבוה' },
                        medium: { bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.15)', badge: '#3b82f6', badgeLabel: 'בינוני' },
                        low: { bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.15)', badge: '#10b981', badgeLabel: 'נמוך' },
                      };
                      const categoryIcons: Record<string, string> = {
                        conversion: '🎯', campaigns: '📢', content: '📄', technical: '⚙️', timing: '⏰', opportunity: '💎', journeys: '🛤️',
                      };
                      const pc = priorityConfig[insight.priority];
                      return (
                        <div key={i} style={{
                          padding: '18px', borderRadius: '14px', background: pc.bg,
                          border: `1px solid ${pc.border}`,
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '20px' }}>{categoryIcons[insight.category] || '📊'}</span>
                            <span style={{ fontSize: '15px', fontWeight: 700, color: T.textPrimary, flex: 1 }}>{insight.title}</span>
                            {insight.metric && (
                              <span style={{ fontSize: '12px', padding: '3px 10px', borderRadius: '8px', background: 'rgba(0,0,0,0.04)', color: T.textSecondary, fontWeight: 600, fontFamily: 'monospace' }}>{insight.metric}</span>
                            )}
                            <span style={{
                              fontSize: '12px', fontWeight: 700, padding: '3px 10px', borderRadius: '9999px',
                              background: pc.badge, color: '#fff',
                            }}>{pc.badgeLabel}</span>
                          </div>
                          <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.8, margin: '0 0 12px 0' }}>
                            {insight.body}
                          </p>
                          <div style={{
                            display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px 14px',
                            background: 'rgba(124,58,237,0.08)', borderRadius: '10px', border: '1px solid rgba(124,58,237,0.12)',
                          }}>
                            <span style={{ fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>💡</span>
                            <span style={{ fontSize: '13px', color: T.purple, fontWeight: 500, lineHeight: 1.6 }}>{insight.action}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              )}
              {marketingInsights.length === 0 && data && (
                <Card title="המלצות שיווק">
                  <div style={{ textAlign: 'center', padding: '30px 0', direction: 'rtl' }}>
                    <span style={{ fontSize: '40px', display: 'block', marginBottom: '12px' }}>✅</span>
                    <p style={{ fontSize: '14px', color: T.textSecondary }}>אין ממצאים מיוחדים כרגע. הכל נראה תקין.</p>
                    <p style={{ fontSize: '12px', color: T.textMuted, marginTop: '8px' }}>נסה טווח ימים ארוך יותר לקבלת המלצות מבוססות דאטה</p>
                  </div>
                </Card>
              )}

              {/* Goal Tracking */}
              <Card title="מעקב יעדים חודשיים">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', direction: 'rtl' }}>
                  {[
                    { label: 'צפיות', current: data.total_pageviews, target: 5000, color: T.purple, icon: '👁' },
                    { label: 'טפסים', current: data.total_forms, target: 50, color: T.green, icon: '📝' },
                    { label: 'קליקי WhatsApp', current: data.whatsapp_clicks, target: 100, color: '#25D366', icon: '💬' },
                  ].map(goal => {
                    const pct = Math.min(Math.round((goal.current / goal.target) * 100), 100);
                    return (
                      <div key={goal.label}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontSize: '13px', color: T.textSecondary }}>{goal.icon} {goal.label}</span>
                          <span style={{ fontSize: '13px', color: goal.color, fontWeight: 600 }}>
                            {goal.current.toLocaleString('he-IL')} / {goal.target.toLocaleString('he-IL')} ({pct}%)
                          </span>
                        </div>
                        <div style={{ height: '10px', background: 'rgba(0,0,0,0.04)', borderRadius: '5px', overflow: 'hidden' }}>
                          <div style={{
                            height: '100%', width: `${pct}%`, background: goal.color, borderRadius: '5px',
                            transition: 'width 0.6s ease',
                          }} />
                        </div>
                      </div>
                    );
                  })}
                  <p style={{ fontSize: '12px', color: T.textMuted, marginTop: '4px' }}>* יעדים מבוססים על טווח הימים הנבחר ({customStart ? `${customStart} — ${customEnd}` : `${days} ימים`})</p>
                </div>
              </Card>

              {/* AI Insights (Gemini) */}
              <Card title="תובנות AI (Gemini)">
                <div style={{ direction: 'rtl' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <p style={{ fontSize: '13px', color: T.textSecondary, margin: 0 }}>
                      ניתוח אוטומטי של הנתונים באמצעות AI — קמפיינים, המרות, טרנדים והזדמנויות
                    </p>
                    <button
                      onClick={() => fetchAiInsights(passwordRef.current)}
                      disabled={aiLoading}
                      style={{
                        padding: '8px 20px', borderRadius: '8px', border: 'none', cursor: aiLoading ? 'not-allowed' : 'pointer',
                        background: aiLoading ? 'rgba(168,85,247,0.3)' : T.purple, color: '#fff', fontSize: '13px', fontWeight: 600,
                        flexShrink: 0, marginRight: '12px', opacity: aiLoading ? 0.7 : 1,
                      }}
                    >
                      {aiLoading ? 'מנתח...' : aiInsights ? 'נתח מחדש' : 'נתח עם AI'}
                    </button>
                  </div>

                  {aiLoading && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[1, 2, 3].map(i => (
                        <div key={i} style={{
                          padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.02)',
                          border: '1px solid rgba(0,0,0,0.04)', animation: 'pulse 1.5s ease-in-out infinite',
                        }}>
                          <div style={{ height: '14px', width: '40%', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginBottom: '10px' }} />
                          <div style={{ height: '12px', width: '90%', background: 'rgba(0,0,0,0.04)', borderRadius: '4px', marginBottom: '6px' }} />
                          <div style={{ height: '12px', width: '70%', background: 'rgba(0,0,0,0.04)', borderRadius: '4px' }} />
                        </div>
                      ))}
                    </div>
                  )}

                  {aiInsights && !aiLoading && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {aiInsights.map((insight, i) => {
                        const priorityColors: Record<string, { bg: string; border: string; badge: string }> = {
                          high: { bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)', badge: '#ef4444' },
                          medium: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', badge: '#f59e0b' },
                          low: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', badge: '#10b981' },
                        };
                        const categoryIcons: Record<string, string> = {
                          campaigns: '📢', conversion: '🎯', timing: '⏰', technical: '⚙️', opportunity: '💎',
                        };
                        const pc = priorityColors[insight.priority] || priorityColors.medium;
                        return (
                          <div key={i} style={{
                            padding: '16px', borderRadius: '12px', background: pc.bg,
                            border: `1px solid ${pc.border}`,
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                              <span style={{ fontSize: '18px' }}>{categoryIcons[insight.category] || '📊'}</span>
                              <span style={{ fontSize: '14px', fontWeight: 700, color: T.textPrimary, flex: 1 }}>{insight.title}</span>
                              <span style={{
                                fontSize: '12px', fontWeight: 700, padding: '2px 8px', borderRadius: '9999px',
                                background: pc.badge, color: '#fff', textTransform: 'uppercase',
                              }}>
                                {insight.priority === 'high' ? 'גבוה' : insight.priority === 'medium' ? 'בינוני' : 'נמוך'}
                              </span>
                            </div>
                            <p style={{ fontSize: '13px', color: T.textSecondary, lineHeight: 1.7, margin: '0 0 10px 0' }}>
                              {insight.body}
                            </p>
                            <div style={{
                              display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px',
                              background: 'rgba(168,85,247,0.1)', borderRadius: '8px', border: '1px solid rgba(168,85,247,0.15)',
                            }}>
                              <span style={{ fontSize: '13px' }}>💡</span>
                              <span style={{ fontSize: '12px', color: '#c084fc', fontWeight: 500 }}>{insight.action}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {!aiInsights && !aiLoading && (
                    <p style={{ fontSize: '13px', color: T.textMuted, textAlign: 'center', padding: '20px 0' }}>
                      לחץ על "נתח עם AI" לקבלת תובנות שיווקיות מבוססות נתונים
                    </p>
                  )}
                </div>
              </Card>

              {/* Top Pages */}
              {topPagesChart.length > 0 && (
                <Card title="דפים מובילים (Top 10)">
                  <div style={{ direction: 'ltr', height: Math.max(topPagesChart.length * 36, 200) + 'px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topPagesChart} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={T.grid} horizontal={false} />
                        <XAxis type="number" tick={{ fill: T.axisText, fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis type="category" dataKey="name" width={160} tick={{ fill: T.textPrimary, fontSize: 11 }} axisLine={false} tickLine={false}
                          tickFormatter={(v: string) => v.length > 22 ? v.substring(0, 22) + '…' : v} />
                        <Tooltip content={<ChartTooltip suffix="צפיות" />} />
                        <Bar dataKey="views" radius={[0, 4, 4, 0]} maxBarSize={24}>
                          {topPagesChart.map((_, i) => <Cell key={i} fill={i === topPagesChart.length - 1 ? T.purple : 'rgba(168,85,247,0.35)'} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
