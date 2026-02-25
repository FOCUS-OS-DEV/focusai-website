/**
 * Site Configuration - Centralized Constants
 * Single source of truth for all contact info, social links, and company details
 */

export const siteConfig = {
  // Company Information
  company: {
    name: "Focus AI",
    legalName: "Focus AI בע״מ",
    tagline: "מגשרים על הפער בין אנשים לטכנולוגיה",
    description: "מלווים חברות וארגונים בתהליכי טרנספורמציה דיגיטלית באמצעות הטמעת פתרונות AI ואוטומציה",
  },

  // Contact Information
  contact: {
    // Primary contact
    email: "office@focusai.co.il",
    phone: "053-946-6408",
    phoneInternational: "+972539466408",

    // WhatsApp
    whatsapp: "https://wa.me/972539466408",
    whatsappDisplay: "053-946-6408",

    // Department-specific emails
    privacyEmail: "office@focusai.co.il",
    legalEmail: "legal@focusai.co.il",
    supportEmail: "office@focusai.co.il", // Same as main for now
  },

  // Social Media Links — CANONICAL. Always use these, never hardcode elsewhere.
  social: {
    instagram: "https://www.instagram.com/focus.creative.ai?igsh=MTNocXhlZ2wxNzVocQ==",
    facebook: "https://www.facebook.com/people/Focus-AI-%D7%9E%D7%97%D7%91%D7%A8%D7%99%D7%9D-%D7%90%D7%A0%D7%A9%D7%99%D7%9D-%D7%95%D7%98%D7%9B%D7%95%D7%A0%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94/61577639435714/",
    tiktok: "https://www.tiktok.com/@focus.creative.ai?_r=1&_t=ZS-91pOOO3WDdh",
    linkedin: "#", // TBD - add when available
    whatsappCommunity: "https://did.li/Focus-community",
    youtube: "#", // TBD - add when available
  },

  // AI Tools — Focus AI branded tools
  aiTools: {
    promptMasterGpt: "https://chatgpt.com/g/g-68c7d685d6e081918de17b06b52e8a5e-focus-ai-prompt-master-v3",
    promptMasterGemini: "https://gemini.google.com/gem/16N9ZpLWbtXUJ6_RJW7z9My6xqT4zAAqZ?usp=sharing",
  },

  // Assets
  assets: {
    logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_200/v1765265415/2_fxdcio.png",
    logoAlt: "https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_200/v1765265415/2_fxdcio.png",
    cloudinaryBase: "https://res.cloudinary.com/dfudxxzlj/image/upload",
  },

  // Legal & Compliance URLs — DO NOT CHANGE without updating all references
  legal: {
    privacyPolicy: '/privacy-policy',
    terms: '/terms',
    unsubscribe: '/unsubscribe-any', // THE canonical unsubscribe URL for ALL marketing lists
  },

  // Stats (for social proof)
  stats: {
    graduates: "500+",
    organizations: "50+",
    satisfaction: "95%",
    roiDays: 30,
  },

  // Analytics & Tracking
  analytics: {
    // Google Tag Manager
    gtmId: "GTM-M33PM5WV",

    // Microsoft Clarity
    clarityId: "vddsj5y6bj",

    // Google Analytics 4 (מוגדר דרך GTM)
    ga4Id: "",

    // Meta Pixel (Facebook)
    metaPixelId: "1388659336102272",
    metaPixelIdAcademy: "801192442681278",
  },
} as const;

// Helper functions for common patterns
export const getMailtoLink = (email: string = siteConfig.contact.email) =>
  `mailto:${email}`;

export const getPhoneLink = (phone: string = siteConfig.contact.phoneInternational) =>
  `tel:${phone}`;

export const getWhatsappLink = () => siteConfig.contact.whatsapp;

// Type exports
export type SiteConfig = typeof siteConfig;
