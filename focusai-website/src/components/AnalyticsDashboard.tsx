import { useState, useCallback, useMemo } from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, PieChart, Pie, Cell,
  BarChart, Bar,
} from 'recharts';

/* ─── Constants ─── */
const SUPABASE_URL = 'https://ueewnvfydrlhyxmbgsus.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZXdudmZ5ZHJsaHl4bWJnc3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDI4ODcsImV4cCI6MjA4NjQxODg4N30.4EjvZekhleRdufJPxBEgXRkUbhGbG5cjjjBFUa20mjQ';

const T = {
  bg: '#0a0a0f',
  cardBg: 'rgba(255,255,255,0.03)',
  cardBorder: 'rgba(255,255,255,0.08)',
  cardShadow: '0 8px 32px rgba(0,0,0,0.3)',
  headerBg: 'rgba(255,255,255,0.02)',
  headerBorder: 'rgba(255,255,255,0.06)',
  grid: 'rgba(255,255,255,0.04)',
  axisText: '#6a6a80',
  purple: '#a855f7',
  purpleLight: '#c084fc',
  purpleDark: '#7c3aed',
  purpleGlow: 'rgba(168,85,247,0.6)',
  purpleBg: 'rgba(168,85,247,0.15)',
  green: '#10b981',
  greenBg: 'rgba(16,185,129,0.15)',
  red: '#ef4444',
  cyan: '#06b6d4',
  textPrimary: '#f5f5fa',
  textSecondary: '#9090a8',
  textMuted: '#6a6a80',
  tooltipBg: 'rgba(15,15,25,0.95)',
  tooltipBorder: 'rgba(168,85,247,0.3)',
  rowBorder: 'rgba(255,255,255,0.04)',
} as const;

const DEVICE_COLORS = [T.purple, T.purpleLight, T.purpleDark];
const DEVICE_LABELS: Record<string, string> = { desktop: 'מחשב', mobile: 'נייד', tablet: 'טאבלט' };
const DEVICE_ICONS: Record<string, string> = { desktop: '💻', mobile: '📱', tablet: '📟' };

const TABS = [
  { id: 'overview', label: 'סקירה כללית', icon: '📊' },
  { id: 'pages', label: 'דפים', icon: '📄' },
  { id: 'sources', label: 'מקורות תנועה', icon: '🔗' },
  { id: 'conversions', label: 'המרות', icon: '✅' },
  { id: 'clicks', label: 'לחיצות', icon: '👆' },
] as const;

/* ─── Types ─── */
interface AnalyticsData {
  total_pageviews: number;
  total_clicks: number;
  total_forms: number;
  prev_total_pageviews: number;
  prev_total_clicks: number;
  prev_total_forms: number;
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
}

/* ─── Helpers ─── */
function decodePath(p: string): string {
  try { return decodeURIComponent(p); } catch { return p; }
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
      <div style={{ fontSize: '16px', fontWeight: 700, color: T.purple }}>
        {payload[0].value?.toLocaleString('he-IL')} {suffix || ''}
      </div>
    </div>
  );
}

