import { c as createComponent, m as maybeRenderHead, d as renderScript, a as renderTemplate, e as createAstro, i as renderSlot, r as renderComponent, j as renderHead, u as unescapeHTML, b as addAttribute } from './astro/server_CX4f0l_Y.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 p-4 bg-bg-surface/95 backdrop-blur-lg border-t border-border-purple transform translate-y-full transition-transform duration-500" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description"> <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4"> <div class="flex-1"> <h3 id="cookie-title" class="text-white font-semibold text-lg mb-1">
🍪 אנחנו משתמשים בעוגיות
</h3> <p id="cookie-description" class="text-text-muted text-sm">
האתר משתמש בעוגיות לצורך שיפור חוויית המשתמש וניתוח תעבורה.
<a href="/privacy" class="text-purple-light hover:underline">למידע נוסף</a> </p> </div> <div class="flex items-center gap-3"> <button id="cookie-accept-all" class="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-primary to-pink-accent text-white font-medium hover:opacity-90 transition-opacity">
אישור הכל
</button> <button id="cookie-accept-essential" class="px-6 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors">
עוגיות הכרחיות בלבד
</button> <button id="cookie-settings" class="p-2 rounded-xl text-text-muted hover:text-white hover:bg-white/10 transition-colors" aria-label="הגדרות עוגיות"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </button> </div> </div> </div> <!-- Cookie Settings Modal --> <div id="cookie-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title"> <div class="bg-bg-surface rounded-2xl p-6 max-w-lg mx-4 max-h-[90vh] overflow-y-auto border border-border-purple"> <div class="flex items-center justify-between mb-6"> <h3 id="modal-title" class="text-xl font-bold text-white">הגדרות עוגיות</h3> <button id="modal-close" class="text-text-muted hover:text-white" aria-label="סגור"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="space-y-4"> <!-- Essential Cookies --> <div class="p-4 rounded-xl bg-white/5 border border-white/10"> <div class="flex items-center justify-between mb-2"> <h4 class="font-semibold text-white">עוגיות הכרחיות</h4> <span class="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">תמיד פעיל</span> </div> <p class="text-sm text-text-muted">
עוגיות אלה נדרשות לתפעול האתר ולא ניתן לבטל אותן.
</p> </div> <!-- Analytics Cookies --> <div class="p-4 rounded-xl bg-white/5 border border-white/10"> <div class="flex items-center justify-between mb-2"> <h4 class="font-semibold text-white">עוגיות אנליטיקס</h4> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="analytics-toggle" class="sr-only peer"> <div class="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-primary"></div> </label> </div> <p class="text-sm text-text-muted">
עוגיות אלה עוזרות לנו להבין כיצד משתמשים באתר ולשפר אותו.
</p> </div> <!-- Marketing Cookies --> <div class="p-4 rounded-xl bg-white/5 border border-white/10"> <div class="flex items-center justify-between mb-2"> <h4 class="font-semibold text-white">עוגיות שיווקיות</h4> <label class="relative inline-flex items-center cursor-pointer"> <input type="checkbox" id="marketing-toggle" class="sr-only peer"> <div class="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-primary"></div> </label> </div> <p class="text-sm text-text-muted">
עוגיות אלה משמשות לצורך הצגת פרסומות רלוונטיות.
</p> </div> </div> <div class="flex gap-3 mt-6"> <button id="save-preferences" class="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-primary to-pink-accent text-white font-medium hover:opacity-90 transition-opacity">
שמור העדפות
</button> <button id="accept-all-modal" class="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors">
אישור הכל
</button> </div> </div> </div> ${renderScript($$result, "C:/sites/maderfuker/focusai-website/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/sites/maderfuker/focusai-website/src/components/CookieConsent.astro", void 0);

const siteConfig = {
  // Contact Information
  contact: {
    // Primary contact
    email: "office@focusai.co.il",
    phone: "053-946-6408",
    phoneInternational: "+972539466408",
    // WhatsApp
    whatsapp: "https://wa.me/972539466408",
    // Department-specific emails
    privacyEmail: "privacy@focusai.co.il",
    legalEmail: "legal@focusai.co.il"},
  // Social Media Links
  social: {
    instagram: "https://www.instagram.com/focus.ai.il",
    facebook: "https://www.facebook.com/focusai.co.il",
    tiktok: "https://www.tiktok.com/@focus.ai.il",
    // TBD - add when available
    whatsappCommunity: "https://chat.whatsapp.com/HvcdO9wzJN7J8G4B632bZn?mode=gi_t"
  },
  // Assets
  assets: {
    logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1765265415/2_fxdcio.png"},
  // Analytics & Tracking (add your IDs here)
  analytics: {
    // Google Tag Manager - get from https://tagmanager.google.com
    gtmId: "",
    // e.g., "GTM-XXXXXXX"
    // Microsoft Clarity - get from https://clarity.microsoft.com
    clarityId: "",
    // e.g., "abc123xyz"
    // Google Analytics 4 (if using directly, otherwise use GTM)
    ga4Id: ""
    // e.g., "G-XXXXXXXXXX"
  }
};
const getMailtoLink = (email = siteConfig.contact.email) => `mailto:${email}`;
const getPhoneLink = (phone = siteConfig.contact.phoneInternational) => `tel:${phone}`;

const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  const { gtmId, clarityId, ga4Id } = siteConfig.analytics;
  return renderTemplate`${gtmId}${clarityId}${ga4Id}`;
}, "C:/sites/maderfuker/focusai-website/src/components/Analytics.astro", void 0);

