# Focus AI Website - System Prompt

> This file contains all instructions and context for Claude Code.
> **Last Updated:** 2026-02-27

---

## ⚠️ Canonical Links — SINGLE SOURCE OF TRUTH

> All links live in `src/data/config.ts`.
> **Astro components**: import via `siteConfig`. **Standalone HTML pages**: copy exact values from this table — NEVER invent or guess a URL.

### Contact
| Key | Value |
|-----|-------|
| `contact.email` | `office@focusai.co.il` |
| `contact.phone` | `053-946-6408` |
| `contact.whatsapp` | `https://wa.me/972539466408` |

### Social Media
| Key | Value |
|-----|-------|
| `social.instagram` | `https://www.instagram.com/focus.creative.ai?igsh=MTNocXhlZ2wxNzVocQ==` |
| `social.facebook` | `https://www.facebook.com/people/Focus-AI-%D7%9E%D7%97%D7%91%D7%A8%D7%99%D7%9D-%D7%90%D7%A0%D7%A9%D7%99%D7%9D-%D7%95%D7%98%D7%9B%D7%95%D7%A0%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94/61577639435714/` |
| `social.tiktok` | `https://www.tiktok.com/@focus.creative.ai?_r=1&_t=ZS-91pOOO3WDdh` |
| `social.whatsappCommunity` | `https://did.li/Focus-community` |

### Legal (DO NOT CHANGE)
| Key | Value |
|-----|-------|
| `legal.unsubscribe` | `/unsubscribe-any` — **THE ONLY unsubscribe URL** for all lists |
| `legal.privacyPolicy` | `/privacy-policy` |
| `legal.terms` | `/terms` |

### AI Tools
| Key | Value |
|-----|-------|
| `aiTools.promptMasterGpt` | `https://chatgpt.com/g/g-68c7d685d6e081918de17b06b52e8a5e-focus-ai-prompt-master-v3` |
| `aiTools.promptMasterGemini` | `https://gemini.google.com/gem/16N9ZpLWbtXUJ6_RJW7z9My6xqT4zAAqZ?usp=sharing` |

```ts
// Astro components
import { siteConfig } from '@/data/config';
const { social, contact, legal, aiTools } = siteConfig;
```

---

## Quick Links

- [Business Model](../memory/focusai-business-model.md) - Company intel & user journeys
- [Assets Library](../memory/focusai-assets.md) - All Cloudinary asset references
- [Deployment Flow](../memory/deployment-workflow.md) - cPanel deployment process

---

## Project Summary

**Focus AI** - Israeli AI transformation consultancy website.

| Attribute | Value |
|-----------|-------|
| Domain | focusai.co.il |
| Theme | **Apple Glassmorphism + Cyberpunk** (dark, purple neon, glass cards) |
| Slogan | **Your AI Partner** |
| Language | Hebrew (RTL native) |
| Framework | Astro 5.x (SSG only!) + React 19.x (islands) |
| Styling | Tailwind CSS 4.x |
| User Pref | **תענה בעברית** (respond in Hebrew) |

---

## Current Design Theme (Updated 2026-02-11)

### Apple Glassmorphism + Cyberpunk

```
Background:    #0a0a0f (deep void)
Cards:         bg-white/[0.03] backdrop-blur-xl (glassmorphism)
Card Border:   border-white/[0.08]
Card Radius:   rounded-2xl (NO clip-path chamfered corners!)
Primary:       #a855f7 (purple)
Accent:        #c084fc (light purple)
Text Primary:  #f5f5fa (bright white)
Text Secondary:#9090a8 (muted)
Text Tertiary: #b0b0c0 (labels)
```

### CRITICAL Design Rules

- **NO traffic light dots** (red/yellow/purple trio) - REMOVED! Use single purple pulse dot instead
- **NO clip-path chamfered corners** - use `rounded-2xl` / `rounded-xl`
- **NO badges above hero title** - user rejected this pattern
- Glass headers use: single purple pulse dot + subtle mono label
- Desktop zoom: `zoom: 0.85` on html for 1024px+
- Body fingerprint watermark: fixed, z-index 0, pointer-events none

---

## Tech Stack

```
Framework:      Astro 5.x (SSG only - NO SSR!)
Styling:        Tailwind CSS 4.x
Interactivity:  React 19.x (islands - minimal usage)
Animations:     GSAP + ScrollTrigger (deferred loading)
Smooth Scroll:  Lenis (deferred with requestIdleCallback)
Icons:          Inline SVGs (no icon library)
Images:         Cloudinary CDN + Sharp
Analytics:      GTM (GTM-M33PM5WV) + Microsoft Clarity (vddsj5y6bj)
Forms:          N8N Webhooks (AJAX) → CRM
```

---

## Business Model (CRITICAL)

Focus AI is **NOT just a training company**. Full-service AI consultancy:
- **70%** Academy (courses)
- **30%** B2B Services (consulting, integration)

### Two User Journeys
1. **B2B Path**: Organizations wanting AI transformation → `/ai-agents`
2. **Academy Path**: Individuals wanting AI training → `/academy`

