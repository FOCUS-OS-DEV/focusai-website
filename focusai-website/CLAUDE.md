# Focus AI Website - System Prompt

> This file contains all instructions and context for Claude Code.
> **Last Updated:** 2026-02-10

---

## Quick Links

- [Full Design System](./docs/DESIGN_SYSTEM.md) - Complete design documentation
- [Business Model](../memory/focusai-business-model.md) - Company intel & user journeys

---

## Project Summary

**Focus AI** - Israeli AI transformation consultancy website.

| Attribute | Value |
|-----------|-------|
| Domain | focusai.co.il |
| Theme | **Cyberpunk Terminal** (dark, purple neon) |
| Language | Hebrew (RTL) |
| Framework | Astro 5.x + React |
| Styling | Tailwind CSS 4.x |

---

## Current Design Theme

### Cyberpunk Terminal Aesthetic

```
Background:    #0a0a0f (deep void)
Cards:         #12121a (dark gray)
Primary:       #a855f7 (purple)
Accent:        #c084fc (light purple)
Text:          #f5f5fa (bright white)
```

**Visual Elements:**
- Terminal headers with traffic light dots (red, yellow, purple)
- Clip-path chamfered corners on cards
- Scan line overlay effect
- Purple glow effects on hover
- Grid pattern backgrounds
- Fingerprint watermark (body::before)

---

## Tech Stack

```
Framework:      Astro 5.x (SSG only!)
Styling:        Tailwind CSS 4.x
Interactivity:  React 19.x (islands)
Animations:     GSAP + ScrollTrigger + Framer Motion
Smooth Scroll:  Lenis
Icons:          Lucide + MDI (astro-icon)
Images:         Cloudinary + Sharp
```

---

## Project Structure

```
focusai-website/
├── src/
│   ├── components/
│   │   ├── ui/           # Aceternity UI (React)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.tsx      # React - Hero + Chavobot
│   │   ├── ClientLogos.tsx      # React - Logo carousel
│   │   ├── StorySection.astro   # Problem/Solution/Proof
│   │   ├── AcademyPreview.astro # Course cards
│   │   ├── ServicesPreview.astro
│   │   ├── Testimonials.astro
│   │   ├── TeamFounders.astro
│   │   ├── CTAContact.astro
│   │   └── ...
│   ├── data/
│   │   ├── config.ts     # Site constants
│   │   └── team.ts       # Founders data
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/            # Routes
│   └── styles/
│       └── global.css    # Design system
├── docs/
│   └── DESIGN_SYSTEM.md  # Full documentation
└── public/
```

---

## Page Routes

| Route | Status | Component |
|-------|--------|-----------|
| `/` | Done | Homepage |
| `/about` | Done | About page |
| `/services/*` | Done | Service pages |
| `/academy/*` | Done | Course pages |
| `/sadnaot` | Done | Workshops |
| `/tools` | Done | AI Tools |
| `/blog` | Done | Blog index |
| `/privacy` | Done | Privacy policy |
| `/terms` | Done | Terms of service |

---

## Brand Assets (Cloudinary)

| Asset | URL |
|-------|-----|
| Logo | `v1765265415/2_fxdcio.png` |
| Fingerprint | `v1765571815/FOCUS_LOGO-06_2_grkja9.png` |
| Chavobot - Standing | `v1738167285/Bot_pose_1_-_stand_1_uzaxed.png` |
| Chavobot - Laptop | `v1738167278/Bot_pose_11_-_sitting_on_laptop_wjbzwi.png` |

Base URL: `https://res.cloudinary.com/dfudxxzlj/image/upload/`

---

## Media Optimization (CRITICAL)

### Cloudinary URL Transforms

**ALWAYS add optimization transforms when adding new images/videos to the site!**

| Transform | Purpose |
|-----------|---------|
| `q_auto` | Auto quality (reduces file size) |
| `f_auto` | Auto format (WebP for supporting browsers) |
| `w_XXX` | Resize width (use display size) |

### Image URL Pattern

```
https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_WIDTH/vXXXXX/filename.jpg
```

### Recommended Widths by Use Case

| Use Case | Width |
|----------|-------|
| Hero/Full-width | `w_1200` |
| Classroom/Large | `w_1024` |
| Chavobot/Mascot | `w_800` |
| Fingerprint BG | `w_700` |
| Testimonial screenshots | `w_500` |
| Founder photos | `w_400` |
| Gallery thumbnails | `w_200` |
| Logos | `w_200` |
| Badges/Small icons | `w_120` |

### Video Poster Pattern

For video thumbnails, extract frame from video:
```
https://res.cloudinary.com/dfudxxzlj/video/upload/so_0.1,w_400,h_710,c_fill,q_auto,f_jpg/vXXXXX/video.jpg
```

### Preconnect (Already in BaseLayout)

```html
<link rel="preconnect" href="https://res.cloudinary.com" crossorigin>
<link rel="dns-prefetch" href="https://res.cloudinary.com">
```

### Checklist for New Media

- [ ] Compress videos before upload (use HandBrake or similar)
- [ ] Add `q_auto,f_auto` transforms
- [ ] Set appropriate `w_` for display size
- [ ] Use `loading="lazy"` on images below fold
- [ ] Verify image displays correctly after transforms

---

## Component Patterns

### Terminal Card

