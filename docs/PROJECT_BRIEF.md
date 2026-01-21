# Focus AI - WordPress Migration Project Brief

**Project Start Date:** 2026-01-21
**Project Manager:** Claude Code
**Status:** Phase A Complete - Discovery

---

## 1. Business Overview

**Focus AI** operates two core business lines:
1. **AI Integration Services (B2B)** - AI workshops and automation consulting for organizations
2. **AI Academy (B2C)** - Educational courses teaching practical AI skills to individuals

**Target Markets:**
- B2B: Companies seeking AI implementation, training, and automation
- B2C: Career changers, business owners, academics, and professionals wanting AI skills

---

## 2. Existing Assets Inventory

### 2.1 HTML Landing Pages (Repo)

| File | Product | Theme | Target | Key Sections |
|------|---------|-------|--------|--------------|
| `index - 2026-01-21T234540.113.html` | AI FIRST | Light | Beginners | Hero, About, Video Testimonials, Syllabus, Pricing (5 sessions, ₪1,490) |
| `index - 2026-01-21T234608.783.html` | AI READY | Light | Managers | Hero, Gallery Carousel, Similar structure (8 sessions) |
| `index - 2026-01-21T234623.573.html` | Bio/Linktree | Dark | All | Logo animation, Founders, Product Links, Social Links, Gallery |
| `index - 2026-01-21T235312.772.html` | B2B Workshops | Dark | Organizations | Hero, Audience, Syllabus, Process, Team, Testimonials, Gallery, Contact |

### 2.2 Live WordPress Pages

| URL | Purpose | Theme Style |
|-----|---------|-------------|
| `focusai.co.il/` | Main B2B service page - AI agent services | Dark glassmorphic |
| `focusai.co.il/academy/` | Academy course offerings hub | Light/gradient |

---

## 3. Brand Identity Extracted

### 3.1 Color Palette

```css
/* Primary Gradient */
--primary-purple: #a855f7; /* Tailwind purple-500 */
--primary-pink: #ec4899;   /* Tailwind pink-500 */
--neon-purple: #b86cff;
--neon-pink: #ff4fd8;

/* Dark Theme */
--bg-dark: #0a0612;
--bg-dark-alt: #1b0125;
--bg-card-dark: rgba(27, 1, 37, 0.6);

/* Light Theme */
--bg-light: #ffffff;
--bg-light-alt: #faf8ff;
--bg-purple-tint: #f3e8ff;
--bg-pink-tint: #fce7f3;

/* Text */
--text-light: #ffffff;
--text-dark: #1f2937;
--text-muted-light: #d7cdef;
--text-muted-dark: #6b7280;

/* Glass Effects */
--glass-border: rgba(185, 107, 254, 0.25);
--glass-bg: rgba(255, 255, 255, 0.1);
```

### 3.2 Typography

- **Primary Font:** Rubik (Hebrew-optimized, used on most pages)
- **Secondary Font:** Heebo (used on some newer pages)
- **Weights Used:** 300, 400, 500, 600, 700, 800, 900
- **Recommended:** Standardize on **Rubik** for consistency

### 3.3 Design Patterns

1. **Glassmorphism** - Backdrop blur, translucent backgrounds, subtle borders
2. **Gradient CTAs** - Purple-to-pink gradient buttons with glow shadows
3. **Floating Animations** - Subtle float effects on hero elements
4. **Noise Texture** - SVG noise overlay for depth
5. **Rounded Corners** - 12px-24px radius on cards, full-round on buttons

---

## 4. Common Components Identified

### 4.1 Navigation
- Sticky header with glassmorphic background
- Desktop: Horizontal pill-style links with active state
- Mobile: Full-screen drawer menu
- RTL-aware positioning

### 4.2 Hero Sections
- Full-height with gradient background orbs
- Large headline with gradient text accent
- Subheadline + dual CTAs
- Stats/badges below

### 4.3 Feature/Benefit Cards
- Icon (gradient background) + Title + Description
- Hover: border color change, subtle lift
- 3-column grid on desktop, stack on mobile

### 4.4 Pricing Cards
- Highlighted "recommended" option
- Strikethrough original price
- Feature checklist with checkmarks
- Prominent CTA button

### 4.5 Testimonials
- Video testimonials in 9:16 aspect ratio
- Lightbox for video playback
- Name badge overlay
- Text testimonials with star ratings

### 4.6 Forms
- Full name, phone, email fields
- Gradient submit button
- Integration: n8n webhooks, potential CRM

### 4.7 FAQ Accordion
- Expandable sections
- Smooth height transitions
- Plus/minus toggle icons

---

## 5. Technical Stack (Current WordPress)

### 5.1 Core
- **CMS:** WordPress
- **Page Builder:** Elementor
- **Theme:** Custom/Child theme

### 5.2 Integrations Detected
| Integration | Purpose |
|-------------|---------|
| TikTok Pixel | Analytics/Retargeting |
| Meta Pixel | Facebook tracking |
| Fixdigital | Call tracking/attribution |
| Lenis | Smooth scroll library |
| n8n Webhooks | Form processing/automation |
| WhatsApp Widget | Live chat |
| GSAP + ScrollTrigger | Animations |

### 5.3 RTL Implementation
- `dir="rtl"` on `<html>`
- `lang="he"` attribute
- Logical CSS properties (`padding-inline`, `inset-inline`)
- Isolated LTR elements where needed

---

## 6. Conversion Elements

### 6.1 CTAs Used
- "הרשמו עכשיו" (Register Now)
- "לשיחת אפיון בחינם" (Free Consultation Call)
- "הצטרפו עכשיו" (Join Now)
- "לסילבוס המלא" (Full Syllabus)
- "הזמינו סדנה" (Book Workshop)

### 6.2 Trust Elements
- Video testimonials from graduates
- Written reviews with ratings
- Client logos carousel
- Team/founders section with photos
- Process timeline visualization
- FAQ section

### 6.3 Lead Capture
- Multi-field forms (name, phone, email)
- Calendar booking integration
- WhatsApp floating button
- Multiple form placements per page

---

## 7. Project Goals

### 7.1 Primary Objectives
1. Create a unified WordPress homepage using Elementor
2. Migrate HTML landing pages into WordPress page structure
3. Establish consistent navigation across all pages
4. Maintain conversion optimization and RTL support

### 7.2 Success Criteria
- [ ] Homepage built with Elementor container-based structure
- [ ] Consistent header/footer across all pages
- [ ] Working navigation between Services and Academy
- [ ] Forms integrated with WordPress plugins (not hardcoded)
- [ ] Fast load times (<3s LCP)
- [ ] Full RTL and accessibility compliance
- [ ] SEO-optimized heading structure

---

## 8. Key Decisions Needed

1. **Theme Choice:** Use existing custom theme or switch to Starter theme (e.g., Hello Elementor)?
2. **Font Standardization:** Rubik vs. Heebo - recommend Rubik for Hebrew
3. **Form Plugin:** Elementor Forms vs. WPForms vs. Gravity Forms
4. **Color Theme for Homepage:** Dark (like main site) or Light (like academy)?
5. **Navigation Structure:** Mega menu for Academy courses?

---

## 9. Next Steps

1. ~~Phase A1: Repo analysis~~ (Complete)
2. ~~Phase A2: WordPress analysis~~ (Complete)
3. **Phase B:** Define sitemap and navigation architecture
4. **Phase C:** Homepage Elementor build specification
5. **Phase D:** Migration of HTML landing pages
6. **Phase E:** Quality, performance, launch

---

*Document created: 2026-01-21*
*Last updated: 2026-01-21*