### Core Services
1. Strategic Consulting
2. AI Agents & Bots
3. Automations (N8N, Make, Zapier)
4. Dashboards & Analytics
5. Academy (Bot-Camp, AI First)

### Differentiators
- Learn from practitioners (not theorists)
- Academic backing (University of Haifa, Technion)
- 2-3 instructors per session
- 30-day proven ROI
- Active alumni community

---

## Project Structure

```
focusai-website/
├── src/
│   ├── components/
│   │   ├── Header.astro                 # Glassmorphism floating nav
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro            # Hero (Pure Astro+CSS, NO React!)
│   │   ├── Preloader.astro              # Site preloader with progress bar
│   │   ├── AcademyPreview.astro         # Course cards (homepage)
│   │   ├── AcademyIntro.astro           # Academy intro section
│   │   ├── ServicesPreview.astro         # Services grid
│   │   ├── StorySection.astro           # Problem/Solution/Proof
│   │   ├── Testimonials.astro           # Text testimonials
│   │   ├── VideoTestimonials.astro      # Video testimonial 3D carousel + lightbox
│   │   ├── PhoneTestimonials.astro      # Phone screenshot testimonials
│   │   ├── StudentTestimonials.astro    # Student feedback
│   │   ├── CTAContact.astro             # Contact form CTA
│   │   ├── ClientLogosCarousel.astro    # Logo infinite carousel
│   │   ├── ClientLogosGrid.astro        # Logo grid (static)
│   │   ├── TechLogosMarquee.astro       # Tech logos scroll
│   │   ├── LearningPortal.astro         # Learning portal showcase
│   │   ├── SocialCommunity.astro        # Social/community CTA
│   │   ├── TerminalTypewriter.astro     # Reusable typewriter effect
│   │   ├── TerminalText.tsx             # Terminal text (React, legacy)
│   │   ├── WhatsAppFloat.astro          # Floating WhatsApp button
│   │   ├── WhatsAppCommunity.astro      # WhatsApp community CTA
│   │   ├── BackToTop.astro              # Back to top button
│   │   ├── CookieConsent.astro          # GDPR cookie consent
│   │   ├── VideoPopup.astro             # Video popup (session-based)
│   │   ├── Analytics.astro              # GTM + Clarity (head)
│   │   ├── AnalyticsBody.astro          # GTM noscript (body)
│   │   ├── Breadcrumbs.astro            # SEO breadcrumbs
│   │   ├── RelatedContent.astro         # Related articles
│   │   ├── SyllabusGate.tsx             # Form gate (React)
│   │   └── SyllabusViewer.tsx           # Gallery viewer (React)
│   ├── content/
│   │   └── ai-news/                     # Blog articles (Markdown)
│   ├── data/
│   │   ├── config.ts                    # Site constants (contact, social, analytics)
│   │   ├── clients.ts                   # Client logos data
│   │   ├── team.ts                      # Founders data
│   │   └── index.ts
│   ├── layouts/
│   │   └── BaseLayout.astro             # Base HTML layout + SEO + Schema.org + noindex support
│   ├── pages/                           # Routes (see Page Routes below)
│   └── styles/
│       └── global.css                   # Global styles + Tailwind imports
├── public/
│   ├── .htaccess                        # Apache security headers
│   ├── robots.txt
│   └── favicon files
└── CLAUDE.md                            # This file
```

---

## Page Routes

### Marketing Pages (BaseLayout)
| Route | Description |
|-------|-------------|
| `/` | Homepage - hero, services, academy preview, testimonials |
| `/about` | About page - founders, mission, partners |
| `/academy` | Bot-Camp course page (main academy landing) |
| `/ai-agents` | AI Agents service page |
| `/ai-workshop` | AI Workshops page |
| `/ai-news` | Blog index - AI news articles (14 articles) |
| `/ai-news/[slug]` | Blog article pages |
| `/tools` | AI Tools directory |
| `/careers` | Careers/jobs page |
| `/services/strategy` | Strategic consulting |
| `/services/ai-agents` | AI agents service detail |
| `/services/development` | Development services |

### Standalone Pages (own HTML, no BaseLayout)
| Route | Description |
|-------|-------------|
| `/ai-fullstack` | AI Fullstack Builder course landing page |
| `/webinar-n8n-agent` | Webinar: Build first AI agent with N8N |
| `/content-automation-course` | Free course: Content automation with AI |
| `/content-automation-watch` | Watch content automation webinar |
| `/וובינר-במתנה-סוכני-בינה-מלאכותית` | Hebrew webinar: AI agents guide |
| `/צפייה-בוובינר-בניית-סוכן-GPTS` | Watch: Building a GPTs agent |

### Utility Pages (noindex)
| Route | Description |
|-------|-------------|
| `/privacy-policy` | Privacy policy (noindex) |
| `/terms` | Terms of service (noindex) |
| `/404` | Not found page (noindex) |
| `/academy/thank-you` | Form submission thank-you |
| `/webinar-n8n-thank-you` | Webinar registration thank-you |
| `/unsubscribe-any` | Universal unsubscribe |
| `/links` | Linktree-style social links |
| `/bot-camp-syllabus` | Syllabus download gate |

