import { useState, useCallback } from 'react';

const SUPABASE_URL = 'https://ueewnvfydrlhyxmbgsus.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlZXdudmZ5ZHJsaHl4bWJnc3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDI4ODcsImV4cCI6MjA4NjQxODg4N30.4EjvZekhleRdufJPxBEgXRkUbhGbG5cjjjBFUa20mjQ';

function decodePath(p: string): string {
  try { return decodeURIComponent(p); } catch { return p; }
}

interface AnalyticsData {
  total_pageviews: number;
  total_clicks: number;
  total_forms: number;
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

export default function AnalyticsDashboard() {
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [days, setDays] = useState(30);
  const [pageSort, setPageSort] = useState<{ key: string; dir: 'asc' | 'desc' }>({ key: 'views', dir: 'desc' });

  const fetchData = useCallback(async (pw: string, d: number) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_analytics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ p_password: pw, p_days: d }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Unauthorized');
      }
      const result = await res.json();
      setData(result);
      setIsAuthed(true);
    } catch (e: any) {
      const msg = e.message || 'Error';
      if (msg === 'Failed to fetch') {
        setError('שגיאת חיבור — נסה לרענן את הדף או לבדוק חוסם פרסומות');
      } else {
        setError(msg);
      }
      setIsAuthed(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(password, days);
  };

  const changeDays = (d: number) => {
    setDays(d);
    fetchData(password, d);
  };

  if (!isAuthed) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0f' }}>
        <form onSubmit={handleLogin} style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '40px',
          backdropFilter: 'blur(20px)',
          width: '100%',
          maxWidth: '380px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '28px', marginBottom: '8px' }}>📊</div>
          <h2 style={{ color: '#fff', fontSize: '20px', marginBottom: '24px', fontFamily: 'Heebo, sans-serif' }}>Focus AI Analytics</h2>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="סיסמה"
            dir="rtl"
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.05)',
              color: '#fff',
              fontSize: '16px',
              marginBottom: '16px',
              boxSizing: 'border-box',
              outline: 'none',
            }}
          />
          <button type="submit" disabled={loading} style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: 'none',
            background: '#a855f7',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
            fontFamily: 'Heebo, sans-serif',
            fontWeight: 600,
          }}>
            {loading ? '...' : 'כניסה'}
          </button>
          {error && <p style={{ color: '#f87171', marginTop: '12px', fontSize: '14px' }}>{error}</p>}
        </form>
      </div>
    );
  }

  const maxViews = data?.daily_views ? Math.max(...data.daily_views.map(d => d.views)) : 1;

  // Sort page_details
  const sortedPages = data?.page_details ? [...data.page_details].sort((a: any, b: any) => {
    const av = a[pageSort.key], bv = b[pageSort.key];
    const cmp = typeof av === 'number' ? av - bv : String(av).localeCompare(String(bv));
    return pageSort.dir === 'desc' ? -cmp : cmp;
  }) : [];

  const toggleSort = (key: string) => {
    setPageSort(prev => ({ key, dir: prev.key === key && prev.dir === 'desc' ? 'asc' : 'desc' }));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff', padding: '24px', fontFamily: 'Heebo, sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontSize: '24px', margin: 0 }}>📊 Focus AI Analytics</h1>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={() => fetchData(password, days)} disabled={loading} style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.03)',
            color: loading ? '#666' : '#10b981',
            cursor: loading ? 'default' : 'pointer',
            fontSize: '14px',
          }}>
            {loading ? '⏳' : '🔄'}
          </button>
          {[7, 14, 30, 90].map(d => (
            <button key={d} onClick={() => changeDays(d)} style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: days === d ? '1px solid #a855f7' : '1px solid rgba(255,255,255,0.1)',
              background: days === d ? 'rgba(168,85,247,0.2)' : 'rgba(255,255,255,0.03)',
              color: days === d ? '#a855f7' : '#999',
              cursor: 'pointer',
              fontSize: '14px',
            }}>
              {d}d
            </button>
          ))}
        </div>
      </div>

      {loading && <p style={{ textAlign: 'center', color: '#a855f7' }}>Loading...</p>}

      {data && (
        <>
          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            <KPI label="צפיות בדפים" value={data.total_pageviews} />
            <KPI label="לחיצות" value={data.total_clicks} />
            <KPI label="טפסים" value={data.total_forms} />
          </div>

          {/* Daily Chart */}
          {data.daily_views && data.daily_views.length > 0 && (
            <Card title="צפיות יומיות">
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '120px', direction: 'ltr' }}>
                {data.daily_views.map((d, i) => (
                  <div key={i} title={`${d.day}: ${d.views}`} style={{
                    flex: 1,
                    background: 'linear-gradient(to top, #a855f7, #7c3aed)',
                    borderRadius: '3px 3px 0 0',
                    height: `${Math.max((d.views / maxViews) * 100, 4)}%`,
                    minWidth: '4px',
                    transition: 'height 0.3s',
                  }} />
                ))}
              </div>
            </Card>
          )}

          {/* Page Details — Full Width Sortable */}
          <Card title="ביצועי דפים">
            {sortedPages.length === 0 ? (
              <p style={{ color: '#666', fontSize: '14px', textAlign: 'center' }}>אין נתונים</p>
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
                          padding: '8px 6px',
                          borderBottom: '1px solid rgba(255,255,255,0.1)',
                          color: pageSort.key === col.key ? '#a855f7' : '#999',
                          fontWeight: 500,
                          cursor: 'pointer',
                          userSelect: 'none',
                        }}>
                          {col.label} {pageSort.key === col.key ? (pageSort.dir === 'desc' ? '▼' : '▲') : ''}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sortedPages.map((row, i) => (
                      <tr key={i}>
                        <td style={{ textAlign: 'right', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ccc', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {decodePath(row.page_path)}
                        </td>
                        <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#a855f7', fontWeight: 600 }}>{row.views}</td>
                        <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ccc' }}>{row.clicks}</td>
                        <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: row.forms > 0 ? '#10b981' : '#666' , fontWeight: row.forms > 0 ? 600 : 400 }}>{row.forms}</td>
                        <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ccc' }}>{row.unique_sources}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>

          {/* Source → Pages — Full Width */}
          <Card title="מקורות → דפים">
            {!data.source_pages || data.source_pages.length === 0 ? (
              <p style={{ color: '#666', fontSize: '14px', textAlign: 'center' }}>אין נתונים</p>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', direction: 'rtl' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'right', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>מקור</th>
                      <th style={{ textAlign: 'center', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>סוג</th>
                      <th style={{ textAlign: 'right', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>דף נחיתה</th>
                      <th style={{ textAlign: 'center', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>ביקורים</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.source_pages.map((row, i) => (
                      <tr key={i}>
                        <td style={{ textAlign: 'right', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ccc' }}>{row.source}</td>
                        <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          {row.utm_medium ? (
                            <span style={{
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontSize: '11px',
                              fontWeight: 600,
                              background: row.utm_medium === 'paid' ? 'rgba(168,85,247,0.2)' : 'rgba(255,255,255,0.06)',
                              color: row.utm_medium === 'paid' ? '#a855f7' : '#999',
                              border: `1px solid ${row.utm_medium === 'paid' ? 'rgba(168,85,247,0.3)' : 'rgba(255,255,255,0.08)'}`,
                            }}>
                              {row.utm_medium}
                            </span>
                          ) : (
                            <span style={{ color: '#666', fontSize: '11px' }}>organic</span>
                          )}
                        </td>
                        <td style={{ textAlign: 'right', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ccc', maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {decodePath(row.page_path)}
                        </td>
                        <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#a855f7', fontWeight: 600 }}>{row.visits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '16px' }}>
            {/* Top Pages */}
            <Card title="דפים מובילים">
              <Table
                rows={data.top_pages || []}
                columns={[
                  { key: 'page_path', label: 'דף', render: (v: string) => decodePath(v) },
                  { key: 'views', label: 'צפיות', align: 'left' },
                ]}
              />
            </Card>

            {/* Top Clicks */}
            <Card title="לחיצות מובילות">
              <Table
                rows={(data.top_clicks || []).slice(0, 15)}
                columns={[
                  { key: 'click_text', label: 'טקסט', render: (v: string) => (v || '').substring(0, 40) },
                  { key: 'click_type', label: 'סוג', align: 'center' },
                  { key: 'clicks', label: 'לחיצות', align: 'left' },
                ]}
              />
            </Card>

            {/* Referrers */}
            <Card title="מקורות תנועה">
              <Table
                rows={data.referrers || []}
                columns={[
                  { key: 'referrer', label: 'מקור', render: (v: string) => { try { return new URL(v).hostname; } catch { return v; } } },
                  { key: 'visits', label: 'ביקורים', align: 'left' },
                ]}
              />
            </Card>

            {/* UTM Campaigns */}
            <Card title="קמפיינים (UTM)">
              <Table
                rows={data.utm_campaigns || []}
                columns={[
                  { key: 'utm_source', label: 'Source' },
                  { key: 'utm_medium', label: 'Medium' },
                  { key: 'utm_campaign', label: 'Campaign' },
                  { key: 'visits', label: 'ביקורים', align: 'left' },
                ]}
              />
            </Card>

            {/* Forms */}
            <Card title="טפסים">
              <Table
                rows={data.form_details || []}
                columns={[
                  { key: 'page_path', label: 'דף', render: (v: string) => decodePath(v) },
                  { key: 'button_text', label: 'כפתור' },
                  { key: 'submissions', label: 'שליחות', align: 'left' },
                ]}
              />
            </Card>

            {/* Landing Pages */}
            <Card title="דפי נחיתה">
              {!data.landing_pages || data.landing_pages.length === 0 ? (
                <p style={{ color: '#666', fontSize: '14px', textAlign: 'center' }}>אין נתונים</p>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', direction: 'rtl' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'right', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>דף</th>
                        <th style={{ textAlign: 'center', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>כניסות</th>
                        <th style={{ textAlign: 'center', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>מקורות</th>
                        <th style={{ textAlign: 'center', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>Paid</th>
                        <th style={{ textAlign: 'center', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>Organic</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.landing_pages.map((row, i) => (
                        <tr key={i}>
                          <td style={{ textAlign: 'right', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ccc', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {decodePath(row.page_path)}
                          </td>
                          <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#a855f7', fontWeight: 600 }}>{row.external_entries}</td>
                          <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ccc' }}>{row.distinct_sources}</td>
                          <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: row.paid_entries > 0 ? '#a855f7' : '#666' }}>{row.paid_entries}</td>
                          <td style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: row.organic_entries > 0 ? '#10b981' : '#666' }}>{row.organic_entries}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>

            {/* Devices */}
            <Card title="מכשירים">
              {(data.devices || []).map((d, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: '#ccc' }}>{d.device_type === 'desktop' ? '💻 Desktop' : d.device_type === 'mobile' ? '📱 Mobile' : '📟 Tablet'}</span>
                  <span style={{ color: '#a855f7', fontWeight: 600 }}>{d.count}</span>
                </div>
              ))}
            </Card>
          </div>
        </>
      )}
    </div>
  );
}

function KPI({ label, value }: { label: string; value: number }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '32px', fontWeight: 700, color: '#a855f7' }}>{value.toLocaleString()}</div>
      <div style={{ fontSize: '14px', color: '#999', marginTop: '4px' }}>{label}</div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '16px',
    }}>
      <h3 style={{ fontSize: '16px', color: '#fff', marginTop: 0, marginBottom: '16px', direction: 'rtl' }}>{title}</h3>
      {children}
    </div>
  );
}

function Table({ rows, columns }: { rows: any[]; columns: { key: string; label: string; align?: string; render?: (v: any) => string }[] }) {
  if (!rows || rows.length === 0) return <p style={{ color: '#666', fontSize: '14px', textAlign: 'center' }}>אין נתונים</p>;
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', direction: 'rtl' }}>
        <thead>
          <tr>
            {columns.map(c => (
              <th key={c.key} style={{ textAlign: (c.align as any) || 'right', padding: '8px 6px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#999', fontWeight: 500 }}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map(c => (
                <td key={c.key} style={{ textAlign: (c.align as any) || 'right', padding: '6px', borderBottom: '1px solid rgba(255,255,255,0.04)', color: '#ccc', maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {c.render ? c.render(row[c.key]) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
