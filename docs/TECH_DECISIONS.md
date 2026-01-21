# Technical Decisions Log (ADR Style)

## ADR-001: Page Builder Choice

**Status:** Confirmed
**Date:** 2026-01-21

### Context
The existing WordPress site uses Elementor as the page builder. We need to decide whether to continue with Elementor or consider alternatives.

### Decision
**Continue with Elementor** (container-based structure)

### Rationale
- Existing site infrastructure already uses Elementor
- Team familiarity assumed
- Good RTL support
- Container-based layouts available (modern Flexbox approach)
- Theme Builder for global headers/footers

### Consequences
- Must use Elementor-compatible hosting (adequate PHP memory)
- Should minimize widget count to reduce DOM bloat
- Will use containers instead of sections/columns for better performance

---

## ADR-002: Form Solution

**Status:** Confirmed
**Date:** 2026-01-22

### Context
Current HTML pages use hardcoded forms with n8n webhook integration. WordPress offers plugin-based form solutions.

### Decision
**Elementor Forms** — Elementor Pro is confirmed active.

### Rationale
- Built into Elementor Pro (no extra plugin)
- Drag-and-drop form builder
- Native webhook action support for future n8n integration
- Consistent styling with rest of page

### Form Fields Required
| Field | Type | Required |
|-------|------|----------|
| שם מלא (Full Name) | Text | Yes |
| אימייל (Email) | Email | Yes |
| טלפון (Phone) | Tel | No |
| מעניין אותי (Interest) | Select | Yes |
| הודעה (Message) | Textarea | No |

### Interest Select Options
- שירותים לארגונים (Integrations)
- האקדמיה (Academy)
- שניהם (Both)

### Webhook Configuration
- Placeholder: `TO_BE_CONNECTED_LATER`
- Will be replaced with n8n endpoint when provided

---

## ADR-003: Theme Architecture

**Status:** Proposed
**Date:** 2026-01-21

### Context
The current site appears to use a custom/child theme. For maintainability, we need to decide on theme structure.

### Options

| Option | Pros | Cons |
|--------|------|------|
| **Hello Elementor + Child Theme** | Lightweight, Elementor-optimized, easy updates | Minimal built-in features |
| **Astra + Child Theme** | Feature-rich, good RTL, performance optimized | More code bloat than Hello |
| **Existing Custom Theme** | Already in place, familiar | Unknown quality, update risk |

### Recommendation
**Hello Elementor with Child Theme** for:
- Minimal footprint (faster load times)
- Full Elementor compatibility
- Theme Builder handles header/footer
- Child theme for custom CSS/functions

### Implementation Notes
- Create `focusai-child` theme
- Place custom CSS in `style.css`
- Keep PHP customizations minimal

---

## ADR-004: CSS Strategy

**Status:** Proposed
**Date:** 2026-01-21

### Context
Need to determine where custom CSS should live for maintainability.

### Decision
**Layered approach:**

1. **Global Styles** → Elementor Site Settings → Custom CSS
2. **Component Styles** → Elementor widget-level CSS
3. **Utility/Override CSS** → Child theme `style.css`
4. **RTL Fixes** → Separate `rtl.css` if needed

### CSS Custom Properties (Design Tokens)
```css
:root {
  /* Colors */
  --focus-purple: #a855f7;
  --focus-pink: #ec4899;
  --focus-dark: #0a0612;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;

  /* Typography */
  --font-primary: 'Rubik', system-ui, sans-serif;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;

  /* Borders */
  --radius-sm: 0.75rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-full: 9999px;
}
```

---

## ADR-005: Analytics & Tracking

**Status:** Confirmed
**Date:** 2026-01-21

### Current Integrations Detected
- TikTok Pixel (`D4RU89JC77U321H5FI80`)
- Meta Pixel (`1934350780483890`)
- Fixdigital Call Tracking

### Recommendation
- Use **WP Code** or **Code Snippets** plugin for tracking code management
- Alternatively: Google Tag Manager for centralized tag management
- Keep pixel codes in one location for easy updates

### Action Required
- [ ] Confirm all pixel IDs are correct
- [ ] Decide on tag management approach (GTM vs direct injection)

---

## ADR-006: Performance Optimization

**Status:** Planned
**Date:** 2026-01-21

### Known Risks with Elementor
1. DOM bloat from nested containers
2. Render-blocking CSS
3. Heavy JavaScript load
4. Large image assets

### Mitigation Strategy