### Draft Pages (not routed)
| Route | Description |
|-------|-------------|
| `/academy/_drafts/ai-ready` | AI Ready course (REMOVED from site) |
| `/academy/_drafts/ai-first` | AI First course |

### Important Route Notes

- **Blog path is `/ai-news/`** (NOT `/blog/`) — collection folder is `content/ai-news/`
- **Standalone pages** MUST include Analytics + AnalyticsBody components
- **AI First card** is hidden on mobile in homepage (`hidden lg:block`)
- **Redirects** configured in astro.config.mjs: `/ai-tools` → `/tools`, `/services/ai-agents` → `/ai-agents`

---

## Navigation Structure

```
Header navLinks:
├── בית (/)
├── אקדמיה (/academy) ← dropdown
│   └── Bot-Camp (/academy)
├── סוכני AI (/ai-agents)
├── סדנאות (/ai-workshop)
├── חדשות AI (/ai-news)
├── וובינרים והדרכות (#) ← dropdown
│   ├── וובינר Live: סוכן AI ב-N8N (/webinar-n8n-agent)
│   ├── הדרכה: סוכני AI (/וובינר-במתנה-סוכני-בינה-מלאכותית/)
│   └── הדרכה: אוטומציית תוכן (/content-automation-course)
├── כלי AI (/tools) ← dropdown
│   ├── מרכז הכלים (/tools)
│   ├── Prompt Master V3 (external GPT)
│   └── Prompt Master Gemini (external Gem)
├── דרושים (/careers)
└── אודות (/about)
```

---

## Hero Section Architecture

The hero (`HeroSection.astro`) is **pure Astro + CSS** - no React, no Framer Motion (~308KB saved).

### Key Elements
- **Floating particles**: CSS-only, `text-white/40` with purple glow `text-shadow`, font-size 13-16px
- **Typewriter effect**: Vanilla JS, 16 messages, random start index
- **Typewriter timing**: type=50ms, delete=30ms, **pause=3500ms**, gap=200ms
- **"Your AI Partner"**: Displayed as subtitle under "Focus AI" (`font-mono text-[#9090a8]/70`)
- **CTA buttons**: "אקדמיה" → `/academy`, "פיתוח מערכות" → `/ai-agents`
- **Chavobot mascot**: Responsive with srcset (420w mobile, 800w desktop)
- **Scroll fade**: DISABLED - hero stays fully visible when scrolling
- **Fingerprint**: Decorative background image behind text, opacity 0.15

---

## Blog System (LIVE)

### Architecture
- Content collection: `src/content/ai-news/` (collection name: `ai-news`)
- URL path: **`/ai-news/`** (NOT `/blog/`)
- Schema: `content.config.ts` defines title, description, pubDate, heroImage, author, category, tags, ctaType, difficulty
- Categories: `news` | `guide` | `tutorial`
- Template: `pages/ai-news/[...slug].astro` with glassmorphism CTA banners
- Blog index: `pages/ai-news/index.astro` - fully clickable cards, newsletter form with webhook
- Terminology: "כתבות" (NOT "מאמרים" or "בלוג")

### Existing Articles (14)
| Slug | Title | CTA |
|------|-------|-----|
| `openai-100b-funding` | 100 מיליארד דולר ל-OpenAI | Bot-Camp |
| `claude-opus-4-6` | Claude Opus 4.6 - חשיבה אדפטיבית | Bot-Camp |
| `ai-agents-revolution-2026` | מהפכת סוכני ה-AI 2026 | Bot-Camp |
| `n8n-funding-ai-automation` | n8n גייסה 180 מיליון דולר | Bot-Camp |
| `what-is-ai-agent` | מה זה סוכן AI | Bot-Camp |
| `openai-frontier-enterprise-ai` | OpenAI Frontier לארגונים | Consulting |
| `prompt-engineering-guide` | מדריך פרומפט אנג'ינירינג | Bot-Camp |
| `automation-examples` | דוגמאות אוטומציה | Bot-Camp |
| `top-10-ai-tools-2025` | 10 כלי AI מובילים | Bot-Camp |
| `google-ai-transformation-2026` | גוגל כבר לא מנוע חיפוש - חברת תשתיות AI | Consulting |
| `anthropic-claude-cowork-enterprise-agents` | Anthropic תוקפת את שוק הארגונים | Consulting |
| `ai-agents-adoption-2026-state-of-market` | מצב שוק סוכני ה-AI ב-2026 | Agents |
| `copilot-presentations-professional-translation` | Copilot Presentations - תרגום מקצועי | Bot-Camp |
| `notebooklm-presentation-editing` | NotebookLM - עריכת מצגות | Bot-Camp |