/* ─── Sub-Components ─── */
function KPI({ label, value, trend, sparkData }: {
  label: string; value: number;
  trend?: { value: number; direction: 'up' | 'down' | 'flat' };
  sparkData?: { day: string; views: number }[];
}) {
  const gradId = `spark-${label.replace(/\s/g, '')}`;
  return (
    <div style={{
      background: T.cardBg, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${T.cardBorder}`, borderRadius: '16px', padding: '24px',
      boxShadow: T.cardShadow,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: T.purple, boxShadow: `0 0 6px ${T.purpleGlow}` }} />
        <span style={{ fontSize: '13px', color: T.textSecondary }}>{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
        <span style={{ fontSize: '36px', fontWeight: 700, color: T.purple }}>{value.toLocaleString('he-IL')}</span>
        {trend && trend.direction !== 'flat' && (
          <span style={{
            fontSize: '14px', fontWeight: 600,
            color: trend.direction === 'up' ? T.green : T.red,
            display: 'flex', alignItems: 'center', gap: '2px',
          }}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}%
          </span>
        )}
        {trend && trend.direction === 'flat' && (
          <span style={{ fontSize: '14px', color: T.textMuted }}>→</span>
        )}
      </div>
      {sparkData && sparkData.length > 1 && (
        <div style={{ height: '40px', marginTop: '12px', direction: 'ltr' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkData}>
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={T.purple} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={T.purple} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="views" stroke={T.purple} fill={`url(#${gradId})`} strokeWidth={1.5} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

function Card({ title, children, headerRight }: { title: string; children: React.ReactNode; headerRight?: React.ReactNode }) {
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
        {headerRight}
      </div>
      <div style={{ padding: '20px' }}>{children}</div>
    </div>
  );
}

function DataTable({ rows, columns }: {
  rows: any[];
  columns: { key: string; label: string; align?: string; render?: (v: any, row: any) => React.ReactNode }[];
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
                  borderBottom: `1px solid ${T.rowBorder}`, color: '#ccc',
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

/* ─── Main Component ─── */
export default function AnalyticsDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [days, setDays] = useState(30);
  const [activeTab, setActiveTab] = useState('overview');
  const [pageFilter, setPageFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState<'all' | 'paid' | 'organic'>('all');
  const [pageSort, setPageSort] = useState<{ key: string; dir: 'asc' | 'desc' }>({ key: 'views', dir: 'desc' });
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = useCallback(async (pw: string, d: number) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_analytics`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({ p_password: pw, p_days: d }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Unauthorized');
      }
      const result = await res.json();
      setData(result);
      setIsAuthed(true);
      setLastUpdated(new Date());
    } catch (e: any) {
      const msg = e.message || 'Error';
      setError(msg === 'Failed to fetch' ? 'שגיאת חיבור — נסה לרענן את הדף או לבדוק חוסם פרסומות' : msg);
      setIsAuthed(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => { e.preventDefault(); fetchData(password, days); };
  const changeDays = (d: number) => { setDays(d); fetchData(password, d); };
  const toggleSort = (key: string) => setPageSort(prev => ({ key, dir: prev.key === key && prev.dir === 'desc' ? 'asc' : 'desc' }));

  /* Derived data */
  const allPages = useMemo(() => {
    if (!data?.page_details) return [];
    return data.page_details.map(p => p.page_path).sort();
  }, [data]);

  const filteredPageDetails = useMemo(() => {
    if (!data?.page_details) return [];
    const arr = pageFilter ? data.page_details.filter(r => r.page_path === pageFilter) : data.page_details;
    return [...arr].sort((a: any, b: any) => {
      const av = a[pageSort.key], bv = b[pageSort.key];
      const cmp = typeof av === 'number' ? av - bv : String(av).localeCompare(String(bv));
      return pageSort.dir === 'desc' ? -cmp : cmp;
    });
  }, [data, pageFilter, pageSort]);

  const filteredSourcePages = useMemo(() => {
    if (!data?.source_pages) return [];
    let arr = pageFilter ? data.source_pages.filter(r => r.page_path === pageFilter) : data.source_pages;
    if (sourceFilter === 'paid') arr = arr.filter(r => r.utm_medium === 'paid');
    else if (sourceFilter === 'organic') arr = arr.filter(r => !r.utm_medium || r.utm_medium !== 'paid');
    return arr;
  }, [data, pageFilter, sourceFilter]);

  const filteredFormDetails = useMemo(() => {
    if (!data?.form_details) return [];
    return pageFilter ? data.form_details.filter(r => r.page_path === pageFilter) : data.form_details;
  }, [data, pageFilter]);

  const filteredLandingPages = useMemo(() => {
    if (!data?.landing_pages) return [];
    return pageFilter ? data.landing_pages.filter(r => r.page_path === pageFilter) : data.landing_pages;
  }, [data, pageFilter]);

  const trends = useMemo(() => {
    if (!data) return { views: undefined, clicks: undefined, forms: undefined };
    return {
      views: calcTrend(data.total_pageviews, data.prev_total_pageviews),
      clicks: calcTrend(data.total_clicks, data.prev_total_clicks),
      forms: calcTrend(data.total_forms, data.prev_total_forms),
    };
  }, [data]);

  /* Top pages for bar chart */
  const topPagesChart = useMemo(() => {
    if (!data?.top_pages) return [];
    return data.top_pages.slice(0, 10).map(p => ({ ...p, name: decodePath(p.page_path) })).reverse();
  }, [data]);

  /* ─── Login Screen ─── */
  if (!isAuthed) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.bg }}>
        <form onSubmit={handleLogin} style={{
          background: T.cardBg, border: `1px solid ${T.cardBorder}`, borderRadius: '16px',
          padding: '40px', backdropFilter: 'blur(20px)', width: '100%', maxWidth: '380px',
          textAlign: 'center', boxShadow: T.cardShadow,
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>📊</div>
          <h2 style={{ color: T.textPrimary, fontSize: '20px', marginBottom: '24px', fontFamily: 'Heebo, sans-serif' }}>Focus AI Analytics</h2>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="סיסמה" dir="rtl"
            style={{
              width: '100%', padding: '12px 16px', borderRadius: '10px', border: `1px solid rgba(255,255,255,0.1)`,
              background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '16px', marginBottom: '16px',
              boxSizing: 'border-box', outline: 'none', fontFamily: 'Heebo, sans-serif',
            }}
          />
          <button type="submit" disabled={loading} style={{
            width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: T.purple,
            color: '#fff', fontSize: '16px', cursor: 'pointer', fontFamily: 'Heebo, sans-serif', fontWeight: 600,
          }}>{loading ? '...' : 'כניסה'}</button>
          {error && <p style={{ color: T.red, marginTop: '12px', fontSize: '14px' }}>{error}</p>}
        </form>
      </div>
    );
  }

  /* ─── Dashboard ─── */
  return (
    <div style={{ minHeight: '100vh', background: T.bg, color: T.textPrimary, padding: '24px', fontFamily: 'Heebo, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 style={{ fontSize: '22px', margin: 0, fontWeight: 700 }}>📊 Focus AI Analytics</h1>
          {lastUpdated && (
            <span style={{ fontSize: '11px', color: T.textMuted }}>
              עדכון: {lastUpdated.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Page Filter */}
          <div style={{ position: 'relative' }}>
            <select value={pageFilter} onChange={e => setPageFilter(e.target.value)} dir="rtl" style={{
              padding: '8px 12px', borderRadius: '8px', border: `1px solid ${pageFilter ? T.purple : T.cardBorder}`,
              background: pageFilter ? T.purpleBg : T.cardBg, color: pageFilter ? T.purple : T.textSecondary,
              fontSize: '13px', cursor: 'pointer', outline: 'none', maxWidth: '200px',
              fontFamily: 'Heebo, sans-serif',
            }}>
              <option value="">כל הדפים</option>
              {allPages.map(p => <option key={p} value={p}>{decodePath(p)}</option>)}
            </select>
          </div>
          {/* Refresh */}
          <button onClick={() => fetchData(password, days)} disabled={loading} style={{
            padding: '8px 12px', borderRadius: '8px', border: `1px solid ${T.cardBorder}`,
            background: T.cardBg, color: loading ? T.textMuted : T.green, cursor: loading ? 'default' : 'pointer', fontSize: '14px',
          }}>{loading ? '⏳' : '🔄'}</button>
          {/* Day Selector */}
          {[7, 14, 30, 90].map(d => (
            <button key={d} onClick={() => changeDays(d)} style={{
              padding: '8px 16px', borderRadius: '8px',
              border: days === d ? `1px solid ${T.purple}` : `1px solid ${T.cardBorder}`,
              background: days === d ? T.purpleBg : T.cardBg,
              color: days === d ? T.purple : T.textSecondary, cursor: 'pointer', fontSize: '14px', fontWeight: days === d ? 600 : 400,
            }}>{d} ימים</button>
          ))}
        </div>
      </div>

      {/* Tab Bar */}
      <div style={{
        display: 'flex', gap: '6px', marginBottom: '24px', overflowX: 'auto', direction: 'rtl',
        paddingBottom: '4px', msOverflowStyle: 'none', scrollbarWidth: 'none',
      }}>
        {TABS.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: '10px 18px', borderRadius: '10px', border: `1px solid ${activeTab === tab.id ? T.purple : T.cardBorder}`,
            background: activeTab === tab.id ? T.purpleBg : T.cardBg,
            color: activeTab === tab.id ? T.purple : T.textSecondary,
            cursor: 'pointer', fontSize: '14px', fontWeight: activeTab === tab.id ? 600 : 400,
            whiteSpace: 'nowrap', fontFamily: 'Heebo, sans-serif',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all 0.2s',
          }}>
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      {loading && <p style={{ textAlign: 'center', color: T.purple, fontSize: '14px' }}>טוען נתונים...</p>}

      {data && (
        <>
          {/* ═══ OVERVIEW TAB ═══ */}
          {activeTab === 'overview' && (
            <>
              {/* KPIs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <KPI label="צפיות בדפים" value={data.total_pageviews} trend={trends.views} sparkData={data.daily_views || undefined} />
                <KPI label="לחיצות" value={data.total_clicks} trend={trends.clicks} />
                <KPI label="טפסים" value={data.total_forms} trend={trends.forms} />
              </div>

              {/* Daily Views Area Chart */}
              {data.daily_views && data.daily_views.length > 0 && (
                <Card title="צפיות יומיות">
                  <div style={{ direction: 'ltr', height: '280px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data.daily_views} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="dailyGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={T.purple} stopOpacity={0.4} />
                            <stop offset="50%" stopColor={T.purple} stopOpacity={0.1} />
                            <stop offset="100%" stopColor={T.purple} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={T.grid} vertical={false} />
                        <XAxis dataKey="day" tickFormatter={formatDate} stroke={T.grid} tick={{ fill: T.axisText, fontSize: 12 }} tickLine={false} axisLine={false} />
                        <YAxis stroke={T.grid} tick={{ fill: T.axisText, fontSize: 12 }} tickLine={false} axisLine={false} width={40} />
                        <Tooltip content={<ChartTooltip suffix="צפיות" />} />
                        <Area type="monotone" dataKey="views" stroke={T.purple} fill="url(#dailyGrad)" strokeWidth={2} dot={false}
                          activeDot={{ r: 5, fill: T.purple, stroke: T.bg, strokeWidth: 2 }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              )}

              {/* Devices Donut + Top Pages Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '16px' }}>
                {/* Devices Donut */}
                <Card title="מכשירים">
                  {data.devices && data.devices.length > 0 ? (
                    <>
                      <div style={{ direction: 'ltr', height: '220px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={data.devices} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3}
                              dataKey="count" nameKey="device_type" stroke="none">
                              {data.devices.map((_, i) => <Cell key={i} fill={DEVICE_COLORS[i % DEVICE_COLORS.length]} />)}
                            </Pie>
                            <Tooltip content={({ active, payload }: any) => {
                              if (!active || !payload?.length) return null;
                              const d = payload[0].payload;
                              const total = data.devices!.reduce((s, x) => s + x.count, 0);
                              const pct = total > 0 ? Math.round((d.count / total) * 100) : 0;
                              return (
                                <div style={{ background: T.tooltipBg, border: `1px solid ${T.tooltipBorder}`, borderRadius: '10px', padding: '10px 14px', direction: 'rtl' }}>
                                  <div style={{ color: T.textSecondary, fontSize: '12px' }}>{DEVICE_ICONS[d.device_type] || ''} {DEVICE_LABELS[d.device_type] || d.device_type}</div>
                                  <div style={{ color: T.purple, fontWeight: 700, fontSize: '16px' }}>{d.count} ({pct}%)</div>
                                </div>
                              );
                            }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      {/* Legend */}
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', direction: 'rtl', marginTop: '8px' }}>
                        {data.devices.map((d, i) => {
                          const total = data.devices!.reduce((s, x) => s + x.count, 0);
                          const pct = total > 0 ? Math.round((d.count / total) * 100) : 0;
                          return (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: DEVICE_COLORS[i % DEVICE_COLORS.length] }} />
                              <span style={{ fontSize: '13px', color: T.textSecondary }}>{DEVICE_ICONS[d.device_type]} {DEVICE_LABELS[d.device_type] || d.device_type}</span>
                              <span style={{ fontSize: '13px', color: T.textMuted }}>{pct}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : <p style={{ color: T.textMuted, textAlign: 'center' }}>אין נתונים</p>}
                </Card>

                {/* Top Pages Bar Chart */}
                <Card title="דפים מובילים (Top 10)">
                  {topPagesChart.length > 0 ? (
                    <div style={{ direction: 'ltr', height: Math.max(topPagesChart.length * 36, 200) + 'px' }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={topPagesChart} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 10 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke={T.grid} horizontal={false} />
                          <XAxis type="number" tick={{ fill: T.axisText, fontSize: 11 }} axisLine={false} tickLine={false} />
                          <YAxis type="category" dataKey="name" width={160}
                            tick={{ fill: '#ccc', fontSize: 11 }} axisLine={false} tickLine={false}
                            tickFormatter={(v: string) => v.length > 22 ? v.substring(0, 22) + '…' : v} />
                          <Tooltip content={<ChartTooltip suffix="צפיות" />} />
                          <Bar dataKey="views" radius={[0, 4, 4, 0]} maxBarSize={24}>
                            {topPagesChart.map((_, i) => (
                              <Cell key={i} fill={i === topPagesChart.length - 1 ? T.purple : 'rgba(168,85,247,0.35)'} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  ) : <p style={{ color: T.textMuted, textAlign: 'center' }}>אין נתונים</p>}
                </Card>
              </div>
            </>
          )}

          {/* ═══ PAGES TAB ═══ */}
          {activeTab === 'pages' && (
            <>
              {/* Top Pages Bar Chart (larger) */}
              {topPagesChart.length > 0 && (
                <Card title="דפים מובילים">
                  <div style={{ direction: 'ltr', height: Math.max(topPagesChart.length * 40, 250) + 'px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topPagesChart} layout="vertical" margin={{ top: 0, right: 30, bottom: 0, left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={T.grid} horizontal={false} />
                        <XAxis type="number" tick={{ fill: T.axisText, fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis type="category" dataKey="name" width={200}
                          tick={{ fill: '#ccc', fontSize: 12 }} axisLine={false} tickLine={false}
                          tickFormatter={(v: string) => v.length > 30 ? v.substring(0, 30) + '…' : v} />
                        <Tooltip content={<ChartTooltip suffix="צפיות" />} />
                        <Bar dataKey="views" radius={[0, 6, 6, 0]} maxBarSize={28}>
                          {topPagesChart.map((_, i) => (
                            <Cell key={i} fill={i === topPagesChart.length - 1 ? T.purple : 'rgba(168,85,247,0.35)'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              )}

              {/* Page Details Sortable Table */}
              <Card title="ביצועי דפים">
                {filteredPageDetails.length === 0 ? (
                  <p style={{ color: T.textMuted, fontSize: '14px', textAlign: 'center' }}>אין נתונים</p>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', direction: 'rtl' }}>
                      <thead>
                        <tr>
                          {[
                            { key: 'page_path', label: 'דף' },
                            { key: 'views', label: 'צפיות' },
                            { key: 'clicks', label: 'לחיצות' },
                            { key: 'forms', label: 'טפסים' },
                            { key: 'unique_sources', label: 'מקורות' },
                          ].map(col => (
                            <th key={col.key} onClick={() => toggleSort(col.key)} style={{
                              textAlign: col.key === 'page_path' ? 'right' : 'center',
                              padding: '10px 8px', borderBottom: `1px solid ${T.headerBorder}`,
                              color: pageSort.key === col.key ? T.purple : T.textSecondary,
                              fontWeight: 500, cursor: 'pointer', userSelect: 'none', fontSize: '12px',
                              textTransform: 'uppercase', letterSpacing: '0.5px',
                            }}>
                              {col.label} {pageSort.key === col.key ? (pageSort.dir === 'desc' ? '▼' : '▲') : ''}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPageDetails.map((row, i) => (
                          <tr key={i}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.04)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                            <td style={{ textAlign: 'right', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: '#ccc', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {decodePath(row.page_path)}
                            </td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.purple, fontWeight: 600 }}>{row.views}</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: '#ccc' }}>{row.clicks}</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: row.forms > 0 ? T.green : T.textMuted, fontWeight: row.forms > 0 ? 600 : 400 }}>{row.forms}</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: '#ccc' }}>{row.unique_sources}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            </>
          )}

          {/* ═══ SOURCES TAB ═══ */}
          {activeTab === 'sources' && (
            <>
              {/* Source Type Filter */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', direction: 'rtl' }}>
                {([['all', 'הכל'], ['paid', 'Paid'], ['organic', 'Organic']] as const).map(([val, label]) => (
                  <button key={val} onClick={() => setSourceFilter(val)} style={{
                    padding: '6px 14px', borderRadius: '8px',
                    border: `1px solid ${sourceFilter === val ? T.purple : T.cardBorder}`,
                    background: sourceFilter === val ? T.purpleBg : T.cardBg,
                    color: sourceFilter === val ? T.purple : T.textSecondary,
                    cursor: 'pointer', fontSize: '13px', fontFamily: 'Heebo, sans-serif',
                  }}>{label}</button>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
                {/* Referrers */}
                <Card title="מקורות תנועה">
                  <DataTable
                    rows={data.referrers || []}
                    columns={[
                      { key: 'referrer', label: 'מקור', render: (v: string) => extractHostname(v) },
                      { key: 'visits', label: 'ביקורים', align: 'center', render: (v: number) => <span style={{ color: T.purple, fontWeight: 600 }}>{v}</span> },
                    ]}
                  />
                </Card>

                {/* UTM Campaigns */}
                <Card title="קמפיינים (UTM)">
                  <DataTable
                    rows={data.utm_campaigns || []}
                    columns={[
                      { key: 'utm_source', label: 'Source' },
                      { key: 'utm_medium', label: 'Medium', align: 'center', render: (v: string) => (
                        <span style={{
                          padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 600,
                          background: v === 'paid' ? T.purpleBg : 'rgba(255,255,255,0.06)',
                          color: v === 'paid' ? T.purple : T.textSecondary,
                          border: `1px solid ${v === 'paid' ? 'rgba(168,85,247,0.3)' : T.cardBorder}`,
                        }}>{v}</span>
                      )},
                      { key: 'utm_campaign', label: 'Campaign' },
                      { key: 'visits', label: 'ביקורים', align: 'center', render: (v: number) => <span style={{ color: T.purple, fontWeight: 600 }}>{v}</span> },
                    ]}
                  />
                </Card>
              </div>

              {/* Source → Pages */}
              <Card title="מקורות → דפים">
                <DataTable
                  rows={filteredSourcePages}
                  columns={[
                    { key: 'source', label: 'מקור' },
                    { key: 'utm_medium', label: 'סוג', align: 'center', render: (v: string | null) => v ? (
                      <span style={{
                        padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 600,
                        background: v === 'paid' ? T.purpleBg : 'rgba(255,255,255,0.06)',
                        color: v === 'paid' ? T.purple : T.textSecondary,
                        border: `1px solid ${v === 'paid' ? 'rgba(168,85,247,0.3)' : T.cardBorder}`,
                      }}>{v}</span>
                    ) : <span style={{ color: T.textMuted, fontSize: '11px' }}>organic</span> },
                    { key: 'page_path', label: 'דף נחיתה', render: (v: string) => decodePath(v) },
                    { key: 'visits', label: 'ביקורים', align: 'center', render: (v: number) => <span style={{ color: T.purple, fontWeight: 600 }}>{v}</span> },
                  ]}
                />
              </Card>
            </>
          )}

          {/* ═══ CONVERSIONS TAB ═══ */}
          {activeTab === 'conversions' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
              {/* Forms */}
              <Card title="טפסים">
                <DataTable
                  rows={filteredFormDetails}
                  columns={[
                    { key: 'page_path', label: 'דף', render: (v: string) => decodePath(v) },
                    { key: 'button_text', label: 'כפתור' },
                    { key: 'submissions', label: 'שליחות', align: 'center', render: (v: number) => <span style={{ color: T.green, fontWeight: 600 }}>{v}</span> },
                  ]}
                />
              </Card>

              {/* Landing Pages */}
              <Card title="דפי נחיתה">
                {filteredLandingPages.length === 0 ? (
                  <p style={{ color: T.textMuted, fontSize: '14px', textAlign: 'center' }}>אין נתונים</p>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', direction: 'rtl' }}>
                      <thead>
                        <tr>
                          {['דף', 'כניסות', 'מקורות', 'Paid', 'Organic'].map(h => (
                            <th key={h} style={{
                              textAlign: h === 'דף' ? 'right' : 'center', padding: '10px 8px',
                              borderBottom: `1px solid ${T.headerBorder}`, color: T.textSecondary,
                              fontWeight: 500, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px',
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredLandingPages.map((row, i) => (
                          <tr key={i}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(168,85,247,0.04)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                            <td style={{ textAlign: 'right', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: '#ccc', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {decodePath(row.page_path)}
                            </td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: T.purple, fontWeight: 600 }}>{row.external_entries}</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}`, color: '#ccc' }}>{row.distinct_sources}</td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}` }}>
                              {row.paid_entries > 0 ? (
                                <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, background: T.purpleBg, color: T.purple }}>{row.paid_entries}</span>
                              ) : <span style={{ color: T.textMuted }}>0</span>}
                            </td>
                            <td style={{ textAlign: 'center', padding: '8px', borderBottom: `1px solid ${T.rowBorder}` }}>
                              {row.organic_entries > 0 ? (
                                <span style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, background: T.greenBg, color: T.green }}>{row.organic_entries}</span>
                              ) : <span style={{ color: T.textMuted }}>0</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            </div>
          )}

          {/* ═══ CLICKS TAB ═══ */}
          {activeTab === 'clicks' && (
            <Card title="לחיצות מובילות">
              <DataTable
                rows={(data.top_clicks || []).slice(0, 25)}
                columns={[
                  { key: 'click_text', label: 'טקסט', render: (v: string) => (v || '').substring(0, 50) },
                  { key: 'click_type', label: 'סוג', align: 'center', render: (v: string) => (
                    <span style={{
                      padding: '2px 8px', borderRadius: '4px', fontSize: '11px',
                      background: v === 'external' ? 'rgba(6,182,212,0.15)' : v === 'whatsapp' ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.06)',
                      color: v === 'external' ? T.cyan : v === 'whatsapp' ? T.green : T.textSecondary,
                      border: `1px solid ${v === 'external' ? 'rgba(6,182,212,0.3)' : v === 'whatsapp' ? 'rgba(16,185,129,0.3)' : T.cardBorder}`,
                    }}>{v}</span>
                  )},
                  { key: 'click_url', label: 'URL', render: (v: string) => {
                    try { const u = new URL(v); return u.hostname + (u.pathname.length > 1 ? u.pathname.substring(0, 30) : ''); }
                    catch { return (v || '').substring(0, 40); }
                  }},
                  { key: 'clicks', label: 'לחיצות', align: 'center', render: (v: number) => <span style={{ color: T.purple, fontWeight: 600 }}>{v}</span> },
                ]}
              />
            </Card>
          )}
        </>
      )}
    </div>
  );
}
