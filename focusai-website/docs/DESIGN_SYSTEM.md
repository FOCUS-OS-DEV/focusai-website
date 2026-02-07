# Focus AI Website - Design System Documentation

> **Version:** 1.0.0
> **Last Updated:** 2026-02-06
> **Status:** Production

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Business Model & User Journeys](#2-business-model--user-journeys)
3. [Design Philosophy](#3-design-philosophy)
4. [Color System](#4-color-system)
5. [Typography](#5-typography)
6. [Component Architecture](#6-component-architecture)
7. [Layout System](#7-layout-system)
8. [Animation System](#8-animation-system)
9. [Information Architecture](#9-information-architecture)
10. [Technical Stack](#10-technical-stack)
11. [Deployment Architecture](#11-deployment-architecture)

---

## 1. Project Overview

### About Focus AI

Focus AI is an **Israeli AI transformation consultancy** providing:
- Professional AI training (Academy)
- B2B consulting and integration services
- AI agents and automation solutions

### Website Purpose

The website serves as the primary digital presence for Focus AI, designed to:
1. **Convert B2B leads** - Organizations seeking AI transformation
2. **Recruit Academy students** - Individuals wanting professional AI training
3. **Build brand authority** - Position Focus AI as industry leaders
4. **Showcase expertise** - Demonstrate capabilities through case studies

### Domain
- **Production:** https://focusai.co.il
- **Language:** Hebrew (RTL)
- **Target Market:** Israel

---

## 2. Business Model & User Journeys

### Revenue Mix

| Stream | Percentage | Products |
|--------|------------|----------|
| Academy | ~70% | Bot-Camp, AI Ready, AI First |
| B2B Services | ~30% | Consulting, AI Agents, Automations |

### Target Segments

| Segment | Size | Need | Budget |
|---------|------|------|--------|
| SMB | 5-50 employees | AI agent, basic automation | ₪5,000-30,000 |
| Mid-Market | 50-500 employees | Full strategy + implementation | ₪30,000-150,000 |
| Enterprise | 500+ employees | Complex projects, SLA | ₪100,000+ |

### User Journey A: B2B Services

```
Landing → Problem Recognition → Solution Discovery →
Case Studies → Free Consultation → Proposal → Project
```

### User Journey B: Academy

```
Landing → Learning Goal → Course Comparison →
Value Understanding → Registration/Consultation → Enrollment
```

---

## 3. Design Philosophy

### Theme: "Cyberpunk Terminal"

The website uses a **dark cyberpunk aesthetic** with:
- Terminal/HUD interface elements
- Glowing neon accents (purple-based)
- Tech-forward visual language
- Professional but edgy

### Design Principles

1. **Tech-Forward** - Visual language that says "we know AI"
2. **Professional** - Trustworthy, not gimmicky
3. **RTL-Native** - Built for Hebrew from the ground up
4. **Accessible** - WCAG 2.1 AA compliance
5. **Performance** - Fast loading, smooth animations

### Visual Elements

| Element | Usage |
|---------|-------|
| Terminal Headers | Section/card headers with traffic light dots |
| Clip-path Chamfers | Cyberpunk corner cuts on cards |
| Scan Lines | Subtle overlay effect on body |
| Grid Patterns | Background decoration |
| Glow Effects | Hover states, CTAs |
| Fingerprint Watermark | Background brand element |

---

## 4. Color System

### Brand Palette

```css
/* Primary - Purple Based */
--color-brand-primary: #a855f7;    /* Focus AI Purple */
--color-brand-light: #c084fc;      /* Lighter purple */
--color-brand-dark: #7c3aed;       /* Darker purple */

/* Accent Colors */
--color-accent-magenta: #e879f9;   /* Services */
--color-accent-cyan: #06b6d4;      /* Info/Links */
--color-accent-green: #22c55e;     /* Success */
--color-accent-yellow: #eab308;    /* Warning */
--color-accent-red: #ef4444;       /* Error/Danger */
--color-accent-pink: #ff3366;      /* Alerts */
```

### Background Colors

```css
--color-bg-void: #0a0a0f;          /* Deep void - page bg */
--color-bg-card: #12121a;          /* Card background */
--color-bg-muted: #1a1a24;         /* Elevated surfaces */
--color-bg-elevated: #1e1e28;      /* Hover states */
```

### Text Colors

```css
--color-text-primary: #f5f5fa;     /* Main text - bright white */
--color-text-secondary: #d0d0e0;   /* Secondary text */
--color-text-muted: #b0b0c0;       /* Muted text */
--color-text-dim: #6a6a80;         /* Dim text */
```

### Border Colors

```css
--color-border-subtle: #2a2a3a;    /* Default borders */
--color-border-medium: #3a3a4a;    /* Emphasized borders */
--color-border-glow: rgba(168, 85, 247, 0.3);
```

### Glow Effects

```css
/* Purple Glow - Primary */
--glow-primary: 0 0 10px #a855f7, 0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3);
--glow-primary-sm: 0 0 5px #a855f7, 0 0 10px rgba(168, 85, 247, 0.4);
--glow-primary-lg: 0 0 20px #a855f7, 0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3);
```

---

## 5. Typography

### Font Families

| Font | Usage | Weight |
|------|-------|--------|
| **Orbitron** | Display headings, hero text | 400-900 |
| **JetBrains Mono** | Terminal text, badges, labels | 400-700 |
| **Rubik** | Body text, paragraphs | 400-900 |

### Type Scale

```css
/* Hero Heading */
.heading-hero {
  font-family: Orbitron;
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
}

/* Large Heading */
.heading-large {
  font-family: Orbitron;
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 800;
}

/* Section Heading */
.heading-medium {
  font-family: Orbitron;
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 700;
}

/* Terminal/Badge Text */
.text-terminal {
  font-family: JetBrains Mono;
  font-size: 0.75rem-0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
```

### Text Effects

```css
/* Gradient Text */
.gradient-text-glow {
  background: linear-gradient(90deg, #a855f7, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5));
}

/* Neon Glow Text */
.text-neon {
  color: #a855f7;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3);
}
```

---

## 6. Component Architecture

### Layout Components

| Component | File | Purpose |
|-----------|------|---------|
| BaseLayout | `layouts/BaseLayout.astro` | Main HTML wrapper, meta, scripts |
| Header | `components/Header.astro` | Navigation, mobile menu |
| Footer | `components/Footer.astro` | Links, social, legal |

### Page Section Components

| Component | File | Purpose |
|-----------|------|---------|
| HeroSection | `components/HeroSection.tsx` | Hero with Chavobot, stats |
| ClientLogos | `components/ClientLogos.tsx` | Infinite scroll logo carousel |
| StorySection | `components/StorySection.astro` | Problem/Solution/Proof narrative |
| AcademyPreview | `components/AcademyPreview.astro` | Course cards |
| ServicesPreview | `components/ServicesPreview.astro` | B2B services + process |
| Testimonials | `components/Testimonials.astro` | Video + text testimonials |
| WhatsAppCommunity | `components/WhatsAppCommunity.astro` | Community CTA |
| TeamFounders | `components/TeamFounders.astro` | Founder profiles |
| CTAContact | `components/CTAContact.astro` | Contact form |
| CookieConsent | `components/CookieConsent.astro` | GDPR banner |

### UI Components (Aceternity)

| Component | File | Usage |
|-----------|------|-------|
| Spotlight | `components/ui/spotlight.tsx` | Card hover effects |
| TextGenerateEffect | `components/ui/text-generate-effect.tsx` | Text reveal |
| MovingBorder | `components/ui/moving-border.tsx` | Animated button borders |
| BackgroundGradient | `components/ui/background-gradient.tsx` | Animated gradients |
| Sparkles | `components/ui/sparkles.tsx` | Particle effects |
| Highlight | `components/ui/highlight.tsx` | Text highlights |
| AnimatedBeam | `components/ui/animated-beam.tsx` | Light beams |

### Component Design Patterns

#### Terminal Card Pattern

```html
<div class="relative bg-[#12121a] border border-[#2a2a3a]"
     style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));">
  <!-- Terminal header -->
  <div class="flex items-center justify-between px-6 py-3 border-b border-[#2a2a3a] bg-[#0a0a0f]/50">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-[#ff3366]"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-[#ffff00]"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></span>
    </div>
    <span class="font-mono text-xs text-[#b0b0c0] tracking-wider">SECTION_ID</span>
  </div>
  <!-- Content -->
  <div class="p-6 lg:p-8">
    ...
  </div>
</div>
```

#### Corner Accents Pattern

```html
<div class="relative">
  <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#a855f7]/50"></div>
  <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#a855f7]/50"></div>
  <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#a855f7]/50"></div>
  <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#a855f7]/50"></div>
</div>
```

#### Badge/Tag Pattern

```html
<div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#a855f7]/30">
  <span class="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse"></span>
  <span class="font-mono text-sm font-semibold text-[#a855f7] uppercase tracking-[0.15em]">BADGE_TEXT</span>
</div>
```

---

## 7. Layout System

### Container

```css
.container {
  max-width: 80rem;  /* 1280px */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
```

### Breakpoints (Tailwind)

| Breakpoint | Prefix | Size | Target |
|------------|--------|------|--------|
| Mobile | (default) | < 640px | Phones |
| Small | `sm:` | >= 640px | Large phones |
| Medium | `md:` | >= 768px | Tablets |
| Large | `lg:` | >= 1024px | Small laptops |
| XL | `xl:` | >= 1280px | Desktops |
| 2XL | `2xl:` | >= 1536px | Large screens |

### Section Spacing

```css
--space-section: clamp(6rem, 15vw, 12rem);

.section-padding {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}
```

### Grid Patterns

```css
/* 3-column service cards */
.grid lg:grid-cols-3 gap-6

/* 2-column story layout */
.grid lg:grid-cols-2 gap-12 lg:gap-20

/* 4-step process */
.grid sm:grid-cols-2 lg:grid-cols-4 gap-6

/* 6-column video testimonials */
.grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4
```

---

## 8. Animation System

### Libraries

| Library | Purpose |
|---------|---------|
| **GSAP + ScrollTrigger** | Scroll-based animations |
| **Framer Motion** | React component animations |
| **Lenis** | Smooth scrolling |
| **CSS Animations** | Simple hover effects |

### GSAP Animation Triggers

```javascript
// Fade Up Animation
gsap.fromTo(element,
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Data attributes for animations
data-animate="fade-up"
data-animate="fade-right"
data-animate="fade-left"
```

### CSS Animations

```css
/* Pulse Neon */
@keyframes pulse-neon {
  0%, 100% { box-shadow: var(--glow-primary); }
  50% { box-shadow: var(--glow-primary-lg); }
}

/* Floating */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Scan Line */
@keyframes scanMove {
  0% { top: -2px; }
  100% { top: 100%; }
}

/* Blink (cursor) */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. Information Architecture

### Site Map

```
/                         Homepage
├── /about                About Focus AI
├── /services             Services Overview
│   ├── /services/strategy     Strategic Consulting
│   ├── /services/development  Development & Integration
│   └── /services/ai-agents    AI Agents
├── /academy              Academy Landing (planned)
│   ├── /academy/bot-camp      Bot-Camp Course
│   ├── /academy/ai-ready      AI Ready Course
│   └── /academy/ai-first      AI First Course
├── /sadnaot              Organizational Workshops
├── /tools                AI Tools Directory
├── /blog                 Blog Index
│   └── /blog/[slug]      Individual Posts
├── /privacy              Privacy Policy
└── /terms                Terms of Service
```

### Navigation Structure

**Desktop Nav:**
```
Logo | Academy (dropdown) | Services (dropdown) | Workshops | Tools | Blog | About | CTA Button
```

**Academy Dropdown:**
- AI Ready - "יסודות AI לאנשי מקצוע"
- Bot-Camp - "מפתחי אוטומציות וסוכני AI"
- AI First - "מובילי טרנספורמציה בארגונים"

**Services Dropdown:**
- Strategy - "גיבוש אסטרטגיית AI לארגון"
- Development - "פתרונות AI מותאמים אישית"
- AI Agents - "בוטים ונציגים חכמים לעסקים"

---

## 10. Technical Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 5.x | SSG Framework |
| React | 19.x | Interactive components |
| Tailwind CSS | 4.x | Styling |
| TypeScript | - | Type safety |

### Animation Libraries

| Library | Purpose |
|---------|---------|
| GSAP | Scroll animations |
| ScrollTrigger | Scroll-based triggers |
| Framer Motion | React animations |
| Lenis | Smooth scrolling |

### Build & Dev

| Tool | Purpose |
|------|---------|
| Vite | Dev server & bundler |
| Sharp | Image optimization |
| astro-icon | Icon components |
| @astrojs/sitemap | SEO sitemap |

### External Services

| Service | Purpose |
|---------|---------|
| Cloudinary | Image CDN |
| n8n Webhooks | Form submissions |
| CookieScript | GDPR consent |

---

## 11. Deployment Architecture

### Build Pipeline

```
npm run build → dist/ → cPanel FTP → Live
```

### Critical Rules

1. **Static Only** - No Node.js on server
2. **SSG Only** - No SSR
3. **No API Routes** - Use external webhooks
4. **All Libraries Must Compile** - To static HTML/CSS/JS

### Pre-deployment Checklist

- [ ] `npm run build` succeeds
- [ ] No Node.js dependencies at runtime
- [ ] All images optimized
- [ ] SEO meta tags present
- [ ] Sitemap generated
- [ ] Mobile responsive tested
- [ ] RTL layout verified

---

## Appendix: Data Files

### Configuration Files

| File | Purpose |
|------|---------|
| `src/data/config.ts` | Site-wide constants |
| `src/data/team.ts` | Team/instructor data |
| `src/data/index.ts` | Data exports |

### Key Data Structures

**siteConfig** - Contact info, social links, assets
**founders** - Shahar & Unil profiles
**companyValues** - Core value propositions

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02-06 | Initial design system documentation |
