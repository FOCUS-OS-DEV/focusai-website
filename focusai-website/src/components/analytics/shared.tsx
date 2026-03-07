/* ─── Analytics Dashboard — Shared UI Components ─── */
import React from 'react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { T } from './types';
import { exportCSV, formatDate } from './helpers';

/* ─── Skeleton Loader ─── */
export function Skeleton({ height = 120 }: { height?: number }) {
  return (
    <div style={{
      background: `linear-gradient(90deg, ${T.cardBg} 25%, rgba(0,0,0,0.04) 50%, ${T.cardBg} 75%)`,
      backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite',
      borderRadius: '16px', height: `${height}px`, border: `1px solid ${T.cardBorder}`,
    }} />
  );
}

/* ─── Custom Tooltip ─── */
export function ChartTooltip({ active, payload, label, suffix }: any) {
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
export function KPI({ label, value, displayValue, trend, sparkData, sparkKey, color, icon }: {
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
export function Card({ title, children, headerRight, exportData, exportName }: {
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
export function DataTable({ rows, columns }: {
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
export function Funnel({ data }: { data: { pageviews: number; clicks: number; contact_clicks: number; forms: number } }) {
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
export function EventBadge({ type }: { type: string }) {
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
