# Focus AI - Homepage Specification

**Version:** 1.0
**Created:** 2026-01-22
**Status:** Pending Approval
**Design Reference:** https://www.profit-fs.com/ (structure only)
**Theme:** Dark, tech/AI inspired, high contrast, enterprise trust

---

## Executive Summary

The homepage serves as the **unified entry point** for Focus AI, guiding visitors to either:
- **B2B path** → Services (Workshops, Integrations)
- **B2C path** → Academy (AI FIRST, AI READY, AI TECH)

The page follows a **trust-building funnel**: Awareness → Credibility → Differentiation → Conversion

---

## Design Principles

1. **Rounded container-based layout** — Content sections float in defined containers with consistent border-radius (20-24px), not edge-to-edge
2. **High contrast dark theme** — Dark backgrounds (#0a0612) with bright text and gradient accents
3. **Enterprise authority** — Not a campaign page; feels like a solid tech company
4. **RTL-first** — All layouts, animations, and interactions designed for Hebrew RTL
5. **Conversion clarity** — Every section has a purpose toward lead capture or navigation

---

## Section Breakdown

### Section 01: Header (Global Template)

| Attribute | Value |
|-----------|-------|
| **Purpose** | Navigation + brand presence |
| **Elementor Type** | Theme Builder → Header |
| **Position** | Sticky, transparent on hero, solid on scroll |
| **Container** | Max-width 1400px, centered |

**Elements:**
- Logo (left in RTL = visual right)
- Navigation pills: בית, שירותים ▼, אקדמיה ▼, אודות, צור קשר
- CTA button: "לשיחת אפיון" (gradient)
- Mobile: Hamburger → Full-screen drawer

**Acceptance Criteria:**
- [ ] Logo links to homepage
- [ ] Dropdowns open on hover (desktop) / tap (mobile)
- [ ] Sticky with backdrop blur on scroll
- [ ] Mobile menu closes on link click
- [ ] RTL alignment verified

---

### Section 02: Hero

| Attribute | Value |
|-----------|-------|
| **Purpose** | Value proposition + primary conversion |
| **Conversion Intent** | Establish what Focus AI does, prompt action |
| **Container** | Full-width background, content max-width 1200px |
| **Height** | Min 100vh (or 100dvh for mobile) |

**Elements:**
- Badge/Pill: "שותפי ה-AI שלכם" (Your AI Partners)
- Main Headline: "הפכו את הארגון למעצמת AI" (large, gradient text on key word)
- Subheadline: Brief value statement (2-3 lines max)
- Primary CTA: "לשיחת אפיון בחינם" (gradient button)
- Secondary CTA: "לאקדמיה" (outline button)
- Trust indicators: 3 stats (e.g., "500+ בוגרים", "50+ ארגונים", "4.9 דירוג")
- Background: Subtle gradient orbs, noise texture

**Acceptance Criteria:**
- [ ] Headline readable within 3 seconds
- [ ] CTAs visible above fold on all devices
- [ ] Stats horizontally aligned on desktop, stacked on mobile
- [ ] Background effects don't distract from text
- [ ] Reduced motion respected

---

### Section 03: Value Proposition Cards

| Attribute | Value |
|-----------|-------|
| **Purpose** | Quick scan of core offerings |
| **Conversion Intent** | Differentiate Services vs Academy paths |
| **Container** | Rounded container (24px radius), padding 60px |

**Layout:** 2-column grid (desktop), stacked (mobile)

**Card 1: שירותים לארגונים (B2B Services)**
- Icon/Image
- Headline: "סדנאות ואינטגרציות AI"
- Description: 2-3 lines about B2B offerings
- CTA: "למידע נוסף" → /services/

**Card 2: האקדמיה (Academy)**
- Icon/Image
- Headline: "הכשרות AI מעשיות"
- Description: 2-3 lines about courses
- CTA: "לקורסים" → /academy/

**Acceptance Criteria:**
- [ ] Cards have equal visual weight
- [ ] Hover effect on cards (subtle lift + glow)
- [ ] Links work and go to correct pages
- [ ] Text readable, not cramped
- [ ] RTL card order (right card first visually)

---

### Section 04: Why Focus AI (Differentiators)

| Attribute | Value |
|-----------|-------|
| **Purpose** | Build credibility, show expertise |
| **Conversion Intent** | Move from "what" to "why us" |
| **Container** | Rounded container, alternate background |

**Layout:** 3-4 feature blocks in grid

**Content Ideas:**
1. "מעשי ויישומי" — Practical, hands-on approach
2. "מרצים מובילים" — Leading instructors/consultants
3. "מותאם לארגון" — Customized to organization needs
4. "תמיכה מתמשכת" — Ongoing support

Each block:
- Icon (gradient background, 48-56px)
- Headline (bold)
- Description (2-3 lines)

**Acceptance Criteria:**
- [ ] Icons consistent in style
- [ ] Text hierarchy clear (headline > description)
- [ ] Grid responsive (3-col → 2-col → 1-col)
- [ ] Section doesn't feel like filler

---

### Section 05: Services Preview (B2B)

| Attribute | Value |
|-----------|-------|
| **Purpose** | Showcase B2B offerings |
| **Conversion Intent** | Drive B2B leads to contact/services page |
| **Container** | Rounded container |

**Layout:** Image + Text split (or card-based)

**Content:**
- Section headline: "שירותים לארגונים"
- Service 1: AI Workshops — Brief description
- Service 2: Integrations & Automation — Brief description
- CTA: "לפרטים נוספים" or "שריינו שיחת אפיון"

**Acceptance Criteria:**
- [ ] Clear distinction between workshop and integration services
- [ ] At least one CTA visible
- [ ] Image/visual supports the message (not stock-feeling)
- [ ] Doesn't duplicate Section 03 content verbatim

---

### Section 06: Academy Preview (B2C)

| Attribute | Value |
|-----------|-------|
| **Purpose** | Showcase courses for individuals |
| **Conversion Intent** | Drive learners to academy pages |
| **Container** | Rounded container, different background shade |

**Layout:** 3 course cards in row

**Course Cards:**
| Course | Badge | Highlight |
|--------|-------|-----------|
| AI FIRST | למתחילים | 5 מפגשים |
| AI READY | למנהלים | 8 מפגשים |
| AI TECH | למפתחים | הרצליה |

Each card:
- Course name (headline)
- Target audience badge
- Brief description (1-2 lines)
- "Featured" indicator for recommended
- CTA: "למידע נוסף"

**Acceptance Criteria:**
- [ ] Cards scannable at a glance
- [ ] One card visually highlighted as "recommended"
- [ ] No prices shown (per requirement)
- [ ] Links go to correct course pages
- [ ] Responsive stacking on mobile

---

### Section 07: Social Proof / Testimonials

| Attribute | Value |
|-----------|-------|
| **Purpose** | Build trust through real voices |
| **Conversion Intent** | Overcome skepticism |
| **Container** | Full-width or contained, depending on design |

**Options (choose one):**
- **Option A:** Video testimonial grid (reuse existing videos)
- **Option B:** Quote carousel with photos
- **Option C:** Logo bar + select quotes

**Elements:**
- Section headline: "מה אומרים עלינו" or "הם כבר AI FIRST"
- 3-5 testimonials (mix of B2B and B2C if possible)
- Names, titles, optional photos
- Optional: Client logos row

**Acceptance Criteria:**
- [ ] Testimonials feel authentic, not generic
- [ ] Attribution clear (name, role)
- [ ] If video: plays in lightbox, not inline autoplay
- [ ] Mobile-friendly carousel or grid

---

### Section 08: Team / Founders

| Attribute | Value |
|-----------|-------|
| **Purpose** | Humanize the brand, establish expertise |
| **Conversion Intent** | Build personal connection |
| **Container** | Rounded container |

**Layout:** 2 founder cards or team section

**Content:**
- Section headline: "הצוות שלנו" or "מי אנחנו"
- Founder 1: Photo, name, title, brief bio
- Founder 2: Photo, name, title, brief bio
- Optional: Link to full /about/ page

**Acceptance Criteria:**
- [ ] Photos professional but approachable
- [ ] Bios establish credibility (experience, background)
- [ ] Not overly long — summary only
- [ ] Link to "קראו עוד" if full bios elsewhere

---

### Section 09: CTA / Contact Form

| Attribute | Value |
|-----------|-------|
| **Purpose** | Primary conversion endpoint |
| **Conversion Intent** | Capture leads |
| **Container** | Prominent container, distinct background |

**Layout:** Text + Form side-by-side (or stacked)

**Left/Right Side (Text):**
- Headline: "רוצים לשמוע עוד?" or "בואו נדבר"
- Supporting text: Brief sentence about next steps
- Optional: Phone number, email, WhatsApp link

**Form Fields (Elementor Forms):**
| Field | Type | Required |
|-------|------|----------|
| שם מלא | Text | Yes |
| אימייל | Email | Yes |
| טלפון | Tel | No |
| מעניין אותי | Select | Yes |
| הודעה | Textarea | No |

**Select Options for "מעניין אותי":**
- שירותים לארגונים (Integrations)
- האקדמיה (Academy)
- שניהם (Both)

**Form Action:** Placeholder webhook (TO_BE_CONNECTED_LATER)

**Acceptance Criteria:**
- [ ] Form validates required fields
- [ ] Success message displayed on submit
- [ ] Error states styled
- [ ] Form accessible (labels, focus states)
- [ ] RTL input direction correct

---

### Section 10: Footer (Global Template)

| Attribute | Value |
|-----------|-------|
| **Purpose** | Secondary navigation, legal, social |
| **Elementor Type** | Theme Builder → Footer |
| **Container** | Full-width dark, content max-width 1400px |

**Columns:**
1. **Logo + Tagline** — Brief company description
2. **ניווט מהיר** — Home, About, Contact, Terms, Privacy
3. **שירותים** — Workshops, Integrations
4. **אקדמיה** — AI FIRST, AI READY, AI TECH
5. **קהילה** — WhatsApp, Instagram, TikTok, LinkedIn

**Bottom Bar:**
- Copyright: "© 2026 Focus AI. כל הזכויות שמורות."
- Optional: Back to top button

**Acceptance Criteria:**
- [ ] All links functional
- [ ] Social icons open in new tab
- [ ] Responsive column stacking
- [ ] Consistent with header navigation

---

## Section Order Summary

```
┌────────────────────────────────────────┐
│ 01. Header (sticky)                    │
├────────────────────────────────────────┤
│ 02. Hero                               │
├────────────────────────────────────────┤
│ 03. Value Proposition Cards            │
├────────────────────────────────────────┤
│ 04. Why Focus AI (Differentiators)     │
├────────────────────────────────────────┤
│ 05. Services Preview (B2B)             │
├────────────────────────────────────────┤
│ 06. Academy Preview (B2C)              │
├────────────────────────────────────────┤
│ 07. Social Proof / Testimonials        │
├────────────────────────────────────────┤
│ 08. Team / Founders                    │
├────────────────────────────────────────┤
│ 09. CTA / Contact Form                 │
├────────────────────────────────────────┤
│ 10. Footer                             │
└────────────────────────────────────────┘
```

---

## Elementor Container Structure

Each section follows this nesting pattern:

```
<section> (Full-width, background)
  └─ <container> (Max-width 1200-1400px, centered, padding)
       └─ <container> (Content wrapper, flex/grid)
            └─ Widgets (Heading, Text, Image, Button, etc.)
```

**Rules:**
- Never more than 3 levels of container nesting
- Use Flexbox containers (not legacy sections/columns)
- Set container gap at 24-32px consistently
- Apply border-radius at the inner content container level

---

## Reusable Components to Create

| Component | Use Cases |
|-----------|-----------|
| **Card - Feature** | Differentiators, benefits |
| **Card - Service** | Service preview, course cards |
| **Card - Testimonial** | Testimonials section |
| **Button - Primary** | CTAs (gradient) |
| **Button - Secondary** | CTAs (outline) |
| **Badge/Pill** | Labels, tags |
| **Icon Box** | Feature blocks |

These should be saved as **Elementor Global Widgets** or **Flexbox Presets** for reuse.

---

## Responsive Breakpoints

| Breakpoint | Width | Adjustments |
|------------|-------|-------------|
| Desktop | 1200px+ | Full layout |
| Laptop | 1024px | Reduce padding |
| Tablet | 768px | 2-col grids → 1-col, stacked cards |
| Mobile | 480px | Single column, larger touch targets |

---

## Approval Checklist

Before proceeding to build, confirm:

- [ ] Section list is complete and correct
- [ ] Section order makes sense for user flow
- [ ] No missing sections required
- [ ] Content requirements are clear
- [ ] Form fields are correct
- [ ] Any objections to proposed structure?

---

*Document created: 2026-01-22*
*Awaiting approval before implementation*