### CTA Banner System
- Glassmorphism HTML banners (NOT image CTAs)
- Per-article CTA type via `ctaType` frontmatter: `botcamp` / `agents` / `consulting`
- NO arrows in buttons
- CSS in `[...slug].astro`: `.blog-cta-banner`, `.cta-badge`, `.cta-title`, `.cta-desc`, `.cta-tags`, `.cta-button`

### Content Agent
Custom agent at `.claude/agents/content-from-url.md` for creating blog articles from source URLs.

### Article Template Pattern
- Hebrew content, 800-1500 words
- Include CTA banner (glassmorphism HTML block)
- End with CTA to Focus AI services
- Tags for filtering
- Hero images via Cloudinary (generated with Gemini API)

---

## Component Patterns

### Glass Card (Current Standard)

```html
<div class="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
  <!-- Glass header (optional) -->
  <div class="px-6 py-3 border-b border-white/[0.06] bg-white/[0.03] backdrop-blur-sm rounded-t-2xl">
    <span class="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse"></span>
    <span class="font-mono text-xs text-[#b0b0c0]/60">Label</span>
  </div>
  <div class="p-6">Content</div>
</div>
```

### Badge/Tag (Current Standard)

```html
<div class="inline-flex items-center gap-3 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-2">
  <span class="w-1.5 h-1.5 bg-[#a855f7] animate-pulse rounded-full"></span>
  <span class="text-xs text-[#a855f7] uppercase tracking-[0.15em]">TEXT</span>
</div>
```

### Section Title

```html
<h2 class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white">
  כותרת <span class="text-[#a855f7]">מודגשת</span>
</h2>
```

### TerminalTypewriter Usage

```astro
<TerminalTypewriter
  id="unique-id"
  texts={["message 1", "message 2", "..."]}
/>
```
Timing: type 55ms, delete 25ms, pause 3500ms, gap 300ms.

---

## Media Optimization (CRITICAL)

### Cloudinary URL Pattern

```
https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_WIDTH/vXXXXX/filename.jpg
```

**ALWAYS add `q_auto,f_auto` transforms!**

### Recommended Widths

| Use Case | Width |
|----------|-------|
| Hero/Full-width | `w_1200` |
| Large images | `w_900` |
| Chavobot/Mascot | `w_800` (desktop), `w_420` (mobile via srcset) |
| Classroom/Academy | `w_700` |
| Testimonial screenshots | `w_300` |
| Founder photos | `w_400` |
| Logos | `w_200` |
| Badges/Small | `w_120` |
| Decorative fingerprints | `w_400` |

### Video Poster Pattern

```
https://res.cloudinary.com/dfudxxzlj/video/upload/so_0.1,w_400,h_710,c_fill,q_auto,f_jpg/vXXXXX/video.jpg
```

### Preconnect (in BaseLayout)

```html
<link rel="preconnect" href="https://res.cloudinary.com" crossorigin>
<link rel="dns-prefetch" href="https://res.cloudinary.com">
```

---

## Responsive Design

| Device | Prefix | Notes |
|--------|--------|-------|
| Mobile | (default) | 1 column, touch targets 44px+, `clamp()` typography |
| Tablet | `md:` | 2 columns |
| Desktop | `lg:` | 3-4 columns, `zoom: 0.85` on html |

### Mobile-Specific Rules
- AI First card hidden on mobile homepage (`hidden lg:block`)
- Phone testimonial images: `w_300` (not `w_500`)
- Hero chavobot: `max-w-[420px]` on mobile
- All headings use `clamp()` for fluid sizing

---

## iOS Video Playback (CRITICAL - Read Before Touching Video Code)

### The Problem (Discovered 2026-02-15)

iOS Safari **blocks video playback** when ANY of these patterns are used:

1. **`video.play()` inside `setTimeout`** - breaks the "user gesture chain". iOS requires `play()` to be called **synchronously** within a user tap/click handler. Even `setTimeout(fn, 0)` breaks it.
2. **Setting `video.src` via JavaScript + calling `play()`** - dynamically loading video src and then calling play() programmatically fails on iOS even in a click handler, because the video isn't ready.
3. **Lazy loading video src via JS (`data-src` → `video.src`)** - this pattern worked on desktop but consistently failed on iOS Safari across all pages.

### What DOES Work on iOS

- **Direct `src` attribute in HTML** (`<video src="...">`) - always works
- **`preload="metadata"` or `preload="none"`** with direct src - both work
- **Native browser controls** (`controls` attribute) - user taps the native play button, iOS handles it
- **`playsinline` + `webkit-playsinline`** - required for inline playback (without these, iOS opens fullscreen player)

### The Solution: Poster Images + Lightbox Pattern

The current `VideoTestimonials.astro` uses this architecture:

```
CAROUSEL (no video elements at all):
├── Poster images (<img>) for each testimonial
├── Transform-based 3D positioning (center large, sides small)
├── Click center card → opens lightbox
└── Click side card → navigates to center

LIGHTBOX (pre-rendered video elements in HTML):
├── ALL videos pre-rendered with direct src in HTML (not added via JS!)
├── preload="none" (no bandwidth until user interacts)
├── Native controls (user taps play themselves)
├── display:none → display:block toggle (class-based, not hidden attr)
└── NO JavaScript play() calls anywhere
```

