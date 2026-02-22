# Focus AI Website - System Prompt

> This file contains all instructions and context for Claude Code.
> **Last Updated:** 2026-02-15

---

## Quick Links

- [Design System](./docs/DESIGN_SYSTEM.md) - Full design documentation (partially outdated - refer to this file for latest)
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
Icons:          Lucide + MDI (astro-icon)
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
5. Academy (Bot-Camp, AI Ready, AI First)

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
│   │   ├── ui/                          # Aceternity UI (React islands)
│   │   ├── Header.astro                 # Glassmorphism floating nav
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro            # Hero (Pure Astro+CSS, NO React!)
│   │   ├── Preloader.astro              # Site preloader with progress bar
│   │   ├── AcademyPreview.astro         # Course cards (homepage)
│   │   ├── AcademyIntro.astro           # Academy intro section
│   │   ├── ServicesPreview.astro         # Services grid
│   │   ├── StorySection.astro           # Problem/Solution/Proof
│   │   ├── Testimonials.astro           # Text testimonials
│   │   ├── VideoTestimonialsCarousel.astro # Video testimonial carousel
│   │   ├── PhoneTestimonials.astro      # Phone screenshot testimonials
│   │   ├── StudentTestimonials.astro    # Student feedback
│   │   ├── TeamFounders.astro           # Founders section
│   │   ├── CTAContact.astro             # Contact form CTA
│   │   ├── ClientLogos.tsx              # Logo carousel (React island)
│   │   ├── ClientLogosGrid.astro        # Logo grid (static)
│   │   ├── TechLogosMarquee.astro       # Tech logos scroll
│   │   ├── TerminalTypewriter.astro     # Reusable typewriter effect
│   │   ├── TerminalText.tsx             # Terminal text (React, legacy)
│   │   ├── WhatsAppFloat.astro          # Floating WhatsApp button
│   │   ├── WhatsAppCommunity.astro      # WhatsApp community CTA
│   │   ├── BackToTop.astro              # Back to top button
│   │   ├── CookieConsent.astro          # GDPR cookie consent
│   │   ├── Analytics.astro              # GTM + Clarity (head)
│   │   ├── AnalyticsBody.astro          # GTM noscript (body)
│   │   ├── Breadcrumbs.astro            # SEO breadcrumbs
│   │   ├── RelatedContent.astro         # Related articles
│   │   ├── SyllabusGate.tsx             # Form gate (React)
│   │   ├── SyllabusViewer.tsx           # Gallery viewer (React)
│   │   └── SyllabusButton.tsx           # Direct syllabus access (React)
│   ├── content/
│   │   └── blog/                        # Blog articles (Markdown)
│   ├── data/
│   │   ├── config.ts                    # Site constants (contact, social, analytics)
│   │   ├── clients.ts                   # Client logos data
│   │   ├── team.ts                      # Founders data
│   │   └── index.ts
│   ├── layouts/
│   │   └── BaseLayout.astro             # Base HTML layout + SEO + Schema.org
│   ├── pages/                           # Routes (see Page Routes below)
│   └── styles/
│       └── global.css                   # Global styles + Tailwind imports
├── docs/
│   └── DESIGN_SYSTEM.md                 # Design documentation (v1.0, 2026-02-06)
├── public/
│   ├── .htaccess                        # Apache security headers
│   ├── robots.txt
│   └── favicon files
└── CLAUDE.md                            # This file
```

---

## Page Routes

| Route | Status | Description |
|-------|--------|-------------|
| `/` | Live | Homepage - hero, services, academy preview, testimonials |
| `/about` | Live | About page - founders, mission, partners |
| `/academy` | Live | Bot-Camp course page (main academy landing) |
| `/academy/ai-ready` | Live | AI Ready course page |
| `/academy/_drafts/ai-first` | Draft | AI First course (NOT routed) |
| `/academy/thank-you` | Live | Form submission thank-you |
| `/ai-agents` | Live | AI Agents service page |
| `/ai-workshop` | Live | AI Workshops page (redirects to external link) |
| `/services/strategy` | Live | Strategic consulting |
| `/services/ai-agents` | Live | AI agents service detail |
| `/services/development` | Live | Development services |
| `/tools` | Live | AI Tools directory |
| `/blog` | **Live** | Blog index - AI news articles |
| `/blog/[slug]` | **Live** | Blog article pages |
| `/privacy` | Live | Privacy policy |
| `/terms` | Live | Terms of service |
| `/וובינר-לייב-סוכן-AI-ראשון-ב-n8n` | **Live** | Live webinar landing page (01.03.2026) - direct link only |

### Important Route Notes

- **`/blog` is LIVE on production** - accessible via "חדשות AI" in navigation
- **`/ai-workshop`** redirects to external registration link
- **AI First card** is hidden on mobile in homepage (`hidden lg:block`)
- **Webinar page** is standalone (no BaseLayout, no nav link) - accessible only via direct URL

---

## Navigation Structure

```
Header navLinks:
├── בית (/)
├── אקדמיה (#academy) ← dropdown
│   ├── AI Ready (/academy/ai-ready)
│   └── Bot-Camp (/academy)
├── סוכני AI (/ai-agents)
├── סדנאות (/ai-workshop)
├── חדשות AI (/blog)
├── כלי AI (/tools) ← dropdown
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
- Content collection using Astro's `getCollection('blog')`
- Schema: `content.config.ts` defines title, description, pubDate, heroImage, author, category, tags, ctaType, difficulty
- Categories: `news` | `guide` | `tutorial`
- Template: `pages/blog/[...slug].astro` with glassmorphism CTA banners
- Blog index: `pages/blog/index.astro` - fully clickable cards, newsletter form with webhook
- Terminology: "כתבות" (NOT "מאמרים" or "בלוג")

### Existing Articles
| Slug | Title | CTA |
|------|-------|-----|
| `openai-100b-funding` | 100 מיליארד דולר ל-OpenAI | Bot-Camp |
| `claude-opus-4-6` | Claude Opus 4.6 - חשיבה אדפטיבית | Bot-Camp |
| `ai-agents-revolution-2026` | מהפכת סוכני ה-AI 2026 | Bot-Camp |
| `n8n-funding-ai-automation` | n8n גייסה 180 מיליון דולר | Bot-Camp |
| `what-is-ai-agent` | מה זה סוכן AI | Bot-Camp |
| `openai-frontier-enterprise-ai` | OpenAI Frontier לארגונים | Consulting |
| `prompt-engineering-guide` | מדריך פרומפט אנג'ינירינג | AI Ready |
| `automation-examples` | דוגמאות אוטומציה | Bot-Camp |
| `top-10-ai-tools-2025` | 10 כלי AI מובילים | AI Ready |
| `google-ai-transformation-2026` | גוגל כבר לא מנוע חיפוש - חברת תשתיות AI | Consulting |

### CTA Banner System
- Glassmorphism HTML banners (NOT image CTAs)
- Per-article CTA type via `ctaType` frontmatter: `botcamp` / `ai-ready` / `agents` / `consulting`
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
| Chavobot (new) | `v1771022344/36c7efb5-d099-4cb1-94fe-1bd896f53cef_ivfe4n.png` |

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
| `SyllabusButton.tsx` | Direct access (no gate) |

Flow: Click → Form (name, phone, email) → FormSubmit.co → Syllabus viewer opens.

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

## Commands

```bash
npm run dev      # Development server (localhost:4321)
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

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

Hook scripts location: `../.claude/hooks/` (bash scripts + node scripts for Windows compatibility)

---

## Recent Changes Log

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
  - Deployed on: homepage, Bot-Camp, AI Ready, AI Workshop
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
- [ ] Create more blog articles (AI news, guides)
- [ ] Create AI-Ready and AI-First syllabus pages
- [ ] Deploy /services pages to production (currently deleted by .cpanel.yml)
- [ ] PageSpeed: remaining optimizations (video captions, carousel dot a11y)

---

> **For complete design system details, see [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)**
> Note: DESIGN_SYSTEM.md was last updated 2026-02-06 and may reference old patterns. This CLAUDE.md is the source of truth for current design decisions.
