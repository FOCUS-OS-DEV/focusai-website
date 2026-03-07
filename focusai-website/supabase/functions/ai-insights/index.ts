import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')!
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'

serve(async (req) => {
  try {
    // Verify caller is authorized via service role or has valid auth header
    const authHeader = req.headers.get('Authorization') || ''
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

    // Accept calls from the dashboard (anon key) but validate password in payload
    const { password, analytics, leads } = await req.json()

    // Validate password by calling get_analytics_v2 RPC (reuses same auth)
    const checkRes = await fetch(`${supabaseUrl}/rest/v1/rpc/get_leads_analytics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`,
      },
      body: JSON.stringify({ p_password: password, p_days: 1 }),
    })
    if (!checkRes.ok) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Build a concise data summary for Gemini
    const summary = buildSummary(analytics, leads)

    const prompt = `אתה יועץ שיווק דיגיטלי מומחה לעסקים ישראליים. אתה מנתח נתוני אנליטיקס של אתר Focus AI, חברת ייעוץ AI ישראלית.

הנה הנתונים:
${summary}

תן 5-7 תובנות מעשיות בעברית. לכל תובנה:
1. כותרת קצרה וחדה (עד 8 מילים)
2. הסבר מפורט (2-3 משפטים) עם מספרים ספציפיים מהנתונים
3. המלצה קונקרטית לפעולה

התמקד ב:
- ביצועי קמפיינים (איזה מקורות מביאים לידים איכותיים)
- פערים בין תנועה להמרות (דפים עם תנועה בלי לידים)
- דפוסי זמן (מתי כדאי לפרסם, אילו ימים/שעות הכי אפקטיביים)
- השוואה בין תקופות (עלייה/ירידה בלידים)
- הזדמנויות שלא ממצים (מקורות עם פוטנציאל)
- בעיות טכניות (CAPI, הסכמה שיווקית)

פורמט התשובה כ-JSON:
[
  {
    "title": "כותרת",
    "body": "הסבר מפורט",
    "action": "המלצה לפעולה",
    "priority": "high" | "medium" | "low",
    "category": "campaigns" | "conversion" | "timing" | "technical" | "opportunity"
  }
]

החזר רק JSON תקין, בלי markdown או טקסט נוסף.`

    const geminiRes = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      }),
    })

    if (!geminiRes.ok) {
      const err = await geminiRes.text()
      console.error('Gemini API error:', err)
      return new Response(
        JSON.stringify({ error: 'Gemini API error', details: err }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const geminiData = await geminiRes.json()
    const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '[]'

    // Parse JSON from response (handle potential markdown wrapping)
    let insights
    try {
      const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
      insights = JSON.parse(cleaned)
    } catch {
      console.error('Failed to parse Gemini response:', text)
      insights = [{ title: 'שגיאה בפירוש', body: text.substring(0, 300), action: 'נסה שוב', priority: 'low', category: 'technical' }]
    }

    return new Response(
      JSON.stringify({ insights, generated_at: new Date().toISOString() }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('AI Insights error:', error)
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})

function buildSummary(analytics: any, leads: any): string {
  const parts: string[] = []

  if (analytics) {
    parts.push(`=== נתוני אנליטיקס ===`)
    parts.push(`צפיות: ${analytics.total_pageviews} (קודם: ${analytics.prev_total_pageviews})`)
    parts.push(`לחיצות: ${analytics.total_clicks} (קודם: ${analytics.prev_total_clicks})`)
    parts.push(`טפסים מהאנליטיקס: ${analytics.total_forms} (קודם: ${analytics.prev_total_forms})`)
    parts.push(`אחוז המרה: ${analytics.conversion_rate}% (קודם: ${analytics.prev_conversion_rate}%)`)
    parts.push(`WhatsApp קליקים: ${analytics.whatsapp_clicks}`)
    if (analytics.session_stats) {
      parts.push(`סשנים: ${analytics.session_stats.total_sessions}, נטישה: ${analytics.session_stats.bounce_rate}%`)
    }
    if (analytics.utm_campaigns_v2?.length > 0) {
      parts.push(`\nקמפיינים (אנליטיקס):`)
      analytics.utm_campaigns_v2.slice(0, 10).forEach((c: any) => {
        parts.push(`  ${c.utm_source}/${c.utm_medium}/${c.utm_campaign}: ${c.visits} ביקורים, ${c.forms} טפסים, ${c.conversion_rate}% המרה`)
      })
    }
    if (analytics.top_pages?.length > 0) {
      parts.push(`\nדפים מובילים:`)
      analytics.top_pages.slice(0, 8).forEach((p: any) => {
        parts.push(`  ${p.page_path}: ${p.views} צפיות`)
      })
    }
  }

  if (leads) {
    parts.push(`\n=== נתוני לידים ===`)
    parts.push(`סה"כ לידים: ${leads.total_leads} (קודם: ${leads.prev_total_leads})`)
    parts.push(`הסכמה שיווקית: ${leads.consent_marketing_rate}%`)
    parts.push(`CAPI נשלח: ${leads.capi_sent_count}/${leads.capi_total}`)

    if (leads.leads_by_source?.length > 0) {
      parts.push(`\nלידים לפי טופס:`)
      leads.leads_by_source.forEach((s: any) => {
        parts.push(`  ${s.form_source}: ${s.count}`)
      })
    }
    if (leads.leads_by_utm_source?.length > 0) {
      parts.push(`\nלידים לפי UTM source:`)
      leads.leads_by_utm_source.forEach((s: any) => {
        parts.push(`  ${s.utm_source}: ${s.count}`)
      })
    }
    if (leads.leads_by_utm_medium?.length > 0) {
      parts.push(`\nלידים לפי UTM medium:`)
      leads.leads_by_utm_medium.forEach((m: any) => {
        parts.push(`  ${m.utm_medium}: ${m.count}`)
      })
    }
    if (leads.hourly_leads?.length > 0) {
      const peak = leads.hourly_leads.reduce((a: any, b: any) => a.count > b.count ? a : b)
      parts.push(`\nשעת שיא לידים: ${peak.hour}:00 (${peak.count} לידים)`)
    }
    if (leads.dow_leads?.length > 0) {
      const dowNames: Record<number, string> = { 0: 'ראשון', 1: 'שני', 2: 'שלישי', 3: 'רביעי', 4: 'חמישי', 5: 'שישי', 6: 'שבת' }
      const peak = leads.dow_leads.reduce((a: any, b: any) => a.count > b.count ? a : b)
      parts.push(`יום שיא: ${dowNames[peak.dow] || peak.dow} (${peak.count} לידים)`)
    }
    if (leads.leads_by_device?.length > 0) {
      parts.push(`\nלידים לפי מכשיר:`)
      leads.leads_by_device.forEach((d: any) => {
        parts.push(`  ${d.device_type}: ${d.count}`)
      })
    }
  }

  return parts.join('\n')
}
