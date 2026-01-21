# Implementation Guide: C2, C3, C4

**Version:** 1.0
**Created:** 2026-01-22
**Purpose:** Step-by-step implementation instructions for Elementor setup and templates

---

## C2: Elementor Global Settings

### Step 2.1: Access Site Settings

1. Open WordPress Admin
2. Navigate to **Elementor → Site Settings**
3. Or: Open any page with Elementor → Hamburger menu → Site Settings

---

### Step 2.2: Configure Global Colors

Navigate to: **Site Settings → Global Colors**

Click "+" to add each color:

| Name | Hex Code | Notes |
|------|----------|-------|
| `Focus Purple` | `#a855f7` | Primary brand |
| `Focus Pink` | `#ec4899` | Gradient end |
| `Focus Dark` | `#0a0612` | Main background |
| `Focus Surface` | `#1b0125` | Card backgrounds |
| `Text Primary` | `#ffffff` | Main text |
| `Text Muted` | `#d7cdef` | Secondary text |
| `Success Green` | `#22c55e` | Form success |
| `Border Glass` | `#b96bfe40` | Use hex with alpha |

**Verification:** All 8 colors should appear in the color picker throughout Elementor.

---

### Step 2.3: Configure Global Fonts

Navigate to: **Site Settings → Global Fonts**

**Primary Typography:**
| Setting | Value |
|---------|-------|
| Family | Rubik |
| Size | 16px |
| Weight | 400 |
| Line Height | 1.6 |

**Secondary Typography:**
| Setting | Value |
|---------|-------|
| Family | Rubik |
| Size | 14px |
| Weight | 400 |
| Line Height | 1.5 |

**Accent Typography:**
| Setting | Value |
|---------|-------|
| Family | Rubik |
| Size | 14px |
| Weight | 600 |
| Line Height | 1.4 |

**Heading Styles** (add under Typography settings):

| Level | Family | Weight | Size (Desktop) | Size (Mobile) | Line Height |
|-------|--------|--------|----------------|---------------|-------------|
| H1 | Rubik | 800 | 48px | 32px | 1.1 |
| H2 | Rubik | 700 | 36px | 28px | 1.2 |
| H3 | Rubik | 700 | 28px | 22px | 1.25 |
| H4 | Rubik | 600 | 22px | 18px | 1.3 |
| H5 | Rubik | 600 | 18px | 16px | 1.4 |
| H6 | Rubik | 500 | 16px | 14px | 1.4 |

---

### Step 2.4: Configure Layout Defaults

Navigate to: **Site Settings → Layout**

| Setting | Value |
|---------|-------|
| Content Width | 1200 |
| Widgets Space | 20 |
| Stretched Section Fit To | Full Width |
| Default Generic Fonts | Sans-serif |
| Page Title Selector | h1.entry-title |

Navigate to: **Site Settings → Container**

| Setting | Value |
|---------|-------|
| Content Width | 1200px |
| Widgets Gap | 20px |
| Padding | 0px |

---

### Step 2.5: Add Custom CSS

Navigate to: **Site Settings → Custom CSS**

Paste this entire block:

```css
/* ================================================
   FOCUS AI - GLOBAL CUSTOM CSS
   Version: 1.0 | Date: 2026-01-22
   ================================================ */

/* ----- CSS Custom Properties ----- */
:root {
  /* Brand Colors */
  --focus-purple: #a855f7;
  --focus-pink: #ec4899;
  --focus-dark: #0a0612;
  --focus-surface: #1b0125;

  /* Text Colors */
  --text-primary: #ffffff;
  --text-muted: #d7cdef;
  --text-dark: #1f2937;

  /* Borders */
  --border-glass: rgba(185, 107, 254, 0.25);
  --border-glass-hover: rgba(185, 107, 254, 0.5);

  /* Border Radius */
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 20px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-spring: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Shadows */
  --shadow-glow: 0 0 20px rgba(168, 85, 247, 0.3);
  --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* ----- Base Styles ----- */
html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--focus-dark);
  color: var(--text-primary);
}

/* ----- Reduced Motion ----- */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ----- Focus States (Accessibility) ----- */
:focus-visible {
  outline: 2px solid var(--focus-purple);
  outline-offset: 2px;
}

/* ----- Selection ----- */
::selection {
  background: var(--focus-purple);
  color: white;
}

/* ----- Utility Classes ----- */

/* Gradient Background */
.focus-gradient-bg {
  background: linear-gradient(135deg, var(--focus-purple) 0%, var(--focus-pink) 100%);
}

/* Gradient Text */
.focus-gradient-text {
  background: linear-gradient(135deg, var(--focus-purple) 0%, var(--focus-pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glassmorphic Card */
.focus-glass-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
}

.focus-glass-card:hover {
  border-color: var(--border-glass-hover);
}

/* Button Styles */
.focus-btn-primary {
  background: linear-gradient(135deg, var(--focus-purple) 0%, var(--focus-pink) 100%);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  padding: 14px 28px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: var(--transition-normal);
  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
}

.focus-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(168, 85, 247, 0.5);
}

.focus-btn-secondary {
  background: transparent;
  color: var(--focus-purple);
  border: 2px solid var(--focus-purple);
  border-radius: var(--radius-full);
  padding: 12px 26px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: var(--transition-normal);
}

.focus-btn-secondary:hover {
  background: var(--focus-purple);
  color: white;
}

/* RTL Arrow Fix */
[dir="rtl"] .focus-arrow-icon,
[dir="rtl"] .eicon-arrow-left {
  transform: scaleX(-1);
}

/* ----- Header Specific ----- */
.focus-header-sticky {
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}

.focus-header-sticky.elementor-sticky--active {
  background: rgba(10, 6, 18, 0.95) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(168, 85, 247, 0.1);
}

/* ----- Navigation Styles ----- */
.focus-nav-link {
  color: var(--text-muted);
  padding: 10px 18px;
  border-radius: var(--radius-full);
  font-weight: 500;
  font-size: 14px;
  transition: var(--transition-normal);
  border: 1px solid transparent;
}

.focus-nav-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.08);
}

.focus-nav-link.active {
  color: var(--text-primary);
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%);
  border-color: rgba(168, 85, 247, 0.3);
}

/* Dropdown Menu Styling */
.focus-dropdown-menu {
  background: rgba(27, 1, 37, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-md);
  padding: 12px;
  box-shadow: var(--shadow-card);
}

.focus-dropdown-item {
  color: var(--text-muted);
  padding: 10px 16px;
  border-radius: var(--radius-sm);
  transition: var(--transition-fast);
}

.focus-dropdown-item:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.08);
}

/* ----- Mobile Menu ----- */
.focus-mobile-menu {
  background: var(--focus-dark);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  padding: 80px 24px 40px;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.focus-mobile-menu.is-open {
  transform: translateX(0);
}

/* ----- Form Styles ----- */
.focus-form-field input,
.focus-form-field select,
.focus-form-field textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-md);
  padding: 14px 18px;
  color: var(--text-primary);
  font-size: 16px;
  width: 100%;
  transition: var(--transition-normal);
}

.focus-form-field input:focus,
.focus-form-field select:focus,
.focus-form-field textarea:focus {
  outline: none;
  border-color: var(--focus-purple);
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
}

.focus-form-field input::placeholder,
.focus-form-field textarea::placeholder {
  color: var(--text-muted);
  opacity: 0.7;
}

/* ----- Section Spacing ----- */
.focus-section {
  padding: clamp(60px, 10vw, 100px) 0;
}

.focus-section-tight {
  padding: clamp(40px, 6vw, 60px) 0;
}

/* ----- Container Rounded ----- */
.focus-container-rounded {
  background: var(--focus-surface);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-xl);
  padding: clamp(32px, 5vw, 60px);
}

/* ----- Hide Scrollbar Utility ----- */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* ----- Animation Keyframes ----- */
@keyframes focusFadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes focusPulseGlow {
  0%, 100% {
    opacity: 0.6;
    filter: blur(80px);
  }
  50% {
    opacity: 0.8;
    filter: blur(100px);
  }
}

.focus-animate-fade-in {
  animation: focusFadeInUp 0.6s ease forwards;
}

.focus-bg-orb {
  animation: focusPulseGlow 6s ease-in-out infinite;
}
```

---

### Step 2.6: Enable Experiments

Navigate to: **Elementor → Settings → Experiments**

Enable these:
- [x] **Flexbox Container** — Required
- [x] **Improved CSS Loading** — Performance
- [x] **Lazy Load Background Images** — Performance
- [x] **Optimized DOM Output** — Performance (if available)

---

### Step 2.7: Verify Setup

**Checklist:**
- [ ] All 8 global colors appear in color picker
- [ ] Typography settings applied
- [ ] Custom CSS shows in page source
- [ ] Flexbox Container option available when adding new container

---

## C3: Header Template

### Step 3.1: Create Header Template

1. Navigate to: **Templates → Theme Builder**
2. Click **Add New**
3. Select: **Header**
4. Name: `Focus AI Header`
5. Click **Create Template**

---