### Rules for Future Video Work

1. **NEVER use `video.play()` in JavaScript** - always let the user tap native controls
2. **NEVER lazy-load video src via JS** (`data-src` pattern) - always put `src` directly in HTML
3. **NEVER use `setTimeout` before `play()`** - this breaks iOS user gesture chain
4. **ALWAYS include `playsinline webkit-playsinline`** on video elements
5. **ALWAYS include `controls`** on video elements the user should play
6. **ALWAYS include `controlslist="nodownload"`** to prevent download button
7. **Use `preload="none"`** for off-screen videos to save bandwidth
8. **Pre-render all video elements in HTML** - even if hidden, the src must be in the HTML source
9. **Use class toggling** (not `hidden` attribute) for show/hide - `hidden` has `display:none !important` which can't be overridden with CSS

---

## Video Popup System (Learning Portal Showcase)

### Architecture
- **Component:** `VideoPopup.astro` (replaces PromoPopup in BaseLayout)
- **PromoPopup** was removed during 2026-02-27 cleanup (dead code)
- **Video URL:** `https://res.cloudinary.com/dfudxxzlj/video/upload/q_auto/v1772129607/IMG_7879_jz34kj.mp4`
- **Poster:** Auto-generated from Cloudinary video-to-image transform

### Behavior
- Shows after **5 seconds** delay on first visit (session-based)
- Session key: `focus_video_popup_shown` (also sets `focus_promo_shown` to block PromoPopup)
- Excluded pages: campaign pages, thank-you pages
- Close: X button, "לא עכשיו" button, click outside, Escape key
- Video pauses on close
- `document.body.overflow = hidden` while open (prevents background scroll)

### Performance Rules for Video Popups
1. **`preload="none"`** — no video data downloads until user presses play
2. **Poster image** from Cloudinary video transform (lightweight JPG)
3. **Direct `src` in HTML** — no lazy-loading via JS (iOS-safe)
4. **No autoplay** — user initiates playback via native controls
5. **`playsinline webkit-playsinline`** — required for iOS inline playback
6. **`controlslist="nodownload"`** — prevents download button
7. **z-index: 60** — above PromoPopup (55) to ensure priority if both loaded

### Mobile-First Layout
- Card max-width: 340px (mobile) → 400px (desktop)
- Video max-height: 58vh (mobile) → 65vh (desktop) → 50vh (small phones)
- Landscape mode: condensed layout, description hidden
- Close button: 40x40 (mobile) → 44x44 (desktop) — meets tap target requirements

---

## Animation System

### GSAP (Deferred)
```javascript
data-animate="fade-up"
data-animate="fade-right"
data-animate="fade-left"
```
Loaded via `requestIdleCallback` to avoid blocking.

### CSS Animations
- `.animate-pulse` - pulsing glow (purple dot)
- Hero particles: `@keyframes heroFloat` (CSS-only)
- Hero entrance: `@keyframes heroFadeUp` with staggered delays
- Typewriter cursor: `@keyframes heroBlink`

### Performance Notes
- Prefer `transform` and `opacity` for animations (GPU composited)
- Avoid animating `width`, `box-shadow`, `background-position` (non-composited)
- Shimmer effects should use `translateX` not `background-position`

---

## Brand Writing (CRITICAL)

Full guide: `.claude/skills/copywriting/SKILL.md` — invoke with `/copywriting`

### Core Voice
- **Practitioner speaking to peer** — not professor lecturing, not salesperson pitching
- **Direct (דוגריות)** — say the thing. Hedging language = delete.
- **Proof-backed** — replace every superlative with a number or a name
- **Active voice always**

### Banned Words/Patterns
- פורץ דרך, חדשני, פתרונות מתקדמים, הוליסטי, סינרגיה, מנוף
- "unlock your potential", "empower your journey"
- Starting with "We/Our/אנחנו/אצלנו" — start with the customer's situation
- Passive voice ("יכולים להיות מיושמים")
- Hedging: אולי, ייתכן, בדרך כלל
- Em-dash (—) in headlines → use period instead
- Vague endings: "ועוד הרבה מעבר" / "עד הסוף" → replace with specific number/outcome
- "לפרטים והרשמה" CTA → always use outcome verb ("שמור לי מקום")
- CV bios: listing credentials → practitioner story ("בנה X, ועכשיו מלמד...")

### CTA Rules
- Describe outcome, not action: "שמור מקום" not "שלח"
- First person or imperative: "התחל את ה-Bot-Camp שלי"
- Add friction-reducer below every CTA button

### Testimonials
- Must include: specific metric + name + role/company
- "קורס מדהים, ממליץ בחום!" = zero trust (never use)

---

## Deployment

### PRIMARY: cPanel (Apache)

```
1. npm run build          ← MANDATORY! cPanel doesn't build!
2. git add src/ dist/     ← ALWAYS include dist/!
3. git commit + push
4. User pulls from Git in cPanel
5. Site live at focusai.co.il
```

