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
    privacyEmail: "privacy@focusai.co.il",
    legalEmail: "legal@focusai.co.il",
    supportEmail: "office@focusai.co.il", // Same as main for now
  },

  // Social Media Links
  social: {
    instagram: "https://www.instagram.com/focus.ai.il",
    facebook: "https://www.facebook.com/focusai.co.il",
    tiktok: "https://www.tiktok.com/@focus.ai.il",
    linkedin: "#", // TBD - add when available
    whatsappCommunity: "https://chat.whatsapp.com/HvcdO9wzJN7J8G4B632bZn?mode=gi_t",
  },

  // Assets
  assets: {
    logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_200/v1765265415/2_fxdcio.png",
    logoAlt: "https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_200/v1765265415/2_fxdcio.png",
    cloudinaryBase: "https://res.cloudinary.com/dfudxxzlj/image/upload",
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
