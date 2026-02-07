import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CX4f0l_Y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../../chunks/Footer_CPo-c6EZ.mjs';
import { $ as $$CTAContact } from '../../chunks/CTAContact_CsPQoIMH.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$AiReady = createComponent(($$result, $$props, $$slots) => {
  const courseInfo = {
    subtitle: "\u05D4\u05DB\u05E9\u05E8\u05D4 \u05D9\u05D9\u05E9\u05D5\u05DE\u05D9\u05EA \u05DC\u05DB\u05DC\u05D9 AI \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD",
    description: "8 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05E2\u05E9\u05D9\u05D9\u05DD \u05E9\u05D9\u05D9\u05E7\u05D7\u05D5 \u05D0\u05D5\u05EA\u05DA \u05DE'\u05DE\u05D4 \u05D6\u05D4 \u05D1\u05DB\u05DC\u05DC AI?' \u05DC'\u05D0\u05E0\u05D9 \u05D1\u05D5\u05E0\u05D4 \u05D3\u05E4\u05D9 \u05E0\u05D7\u05D9\u05EA\u05D4, \u05DE\u05E6\u05D2\u05D5\u05EA, \u05D3\u05E9\u05D1\u05D5\u05E8\u05D3\u05D9\u05DD, \u05E1\u05D5\u05DB\u05E0\u05D9 AI, \u05D5\u05E2\u05D5\u05D3... \u05D1\u05E2\u05E6\u05DE\u05D9!'",
    stats: [
      { value: "8", label: "\u05DE\u05E4\u05D2\u05E9\u05D9\u05DD", code: "SESSIONS" },
      { value: "30", label: "\u05E9\u05E2\u05D5\u05EA \u05D0\u05E7\u05D3\u05DE\u05D9\u05D5\u05EA", code: "HOURS" },
      { value: "100%", label: "\u05DE\u05E2\u05E9\u05D9", code: "PRACTICAL" }
    ],
    nextCohort: {
      date: "29.04.2026",
      day: "\u05D9\u05DE\u05D9 \u05E8\u05D1\u05D9\u05E2\u05D9",
      time: "18:00-21:00",
      location: "\u05E4\u05E8\u05D5\u05E0\u05D8\u05DC\u05D9 \u05D1\u05D4\u05E8\u05E6\u05DC\u05D9\u05D4 / Zoom"
    }
  };
  const syllabus = [
    {
      session: 1,
      title: "\u05D9\u05E1\u05D5\u05D3\u05D5\u05EA \u05D4\u05E4\u05E8\u05D5\u05DE\u05E4\u05D8",
      description: "\u05D4\u05DB\u05E8\u05D5\u05EA \u05E2\u05DD \u05DB\u05DC\u05D9 AI \u05DE\u05D5\u05D1\u05D9\u05DC\u05D9\u05DD, \u05E2\u05E7\u05E8\u05D5\u05E0\u05D5\u05EA \u05DB\u05EA\u05D9\u05D1\u05EA \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05D0\u05E4\u05E7\u05D8\u05D9\u05D1\u05D9\u05D9\u05DD",
      tools: ["ChatGPT", "Claude", "Gemini"]
    },
    {
      session: 2,
      title: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05D5\u05DB\u05DF \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA, \u05E2\u05E8\u05D9\u05DB\u05D4, \u05D5\u05E9\u05D9\u05E4\u05D5\u05E8 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA AI",
      tools: ["Midjourney", "DALL-E", "Canva AI"]
    },
    {
      session: 3,
      title: "\u05DB\u05EA\u05D9\u05D1\u05D4 \u05E9\u05D9\u05D5\u05D5\u05E7\u05D9\u05EA \u05D5\u05EA\u05D5\u05DB\u05DF",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05D5\u05DB\u05DF \u05E9\u05D9\u05D5\u05D5\u05E7\u05D9, \u05D1\u05DC\u05D5\u05D2\u05D9\u05DD, \u05E4\u05D5\u05E1\u05D8\u05D9\u05DD \u05D5\u05DE\u05D9\u05D9\u05DC\u05D9\u05DD",
      tools: ["Copy.ai", "Jasper", "ChatGPT"]
    },
    {
      session: 4,
      title: "\u05DE\u05E6\u05D2\u05D5\u05EA \u05D5\u05D3\u05D5\u05E7\u05D5\u05DE\u05E0\u05D8\u05E6\u05D9\u05D4",
      description: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05DE\u05E6\u05D2\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA \u05D5\u05D3\u05D5\u05E7\u05D5\u05DE\u05E0\u05D8\u05E6\u05D9\u05D4 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA",
      tools: ["Gamma", "Beautiful.ai", "Notion AI"]
    },
    {
      session: 5,
      title: "\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD \u05D5\u05D3\u05E9\u05D1\u05D5\u05E8\u05D3\u05D9\u05DD",
      description: "\u05E2\u05D9\u05D1\u05D5\u05D3 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD, \u05D9\u05E6\u05D9\u05E8\u05EA \u05D2\u05E8\u05E4\u05D9\u05DD \u05D5\u05D3\u05E9\u05D1\u05D5\u05E8\u05D3\u05D9\u05DD",
      tools: ["Code Interpreter", "Julius AI", "Tableau"]
    },
    {
      session: 6,
      title: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05D5\u05D6\u05E8\u05D9\u05DE\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4",
      description: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05D5\u05E9\u05D9\u05DC\u05D5\u05D1 \u05DB\u05DC\u05D9 AI \u05D1\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4",
      tools: ["N8N", "Zapier"]
    },
    {
      session: 7,
      title: "\u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05D5\u05D1\u05D5\u05D8\u05D9\u05DD",
      description: "\u05D1\u05E0\u05D9\u05D9\u05EA \u05E6'\u05D0\u05D8\u05D1\u05D5\u05D8\u05D9\u05DD \u05D5\u05E1\u05D5\u05DB\u05E0\u05D9 AI \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA",
      tools: ["Voiceflow", "Botpress", "GPT Builder"]
    },
    {
      session: 8,
      title: "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D2\u05DE\u05E8",
      description: "\u05D9\u05D9\u05E9\u05D5\u05DD \u05DE\u05E2\u05E9\u05D9 \u05E9\u05DC \u05DB\u05DC \u05D4\u05E0\u05DC\u05DE\u05D3 \u05D1\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D0\u05D9\u05E9\u05D9",
      tools: ["All Tools Integration"]
    }
  ];
  const targetAudience = [
    {
      title: "\u05DE\u05E0\u05D4\u05DC\u05D9\u05DD \u05D5\u05D1\u05E2\u05DC\u05D9 \u05E2\u05E1\u05E7\u05D9\u05DD",
      description: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05D1\u05D9\u05DF \u05D0\u05EA \u05D4\u05E4\u05D5\u05D8\u05E0\u05E6\u05D9\u05D0\u05DC \u05E9\u05DC AI \u05D5\u05DC\u05D4\u05D8\u05DE\u05D9\u05E2 \u05D0\u05D5\u05EA\u05D5 \u05D1\u05D0\u05E8\u05D2\u05D5\u05DF",
      icon: "briefcase"
    },
    {
      title: "\u05D0\u05E0\u05E9\u05D9 \u05E9\u05D9\u05D5\u05D5\u05E7 \u05D5\u05EA\u05D5\u05DB\u05DF",
      description: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D9\u05E6\u05D5\u05E8 \u05EA\u05D5\u05DB\u05DF \u05D0\u05D9\u05DB\u05D5\u05EA\u05D9 \u05D9\u05D5\u05EA\u05E8 \u05D1\u05E4\u05D7\u05D5\u05EA \u05D6\u05DE\u05DF",
      icon: "megaphone"
    },
    {
      title: "\u05D9\u05D6\u05DE\u05D9\u05DD \u05D5\u05E4\u05E8\u05D9\u05DC\u05E0\u05E1\u05E8\u05D9\u05DD",
      description: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05D2\u05D3\u05D9\u05DC \u05E4\u05E8\u05D5\u05D3\u05D5\u05E7\u05D8\u05D9\u05D1\u05D9\u05D5\u05EA \u05D5\u05DC\u05D4\u05E8\u05D7\u05D9\u05D1 \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD",
      icon: "rocket"
    },
    {
      title: "\u05DE\u05D7\u05E4\u05E9\u05D9 \u05E7\u05E8\u05D9\u05D9\u05E8\u05D4",
      description: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05D9\u05DB\u05D5\u05DC\u05D5\u05EA AI \u05DC\u05E7\u05D5\u05E8\u05D5\u05EA \u05D4\u05D7\u05D9\u05D9\u05DD",
      icon: "user"
    }
  ];
  const videoTestimonials = [
    { name: "\u05DE\u05D8\u05E8", role: "\u05D1\u05D5\u05D2\u05E8\u05EA", video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1768483285/\u05DE\u05D8\u05E8_\u05E4\u05D5\u05E7\u05D5\u05E1_AI_pvninr.mp4" },
    { name: "\u05D7\u05D2\u05D9\u05EA", role: "\u05DE\u05E0\u05D4\u05DC\u05EA, \u05D0\u05D5\u05E0\u05D9\u05D1\u05E8\u05E1\u05D9\u05D8\u05EA \u05D7\u05D9\u05E4\u05D4", video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1768547859/IMG_0753_iah7ft.mov" },
    { name: "\u05E9\u05E0\u05D9\u05E8", role: "\u05D1\u05D5\u05D2\u05E8", video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1768483262/\u05E9\u05E0\u05D9\u05E8_\u05E4\u05D5\u05E7\u05D5\u05E1_AI_mxbzrj.mp4" },
    { name: "\u05D6\u05D5\u05D4\u05E8 \u05D9\u05E2\u05E7\u05D1", role: "\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8", video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1770301916/\u05E4\u05D5\u05E7\u05D5\u05E1_\u05D6\u05D5\u05D4\u05E8_\u05D9\u05E2\u05E7\u05D1_s4jds5.mp4" },
    { name: "\u05D1\u05E0\u05D9", role: "\u05D1\u05D5\u05D2\u05E8", video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1767274566/IMG_3467_pg6tos.mp4" },
    { name: "\u05D0\u05E8\u05D8\u05D9\u05D5\u05DD", role: "\u05D1\u05D5\u05D2\u05E8", video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1768483285/\u05D0\u05E8\u05D8\u05D9\u05D5\u05DD_\u05E4\u05D5\u05E7\u05D5\u05E1_AI_pzkt2y.mp4" }
  ];
  const pricing = {
    regular: 4900,
    early: 3900,
    includes: [
      "8 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05E4\u05E8\u05D5\u05E0\u05D8\u05DC\u05D9\u05D9\u05DD/\u05D6\u05D5\u05DD",
      "30 \u05E9\u05E2\u05D5\u05EA \u05D0\u05E7\u05D3\u05DE\u05D9\u05D5\u05EA",
      "\u05D2\u05D9\u05E9\u05D4 \u05DC\u05D7\u05D5\u05DE\u05E8\u05D9 \u05DC\u05D9\u05DE\u05D5\u05D3 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05D9\u05DD",
      "\u05E7\u05D1\u05D5\u05E6\u05EA WhatsApp \u05EA\u05DE\u05D9\u05DB\u05D4",
      "\u05EA\u05E2\u05D5\u05D3\u05EA \u05E1\u05D9\u05D5\u05DD",
      "\u05D2\u05D9\u05E9\u05D4 \u05DC\u05E7\u05D4\u05D9\u05DC\u05EA \u05D4\u05D1\u05D5\u05D2\u05E8\u05D9\u05DD"
    ]
  };
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI READY - \u05D4\u05DB\u05E9\u05E8\u05EA AI \u05DE\u05E2\u05E9\u05D9\u05EA",
    "description": courseInfo.description,
    "provider": {
      "@type": "Organization",
      "name": "Focus AI",
      "url": "https://focusai.co.il"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "blended",
      "courseWorkload": "PT30H",
      "startDate": "2026-04-29",
      "location": {
        "@type": "Place",
        "name": "\u05D4\u05E8\u05E6\u05DC\u05D9\u05D4 \u05E4\u05D9\u05EA\u05D5\u05D7 + Zoom"
      }
    },
    "numberOfCredits": 8,
    "inLanguage": "he"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "AI READY | \u05D4\u05DB\u05E9\u05E8\u05EA AI \u05DE\u05E2\u05E9\u05D9\u05EA | Focus AI", "description": "\u05D4\u05DB\u05E9\u05E8\u05D4 \u05D9\u05D9\u05E9\u05D5\u05DE\u05D9\u05EA \u05DC\u05DB\u05DC\u05D9 AI \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD. 8 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD \u05DE\u05E2\u05E9\u05D9\u05D9\u05DD \u05E9\u05D9\u05E9\u05E0\u05D5 \u05D0\u05EA \u05D0\u05D5\u05E4\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05E9\u05DC\u05DB\u05DD.", "structuredData": courseSchema, "data-astro-cid-2phrasb6": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0a0a0f]" data-astro-cid-2phrasb6> <!-- Background Effects --> <div class="absolute inset-0" data-astro-cid-2phrasb6> <div class="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#a855f7]/10 rounded-full blur-[200px]" data-astro-cid-2phrasb6></div> <div class="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#c084fc]/10 rounded-full blur-[150px]" data-astro-cid-2phrasb6></div> </div> <!-- Grid pattern --> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-2phrasb6></div> <!-- Scanlines --> <div class="absolute inset-0 pointer-events-none opacity-[0.02]" style="background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168, 85, 247, 0.03) 2px, rgba(168, 85, 247, 0.03) 4px);" data-astro-cid-2phrasb6></div> <div class="container relative z-10 max-w-6xl mx-auto px-4" data-astro-cid-2phrasb6> <div class="text-center" data-astro-cid-2phrasb6> <!-- Course Badge --> <div class="inline-flex items-center gap-3 px-5 py-2.5 bg-[#12121a] border border-[#a855f7]/30 mb-8" style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));" data-astro-cid-2phrasb6> <span class="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" data-astro-cid-2phrasb6></span> <span class="font-mono text-xs text-[#a855f7] uppercase tracking-[0.2em]" data-astro-cid-2phrasb6>ACADEMY_COURSE</span> </div> <!-- Title --> <h1 class="text-6xl md:text-7xl lg:text-8xl font-black mb-6" data-astro-cid-2phrasb6> <span class="text-[#a855f7]" style="text-shadow: 0 0 40px rgba(168, 85, 247, 0.5), 0 0 80px rgba(168, 85, 247, 0.3);" data-astro-cid-2phrasb6>AI</span> <span class="text-[#f5f5fa]" data-astro-cid-2phrasb6> READY</span> </h1> <p class="text-xl md:text-2xl text-[#d0d0e0] max-w-3xl mx-auto mb-8 font-mono" data-astro-cid-2phrasb6> <span class="text-[#a855f7]" data-astro-cid-2phrasb6>></span> ${courseInfo.subtitle} </p> <p class="text-lg text-[#b0b0c0] max-w-2xl mx-auto mb-12" data-astro-cid-2phrasb6> ${courseInfo.description} </p> <!-- Stats Grid --> <div class="flex flex-wrap justify-center gap-6 mb-12" data-astro-cid-2phrasb6> ${courseInfo.stats.map((stat) => renderTemplate`<div class="relative px-8 py-5 bg-[#12121a] border border-[#2a2a3a] hover:border-[#a855f7]/50 transition-all" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-2phrasb6> <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#a855f7]/50" data-astro-cid-2phrasb6></div> <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#a855f7]/50" data-astro-cid-2phrasb6></div> <div class="text-4xl font-black font-mono text-[#a855f7] mb-1" style="text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);" data-astro-cid-2phrasb6>${stat.value}</div> <div class="text-xs text-[#b0b0c0] font-mono uppercase tracking-wider" data-astro-cid-2phrasb6>[${stat.code}]</div> </div>`)} </div> <!-- Next Cohort --> <div class="inline-block bg-[#12121a] border border-[#c084fc]/30 overflow-hidden mb-10" style="clip-path: polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px));" data-astro-cid-2phrasb6> <div class="flex items-center gap-2 px-4 py-2 bg-[#0a0a0f] border-b border-[#2a2a3a]" data-astro-cid-2phrasb6> <span class="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" data-astro-cid-2phrasb6></span> <span class="font-mono text-[11px] md:text-xs text-[#c084fc] uppercase tracking-wider" data-astro-cid-2phrasb6>NEXT_COHORT</span> </div> <div class="px-6 py-4" data-astro-cid-2phrasb6> <div class="flex flex-wrap items-center justify-center gap-4 text-sm" data-astro-cid-2phrasb6> <span class="text-[#f5f5fa] font-bold font-mono" data-astro-cid-2phrasb6>${courseInfo.nextCohort.date}</span> <span class="text-[#b0b0c0]" data-astro-cid-2phrasb6>|</span> <span class="text-[#d0d0e0]" data-astro-cid-2phrasb6>${courseInfo.nextCohort.day}</span> <span class="text-[#b0b0c0]" data-astro-cid-2phrasb6>|</span> <span class="text-[#d0d0e0]" data-astro-cid-2phrasb6>${courseInfo.nextCohort.time}</span> <span class="text-[#b0b0c0]" data-astro-cid-2phrasb6>|</span> <span class="text-[#d0d0e0]" data-astro-cid-2phrasb6>${courseInfo.nextCohort.location}</span> </div> </div> </div> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-2phrasb6> <a href="#contact" class="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#a855f7] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:shadow-[0_0_50px_rgba(0,255,136,0.7)] hover:brightness-110 transition-all duration-300" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-2phrasb6> <span class="w-2 h-2 rounded-full bg-[#0a0a0f] animate-pulse" data-astro-cid-2phrasb6></span>
להרשמה
</a> <a href="https://drive.google.com/file/d/19a8KgPRSh1VqLpe9bffKYPOfof_y-rA0/view" target="_blank" rel="noopener" class="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent border-2 border-[#a855f7] text-[#a855f7] font-mono font-bold uppercase tracking-wider hover:bg-[#a855f7]/10 transition-all duration-300" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-2phrasb6>
לצפייה בסילבוס
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-2phrasb6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-2phrasb6></path> </svg> </a> </div> </div> </div> <!-- Scroll indicator --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#b0b0c0]" data-astro-cid-2phrasb6> <span class="font-mono text-[11px] md:text-xs uppercase tracking-wider" data-astro-cid-2phrasb6>SCROLL</span> <div class="w-px h-8 bg-gradient-to-b from-[#a855f7] to-transparent" data-astro-cid-2phrasb6></div> </div> </section>  <section id="syllabus" class="py-24 lg:py-32 relative overflow-hidden bg-[#0a0a0f]" data-astro-cid-2phrasb6> <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(192, 132, 252, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 132, 252, 0.5) 1px, transparent 1px); background-size: 40px 40px;" data-astro-cid-2phrasb6></div> <div class="container relative z-10 max-w-6xl mx-auto px-4" data-astro-cid-2phrasb6> <!-- Section Header --> <div class="text-center mb-16" data-astro-cid-2phrasb6> <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#c084fc]/30 mb-6" data-astro-cid-2phrasb6> <span class="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" data-astro-cid-2phrasb6></span> <span class="font-mono text-xs text-[#c084fc] uppercase tracking-[0.2em]" data-astro-cid-2phrasb6>SYLLABUS</span> </div> <h2 class="text-4xl md:text-5xl font-black mb-4" data-astro-cid-2phrasb6> <span class="text-[#f5f5fa]" data-astro-cid-2phrasb6>מה</span> <span class="text-[#c084fc]" style="text-shadow: 0 0 30px rgba(192, 132, 252, 0.5);" data-astro-cid-2phrasb6> תלמדו</span> </h2> <p class="text-[#b0b0c0] font-mono" data-astro-cid-2phrasb6>8 מפגשים. 8 יכולות חדשות. אינסוף אפשרויות.</p> </div> <!-- Syllabus Grid --> <div class="grid md:grid-cols-2 gap-4" data-astro-cid-2phrasb6> ${syllabus.map((item, index) => renderTemplate`<div class="group relative bg-[#12121a] border border-[#2a2a3a] hover:border-[#c084fc]/50 transition-all duration-300" style="clip-path: polygon(0 12px, 12px 0, 100% 0, 100% 100%, 0 100%);" data-astro-cid-2phrasb6> <!-- Session number --> <div class="absolute top-0 left-0 w-12 h-12 bg-[#c084fc]/10 flex items-center justify-center border-b border-r border-[#c084fc]/30" data-astro-cid-2phrasb6> <span class="font-mono text-lg font-bold text-[#c084fc]" data-astro-cid-2phrasb6>${String(item.session).padStart(2, "0")}</span> </div> <div class="p-6 pr-6 pl-16" data-astro-cid-2phrasb6> <h3 class="text-lg font-bold text-[#f5f5fa] mb-2 group-hover:text-[#c084fc] transition-colors" data-astro-cid-2phrasb6>${item.title}</h3> <p class="text-sm text-[#b0b0c0] mb-4" data-astro-cid-2phrasb6>${item.description}</p> <div class="flex flex-wrap gap-2" data-astro-cid-2phrasb6> ${item.tools.map((tool) => renderTemplate`<span class="px-2 py-1 bg-[#0a0a0f] border border-[#2a2a3a] text-[11px] md:text-xs font-mono text-[#d0d0e0] uppercase" data-astro-cid-2phrasb6>${tool}</span>`)} </div> </div> <!-- Hover glow --> <div class="absolute inset-0 bg-gradient-to-r from-[#c084fc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" data-astro-cid-2phrasb6></div> </div>`)} </div> </div> </section>  <section id="audience" class="py-24 lg:py-32 relative overflow-hidden bg-[#0a0a0f]" data-astro-cid-2phrasb6> <div class="absolute inset-0" data-astro-cid-2phrasb6> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c084fc]/5 rounded-full blur-[200px]" data-astro-cid-2phrasb6></div> </div> <div class="container relative z-10 max-w-6xl mx-auto px-4" data-astro-cid-2phrasb6> <div class="text-center mb-16" data-astro-cid-2phrasb6> <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#c084fc]/30 mb-6" data-astro-cid-2phrasb6> <span class="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" data-astro-cid-2phrasb6></span> <span class="font-mono text-xs text-[#c084fc] uppercase tracking-[0.2em]" data-astro-cid-2phrasb6>TARGET_AUDIENCE</span> </div> <h2 class="text-4xl md:text-5xl font-black mb-4" data-astro-cid-2phrasb6> <span class="text-[#f5f5fa]" data-astro-cid-2phrasb6>למי</span> <span class="text-[#c084fc]" style="text-shadow: 0 0 30px rgba(255, 0, 255, 0.5);" data-astro-cid-2phrasb6> מתאים?</span> </h2> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-2phrasb6> ${targetAudience.map((item, index) => renderTemplate`<div class="group relative p-6 bg-[#12121a] border border-[#2a2a3a] hover:border-[#c084fc]/50 transition-all duration-300" style="clip-path: polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px));" data-astro-cid-2phrasb6> <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#c084fc]/30" data-astro-cid-2phrasb6></div> <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#c084fc]/30" data-astro-cid-2phrasb6></div> <div class="w-14 h-14 bg-[#c084fc]/10 border border-[#c084fc]/30 flex items-center justify-center mb-4" data-astro-cid-2phrasb6> ${item.icon === "briefcase" && renderTemplate`<svg class="w-7 h-7 text-[#c084fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2phrasb6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-2phrasb6></path> </svg>`} ${item.icon === "megaphone" && renderTemplate`<svg class="w-7 h-7 text-[#c084fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2phrasb6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" data-astro-cid-2phrasb6></path> </svg>`} ${item.icon === "rocket" && renderTemplate`<svg class="w-7 h-7 text-[#c084fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2phrasb6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" data-astro-cid-2phrasb6></path> </svg>`} ${item.icon === "user" && renderTemplate`<svg class="w-7 h-7 text-[#c084fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2phrasb6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-2phrasb6></path> </svg>`} </div> <h3 class="text-lg font-bold text-[#f5f5fa] mb-2" data-astro-cid-2phrasb6>${item.title}</h3> <p class="text-sm text-[#b0b0c0]" data-astro-cid-2phrasb6>${item.description}</p> </div>`)} </div> </div> </section>  <section id="testimonials" class="py-24 lg:py-32 relative overflow-hidden bg-[#0a0a0f]" data-astro-cid-2phrasb6> <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-2phrasb6></div> <div class="container relative z-10 max-w-6xl mx-auto px-4" data-astro-cid-2phrasb6> <div class="text-center mb-16" data-astro-cid-2phrasb6> <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#a855f7]/30 mb-6" data-astro-cid-2phrasb6> <span class="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" data-astro-cid-2phrasb6></span> <span class="font-mono text-xs text-[#a855f7] uppercase tracking-[0.2em]" data-astro-cid-2phrasb6>TESTIMONIALS</span> </div> <h2 class="text-4xl md:text-5xl font-black mb-4" data-astro-cid-2phrasb6> <span class="text-[#f5f5fa]" data-astro-cid-2phrasb6>הם כבר</span> <span class="text-[#a855f7]" style="text-shadow: 0 0 30px rgba(168, 85, 247, 0.5);" data-astro-cid-2phrasb6> AI Ready</span> </h2> <p class="text-[#b0b0c0] font-mono" data-astro-cid-2phrasb6>בוגרי ההכשרה משתפים את החוויה שלהם</p> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-astro-cid-2phrasb6> ${videoTestimonials.map((testimonial, index) => renderTemplate`<div class="group relative bg-[#12121a] border border-[#2a2a3a] overflow-hidden hover:border-[#a855f7]/50 transition-all duration-300" style="clip-path: polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px));" data-astro-cid-2phrasb6> <!-- Terminal header --> <div class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-1.5 bg-[#0a0a0f]/90 border-b border-[#2a2a3a]" data-astro-cid-2phrasb6> <div class="flex items-center gap-1" data-astro-cid-2phrasb6> <span class="w-1.5 h-1.5 rounded-full bg-[#ff3366]" data-astro-cid-2phrasb6></span> <span class="w-1.5 h-1.5 rounded-full bg-[#ffff00]" data-astro-cid-2phrasb6></span> <span class="w-1.5 h-1.5 rounded-full bg-[#a855f7]" data-astro-cid-2phrasb6></span> </div> <span class="font-mono text-[10px] md:text-[11px] text-[#a855f7] tracking-wider" data-astro-cid-2phrasb6>VID_${String(index + 1).padStart(3, "0")}</span> </div> <div class="pt-6" data-astro-cid-2phrasb6> <video class="w-full aspect-[9/16] object-cover" controls preload="metadata" data-astro-cid-2phrasb6> <source${addAttribute(testimonial.video, "src")} type="video/mp4" data-astro-cid-2phrasb6> </video> </div> <div class="p-3 bg-[#0a0a0f]/80 border-t border-[#2a2a3a]" data-astro-cid-2phrasb6> <div class="flex items-center gap-2" data-astro-cid-2phrasb6> <div class="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" data-astro-cid-2phrasb6></div> <div data-astro-cid-2phrasb6> <div class="font-mono text-xs text-[#f5f5fa]" data-astro-cid-2phrasb6>${testimonial.name}</div> <div class="font-mono text-[11px] text-[#b0b0c0] uppercase" data-astro-cid-2phrasb6>${testimonial.role}</div> </div> </div> </div> </div>`)} </div> </div> </section>  <section id="pricing" class="py-24 lg:py-32 relative overflow-hidden bg-[#0a0a0f]" data-astro-cid-2phrasb6> <div class="absolute inset-0" data-astro-cid-2phrasb6> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c084fc]/5 rounded-full blur-[200px]" data-astro-cid-2phrasb6></div> </div> <div class="container relative z-10 max-w-4xl mx-auto px-4" data-astro-cid-2phrasb6> <div class="text-center mb-16" data-astro-cid-2phrasb6> <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#c084fc]/30 mb-6" data-astro-cid-2phrasb6> <span class="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" data-astro-cid-2phrasb6></span> <span class="font-mono text-xs text-[#c084fc] uppercase tracking-[0.2em]" data-astro-cid-2phrasb6>PRICING</span> </div> <h2 class="text-4xl md:text-5xl font-black mb-4" data-astro-cid-2phrasb6> <span class="text-[#f5f5fa]" data-astro-cid-2phrasb6>מחיר</span> <span class="text-[#c084fc]" style="text-shadow: 0 0 30px rgba(192, 132, 252, 0.5);" data-astro-cid-2phrasb6> ההשקעה</span> </h2> </div> <div class="relative bg-[#12121a] border border-[#c084fc]/30 overflow-hidden" style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));" data-astro-cid-2phrasb6> <!-- Terminal header --> <div class="flex items-center justify-between px-6 py-3 bg-[#0a0a0f] border-b border-[#2a2a3a]" data-astro-cid-2phrasb6> <div class="flex items-center gap-1.5" data-astro-cid-2phrasb6> <span class="w-2 h-2 rounded-full bg-[#ff3366]" data-astro-cid-2phrasb6></span> <span class="w-2 h-2 rounded-full bg-[#ffff00]" data-astro-cid-2phrasb6></span> <span class="w-2 h-2 rounded-full bg-[#a855f7]" data-astro-cid-2phrasb6></span> </div> <span class="font-mono text-[11px] md:text-xs text-[#c084fc] tracking-wider" data-astro-cid-2phrasb6>INVESTMENT.config</span> </div> <div class="p-8 md:p-12" data-astro-cid-2phrasb6> <div class="grid md:grid-cols-2 gap-8 items-center" data-astro-cid-2phrasb6> <!-- Price --> <div class="text-center md:text-right" data-astro-cid-2phrasb6> <div class="inline-block px-4 py-2 bg-[#a855f7]/10 border border-[#a855f7]/30 mb-4" data-astro-cid-2phrasb6> <span class="font-mono text-xs text-[#a855f7]" data-astro-cid-2phrasb6>EARLY_BIRD_ACTIVE</span> </div> <div class="mb-4" data-astro-cid-2phrasb6> <span class="text-[#b0b0c0] line-through text-xl font-mono" data-astro-cid-2phrasb6>${pricing.regular.toLocaleString()} ₪</span> </div> <div class="text-5xl md:text-6xl font-black text-[#c084fc] font-mono mb-2" style="text-shadow: 0 0 30px rgba(192, 132, 252, 0.5);" data-astro-cid-2phrasb6> ${pricing.early.toLocaleString()} ₪
</div> <p class="text-[#b0b0c0] text-sm" data-astro-cid-2phrasb6>כולל מע"מ</p> </div> <!-- Includes --> <div data-astro-cid-2phrasb6> <h3 class="font-mono text-sm text-[#c084fc] mb-4 uppercase" data-astro-cid-2phrasb6>PACKAGE_INCLUDES:</h3> <ul class="space-y-3" data-astro-cid-2phrasb6> ${pricing.includes.map((item) => renderTemplate`<li class="flex items-center gap-3" data-astro-cid-2phrasb6> <div class="w-5 h-5 bg-[#a855f7]/10 border border-[#a855f7]/30 flex items-center justify-center flex-shrink-0" data-astro-cid-2phrasb6> <svg class="w-3 h-3 text-[#a855f7]" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-2phrasb6> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-2phrasb6></path> </svg> </div> <span class="text-[#d0d0e0] text-sm" data-astro-cid-2phrasb6>${item}</span> </li>`)} </ul> </div> </div> <div class="mt-10 pt-8 border-t border-[#2a2a3a] text-center" data-astro-cid-2phrasb6> <a href="#contact" class="group inline-flex items-center justify-center gap-3 px-12 py-4 bg-[#c084fc] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:shadow-[0_0_50px_rgba(0,212,255,0.7)] hover:brightness-110 transition-all duration-300" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-2phrasb6> <span class="w-2 h-2 rounded-full bg-[#0a0a0f] animate-pulse" data-astro-cid-2phrasb6></span>
להרשמה עכשיו
</a> <p class="mt-4 text-xs text-[#b0b0c0] font-mono" data-astro-cid-2phrasb6>ניתן לשלם בתשלומים | אפשרות לחשבונית מס</p> </div> </div> </div> </div> </section>  ${renderComponent($$result2, "CTAContact", $$CTAContact, { "data-astro-cid-2phrasb6": true })}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-2phrasb6": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "currentPath": "/academy/ai-ready", "data-astro-cid-2phrasb6": true })}` })} `;
}, "C:/sites/maderfuker/focusai-website/src/pages/academy/ai-ready.astro", void 0);

const $$file = "C:/sites/maderfuker/focusai-website/src/pages/academy/ai-ready.astro";
const $$url = "/academy/ai-ready";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AiReady,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
