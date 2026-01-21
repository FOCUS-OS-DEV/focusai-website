# Elementor Global Setup & Template Instructions

**Version:** 1.0
**Created:** 2026-01-22
**Status:** Ready for Implementation

---

## C2: Global Elementor Setup

### Step 1: Site Settings → Global Colors

Navigate to: **Elementor → Site Settings → Global Colors**

Add these custom colors:

| Name | Hex | System Name |
|------|-----|-------------|
| Focus Purple | `#a855f7` | `focus-purple` |
| Focus Pink | `#ec4899` | `focus-pink` |
| Focus Dark | `#0a0612` | `focus-dark` |
| Focus Surface | `#1b0125` | `focus-surface` |
| Text Primary | `#ffffff` | `text-primary` |
| Text Muted | `#d7cdef` | `text-muted` |
| Border Glass | `rgba(185, 107, 254, 0.25)` | `border-glass` |
| Success | `#22c55e` | `success` |

### Step 2: Site Settings → Global Fonts

Navigate to: **Elementor → Site Settings → Global Fonts**

| Name | Font Family | Weight | Size | Line Height |
|------|-------------|--------|------|-------------|
| Primary | Rubik | 400 | 16px | 1.6 |
| Primary Bold | Rubik | 700 | 16px | 1.6 |
| Heading Display | Rubik | 900 | 48px | 1.1 |
| Heading H1 | Rubik | 800 | 40px | 1.2 |
| Heading H2 | Rubik | 700 | 32px | 1.25 |
| Heading H3 | Rubik | 700 | 24px | 1.3 |
| Heading H4 | Rubik | 600 | 20px | 1.4 |

### Step 3: Site Settings → Layout

| Setting | Value |
|---------|-------|
| Content Width | 1200px |
| Widgets Space | 20px |
| Stretched Section Fit To | Full Width |
| Page Title Selector | `h1.entry-title` |

### Step 4: Site Settings → Additional CSS

Add this custom CSS in **Site Settings → Custom CSS**:

```css
/* ================================
   FOCUS AI - GLOBAL CUSTOM CSS
   ================================ */

/* CSS Custom Properties */
:root {
  --focus-purple: #a855f7;
  --focus-pink: #ec4899;
  --focus-dark: #0a0612;
  --focus-surface: #1b0125;
  --text-primary: #ffffff;
  --text-muted: #d7cdef;
  --border-glass: rgba(185, 107, 254, 0.25);

  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-spring: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus states for accessibility */
:focus-visible {
  outline: 2px solid var(--focus-purple);
  outline-offset: 2px;
}

/* Selection styling */
::selection {
  background: var(--focus-purple);
  color: white;
}

/* Button gradient background utility */
.btn-gradient {
  background: linear-gradient(135deg, var(--focus-purple) 0%, var(--focus-pink) 100%);
}

/* Glassmorphic card utility */
.glass-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
}

/* Text gradient utility */
.text-gradient {
  background: linear-gradient(135deg, var(--focus-purple) 0%, var(--focus-pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* RTL arrow fix */
[dir="rtl"] .arrow-icon {
  transform: scaleX(-1);
}

/* Hide scrollbar but keep functionality */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
```

### Step 5: Enable Elementor Experiments

Navigate to: **Elementor → Settings → Experiments**

Enable these features:
- [x] Flexbox Container
- [x] Improved CSS Loading
- [x] Lazy Load Background Images
- [x] Optimized Control Loading

---

## C3: Header Template Build Instructions

### Create Template

1. Navigate to: **Templates → Theme Builder**
2. Click **Add New → Header**
3. Name: `Focus AI Header`
4. Condition: **Entire Site**

### Header Structure

```
Container (Full Width, Sticky)
├── Background: Transparent initially, #0a0612/90% + blur on scroll
├── Padding: 16px 24px
├── Z-index: 1000
│
└── Container (Max Width: 1400px, Flex Row, Space Between)
    │
    ├── [Logo Widget]
    │   └── Image: Focus AI logo
    │   └── Link: Homepage
    │   └── Width: 120px (desktop), 100px (mobile)
    │
    ├── [Nav Menu Widget] (Desktop only, display: none on tablet/mobile)
    │   └── Menu: Primary Menu
    │   └── Style: Pills/horizontal
    │   └── Gap: 8px
    │   └── Typography: Rubik 500, 14px
    │   └── Colors: #d7cdef default, #ffffff hover
    │   └── Active: gradient background
    │   └── Submenu: Dropdown with glass effect
    │
    └── Container (Flex Row, Gap: 16px)
        │
        ├── [Button Widget] (Desktop only)
        │   └── Text: "לשיחת אפיון"
        │   └── Link: #contact
        │   └── Style: Gradient, rounded-full
        │
        └── [Hamburger Widget] (Mobile only)
            └── Toggle Mobile Menu
```

