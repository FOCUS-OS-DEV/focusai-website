/* ─── Analytics Dashboard — Marketing Insights Engine ─── */
import { AnalyticsData, AdvancedData, LeadsData, JOURNEYS, DOW_LABELS } from './types';
import { decodePath } from './helpers';

export type MarketingInsight = {
  priority: 'critical' | 'high' | 'medium' | 'low';
  category: 'conversion' | 'campaigns' | 'content' | 'technical' | 'timing' | 'opportunity' | 'journeys';
  title: string;
  body: string;
  action: string;
  metric?: string;
};

export function generateMarketingInsights(data: AnalyticsData, advancedData: AdvancedData | null, leadsData: LeadsData | null): MarketingInsight[] {
  const insights: MarketingInsight[] = [];

  // 1. Landing Page Health
  if (data.page_details) {
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

  // 2. Campaign ROI Analysis
  if (data.utm_campaigns_v2 && data.utm_campaigns_v2.length > 0) {
    const campaigns = data.utm_campaigns_v2;
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

  // 3. Journey Funnel Analysis
  for (const journey of JOURNEYS) {
    const stepValues = journey.steps.map(step => {
      if (step.metric === 'forms') {
        return (data.form_details || []).filter(f => f.page_path === step.path).reduce((s, f) => s + f.submissions, 0);
      }
      return data.page_details?.find(p => p.page_path === step.path)?.views || 0;
    });

    if (stepValues[0] === 0) continue;

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

  // 4. Device Performance Gap
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

  // 5. Bounce Rate Analysis
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

  // 6. Timing Optimization
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

  // 7. WhatsApp vs Forms
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

  // 8. Traffic Sources Quality
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

  // 9. Entry/Exit Page Analysis
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

  // 10. Engagement Segments
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

  // 11. Conversion Rate Trend
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

  const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
  insights.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return insights;
}