**CRITICAL:**
- `dist/` MUST be included in every commit
- cPanel runs Apache with `.htaccess` for security headers
- No Node.js on server - static files only
- Vercel also auto-deploys but is NOT the primary target

### Security Headers (public/.htaccess)
- HSTS (1 year)
- X-Frame-Options: SAMEORIGIN
- COOP: same-origin-allow-popups
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera/mic/geo disabled

### Pre-Deployment Checklist
- [ ] `npm run lint` passes (0 errors)
- [ ] `npm run build` passes
- [ ] No console errors in dev
- [ ] dist/ included in commit
- [ ] No sensitive files (.env, credentials)

---

## Brand Assets (Cloudinary)

| Asset | Public ID |
|-------|-----------|
| Logo (light bg) | `v1765265415/2_fxdcio.png` |
| Logo (dark bg) | `v1765265416/5_mckdsj.png` |
| Fingerprint | `v1765571815/FOCUS_LOGO-06_2_grkja9.png` |
| Hero Image | `v1772262543/freepik__-br-__5935-Picsart-BackgroundRemover_kswxhk.png` |

Base URL: `https://res.cloudinary.com/dfudxxzlj/image/upload/`

---

## Founders (Real People)

| Name | Role | Background |
|------|------|------------|
| **Shahar Dadia** | CEO & AI Strategy | University of Haifa + Technion instructor |
| **Unil Sahar** | COO & Business Dev | University of Haifa + Technion instructor |

---

## Contact Info

| Channel | Value |
|---------|-------|
| Email | office@focusai.co.il |
| Phone | 053-946-6408 |
| WhatsApp | wa.me/972539466408 |
| Instagram | @focus.ai.il |
| Facebook | focusai.co.il |
| TikTok | @focus.ai.il |

Centralized in `src/data/config.ts`.

---

## Syllabus System (Lead Capture)

| Component | Purpose |
|-----------|---------|
| `SyllabusGate.tsx` | Form gate - requires submission before viewing |
| `SyllabusViewer.tsx` | Gallery modal with keyboard nav |

Flow: Click → Form (name, phone, email) → N8N Webhook → Syllabus viewer opens.

---

## Forms & Webhooks

**Current:** N8N Webhooks (AJAX)
**Webhook URL:** `https://focus2025.app.n8n.cloud/webhook/59315ca5-4434-4995-8e5f-22eecf48c64c`

Forms exist on:
- Homepage CTA (`source: homepage-academy-consult`)
- Bot-Camp page (mid-page + bottom)
- AI Agents page (`source: ai-agents-contact`)
- AI Workshop page
- Blog newsletter (`source: blog-newsletter`)
- Blog article pages (bottom CTA)

All forms include privacy/terms checkbox. All use the SAME webhook URL.

---

## Self-Update Rule (CRITICAL)

**CLAUDE.md must stay current.** After making significant changes to the project, update this file:

- New pages/routes → update Page Routes table
- Design changes → update Design Theme section
- New components → update Project Structure
- Architecture decisions → add to relevant section
- Navigation changes → update Navigation Structure
- New blog articles → update Blog System table
- Config/deployment changes → update relevant section
- Add entry to Recent Changes Log with date

This ensures every new session starts with accurate context.

---

## Operational Standards (CRITICAL)

### Core Principle: Act on what you know

CLAUDE.md and MEMORY.md are loaded every session. Everything documented here is **active knowledge** — not reference material. If something is written here, behave accordingly without being reminded.

### This applies to ALL areas:

- **Deployment flow**: build → commit → push → user pulls from cPanel. Don't skip steps, don't tell user to check the site before pushing.
- **Design system**: dark bg, purple neon, glassmorphism cards. Don't introduce off-brand patterns.
- **Brand language**: "כתבות" not "מאמרים", "חדשות AI" not "בלוג". Apply consistently in all generated content.
- **Component patterns**: use siteConfig for contact/social links, never hardcode. Check existing components before creating new ones.
- **Business model**: Focus AI = consultancy + academy, not "just a training company". Reflect this in any copy or structure decisions.
- **Page architecture**: BaseLayout for marketing pages, standalone for campaign pages. Analytics on all pages. Check Navigation struct when adding pages.
- **Image handling**: Cloudinary with q_auto,f_auto. No local images in production.
- **Existing content**: Before changing any section, read the current code first. Understand what exists before proposing changes.

### Communication

- Hebrew (תענה בעברית)
- Short and direct
- After completing work, state clearly: what was done → what's the current state (built? committed? pushed?)
- Don't tell the user things they already know
- Don't suggest actions that contradict the documented workflow

---

## Commands

```bash
npm run dev      # Development server (localhost:4321)
npm run build    # Production build → dist/
npm run preview  # Preview production build
npm run lint     # ESLint — check src/ for errors
npm run lint:fix # ESLint — auto-fix what's possible
```

---

## Linting (ESLint)