| Issue | Solution |
|-------|----------|
| DOM bloat | Use minimal nesting, prefer Flexbox containers |
| CSS | Enable Elementor's "Improved CSS Loading" experiment |
| JS | Defer non-critical scripts, use Elementor's optimizations |
| Images | WebP format, lazy loading, proper sizing |
| Fonts | Host locally or use `font-display: swap` |

### Plugins to Consider
- **WP Rocket** or **LiteSpeed Cache** for caching
- **ShortPixel** or **Imagify** for image optimization
- **Perfmatters** for script management (optional)

---

## ADR-007: RTL Implementation

**Status:** Confirmed
**Date:** 2026-01-21

### Requirements
- Full Hebrew RTL support
- `dir="rtl"` and `lang="he"` on `<html>`
- Logical CSS properties where possible

### Implementation Checklist
- [ ] Set WordPress language to Hebrew
- [ ] Ensure Elementor RTL mode is enabled
- [ ] Use `padding-inline-start/end` instead of `left/right`
- [ ] Test all components in RTL context
- [ ] Verify gradient directions (may need reversal)
- [ ] Check icon/arrow directions

### Known RTL Considerations
```css
/* Button arrows should point left in RTL */
[dir="rtl"] .arrow-icon {
  transform: scaleX(-1);
}

/* Gradients may need direction adjustment */
[dir="rtl"] .gradient-lr {
  background: linear-gradient(to left, var(--focus-purple), var(--focus-pink));
}
```

---

## ADR-008: Smooth Scroll Library

**Status:** Under Review
**Date:** 2026-01-21

### Current Implementation
Site uses **Lenis** for smooth scrolling with physics-based easing.

### Options

| Option | Pros | Cons |
|--------|------|------|
| **Keep Lenis** | Already implemented, smooth feel | Extra JS, may conflict with Elementor |
| **CSS `scroll-behavior: smooth`** | Native, no JS | Less control, no easing |
| **Remove** | Cleaner, faster | Less polished feel |

### Recommendation
- Test site without Lenis first
- If scroll feels acceptable, remove for performance
- If needed, keep but defer loading

---

## ADR-009: Homepage Architecture

**Status:** Confirmed
**Date:** 2026-01-22

### Context
Need to define the homepage structure that serves both B2B (Services) and B2C (Academy) audiences.

### Decision
**10-section homepage** with clear funnel flow:

1. Header (Global Template)
2. Hero
3. Value Proposition Cards (Services vs Academy split)
4. Why Focus AI (Differentiators)
5. Services Preview (B2B)
6. Academy Preview (B2C)
7. Social Proof / Testimonials
8. Team / Founders
9. CTA / Contact Form
10. Footer (Global Template)

### Rationale
- Follows awareness → credibility → conversion funnel
- Guides both B2B and B2C users to appropriate paths
- Builds trust through team and testimonials
- Single conversion endpoint (form) for lead capture
- Structure inspired by profit-fs.com (authority-building approach)

### Alternatives Considered
1. **Single audience focus** — Rejected: Would alienate half the audience
2. **Campaign-style page** — Rejected: Need long-term homepage, not landing page
3. **Minimal hero + links** — Rejected: Not enough authority building

### Consequences
- Each section needs clear purpose and conversion intent
- Must avoid content duplication between sections
- Reusable components needed for efficiency

---

## ADR-010: Theme Direction

**Status:** Confirmed
**Date:** 2026-01-22

### Decision
**Dark theme** with tech/AI aesthetic

### Design Principles
- High contrast for readability
- Enterprise-level trust (not "too cyber")
- Rounded container-based layout (not edge-to-edge)
- Purple/pink gradient accents on dark background

### Color Application
| Element | Color |
|---------|-------|
| Background | #0a0612 |
| Surface | #1b0125 |
| Primary Text | #ffffff |
| Secondary Text | #d7cdef |
| Primary Accent | #a855f7 → #ec4899 gradient |
| Borders | rgba(185, 107, 254, 0.25) |

---

## Open Questions

1. ~~**Elementor Pro:** Is Pro license active?~~ → **RESOLVED: Yes, active**
2. **Hosting Environment:** What hosting is used? Need to verify PHP limits for Elementor
3. **Existing Plugins:** Need full plugin audit to avoid conflicts
4. **Domain/SSL:** Confirm focusai.co.il configuration
5. **Backup Strategy:** What backup solution is in place?

---

*Document created: 2026-01-21*
*Last updated: 2026-01-22*