### Step 3.2: Build Header Structure

**Outer Container Settings:**
| Setting | Value |
|---------|-------|
| Tag | header |
| Width | Full Width |
| Min Height | 72px |
| Padding | 16px 24px |
| Background | Transparent |
| CSS Classes | `focus-header-sticky` |

**Inner Container Settings:**
| Setting | Value |
|---------|-------|
| Width | Custom - 1400px |
| Content Width | Boxed |
| Direction | Row |
| Justify | Space Between |
| Align | Center |
| Gap | 24px |

---

### Step 3.3: Add Logo

1. Add **Image** widget to left side
2. Settings:
   - Image: Upload Focus AI logo (PNG with transparency)
   - Size: Custom → Width: 120px (desktop), 100px (mobile)
   - Link: Homepage URL
   - CSS Classes: `focus-logo`

---

### Step 3.4: Add Navigation Menu

1. Add **Nav Menu** widget to center
2. Settings:
   - Menu: Select "Primary Menu" (create if not exists)
   - Layout: Horizontal
   - Align: Center
   - Pointer: None
   - Mobile: Hamburger (set breakpoint to Tablet)

3. Style tab:
   - Typography: Rubik, 500, 14px
   - Text Color: `#d7cdef`
   - Text Color (Hover): `#ffffff`
   - Text Color (Active): `#ffffff`
   - Background (Hover): `rgba(255, 255, 255, 0.08)`
   - Background (Active): `linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))`
   - Border Radius: 50px
   - Padding: 10px 18px

4. Dropdown Settings:
   - Background: `rgba(27, 1, 37, 0.95)`
   - Border: 1px solid `rgba(185, 107, 254, 0.25)`
   - Border Radius: 16px
   - Box Shadow: 0 8px 32px rgba(0,0,0,0.3)
   - Padding: 12px
   - Item Padding: 10px 16px
   - Item Border Radius: 12px

---

### Step 3.5: Add CTA Button

1. Add **Button** widget to right side
2. Content:
   - Text: `לשיחת אפיון`
   - Link: `#contact`
   - Icon: None (or arrow if desired)

3. Style:
   - Typography: Rubik, 700, 14px
   - Background: Gradient → Purple `#a855f7` → Pink `#ec4899` (135°)
   - Border Radius: 50px
   - Padding: 12px 24px
   - Box Shadow: 0 4px 20px rgba(168, 85, 247, 0.4)

4. Hover Style:
   - Transform: translateY(-2px)
   - Box Shadow: 0 8px 30px rgba(168, 85, 247, 0.5)

---

### Step 3.6: Set Sticky Behavior

1. Select the outer container
2. Go to **Advanced → Motion Effects**
3. Enable **Sticky**
4. Sticky On: Top
5. Offset: 0
6. Effects Offset: 50

The CSS class `focus-header-sticky` will handle the background change on scroll.

---

### Step 3.7: Mobile Menu Configuration

1. In Nav Menu widget → Hamburger settings
2. Toggle Icon: Menu (default)
3. Toggle Color: `#ffffff`
4. Toggle Background: Transparent
5. Toggle Size: 24px

6. Mobile Menu Style:
   - Background: `#0a0612`
   - Padding: 80px 24px 40px
   - Text Color: `#ffffff`
   - Text Size: 20px
   - Item Spacing: 16px

---

### Step 3.8: Responsive Adjustments

**Tablet (< 1024px):**
- Hide desktop navigation
- Show hamburger menu
- Logo width: 100px
- Container padding: 12px 16px

**Mobile (< 768px):**
- Logo width: 90px
- CTA button: Consider hiding or making smaller

---

### Step 3.9: Publish Header

1. Click **Publish**
2. Add Condition: **Entire Site**
3. Click **Save & Close**

---

### Step 3.10: Header Verification Checklist

- [ ] Logo displays correctly and links to homepage
- [ ] Navigation menu shows all items
- [ ] Dropdowns open on hover (desktop)
- [ ] Hamburger menu works on mobile
- [ ] Sticky behavior activates on scroll
- [ ] Background blur appears when sticky
- [ ] CTA button styled correctly
- [ ] All links functional
- [ ] RTL alignment correct

---

## C4: Footer Template

### Step 4.1: Create Footer Template

1. Navigate to: **Templates → Theme Builder**
2. Click **Add New**
3. Select: **Footer**
4. Name: `Focus AI Footer`
5. Click **Create Template**

---

### Step 4.2: Build Footer Structure