### Mobile Menu

Create a separate **Mobile Menu** section that:
- Slides in from right (RTL)
- Full screen overlay
- Dark background with blur
- Vertical link stack
- Close button top-left (RTL)

### Sticky Header Behavior

Add this CSS to the header template:

```css
/* Header sticky state - add via class toggle or Elementor Motion Effects */
.elementor-sticky--active {
  background: rgba(10, 6, 18, 0.95) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(168, 85, 247, 0.1);
}
```

### Navigation Menu Items

Create WordPress menu: **Primary Menu**

| Label | URL | Parent |
|-------|-----|--------|
| בית | / | - |
| שירותים | # | - |
| ├─ סדנאות AI | /services/workshops/ | שירותים |
| └─ אינטגרציות | /services/integrations/ | שירותים |
| אקדמיה | # | - |
| ├─ AI FIRST | /academy/ai-first/ | אקדמיה |
| ├─ AI READY | /academy/ai-ready/ | אקדמיה |
| └─ AI TECH | /academy/ai-tech/ | אקדמיה |
| אודות | /about/ | - |
| צור קשר | /contact/ | - |

---

## C4: Footer Template Build Instructions

### Create Template

1. Navigate to: **Templates → Theme Builder**
2. Click **Add New → Footer**
3. Name: `Focus AI Footer`
4. Condition: **Entire Site**

### Footer Structure

```
Container (Full Width)
├── Background: #0a0612
├── Border-top: 1px solid rgba(185, 107, 254, 0.15)
├── Padding: 60px 24px 24px
│
└── Container (Max Width: 1400px, Centered)
    │
    ├── Container (5-Column Grid, Gap: 40px)
    │   │
    │   ├── Column 1: Logo + About
    │   │   ├── [Image] Logo
    │   │   └── [Text] Short description (2-3 lines)
    │   │
    │   ├── Column 2: Quick Links
    │   │   ├── [Heading] "ניווט מהיר"
    │   │   └── [Nav Menu] Home, About, Contact, Terms, Privacy
    │   │
    │   ├── Column 3: Services
    │   │   ├── [Heading] "שירותים"
    │   │   └── [Nav Menu] Workshops, Integrations
    │   │
    │   ├── Column 4: Academy
    │   │   ├── [Heading] "אקדמיה"
    │   │   └── [Nav Menu] AI FIRST, AI READY, AI TECH
    │   │
    │   └── Column 5: Community
    │       ├── [Heading] "קהילה"
    │       └── [Social Icons] WhatsApp, Instagram, TikTok, LinkedIn
    │
    └── Container (Bottom Bar, Flex Row, Space Between)
        ├── Border-top: 1px solid rgba(255,255,255,0.1)
        ├── Padding-top: 24px
        ├── Margin-top: 40px
        │
        ├── [Text] "© 2026 Focus AI. כל הזכויות שמורות."
        │
        └── [Button] Back to Top (optional)
```

### Footer Column Styling

| Element | Style |
|---------|-------|
| Column Headings | Rubik 600, 14px, #ffffff, uppercase |
| Links | Rubik 400, 14px, #d7cdef, hover: #ffffff |
| Description Text | Rubik 400, 14px, #d7cdef |
| Social Icons | 24px, #d7cdef, hover: gradient |

### Responsive Behavior

| Breakpoint | Columns |
|------------|---------|
| Desktop | 5 columns |
| Tablet | 3 columns (logo full width above) |
| Mobile | 1 column (stacked) |

---

## Acceptance Criteria Checklist

### C2: Global Setup
- [ ] All global colors added to Site Settings
- [ ] All global fonts configured
- [ ] Layout settings applied
- [ ] Custom CSS added
- [ ] Experiments enabled

### C3: Header Template
- [ ] Logo displays and links to homepage
- [ ] Navigation menu functional with dropdowns
- [ ] Sticky behavior works on scroll
- [ ] Mobile hamburger menu works
- [ ] RTL alignment correct
- [ ] CTA button visible and styled

### C4: Footer Template
- [ ] All columns render correctly
- [ ] All links functional
- [ ] Social icons link to correct platforms (new tab)
- [ ] Responsive stacking works
- [ ] Copyright year correct

---

## Notes for Implementation

1. **Save Global Widgets:** After building the header CTA button, save it as a global widget for reuse
2. **Test RTL:** Verify all alignments in RTL mode before finalizing
3. **Mobile First:** Build mobile layout first, then expand for desktop
4. **Sticky Header:** Use Elementor's built-in Motion Effects → Sticky for header behavior
5. **Dropdown Menus:** May require custom CSS for glass effect on dropdowns

---

*Document created: 2026-01-22*
