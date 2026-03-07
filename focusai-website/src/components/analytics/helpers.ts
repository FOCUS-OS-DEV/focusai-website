/* ─── Analytics Dashboard — Helper Functions ─── */
import { PAGE_NAMES } from './types';

export function decodePath(p: string): string {
  try {
    const decoded = decodeURIComponent(p);
    const withSlash = decoded.endsWith('/') || decoded === '/' ? decoded : decoded + '/';
    const withoutSlash = decoded.endsWith('/') && decoded.length > 1 ? decoded.slice(0, -1) : decoded;
    return PAGE_NAMES[decoded] || PAGE_NAMES[withSlash] || PAGE_NAMES[withoutSlash] || decoded;
  } catch { return p; }
}

export function calcTrend(current: number, previous: number): { value: number; direction: 'up' | 'down' | 'flat' } {
  if (previous === 0) return { value: 0, direction: current > 0 ? 'up' : 'flat' };
  const pct = Math.round(((current - previous) / previous) * 100);
  return { value: Math.abs(pct), direction: pct > 0 ? 'up' : pct < 0 ? 'down' : 'flat' };
}

export function formatDate(d: string): string {
  try { return new Date(d).toLocaleDateString('he-IL', { day: 'numeric', month: 'short' }); } catch { return d; }
}

export function extractHostname(url: string): string {
  try { return new URL(url).hostname; } catch { return url; }
}

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  return sec > 0 ? `${min}m ${sec}s` : `${min}m`;
}

export function timeAgo(ts: string): string {
  const diff = Math.floor((Date.now() - new Date(ts).getTime()) / 1000);
  if (diff < 60) return 'עכשיו';
  if (diff < 3600) return `לפני ${Math.floor(diff / 60)} דק׳`;
  if (diff < 86400) return `לפני ${Math.floor(diff / 3600)} שע׳`;
  return `לפני ${Math.floor(diff / 86400)} ימים`;
}

export function exportCSV(rows: any[], filename: string) {
  if (!rows?.length) return;
  const keys = Object.keys(rows[0]);
  const csv = [keys.join(','), ...rows.map(r => keys.map(k => JSON.stringify(r[k] ?? '')).join(','))].join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `${filename}.csv`; a.click();
  URL.revokeObjectURL(url);
}

export function mergeDaily(views: any[] | null, clicks: any[] | null, forms: any[] | null) {
  const map: Record<string, { day: string; views: number; clicks: number; forms: number }> = {};
  (views || []).forEach(d => { map[d.day] = { day: d.day, views: d.views, clicks: 0, forms: 0 }; });
  (clicks || []).forEach(d => { if (map[d.day]) map[d.day].clicks = d.clicks; else map[d.day] = { day: d.day, views: 0, clicks: d.clicks, forms: 0 }; });
  (forms || []).forEach(d => { if (map[d.day]) map[d.day].forms = d.forms; else map[d.day] = { day: d.day, views: 0, clicks: 0, forms: d.forms }; });
  return Object.values(map).sort((a, b) => a.day.localeCompare(b.day));
}

export function aggregateByGranularity(data: { day: string; views: number; clicks: number; forms: number }[], granularity: 'day' | 'week' | 'month') {
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