const $$AnalyticsBody = createComponent(($$result, $$props, $$slots) => {
  const { gtmId } = siteConfig.analytics;
  return renderTemplate`${gtmId}`;
}, "C:/sites/maderfuker/focusai-website/src/components/AnalyticsBody.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c;
const $$Astro$1 = createAstro("https://focusai.co.il");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "Focus AI - \u05DE\u05D2\u05E9\u05E8\u05D9\u05DD \u05E2\u05DC \u05D4\u05E4\u05E2\u05E8 \u05D1\u05D9\u05DF \u05D0\u05E0\u05E9\u05D9\u05DD \u05DC\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4. \u05D4\u05DB\u05E9\u05E8\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA \u05D5\u05E0\u05E6\u05D9\u05D2\u05D9 AI \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD.",
    image = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1765302030/focusai-og-image.png",
    structuredData
  } = Astro2.props;
  const canonicalURL = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site) : Astro2.url;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Focus AI",
    "alternateName": "\u05E4\u05D5\u05E7\u05D5\u05E1 AI",
    "url": "https://focusai.co.il",
    "logo": siteConfig.assets.logo,
    "description": "\u05DE\u05D2\u05E9\u05E8\u05D9\u05DD \u05E2\u05DC \u05D4\u05E4\u05E2\u05E8 \u05D1\u05D9\u05DF \u05D0\u05E0\u05E9\u05D9\u05DD \u05DC\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4. \u05D4\u05DB\u05E9\u05E8\u05D5\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA \u05D5\u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA AI \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD.",
    "email": siteConfig.contact.email,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "\u05D4\u05E8\u05E6\u05DC\u05D9\u05D4",
      "addressCountry": "IL"
    },
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.tiktok
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "customer service",
      "availableLanguage": ["Hebrew", "English"]
    }
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Focus AI",
    "url": "https://focusai.co.il",
    "inLanguage": "he-IL",
    "publisher": {
      "@type": "Organization",
      "name": "Focus AI"
    }
  };
  return renderTemplate(_c || (_c = __template(['<html lang="he" dir="rtl" class="lenis lenis-smooth"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#0a0a0f"><!-- SEO --><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale" content="he_IL"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><!-- Fonts - Cyberpunk Theme --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Rubik:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"><!-- Generator --><meta name="generator"', '><!-- Structured Data (JSON-LD) --><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script>", "<!-- Analytics (GTM, Clarity) - Respects Cookie Consent -->", "", '</head> <body class="bg-[#0a0a0f] text-[#f5f5fa] font-sans antialiased"> <!-- GTM noscript fallback --> ', ' <!-- Skip to main content for accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#a855f7] focus:text-white focus:font-mono focus:uppercase focus:tracking-wider">\n\u05D3\u05DC\u05D2 \u05DC\u05EA\u05D5\u05DB\u05DF \u05D4\u05E8\u05D0\u05E9\u05D9\n</a> ', ' <main id="main-content"> ', " </main> ", " <!-- Cookie Consent Banner --> ", " <!-- Lenis Smooth Scroll + GSAP Scroll Animations --> ", " <!-- Scripts slot for page-specific scripts --> ", " </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(Astro2.generator, "content"), unescapeHTML(JSON.stringify(organizationSchema)), unescapeHTML(JSON.stringify(websiteSchema)), structuredData && Array.isArray(structuredData) ? structuredData.map((schema) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)))) : structuredData && renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(structuredData))), renderComponent($$result, "Analytics", $$Analytics, {}), renderHead(), renderComponent($$result, "AnalyticsBody", $$AnalyticsBody, {}), renderSlot($$result, $$slots["header"]), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["footer"]), renderComponent($$result, "CookieConsent", $$CookieConsent, {}), renderScript($$result, "C:/sites/maderfuker/focusai-website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), renderSlot($$result, $$slots["scripts"]));
}, "C:/sites/maderfuker/focusai-website/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://focusai.co.il");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { currentPath = "/" } = Astro2.props;
  const logo = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1765265415/2_fxdcio.png";
  const navLinks = [
    { href: "/", label: "\u05D1\u05D9\u05EA", code: "HOME" },
    { href: "#academy", label: "\u05D0\u05E7\u05D3\u05DE\u05D9\u05D4", code: "ACADEMY", hasDropdown: true, dropdownType: "academy" },
    { href: "#services", label: "\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD", code: "SERVICES", hasDropdown: true, dropdownType: "services" },
    { href: "/sadnaot", label: "\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA", code: "WORKSHOPS" },
    { href: "/tools", label: "\u05DB\u05DC\u05D9 AI", code: "TOOLS" },
    { href: "/blog", label: "\u05D1\u05DC\u05D5\u05D2", code: "BLOG" },
    { href: "/about", label: "\u05D0\u05D5\u05D3\u05D5\u05EA", code: "ABOUT" }
  ];
  const academyLinks = [
    { href: "/academy/ai-ready", label: "AI Ready", code: "AI_RDY", description: "\u05D9\u05E1\u05D5\u05D3\u05D5\u05EA AI \u05DC\u05D0\u05E0\u05E9\u05D9 \u05DE\u05E7\u05E6\u05D5\u05E2" },
    { href: "/academy/bot-camp", label: "Bot-Camp", code: "BOT_CMP", description: "\u05DE\u05E4\u05EA\u05D7\u05D9 \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05D5\u05E1\u05D5\u05DB\u05E0\u05D9 AI" },
    { href: "/academy/ai-first", label: "AI First", code: "AI_FST", description: "\u05DE\u05D5\u05D1\u05D9\u05DC\u05D9 \u05D8\u05E8\u05E0\u05E1\u05E4\u05D5\u05E8\u05DE\u05E6\u05D9\u05D4 \u05D1\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD" }
  ];
  const servicesLinks = [
    { href: "/services/strategy", label: "\u05D0\u05E4\u05D9\u05D5\u05DF \u05D5\u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D4", code: "STRAT", description: "\u05D2\u05D9\u05D1\u05D5\u05E9 \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D9\u05EA AI \u05DC\u05D0\u05E8\u05D2\u05D5\u05DF" },
    { href: "/services/development", label: "\u05E4\u05D9\u05EA\u05D5\u05D7 \u05D5\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4", code: "DEV", description: "\u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA AI \u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA" },
    { href: "/services/ai-agents", label: "\u05E1\u05D5\u05DB\u05E0\u05D9 AI", code: "AGENTS", description: "\u05D1\u05D5\u05D8\u05D9\u05DD \u05D5\u05E0\u05E6\u05D9\u05D2\u05D9\u05DD \u05D7\u05DB\u05DE\u05D9\u05DD \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="main-header" data-astro-cid-3ef6ksr2> <div class="header-bg bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#2a2a3a]" data-astro-cid-3ef6ksr2> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between h-16 lg:h-20" data-astro-cid-3ef6ksr2> <!-- Logo with neon effect --> <a href="/" class="flex items-center gap-3 group relative" data-astro-cid-3ef6ksr2> <div class="absolute inset-0 bg-[#a855f7]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-3ef6ksr2></div> <img${addAttribute(logo, "src")} alt="Focus AI" class="h-8 lg:h-10 w-auto transition-all group-hover:brightness-125 relative z-10" style="filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3));" data-astro-cid-3ef6ksr2> </a> <!-- Desktop Navigation --> <nav class="hidden lg:flex items-center gap-1" aria-label="ניווט ראשי" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => link.hasDropdown ? renderTemplate`<div class="nav-dropdown relative group" data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")}${addAttribute(`nav-link flex items-center gap-2 px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-200 ${link.dropdownType === "academy" && currentPath.startsWith("/academy") || link.dropdownType === "services" && currentPath.startsWith("/services") ? "text-[#a855f7]" : "text-[#d0d0e0] hover:text-[#a855f7]"}`, "class")} data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>${link.label}</span> <span class="w-1.5 h-1.5 rounded-full bg-current opacity-50 group-hover:opacity-100 transition-opacity" data-astro-cid-3ef6ksr2></span> </a>  <div class="dropdown-menu absolute top-full right-0 mt-2 w-80 bg-[#12121a] border border-[#2a2a3a] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-xl overflow-hidden" data-astro-cid-3ef6ksr2>  <div class="flex items-center justify-between px-4 py-2.5 bg-[#0a0a0f] border-b border-[#2a2a3a] rounded-t-xl" data-astro-cid-3ef6ksr2> <div class="flex items-center gap-2" data-astro-cid-3ef6ksr2> <span class="w-2 h-2 rounded-full bg-[#ff3366]" data-astro-cid-3ef6ksr2></span> <span class="w-2 h-2 rounded-full bg-[#ffff00]" data-astro-cid-3ef6ksr2></span> <span class="w-2 h-2 rounded-full bg-[#a855f7]" data-astro-cid-3ef6ksr2></span> </div> <span class="font-mono text-[11px] text-[#a855f7] tracking-wider uppercase font-medium" data-astro-cid-3ef6ksr2> ${link.dropdownType === "academy" ? "ACADEMY_MENU" : "SERVICES_MENU"} </span> </div> ${(link.dropdownType === "academy" ? academyLinks : servicesLinks).map((sublink, i) => renderTemplate`<a${addAttribute(sublink.href, "href")}${addAttribute(`group/item flex flex-col px-4 py-3.5 transition-all border-b border-[#2a2a3a] last:border-b-0 ${currentPath === sublink.href ? "text-[#a855f7] bg-[#a855f7]/10" : "text-[#d0d0e0] hover:text-[#a855f7] hover:bg-[#a855f7]/5"}`, "class")} data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between mb-1.5" data-astro-cid-3ef6ksr2> <span class="font-mono text-[15px] font-semibold" data-astro-cid-3ef6ksr2>${sublink.label}</span> <span class="text-[11px] font-mono text-[#8a8a9a] group-hover/item:text-[#a855f7]/70 font-medium" data-astro-cid-3ef6ksr2>[${sublink.code}]</span> </div> <span class="text-[13px] text-[#a0a0b8] group-hover/item:text-[#c0c0d0] transition-colors leading-relaxed" data-astro-cid-3ef6ksr2>${sublink.description}</span> </a>`)} </div> </div>` : renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`nav-link group relative px-4 py-2 font-mono text-sm uppercase tracking-wider transition-all duration-200 ${currentPath === link.href ? "text-[#a855f7]" : "text-[#d0d0e0] hover:text-[#a855f7]"}`, "class")}${addAttribute(currentPath === link.href ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> <span class="relative z-10" data-astro-cid-3ef6ksr2>${link.label}</span>  <span${addAttribute(`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#a855f7] transition-all duration-300 ${currentPath === link.href ? "w-full" : "w-0 group-hover:w-full"}`, "class")} style="box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);" data-astro-cid-3ef6ksr2></span> </a>`)} </nav> <!-- CTA Button (Desktop) --> <div class="hidden lg:flex items-center gap-4" data-astro-cid-3ef6ksr2> <a href="#contact" class="relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#a855f7] text-white font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:brightness-110 rounded-full" data-astro-cid-3ef6ksr2> <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse" data-astro-cid-3ef6ksr2></span>
בואו נדבר
</a> </div> <!-- Mobile Menu Button --> <button type="button" class="lg:hidden relative p-2 text-[#d0d0e0] hover:text-[#a855f7] transition-colors" aria-label="פתח תפריט" aria-expanded="false" aria-controls="mobile-menu" id="mobile-menu-button" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" id="menu-icon-open" data-astro-cid-3ef6ksr2></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" id="menu-icon-close" class="hidden" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu - Cyberpunk Style (RTL: slides from left) --> <div id="mobile-menu" class="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[#0a0a0f]/98 backdrop-blur-xl transform -translate-x-full transition-transform duration-300 ease-in-out z-40 border-t border-[#2a2a3a]" aria-hidden="true" data-astro-cid-3ef6ksr2>  <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 30px 30px;" data-astro-cid-3ef6ksr2></div> <nav class="relative z-10 flex flex-col p-6 gap-2" aria-label="ניווט מובייל" data-astro-cid-3ef6ksr2> ${navLinks.map((link, i) => link.hasDropdown ? renderTemplate`<div class="mobile-nav-link"${addAttribute(`animation-delay: ${i * 0.05}s`, "style")} data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")}${addAttribute(`flex items-center justify-between px-4 py-4 font-mono text-lg transition-all border-b border-[#2a2a3a] ${link.dropdownType === "academy" && currentPath.startsWith("/academy") || link.dropdownType === "services" && currentPath.startsWith("/services") ? "text-[#a855f7] bg-[#a855f7]/5" : "text-[#e0e0f0] hover:text-[#a855f7] hover:bg-[#a855f7]/5"}`, "class")} data-astro-cid-3ef6ksr2> <span class="flex items-center gap-3" data-astro-cid-3ef6ksr2> <span class="text-[#9a9ab0] text-[11px] font-medium" data-astro-cid-3ef6ksr2>[${link.code}]</span> <span data-astro-cid-3ef6ksr2>${link.label}</span> </span> </a>  <div class="pr-4 bg-[#0a0a0f]/50" data-astro-cid-3ef6ksr2> ${(link.dropdownType === "academy" ? academyLinks : servicesLinks).map((sublink) => renderTemplate`<a${addAttribute(sublink.href, "href")}${addAttribute(`flex flex-col px-4 py-4 font-mono transition-all border-b border-[#2a2a3a]/50 ${currentPath === sublink.href ? "text-[#a855f7]" : "text-[#c0c0d0] hover:text-[#a855f7]"}`, "class")} data-astro-cid-3ef6ksr2> <div class="flex items-center justify-between mb-1.5" data-astro-cid-3ef6ksr2> <span class="text-base font-semibold" data-astro-cid-3ef6ksr2>${sublink.label}</span> <span class="text-[11px] text-[#8a8a9a] font-medium" data-astro-cid-3ef6ksr2>[${sublink.code}]</span> </div> <span class="text-sm text-[#9a9ab0] leading-relaxed" data-astro-cid-3ef6ksr2>${sublink.description}</span> </a>`)} </div> </div>` : renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`mobile-nav-link flex items-center gap-3 px-4 py-4 font-mono text-lg transition-all border-b border-[#2a2a3a] ${currentPath === link.href ? "text-[#a855f7] bg-[#a855f7]/5" : "text-[#e0e0f0] hover:text-[#a855f7] hover:bg-[#a855f7]/5"}`, "class")}${addAttribute(`animation-delay: ${i * 0.05}s`, "style")} data-astro-cid-3ef6ksr2> <span class="text-[#9a9ab0] text-[11px] font-medium" data-astro-cid-3ef6ksr2>[${link.code}]</span> <span data-astro-cid-3ef6ksr2>${link.label}</span> </a>`)} <div class="mt-6 pt-6 border-t border-[#2a2a3a]" data-astro-cid-3ef6ksr2> <a href="#contact" class="flex items-center justify-center gap-2 w-full py-4 bg-[#a855f7] text-white font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.4)] rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300" data-astro-cid-3ef6ksr2> <span class="w-2 h-2 rounded-full bg-white animate-pulse" data-astro-cid-3ef6ksr2></span>
בואו נדבר
</a> </div>  <div class="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[13px] font-medium font-mono text-[#a0a0b8]" data-astro-cid-3ef6ksr2> <span class="flex items-center gap-2.5" data-astro-cid-3ef6ksr2> <span class="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" data-astro-cid-3ef6ksr2></span>
SYSTEM_ONLINE
</span> <span data-astro-cid-3ef6ksr2>FOCUS_AI_v2.0</span> </div> </nav> </div> </header> <!-- Spacer to prevent content from going under fixed header --> <div class="h-16 lg:h-20" data-astro-cid-3ef6ksr2></div> ${renderScript($$result, "C:/sites/maderfuker/focusai-website/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/sites/maderfuker/focusai-website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const logo = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1765265415/2_fxdcio.png";
  const footerLinks = {
    services: [
      { href: "/services/ai-agents", label: "\u05E0\u05E6\u05D9\u05D2\u05D9 AI \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD" },
      { href: "/services/development", label: "\u05E4\u05D9\u05EA\u05D5\u05D7 \u05D5\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4" },
      { href: "/services/strategy", label: "\u05D0\u05E4\u05D9\u05D5\u05DF \u05D5\u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D4" },
      { href: "/sadnaot", label: "\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05DC\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD" }
    ],
    academy: [
      { href: "/academy/bot-camp", label: "Bot-Camp" },
      { href: "/academy/ai-ready", label: "AI Ready" },
      { href: "/academy/ai-first", label: "AI First" }
    ],
    company: [
      { href: "/about", label: "\u05D0\u05D5\u05D3\u05D5\u05EA" },
      { href: "/blog", label: "\u05D1\u05DC\u05D5\u05D2" },
      { href: "/tools", label: "\u05DB\u05DC\u05D9 AI" },
      { href: "#contact", label: "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8" },
      { href: "/terms", label: "\u05EA\u05E0\u05D0\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9" },
      { href: "/privacy", label: "\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA" }
    ]
  };
  const socialLinks = [
    { href: siteConfig.social.instagram, label: "Instagram", iconType: "instagram" },
    { href: siteConfig.social.facebook, label: "Facebook", iconType: "facebook" },
    { href: siteConfig.social.tiktok, label: "TikTok", iconType: "tiktok" },
    { href: siteConfig.social.whatsappCommunity, label: "\u05E7\u05D4\u05D9\u05DC\u05D4", iconType: "community" },
    { href: siteConfig.contact.whatsapp, label: "WhatsApp", iconType: "whatsapp" },
    { href: getMailtoLink(), label: "Email", iconType: "email" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-[#0a0a0f] border-t border-[#2a2a3a]" data-section> <!-- Background Pattern --> <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 50px 50px;"></div> <!-- Main Footer Content --> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12"> <!-- Brand Column --> <div class="col-span-2 md:col-span-4 lg:col-span-2 mb-6 lg:mb-0" data-animate="fade-up"> <a href="/" class="inline-block mb-6 group"> <div class="relative"> <div class="absolute inset-0 bg-[#a855f7]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div> <img${addAttribute(logo, "src")} alt="Focus AI" class="h-10 w-auto relative z-10 transition-all group-hover:brightness-125" style="filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3));"> </div> </a> <p class="text-[#d0d0e0] text-sm leading-relaxed mb-6 max-w-sm">
מגשרים על הפער בין אנשים לטכנולוגיה. מטמיעים בינה מלאכותית בארגונים בצורה חכמה, מעשית ואנושית.
</p> <!-- Contact Info --> <div class="flex flex-col gap-2 mb-6"> <a${addAttribute(getMailtoLink(), "href")} dir="ltr" class="text-[#d0d0e0] text-sm font-mono hover:text-[#a855f7] transition-colors flex items-center gap-2"> <span class="text-[#a855f7]">&gt;</span> ${siteConfig.contact.email} </a> <a${addAttribute(siteConfig.contact.whatsapp, "href")} dir="ltr" class="text-[#d0d0e0] text-sm font-mono hover:text-[#a855f7] transition-colors flex items-center gap-2"> <span class="text-[#a855f7]">&gt;</span> ${siteConfig.contact.phone} </a> </div> <!-- Social Links --> <div class="flex items-center gap-3"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#12121a] border border-[#2a2a3a] flex items-center justify-center text-[#d0d0e0] hover:text-[#a855f7] hover:border-[#a855f7]/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 rounded-lg"${addAttribute(social.label, "aria-label")}> ${social.iconType === "instagram" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>`} ${social.iconType === "facebook" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>`} ${social.iconType === "tiktok" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>`} ${social.iconType === "community" && renderTemplate`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`} ${social.iconType === "whatsapp" && renderTemplate`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>`} ${social.iconType === "email" && renderTemplate`<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`} </a>`)} </div> </div> <!-- Services Links --> <div data-animate="fade-up" data-delay="0.1"> <h3 class="text-white font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2"> <span class="text-[#a855f7] font-mono text-[11px] md:text-xs">[01]</span>
שירותים
</h3> <ul class="space-y-3"> ${footerLinks.services.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-[#d0d0e0] text-sm hover:text-[#a855f7] transition-colors flex items-center gap-2 group"> <span class="text-[#2a2a3a] group-hover:text-[#a855f7] transition-colors">›</span> ${link.label} </a> </li>`)} </ul> </div> <!-- Academy Links --> <div data-animate="fade-up" data-delay="0.15"> <h3 class="text-white font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2"> <span class="text-[#a855f7] font-mono text-[11px] md:text-xs">[02]</span>
אקדמיה
</h3> <ul class="space-y-3"> ${footerLinks.academy.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-[#d0d0e0] text-sm hover:text-[#a855f7] transition-colors flex items-center gap-2 group"> <span class="text-[#2a2a3a] group-hover:text-[#a855f7] transition-colors">›</span> ${link.label} </a> </li>`)} </ul> </div> <!-- Company Links --> <div data-animate="fade-up" data-delay="0.2"> <h3 class="text-white font-bold mb-4 text-sm uppercase tracking-wider flex items-center gap-2"> <span class="text-[#a855f7] font-mono text-[11px] md:text-xs">[03]</span>
החברה
</h3> <ul class="space-y-3"> ${footerLinks.company.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-[#d0d0e0] text-sm hover:text-[#a855f7] transition-colors flex items-center gap-2 group"> <span class="text-[#2a2a3a] group-hover:text-[#a855f7] transition-colors">›</span> ${link.label} </a> </li>`)} </ul> </div> </div> </div> <!-- Bottom Bar --> <div class="relative z-10 border-t border-[#2a2a3a]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <div class="flex flex-col sm:flex-row items-center justify-between gap-4"> <div class="flex items-center gap-2"> <span class="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse"></span> <p class="text-[#b0b0c0] text-sm font-mono">
FOCUS_AI_v2.0 &copy; ${currentYear} </p> </div> <div class="flex items-center gap-6"> <a href="/terms" class="text-[#b0b0c0] text-sm font-mono hover:text-[#a855f7] transition-colors">
[TERMS]
</a> <a href="/privacy" class="text-[#b0b0c0] text-sm font-mono hover:text-[#a855f7] transition-colors">
[PRIVACY]
</a> </div> </div> </div> </div> <!-- Decorative Glow Line --> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/50 to-transparent"></div> </footer>`;
}, "C:/sites/maderfuker/focusai-website/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b, getMailtoLink as c, getPhoneLink as g, siteConfig as s };