**Config:** `eslint.config.mjs` (flat config, ESLint 10)
**Git pre-commit hook:** `.git/hooks/pre-commit` — runs ESLint on staged files + builds dist/

### Rules
- `.ts/.tsx` files: `no-debugger`, `no-var`, `prefer-const`, `eqeqeq` + TypeScript parser
- `.astro` files: Astro recommended rules only (`no-var`/`no-alert` OFF — inline scripts use `var` intentionally)
- `_drafts/` excluded from linting

### Writing ESLint-safe Code
- Use `&gt;` instead of `>` as text content in Astro templates (ESLint JSX parser)
- No HTML comments (`<!-- -->`) inside JSX expressions — remove or use `{/* */}`
- Use `let`/`const` in `.ts/.tsx` files (not `var`)
- `var` is allowed in `<script is:inline>` blocks within `.astro` files

---

## Hooks (Claude Code)

Project-level hooks configured in `../.claude/settings.json`:

| Hook | Event | What it does |
|------|-------|-------------|
| `pre-commit-build.sh` | PreToolUse (Bash) | Auto-runs `npm run build` + `git add dist/` before any `git commit` |
| `pre-push-verify.sh` | PreToolUse (Bash) | Blocks `git push` if dist/ has unstaged changes |
| `post-edit-validate.sh` | PostToolUse (Edit/Write) | Async `astro check` after editing .astro/.ts/.tsx files |
| `post-task-save.js` | PostToolUse (Task) | Saves subagent output to `memory/sessions/subagents/` |
| `pre-compact-memory-save.js` | PreCompact | Saves full session transcript as MD before context compaction |
| `session-start-context.sh` | SessionStart | Injects project reminders (Hebrew, build, design rules) |
| `stop-update-claude-md.sh` | Stop | Warns if src/ changed but CLAUDE.md wasn't updated |
| `secret-scan.sh` | PreToolUse (Bash) | Blocks git commits containing API keys or .env files |
| `new-page-guard.sh` | PostToolUse (Edit/Write) | Warns when new .astro page created — checks BaseLayout, meta, navigation |

Hook scripts location: `../.claude/hooks/` (bash scripts + node scripts for Windows compatibility)

---

## Claude Code Infrastructure

### Rules (`.claude/rules/`)
Path-specific rules that auto-load when editing matching files:

| Rule | Path Pattern | Enforces |
|------|-------------|----------|
| `pages.md` | `src/pages/**/*.astro` | BaseLayout, SEO, analytics, forms compliance, images |
| `blog.md` | `src/content/**/*.md` | Frontmatter schema, content guidelines, terminology |
| `components.md` | `src/components/**/*` | No hardcoded contact, siteConfig usage, design consistency |
| `standalone-pages.md` | Standalone page files | Analytics, meta robots, fonts, privacy links |

### Skills (`.claude/skills/`)
User-invocable workflows (use `/skill-name`):

| Skill | Description |
|-------|-------------|
| `/new-page` | Checklist + scaffolding for new pages |
| `/new-article` | Blog article creation with frontmatter template |
| `/audit` | Comprehensive site audit (SEO, links, schema, a11y) |
| `/copywriting` | Brand writing guide — voice, tone, frameworks, copy rules for all pages |
| `/creating-skills` | Scaffolds a new skill following Anthropic best practices (frontmatter, progressive disclosure, descriptions) |

### Agents (`.claude/agents/`)
Specialized subagents for specific tasks:

| Agent | Description |
|-------|-------------|
| `content-from-url` | Creates blog articles from source URLs |
| `architecture-guard` | Cross-page integrity validation (links, nav, sitemap, schema) |
| `seo-auditor` | SEO audit (meta tags, OG, canonical, structured data) |

---

## Recent Changes Log

### 2026-02-28
- **AI Builder page** (`/ai-fullstack`) — extensive redesign:
  - Sticky terminal chrome (titlebar + tabs + status bar + progress)
  - Hero typewriter effect with cycling terminal commands
  - Avatar pain cards redesign (5 robot avatars, circular images)
  - Story terminal humor sequence + CRT immediate start
  - Section spacing standardization
- **`/copywriting` skill** created — brand writing guide with voice, tone, frameworks (PAS, AIDA, StoryBrand, JTBD), CTA rules, anti-patterns
- **Brand Writing section** added to CLAUDE.md

