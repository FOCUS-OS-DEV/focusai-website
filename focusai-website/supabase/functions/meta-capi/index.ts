import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const META_API_VERSION = 'v21.0'
const ACCESS_TOKEN = Deno.env.get('META_CAPI_ACCESS_TOKEN')!

// form_source → pixel_id mapping
// PIXEL FOCUS AI (academy): 801192442681278
// PIXEL_WEBINAR (BaseLayout pages, webinars, ai-dev): 1388659336102272
// PIXEL_CLAUDE_CODE (claude-skills pages): 4310526912524722
const PIXEL_MAP: Record<string, string> = {
  // Academy / Bot-Camp → PIXEL FOCUS AI
  'bot-camp-syllabus': '801192442681278',
  'bot-camp-mid-page': '801192442681278',
  'bot-camp-contact': '801192442681278',
  'homepage-academy-consult': '801192442681278',

  // BaseLayout services / webinars / ai-dev → PIXEL_WEBINAR
  'homepage-contact': '1388659336102272',
  'ai-agents-contact': '1388659336102272',
  'strategy-contact': '1388659336102272',
  'agents-service-contact': '1388659336102272',
  'development-contact': '1388659336102272',
  'ai-workshop': '1388659336102272',
  'webinar-n8n-agent': '1388659336102272',
  'content-automation-course': '1388659336102272',
  'free-webinar-onboard': '1388659336102272',
  'ai-dev': '1388659336102272',
  'ai-dev-quick': '1388659336102272',
  'blog-newsletter': '1388659336102272',
  'blog-article-botcamp': '1388659336102272',
  'blog-article-agents': '1388659336102272',
  'blog-article-consulting': '1388659336102272',

  // Claude Skills → PIXEL_CLAUDE_CODE
  'claude-skills-he': '4310526912524722',
  'claude-skills-managers': '4310526912524722',
  'claude-skills-marketing': '4310526912524722',
}

async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value.trim().toLowerCase())
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

serve(async (req) => {
  try {
    const payload = await req.json()

    // Database webhook payload: { type, table, record, schema, old_record }
    const record = payload.record
    if (!record) {
      return new Response(JSON.stringify({ error: 'No record in payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const formSource: string = record.form_source || ''
    const pixelId = PIXEL_MAP[formSource]

    if (!pixelId) {
      console.log(`No pixel mapping for form_source: "${formSource}" — skipping CAPI`)
      return new Response(
        JSON.stringify({ skipped: true, reason: `No pixel mapping for "${formSource}"` }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Build user_data with SHA-256 hashed PII (Meta requirement)
    const userData: Record<string, unknown> = {}

    if (record.email) userData.em = [await sha256(record.email)]
    if (record.phone) {
      // Normalize: remove dashes/spaces, ensure country code
      let phone = record.phone.replace(/[-\s]/g, '')
      if (phone.startsWith('0')) phone = '972' + phone.slice(1)
      userData.ph = [await sha256(phone)]
    }
    if (record.first_name) userData.fn = [await sha256(record.first_name)]
    if (record.last_name) userData.ln = [await sha256(record.last_name)]

    // Non-hashed identifiers
    if (record.fbc) userData.fbc = record.fbc
    if (record.fbp) userData.fbp = record.fbp
    if (record.user_agent) userData.client_user_agent = record.user_agent

    // Build the event
    const event: Record<string, unknown> = {
      event_name: 'Lead', // matches browser fbq('track', 'Lead') for deduplication
      event_time: Math.floor(new Date(record.created_at).getTime() / 1000),
      action_source: 'website',
      user_data: userData,
    }

    if (record.event_id) event.event_id = record.event_id
    if (record.page_url) event.event_source_url = record.page_url

    // Send to Meta Conversions API
    const url = `https://graph.facebook.com/${META_API_VERSION}/${pixelId}/events?access_token=${ACCESS_TOKEN}`

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [event] }),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error(`CAPI error for ${formSource} → pixel ${pixelId}:`, result)
      return new Response(
        JSON.stringify({ success: false, pixel: pixelId, error: result }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      )
    }

    console.log(`CAPI success: ${formSource} → pixel ${pixelId}, events_received: ${result.events_received}`)
    return new Response(
      JSON.stringify({ success: true, pixel: pixelId, events_received: result.events_received }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('CAPI Edge Function error:', error)
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