**Outer Container:**
| Setting | Value |
|---------|-------|
| Tag | footer |
| Width | Full Width |
| Background | `#0a0612` |
| Border Top | 1px solid `rgba(185, 107, 254, 0.15)` |
| Padding | 60px 24px 24px |

**Inner Container:**
| Setting | Value |
|---------|-------|
| Width | Custom - 1400px |
| Direction | Column |
| Gap | 40px |

---

### Step 4.3: Main Footer Grid

Add a **Container** with:
- Direction: Row
- Gap: 40px
- Wrap: Wrap

Add 5 child containers for columns:

**Column 1: Logo & About (Width: 25%)**
- Image widget: Logo
- Text widget: 2-3 line description
- Example: "אנחנו מגשרים על הפער בין אנשים לטכנולוגיה ומטמיעים AI בצורה חכמה ומעשית."

**Column 2: Quick Links (Width: 15%)**
- Heading: "ניווט מהיר"
- Nav Menu or Icon List:
  - בית → /
  - אודות → /about/
  - צור קשר → /contact/
  - תנאי שימוש → /terms/
  - מדיניות פרטיות → /privacy-policy/

**Column 3: Services (Width: 15%)**
- Heading: "שירותים"
- Icon List:
  - סדנאות AI → /services/workshops/
  - אינטגרציות → /services/integrations/

**Column 4: Academy (Width: 15%)**
- Heading: "אקדמיה"
- Icon List:
  - AI FIRST → /academy/ai-first/
  - AI READY → /academy/ai-ready/
  - AI TECH → /academy/ai-tech/

**Column 5: Community (Width: 20%)**
- Heading: "קהילה"
- Social Icons widget:
  - WhatsApp
  - Instagram
  - TikTok
  - LinkedIn

---

### Step 4.4: Column Heading Style

| Setting | Value |
|---------|-------|
| Typography | Rubik, 600, 14px |
| Color | `#ffffff` |
| Text Transform | Uppercase |
| Letter Spacing | 1px |
| Margin Bottom | 16px |

---

### Step 4.5: Link Style

| Setting | Value |
|---------|-------|
| Typography | Rubik, 400, 14px |
| Color | `#d7cdef` |
| Color (Hover) | `#ffffff` |
| Line Height | 2 |

---

### Step 4.6: Social Icons Style

| Setting | Value |
|---------|-------|
| Size | 24px |
| Color | `#d7cdef` |
| Color (Hover) | `#a855f7` |
| Gap | 16px |

Social Links:
- WhatsApp: https://wa.me/[PHONE_NUMBER]
- Instagram: https://instagram.com/focusai_il
- TikTok: https://tiktok.com/@focusai
- LinkedIn: https://linkedin.com/company/focusai

*(Replace with actual URLs)*

---

### Step 4.7: Bottom Bar

Add a **Container** below the main grid:
- Direction: Row
- Justify: Space Between
- Align: Center
- Border Top: 1px solid `rgba(255, 255, 255, 0.1)`
- Padding Top: 24px
- Margin Top: 0 (handled by parent gap)

Add **Text** widget:
```
© 2026 Focus AI. כל הזכויות שמורות.
```

Style:
- Color: `#d7cdef`
- Size: 14px
- Opacity: 0.7

Optional: Add "Back to Top" button on the right.

---

### Step 4.8: Responsive Adjustments

**Tablet:**
- Grid: 3 columns (logo full width above)
- Logo column: 100% width, margin-bottom: 24px

**Mobile:**
- Grid: 1 column (stacked)
- All columns: 100% width
- Center align text
- Reduce padding: 40px 16px 16px

---

### Step 4.9: Publish Footer

1. Click **Publish**
2. Add Condition: **Entire Site**
3. Click **Save & Close**

---

### Step 4.10: Footer Verification Checklist

- [ ] Logo displays correctly
- [ ] All navigation links work
- [ ] Social icons link correctly (new tab)
- [ ] Responsive stacking works
- [ ] Copyright text correct
- [ ] RTL alignment correct
- [ ] Border and colors match spec

---

## Final C2-C4 Verification

Before requesting approval for C5:

### Visual Checks
- [ ] Header appears on all pages
- [ ] Footer appears on all pages
- [ ] No layout conflicts
- [ ] Dark theme consistent

### Functional Checks
- [ ] All navigation links work
- [ ] Dropdowns functional
- [ ] Mobile menu opens/closes
- [ ] Sticky header works
- [ ] Social icons open in new tab

### RTL Checks
- [ ] Logo on correct side
- [ ] Navigation aligned correctly
- [ ] Text direction correct
- [ ] Icons not mirrored incorrectly

---

*Document created: 2026-01-22*
