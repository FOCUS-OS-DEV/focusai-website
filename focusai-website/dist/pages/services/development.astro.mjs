import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CX4f0l_Y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CPo-c6EZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://focusai.co.il");
const $$Development = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Development;
  const pageTitle = "Focus AI | \u05E4\u05D9\u05EA\u05D5\u05D7 \u05D5\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05E9\u05DC \u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA AI";
  const pageDescription = "\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05E4\u05D9\u05EA\u05D5\u05D7 \u05D5\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05E9\u05DC \u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA AI - \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA, \u05D7\u05D9\u05D1\u05D5\u05E8 \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA, CRM, \u05D3\u05E9\u05D1\u05D5\u05E8\u05D3\u05D9\u05DD \u05D5\u05E4\u05D5\u05E8\u05D8\u05DC\u05D9 \u05DC\u05DE\u05D9\u05D3\u05D4.";
  const integrations = [
    {
      title: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05E2\u05E1\u05E7\u05D9\u05D5\u05EA",
      description: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD \u05E9\u05D7\u05D5\u05E1\u05DB\u05D9\u05DD \u05E9\u05E2\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D9\u05D5\u05DE\u05D9\u05D5\u05EA",
      tools: ["n8n", "Zapier", "Power Automate"],
      examples: [
        "\u05D8\u05D9\u05E4\u05D5\u05DC \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05D1\u05DC\u05D9\u05D3\u05D9\u05DD \u05E0\u05DB\u05E0\u05E1\u05D9\u05DD",
        "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D4\u05E6\u05E2\u05D5\u05EA \u05DE\u05D7\u05D9\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05D5\u05EA",
        "\u05E1\u05E0\u05DB\u05E8\u05D5\u05DF \u05D1\u05D9\u05DF \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA",
        "\u05EA\u05D6\u05DB\u05D5\u05E8\u05D5\u05EA \u05D5\u05DE\u05E2\u05E7\u05D1 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9"
      ],
      code: "AUTO",
      iconType: "bolt"
    },
    {
      title: "\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D5\u05EA CRM",
      description: "\u05D7\u05D9\u05D1\u05D5\u05E8 \u05D7\u05DB\u05DD \u05D1\u05D9\u05DF \u05DB\u05DC \u05D4\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05DC\u05DE\u05E8\u05DB\u05D6 \u05E0\u05D9\u05D4\u05D5\u05DC \u05D0\u05D7\u05D3",
      tools: ["Monday.com", "HubSpot", "Salesforce", "Pipedrive"],
      examples: [
        "\u05E0\u05D9\u05D4\u05D5\u05DC \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05DE\u05E8\u05DB\u05D6\u05D9",
        "\u05DE\u05E2\u05E7\u05D1 \u05D0\u05D7\u05E8\u05D9 \u05DE\u05E1\u05E2 \u05D4\u05DC\u05E7\u05D5\u05D7",
        "\u05D3\u05D9\u05D5\u05D5\u05D7 \u05D5\u05D0\u05E0\u05DC\u05D9\u05D8\u05D9\u05E7\u05E1 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9",
        "\u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05D5\u05E6\u05D5\u05D5\u05EA\u05D9\u05DD"
      ],
      code: "CRM",
      iconType: "link"
    },
    {
      title: "\u05D3\u05E9\u05D1\u05D5\u05E8\u05D3\u05D9\u05DD \u05D5BI",
      description: "\u05DE\u05E8\u05DB\u05D6 \u05E9\u05DC\u05D9\u05D8\u05D4 \u05D0\u05D7\u05D3 \u05E2\u05DD \u05DB\u05DC \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05E2\u05E1\u05E7\u05D9 \u05E9\u05DC\u05DB\u05DD",
      tools: ["Looker Studio", "Power BI", "Metabase", "Custom Dashboards"],
      examples: [
        "KPIs \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA",
        "\u05D3\u05D5\u05D7\u05D5\u05EA \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD",
        "\u05D4\u05EA\u05E8\u05D0\u05D5\u05EA \u05D7\u05DB\u05DE\u05D5\u05EA",
        "\u05E0\u05D9\u05EA\u05D5\u05D7 \u05DE\u05D2\u05DE\u05D5\u05EA"
      ],
      code: "DASH",
      iconType: "chart"
    },
    {
      title: "\u05E4\u05D5\u05E8\u05D8\u05DC\u05D9 \u05DC\u05DE\u05D9\u05D3\u05D4",
      description: "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05D5\u05EA \u05D4\u05D3\u05E8\u05DB\u05D4 \u05DE\u05D5\u05EA\u05D0\u05DE\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA \u05DC\u05D0\u05E8\u05D2\u05D5\u05DF",
      tools: ["Custom LMS", "Teachable", "Thinkific", "LearnDash"],
      examples: [
        "\u05E7\u05D5\u05E8\u05E1\u05D9\u05DD \u05DE\u05D5\u05D1\u05E0\u05D9\u05DD",
        "\u05DE\u05E2\u05E7\u05D1 \u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA",
        "\u05D1\u05D7\u05D9\u05E0\u05D5\u05EA \u05D5\u05D4\u05E1\u05DE\u05DB\u05D5\u05EA",
        "\u05EA\u05D5\u05DB\u05DF \u05D0\u05D9\u05E0\u05D8\u05E8\u05D0\u05E7\u05D8\u05D9\u05D1\u05D9"
      ],
      code: "LMS",
      iconType: "academic"
    }
  ];
  const techStack = [
    { category: "Automation", tools: ["n8n", "Zapier", "Power Automate"] },
    { category: "Databases", tools: ["Supabase", "Firebase", "PostgreSQL", "MongoDB"] },
    { category: "CRM", tools: ["Monday", "HubSpot", "Salesforce", "Airtable"] },
    { category: "AI/ML", tools: ["OpenAI", "Claude", "Gemini", "Custom Models"] },
    { category: "Frontend", tools: ["React", "Next.js", "Astro", "Vue"] },
    { category: "Cloud", tools: ["AWS", "GCP", "Vercel", "Railway"] }
  ];
  const processSteps = [
    {
      step: 1,
      title: "\u05D4\u05D2\u05D3\u05E8\u05EA \u05D3\u05E8\u05D9\u05E9\u05D5\u05EA",
      description: "\u05DE\u05E4\u05E8\u05D8 \u05D8\u05DB\u05E0\u05D9 \u05DE\u05E4\u05D5\u05E8\u05D8 \u05E2\u05DC \u05D1\u05E1\u05D9\u05E1 \u05D4\u05D0\u05E4\u05D9\u05D5\u05DF",
      code: "SPEC"
    },
    {
      step: 2,
      title: "\u05E4\u05D9\u05EA\u05D5\u05D7 \u05D0\u05D9\u05D8\u05E8\u05D8\u05D9\u05D1\u05D9",
      description: "\u05D1\u05E0\u05D9\u05D9\u05D4 \u05D1\u05E9\u05DC\u05D1\u05D9\u05DD \u05E2\u05DD \u05E4\u05D9\u05D3\u05D1\u05E7 \u05E9\u05D5\u05D8\u05E3",
      code: "DEV"
    },
    {
      step: 3,
      title: "\u05D1\u05D3\u05D9\u05E7\u05D5\u05EA \u05D5-QA",
      description: "\u05D5\u05D9\u05D3\u05D5\u05D0 \u05D0\u05D9\u05DB\u05D5\u05EA \u05D5\u05EA\u05D9\u05E7\u05D5\u05DF \u05D1\u05D0\u05D2\u05D9\u05DD",
      code: "QA"
    },
    {
      step: 4,
      title: "\u05D4\u05E9\u05E7\u05D4 \u05D5\u05D4\u05D8\u05DE\u05E2\u05D4",
      description: "\u05D4\u05E2\u05DC\u05D0\u05D4 \u05DC\u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05D4\u05D3\u05E8\u05DB\u05EA \u05E6\u05D5\u05D5\u05EA\u05D9\u05DD",
      code: "DEPLOY"
    },
    {
      step: 5,
      title: "\u05EA\u05D7\u05D6\u05D5\u05E7\u05D4 \u05D5\u05EA\u05DE\u05D9\u05DB\u05D4",
      description: "\u05DC\u05D9\u05D5\u05D5\u05D9 \u05E9\u05D5\u05D8\u05E3 \u05D5\u05E9\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD \u05DE\u05EA\u05DE\u05D9\u05D3\u05D9\u05DD",
      code: "SUPPORT"
    }
  ];
  const useCases = [
    {
      title: "\u05D7\u05D1\u05E8\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9\u05D9\u05DD",
      challenge: "\u05E2\u05D9\u05D1\u05D5\u05D3 \u05D9\u05D3\u05E0\u05D9 \u05E9\u05DC \u05D1\u05E7\u05E9\u05D5\u05EA \u05D4\u05DC\u05D5\u05D5\u05D0\u05D4 \u05DC\u05E7\u05D7 3 \u05D9\u05DE\u05D9\u05DD",
      solution: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05E2\u05DD \u05D1\u05D3\u05D9\u05E7\u05D5\u05EA AI \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05D5\u05EA",
      result: "\u05E6\u05DE\u05E6\u05D5\u05DD \u05DC-4 \u05E9\u05E2\u05D5\u05EA \u05E2\u05DD \u05D3\u05D9\u05D5\u05E7 \u05E9\u05DC 99%",
      iconType: "bank"
    },
    {
      title: "\u05D7\u05D1\u05E8\u05EA \u05D4\u05D3\u05E8\u05DB\u05D5\u05EA",
      challenge: "\u05E0\u05D9\u05D4\u05D5\u05DC 500+ \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD \u05D1-Excel",
      solution: "\u05E4\u05D5\u05E8\u05D8\u05DC \u05DC\u05DE\u05D9\u05D3\u05D4 + CRM \u05DE\u05E9\u05D5\u05DC\u05D1",
      result: "\u05D7\u05D9\u05E1\u05DB\u05D5\u05DF \u05E9\u05DC 20 \u05E9\u05E2\u05D5\u05EA \u05E9\u05D1\u05D5\u05E2\u05D9\u05D5\u05EA",
      iconType: "book"
    },
    {
      title: "\u05E1\u05D5\u05DB\u05E0\u05D5\u05EA \u05E9\u05D9\u05D5\u05D5\u05E7",
      challenge: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05D3\u05D5\u05D7\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D9\u05D3\u05E0\u05D9\u05D9\u05DD",
      solution: "\u05D3\u05E9\u05D1\u05D5\u05E8\u05D3 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9 \u05E2\u05DD \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA",
      result: "80% \u05E4\u05D7\u05D5\u05EA \u05D6\u05DE\u05DF \u05E2\u05DC \u05D3\u05D9\u05D5\u05D5\u05D7",
      iconType: "trending"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden"> <!-- Background Effects --> <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true"> <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[150px]"></div> <div class="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#a855f7]/10 rounded-full blur-[120px]"></div> <!-- Grid pattern --> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 50px 50px;"></div> </div> <div class="container mx-auto px-4 relative z-10 max-w-7xl"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <!-- Content --> <div> <p class="font-mono text-[#a855f7] text-sm mb-4 uppercase tracking-wider">[SERVICE_02] DEVELOPMENT & INTEGRATION</p> <h1 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"> <span class="block text-white">פיתוח</span> <span class="text-[#a855f7]" style="text-shadow: 0 0 40px rgba(168, 85, 247, 0.5);">ואינטגרציה</span> </h1> <p class="text-lg md:text-xl text-[#d0d0e0] mb-8 leading-relaxed">
אנחנו בונים את הגשרים בין המערכות שלכם. אוטומציות חכמות, חיבורי CRM, דשבורדים ופורטלים - הכל מחובר לחוויה אחת חלקה.
</p> <div class="flex flex-wrap gap-3 mb-8"> ${["n8n", "Monday", "Supabase", "OpenAI"].map((tool) => renderTemplate`<span class="px-3 py-1 bg-[#12121a] border border-[#2a2a3a] text-[#d0d0e0] text-sm font-mono">${tool}</span>`)} </div> <div class="flex flex-col sm:flex-row gap-4"> <a href="#contact" class="group relative px-8 py-4 bg-[#a855f7] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.5)] text-center" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));"> <span class="flex items-center justify-center gap-2"> <span class="w-2 h-2 rounded-full bg-[#0a0a0f] animate-pulse"></span>
בואו נבנה יחד
</span> </a> <a href="#capabilities" class="px-8 py-4 border-2 border-[#a855f7]/50 text-[#a855f7] font-mono uppercase tracking-wider hover:bg-[#a855f7]/10 transition-all duration-300 text-center" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));">
היכולות שלנו
</a> </div> </div> <!-- Visual Element - Integration Diagram --> <div class="relative hidden lg:block"> <div class="relative p-8 border border-[#2a2a3a] bg-[#12121a]/80 backdrop-blur-sm" style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));"> <!-- Integration Flow Visualization --> <div class="relative h-80"> <!-- Center Hub --> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#a855f7] rounded-xl flex items-center justify-center" style="box-shadow: 0 0 40px rgba(168, 85, 247, 0.4);"> <span class="text-[#0a0a0f] font-bold text-center text-sm">Focus AI<br>Hub</span> </div> <!-- Connected Systems --> <div class="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] text-[#d0d0e0] text-sm font-mono">CRM</div> <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] text-[#d0d0e0] text-sm font-mono">Database</div> <div class="absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] text-[#d0d0e0] text-sm font-mono">Website</div> <div class="absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] text-[#d0d0e0] text-sm font-mono">AI Models</div> <div class="absolute top-1/4 left-8 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] text-[#d0d0e0] text-sm font-mono">Email</div> <div class="absolute top-1/4 right-8 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] text-[#d0d0e0] text-sm font-mono">WhatsApp</div> <div class="absolute bottom-1/4 left-8 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] text-[#d0d0e0] text-sm font-mono">Payments</div> <div class="absolute bottom-1/4 right-8 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] text-[#d0d0e0] text-sm font-mono">Analytics</div> <!-- Connection Lines (SVG) --> <svg class="absolute inset-0 w-full h-full" style="z-index: -1;"> <defs> <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" style="stop-color:rgba(0,255,136,0.1)"></stop> <stop offset="50%" style="stop-color:rgba(0,255,136,0.5)"></stop> <stop offset="100%" style="stop-color:rgba(0,255,136,0.1)"></stop> </linearGradient> </defs> <line x1="50%" y1="20%" x2="50%" y2="38%" stroke="url(#lineGradient)" stroke-width="2"></line> <line x1="50%" y1="62%" x2="50%" y2="80%" stroke="url(#lineGradient)" stroke-width="2"></line> <line x1="20%" y1="50%" x2="38%" y2="50%" stroke="url(#lineGradient)" stroke-width="2"></line> <line x1="62%" y1="50%" x2="80%" y2="50%" stroke="url(#lineGradient)" stroke-width="2"></line> </svg> </div> <p class="text-center text-[#b0b0c0] text-sm font-mono mt-4">הכל מחובר. הכל אוטומטי. הכל חכם.</p> </div> </div> </div> </div> </section>  <section id="capabilities" class="relative py-20 bg-[#0d0d12]"> <div class="container mx-auto px-4 max-w-7xl"> <header class="text-center mb-16"> <p class="font-mono text-[#a855f7] text-sm mb-2">[CAPABILITIES]</p> <h2 class="text-3xl md:text-4xl font-black mb-4">
מה אנחנו <span class="text-[#a855f7]">בונים?</span> </h2> <p class="text-[#d0d0e0] max-w-2xl mx-auto">
פתרונות מותאמים שמחברים את כל המערכות לחוויה אחת יעילה
</p> </header> <div class="grid md:grid-cols-2 gap-8"> ${integrations.map((item) => renderTemplate`<div class="relative p-8 border border-[#2a2a3a] bg-[#12121a] hover:border-[#a855f7]/30 transition-all duration-300" style="clip-path: polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px));"> <!-- Header --> <div class="flex items-start gap-4 mb-6"> <div class="w-12 h-12 flex items-center justify-center border border-[#a855f7]/30 bg-[#a855f7]/5"> ${item.iconType === "bolt" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path> </svg>`} ${item.iconType === "link" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path> </svg>`} ${item.iconType === "chart" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"></path> </svg>`} ${item.iconType === "academic" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path> </svg>`} </div> <div class="flex-1"> <div class="flex items-center justify-between mb-1"> <span class="font-mono text-[#a855f7] text-xs">[${item.code}]</span> </div> <h3 class="text-xl font-bold text-white">${item.title}</h3> <p class="text-[#d0d0e0] text-sm mt-1">${item.description}</p> </div> </div> <!-- Tools --> <div class="mb-6"> <p class="text-xs font-mono text-[#b0b0c0] mb-2">TOOLS:</p> <div class="flex flex-wrap gap-2"> ${item.tools.map((tool) => renderTemplate`<span class="px-2 py-1 bg-[#0a0a0f] border border-[#2a2a3a] text-[#d0d0e0] text-xs font-mono">${tool}</span>`)} </div> </div> <!-- Examples --> <div> <p class="text-xs font-mono text-[#b0b0c0] mb-2">EXAMPLES:</p> <ul class="space-y-1"> ${item.examples.map((example) => renderTemplate`<li class="flex items-start gap-2 text-sm text-[#d0d0e0]"> <span class="text-[#a855f7] mt-0.5">›</span> <span>${example}</span> </li>`)} </ul> </div> </div>`)} </div> </div> </section>  <section class="relative py-20"> <div class="container mx-auto px-4 max-w-7xl"> <header class="text-center mb-16"> <p class="font-mono text-[#a855f7] text-sm mb-2">[TECH_STACK]</p> <h2 class="text-3xl md:text-4xl font-black mb-4">
הטכנולוגיות <span class="text-[#a855f7]">שלנו</span> </h2> <p class="text-[#d0d0e0] max-w-2xl mx-auto">
עובדים עם הכלים המובילים בתעשייה
</p> </header> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"> ${techStack.map((category) => renderTemplate`<div class="p-4 border border-[#2a2a3a] bg-[#12121a]" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));"> <p class="text-xs font-mono text-[#a855f7] mb-3">${category.category}</p> <div class="space-y-1"> ${category.tools.map((tool) => renderTemplate`<p class="text-sm text-[#d0d0e0]">${tool}</p>`)} </div> </div>`)} </div> </div> </section>  <section class="relative py-20 bg-[#0d0d12]"> <div class="container mx-auto px-4 max-w-7xl"> <header class="text-center mb-16"> <p class="font-mono text-[#a855f7] text-sm mb-2">[PROCESS]</p> <h2 class="text-3xl md:text-4xl font-black mb-4">
איך זה <span class="text-[#a855f7]">עובד?</span> </h2> </header> <div class="relative"> <!-- Timeline line --> <div class="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent hidden md:block"></div> <div class="grid md:grid-cols-5 gap-6"> ${processSteps.map((step) => renderTemplate`<div class="relative text-center"> <div class="inline-flex items-center justify-center w-16 h-16 bg-[#12121a] border-2 border-[#a855f7] mb-4 relative z-10" style="clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);"> <span class="text-[#a855f7] font-bold text-lg">${step.step}</span> </div> <p class="font-mono text-[#a855f7] text-xs mb-1">[${step.code}]</p> <h3 class="text-lg font-bold text-white mb-2">${step.title}</h3> <p class="text-sm text-[#d0d0e0]">${step.description}</p> </div>`)} </div> </div> </div> </section>  <section class="relative py-20"> <div class="container mx-auto px-4 max-w-7xl"> <header class="text-center mb-16"> <p class="font-mono text-[#a855f7] text-sm mb-2">[CASE_STUDIES]</p> <h2 class="text-3xl md:text-4xl font-black mb-4">
סיפורי <span class="text-[#a855f7]">הצלחה</span> </h2> </header> <div class="grid md:grid-cols-3 gap-8"> ${useCases.map((useCase) => renderTemplate`<div class="relative p-6 border border-[#2a2a3a] bg-[#12121a] hover:border-[#a855f7]/30 transition-all duration-300" style="clip-path: polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px));"> <div class="w-12 h-12 flex items-center justify-center border border-[#a855f7]/30 bg-[#a855f7]/5 mb-4"> ${useCase.iconType === "bank" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"></path> </svg>`} ${useCase.iconType === "book" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path> </svg>`} ${useCase.iconType === "trending" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path> </svg>`} </div> <h3 class="text-lg font-bold text-white mb-4">${useCase.title}</h3> <div class="space-y-3 text-sm"> <div> <p class="font-mono text-[#b0b0c0] text-xs mb-1">CHALLENGE:</p> <p class="text-[#d0d0e0]">${useCase.challenge}</p> </div> <div> <p class="font-mono text-[#b0b0c0] text-xs mb-1">SOLUTION:</p> <p class="text-[#d0d0e0]">${useCase.solution}</p> </div> <div> <p class="font-mono text-[#b0b0c0] text-xs mb-1">RESULT:</p> <p class="text-[#a855f7] font-medium">${useCase.result}</p> </div> </div> </div>`)} </div> </div> </section>  <section id="contact" class="relative py-20 bg-[#0d0d12]"> <div class="container mx-auto px-4 max-w-4xl"> <div class="relative p-8 md:p-12 border border-[#2a2a3a] bg-[#12121a]" style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));"> <!-- Decorative corners --> <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#a855f7]"></div> <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#a855f7]"></div> <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#a855f7]"></div> <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#a855f7]"></div> <header class="text-center mb-10"> <p class="font-mono text-[#a855f7] text-sm mb-2">[BUILD_TOGETHER]</p> <h2 class="text-3xl md:text-4xl font-black mb-4">
בואו <span class="text-[#a855f7]">נבנה יחד</span> </h2> <p class="text-[#d0d0e0]">
ספרו לנו על הפרויקט שלכם - נחזור אליכם עם הצעה מותאמת
</p> </header> <form class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-sm font-mono text-[#d0d0e0] mb-2">שם מלא <span class="text-[#a855f7]">*</span></label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono"> </div> <div> <label for="company" class="block text-sm font-mono text-[#d0d0e0] mb-2">שם החברה</label> <input type="text" id="company" name="company" class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono"> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="email" class="block text-sm font-mono text-[#d0d0e0] mb-2">אימייל <span class="text-[#a855f7]">*</span></label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono"> </div> <div> <label for="phone" class="block text-sm font-mono text-[#d0d0e0] mb-2">טלפון <span class="text-[#a855f7]">*</span></label> <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono"> </div> </div> <div> <label for="project-type" class="block text-sm font-mono text-[#d0d0e0] mb-2">סוג הפרויקט</label> <select id="project-type" name="project-type" class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono"> <option value="">בחרו קטגוריה</option> <option value="automation">אוטומציות עסקיות</option> <option value="crm">אינטגרציית CRM</option> <option value="dashboard">דשבורד וBI</option> <option value="portal">פורטל למידה</option> <option value="full">פתרון מלא</option> <option value="other">אחר</option> </select> </div> <div> <label for="message" class="block text-sm font-mono text-[#d0d0e0] mb-2">ספרו על הפרויקט</label> <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono resize-none" placeholder="אילו מערכות יש לכם היום? מה האתגר העיקרי? מה הייתם רוצים להשיג?"></textarea> </div> <button type="submit" class="w-full px-8 py-4 bg-[#a855f7] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.5)]" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));"> <span class="flex items-center justify-center gap-2"> <span class="w-2 h-2 rounded-full bg-[#0a0a0f] animate-pulse"></span>
שלחו פרטים
</span> </button> </form> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "currentPath": "/services/development" })}` })}`;
}, "C:/sites/maderfuker/focusai-website/src/pages/services/development.astro", void 0);

const $$file = "C:/sites/maderfuker/focusai-website/src/pages/services/development.astro";
const $$url = "/services/development";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Development,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
