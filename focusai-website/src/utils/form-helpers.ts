/**
 * Shared form utilities — Supabase logging, consent texts, form submission helpers.
 * Single source of truth for form-related constants and functions.
 *
 * Usage (in regular <script> blocks, NOT is:inline):
 *   import { supabaseInsert, CONSENT_TEXTS, SUPABASE_URL, SUPABASE_ANON_KEY } from '@/utils/form-helpers';
 */

import { siteConfig } from '@/data/config';

export const SUPABASE_URL = siteConfig.supabase.url;
export const SUPABASE_ANON_KEY = siteConfig.supabase.anonKey;

export const CONSENT_TEXTS = {
  version: 'v1.0',
  privacy: 'קראתי ואני מסכים/ה לתנאי השימוש ולמדיניות הפרטיות.',
  marketing: 'אני מסכים/ה לקבל דיוור מ-Focus AI. ניתן לבטל בכל עת.',
} as const;

/**
 * Fire-and-forget insert to Supabase table.
 * Used for consent_log and form_submissions — doesn't block form redirect.
 */
export function supabaseInsert(table: string, data: Record<string, unknown>) {
  fetch(SUPABASE_URL + '/rest/v1/' + table, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(data),
    keepalive: true,
  }).catch(() => {});
}

/**
 * Get tracking data from the FAI tracker (if loaded).
 */
export function getTracking(): Record<string, string | null> {
  if (typeof window !== 'undefined' && typeof (window as any).__fai_getTracking === 'function') {
    return (window as any).__fai_getTracking();
  }
  return {};
}