### 2026-02-27
- **Major codebase cleanup** (Wave 1):
  - Expanded .gitignore (was just `.vercel`)
  - Removed 6 dead packages (framer-motion, @studio-freight/lenis, @gsap/react, astro-icon, @iconify-json/*)
  - Fixed siteConfig: `linkedin: "#"` → `""`, `youtube: "#"` → `""` (prevents schema.org pollution)
  - Added sameAs filtering in BaseLayout (empty URLs filtered out)
  - Deleted 6 dead components (PromoPopup, ClientLogos.tsx, TeamFounders, SyllabusButton.tsx, entire ui/ directory)
  - Deleted workshop.css (unused)
  - Removed astro-icon integration from astro.config.mjs
  - Added `noindex` prop to BaseLayout; applied to privacy-policy, terms, 404
- **Dev infrastructure** (Wave 2):
  - Created 4 rules: pages, blog, components, standalone-pages
  - Created 3 skills: /new-page, /new-article, /audit
  - Created 2 agents: architecture-guard, seo-auditor
  - Created 2 hooks: secret-scan.sh, new-page-guard.sh
  - Full CLAUDE.md rewrite — accurate route table, blog path fix, component list update

### 2026-02-26
- **VideoPopup component** created — replaces PromoPopup as the main site popup
  - Portrait video showcasing learning portal, 5s delay, once per session
  - Mobile-first design, iOS-safe (preload=none, native controls, playsinline)
  - PromoPopup.astro preserved for future use (commented out in BaseLayout)
- **New article:** `anthropic-claude-cowork-enterprise-agents` - Anthropic's enterprise push: Claude Cowork plugins + Vercept acquisition
- **New article:** `ai-agents-adoption-2026-state-of-market` - State of AI Agents 2026: 57% of companies in production, Israeli market context

### 2026-02-20
- **Live webinar landing page** created at `/וובינר-לייב-סוכן-AI-ראשון-ב-n8n/`
  - Standalone page (no BaseLayout), direct link access only
  - Countdown timer, speakers section, customer journey narrative
  - N8N webhook form submission
  - Meta Pixel tracking
- **Claude Code hooks** configured for the project
  - Pre-commit auto-build, pre-push verify, post-edit validation
  - Session start context injection, stop CLAUDE.md update reminder

### 2026-02-15
- **Rebuilt VideoTestimonials.astro from scratch** - 3D transform carousel with lightbox
  - Poster images in carousel (no `<video>` elements) → iOS safe
  - Pre-rendered videos in lightbox HTML with direct `src` and native controls
  - Infinite loop, arrow navigation, RTL-aware, no-download protection
  - Deployed on: homepage, Bot-Camp, AI Workshop
- Documented iOS Video Playback rules in CLAUDE.md (critical for future video work)
- Updated Zohar Yaakov's video URL to latest version
- Fixed form text color on Bot-Camp page (white on white → dark text)
- Fixed fingerprint background visibility on mobile homepage
- New article: Google AI Transformation 2026 (10 articles total)

### 2026-02-14
- Blog deployed to production! 9 articles live
- Added "חדשות AI" link back to navigation
- Replaced image CTAs with glassmorphism HTML CTA banners in all articles
- Made blog cards fully clickable (not just title)
- Changed "מאמרים" → "כתבות" terminology
- Connected newsletter form to N8N webhook
- All forms migrated from FormSubmit.co to N8N webhooks
- Added `overflow-x: clip` on html to prevent mobile horizontal scroll
- Fixed `.cpanel.yml` - removed blog deletion from deploy, fixed copy path
- New article: OpenAI 100 מיליארד דולר
- PageSpeed scores: Performance 88-94, Accessibility 97-100, SEO 100

### 2026-02-13
- Removed duplicate "Your AI Partner" from mono comment line
- Increased typewriter display time: 2000ms → 3500ms (hero + blog)
- Added "Your AI Partner" as subtitle under "Focus AI" in hero
- Randomized typewriter start index
- Added new typewriter messages (total 16)
- Hero CTA: "אקדמיה" → `/academy`, "פיתוח מערכות" → `/ai-agents`
- AI First card hidden on mobile homepage
- Added "המסלולים שלנו" section title on Bot-Camp page
- Hero scroll fade completely removed (stays fully visible)
- Hero particles: whiter (text-white/40), larger (13-16px), purple glow
- Blog: new article (n8n funding), article template with CTA form

### 2026-02-11
- Design theme updated to Apple Glassmorphism (from old cyberpunk terminal)
- Removed traffic light dots globally
- Removed clip-path chamfered corners globally
- Glass card pattern established (bg-white/[0.03] + backdrop-blur)

### 2026-02-10
- Media optimization: Cloudinary transforms, image right-sizing
- Video testimonials compressed
- Client logos grid redesigned
- PageSpeed optimizations (LCP, accessibility)

### 2026-02-07
- Syllabus system created
- Chavobot in Bot-Camp hero
- Bot-Camp page cyberpunk redesign

### 2026-02-06
- Created DESIGN_SYSTEM.md
- Header dropdown menus

---

## TODO

- [x] Deploy blog to production (add back to nav) ✅ 2026-02-14
- [x] Replace FormSubmit.co with N8N webhooks ✅ 2026-02-14
- [x] Major codebase cleanup + dev infrastructure ✅ 2026-02-27
- [ ] Create more blog articles (AI news, guides)
- [ ] Create AI-First syllabus page
- [ ] PageSpeed: remaining optimizations (video captions, carousel dot a11y)
- [ ] Add LinkedIn/YouTube social links when available (currently empty in siteConfig)

---

> **This CLAUDE.md is the source of truth for all design decisions and project context.**
> `docs/DESIGN_SYSTEM.md` is deprecated (2026-02-06, references old patterns). Do not rely on it.