```astro
<div class="bg-[#12121a] border border-[#2a2a3a]"
     style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));">
  <!-- Terminal header -->
  <div class="flex items-center justify-between px-6 py-3 border-b border-[#2a2a3a] bg-[#0a0a0f]/50">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-[#ff3366]"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-[#ffff00]"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></span>
    </div>
    <span class="font-mono text-xs text-[#b0b0c0]">ID_HERE</span>
  </div>
  <div class="p-6">Content</div>
</div>
```

### Badge/Tag

```astro
<div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#a855f7]/30">
  <span class="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse"></span>
  <span class="font-mono text-sm text-[#a855f7] uppercase tracking-[0.15em]">TEXT</span>
</div>
```

---

## Responsive Rules

| Device | Prefix | Columns |
|--------|--------|---------|
| Mobile | (default) | 1 |
| Tablet | `md:` | 2 |
| Desktop | `lg:` | 3-4 |

**Critical:**
- Mobile-first approach
- No hidden elements without alternatives
- Touch targets min 44x44px
- Typography: use `clamp()` for fluid sizing

---

## Animation System

**GSAP Triggers:**
```javascript
data-animate="fade-up"
data-animate="fade-right"
data-animate="fade-left"
```

**CSS Classes:**
- `.animate-pulse` - pulsing glow
- `.animate-float` - floating motion
- `.animate-blink` - cursor blink

---

## Deployment Rules

### STATIC ONLY - Non-negotiable!

```
npm run build  →  dist/  →  cPanel  →  Live
```

**Rules:**
1. No Node.js on server
2. No SSR - SSG only
3. No API routes - use n8n webhooks
4. All libraries must compile to static

**Before adding any library:**
- [ ] Works with Astro static build?
- [ ] No runtime Node.js required?
- [ ] Output is HTML/CSS/JS only?

---

## Commands

```bash
npm run dev      # Development
npm run build    # Production build
npm run preview  # Preview build
```

---

## Founders (Real People)

| Name | Role | Image |
|------|------|-------|
| **Shahar Dadia** | CEO & AI Strategy | v1764519896/WhatsApp... |
| **Unil Sahar** | COO & Business Dev | v1770364984/IMG_4898... |

Both are instructors at University of Haifa & Technion.

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

---

## Key Differentiators

1. Learn from practitioners (not theorists)
2. Academic backing (U of Haifa, Technion)
3. 2-3 instructors per session
4. Active alumni community
5. End-to-end service
6. 30-day proven ROI

---

## Syllabus System (Lead Capture)

### Components

| Component | Purpose |
|-----------|---------|
| `SyllabusGate.tsx` | Form gate - requires form submission before viewing |
| `SyllabusViewer.tsx` | Gallery modal with keyboard nav & thumbnails |
| `SyllabusButton.tsx` | Direct access button (no form gate) |

### Flow (SyllabusGate)

1. User clicks "לקבלת הסילבוס"
2. Modal opens with form (name, phone, email)
3. Form submits to FormSubmit.co → info@focusai.co.il
4. Syllabus viewer opens immediately

### Hidden Syllabus Pages

Each course has a hidden syllabus page accessible only via direct link:

| Course | Syllabus Page |
|--------|---------------|
| Bot-Camp | `/academy/bot-camp/syllabus` |
| AI-Ready | `/academy/ai-ready/syllabus` (TODO) |
| AI-First | `/academy/ai-first/syllabus` (TODO) |

### Syllabus Images (Cloudinary)

```javascript
// Bot-Camp
const syllabusImages = [
  'https://res.cloudinary.com/dfudxxzlj/image/upload/v1770470074/111_kyis5b.jpg',
  'https://res.cloudinary.com/dfudxxzlj/image/upload/v1770470080/222_enxevc.jpg',
  'https://res.cloudinary.com/dfudxxzlj/image/upload/v1770470082/333_odscrk.jpg',
  'https://res.cloudinary.com/dfudxxzlj/image/upload/v1770470083/444_icwizs.jpg',
  'https://res.cloudinary.com/dfudxxzlj/image/upload/v1770470088/555_djukfo.jpg'
];
```

---

## Forms & Webhooks

**Current:** FormSubmit.co (AJAX) → Email
**Future:** N8N webhooks (when ready)

---

## Recent Updates

### 2026-02-10
- Added Media Optimization section to CLAUDE.md
- Video testimonials updated to compressed versions
- Image optimization with Cloudinary transforms (q_auto, f_auto, w_XXX)
- Added preconnect hints for Cloudinary CDN
- Client logos grid component (ClientLogosGrid.astro)
- Carousel navigation dots redesigned (minimal elegant style)

### 2026-02-07
- Created Syllabus system (SyllabusGate, SyllabusViewer, SyllabusButton)
- Added Chavobot character to Bot-Camp hero
- Added fingerprint background to Bot-Camp hero
- Bot-Camp page redesigned with cyberpunk theme
- Added "למי מתאימה התוכנית" section

### 2026-02-06
- Created comprehensive DESIGN_SYSTEM.md
- Updated CLAUDE.md to current state
- Header dropdown menus with descriptions

### 2026-02-05
- Aceternity UI integration
- Framer Motion animations
- Footer updates

---

## TODO (Next)

- [ ] Create hidden syllabus pages for AI-Ready and AI-First
- [ ] Replace FormSubmit.co with N8N webhooks when ready
- [ ] Add syllabus images for other courses

---

> **For complete design system details, see [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)**
