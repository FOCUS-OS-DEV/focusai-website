---
name: ui-design
description: Analyze and improve UI/UX design - colors, spacing, typography, animations, and visual consistency.
disable-model-invocation: true
---

# UI/UX Design Skill

Analyze the current page/component and suggest improvements based on modern design principles.

## Design System - Focus AI (Cyberpunk Theme)

### Color Palette
```
Background:
- #0a0a0f (darkest - main bg)
- #12121a (cards, elevated surfaces)
- #1a1a24 (hover states)

Text:
- #f5f5fa (primary text)
- #d0d0e0 (secondary text)
- #9090a8 (muted text)
- #b0b0c0 (subtle text)

Accent:
- #a855f7 (primary purple)
- #c084fc (light purple)
- #7c3aed (dark purple)
- #e879f9 (pink accent)

Borders:
- #2a2a3a (default)
- rgba(168, 85, 247, 0.3) (accent hover)
- rgba(168, 85, 247, 0.5) (active)

Glow Effects:
- box-shadow: 0 0 20px rgba(168, 85, 247, 0.4)
- text-shadow: 0 0 30px rgba(168, 85, 247, 0.5)
```

### Typography
```
Font Families:
- Rubik (Hebrew body text)
- JetBrains Mono (code, technical elements)
- Orbitron (display headings, cyberpunk feel)

Sizes (clamp for responsiveness):
- Hero: clamp(3rem, 10vw, 8rem)
- H1: clamp(2.5rem, 6vw, 4rem)
- H2: clamp(2rem, 4vw, 3rem)
- H3: clamp(1.5rem, 3vw, 2rem)
- Body: 1rem (16px)
- Small: 0.875rem (14px)
- Tiny: 0.75rem (12px)

Weights:
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Black: 900 (headings)
```

### Spacing System
```
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)
- 3xl: 4rem (64px)
- section-y: 5rem-8rem (80-128px)
```

### Component Patterns

#### Cards
```css
background: #12121a;
border: 1px solid #2a2a3a;
transition: all 0.3s ease;
clip-path: polygon(
  0 10px, 10px 0,
  calc(100% - 10px) 0, 100% 10px,
  100% calc(100% - 10px), calc(100% - 10px) 100%,
  10px 100%, 0 calc(100% - 10px)
);

/* Hover */
border-color: rgba(168, 85, 247, 0.3);
box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
```

#### Buttons
```css
/* Primary */
background: #a855f7;
color: white;
font-family: 'JetBrains Mono', monospace;
text-transform: uppercase;
letter-spacing: 0.1em;
box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);

/* Secondary */
background: transparent;
border: 2px solid #a855f7;
color: #a855f7;
```

#### Badges/Tags
```css
background: rgba(168, 85, 247, 0.1);
border: 1px solid rgba(168, 85, 247, 0.3);
font-family: 'JetBrains Mono', monospace;
font-size: 0.75rem;
text-transform: uppercase;
letter-spacing: 0.15em;
```

### Animation Guidelines
```
Durations:
- Micro: 150ms (hover, focus)
- Fast: 200-300ms (toggles, reveals)
- Normal: 400-600ms (page transitions)
- Slow: 800-1200ms (hero animations)

Easings:
- ease-out (exits)
- ease-in-out (state changes)
- cubic-bezier(0.16, 1, 0.3, 1) (smooth entrance)

GSAP:
- power2.out (general)
- power3.out (dramatic)
- back.out(1.2) (bounce effect)
```

### RTL Considerations
- Text alignment: right by default
- Icons that indicate direction should flip
- Padding/margins may need rtl: prefix
- Scroll indicators flip direction

## Analysis Checklist

### Visual Hierarchy
- [ ] Clear focal points
- [ ] Proper heading hierarchy
- [ ] Sufficient contrast between elements
- [ ] White space balance

### Consistency
- [ ] Colors match design system
- [ ] Typography is consistent
- [ ] Spacing follows the system
- [ ] Component styles are uniform

### Responsiveness
- [ ] Mobile-first approach
- [ ] Breakpoints: sm(640), md(768), lg(1024), xl(1280)
- [ ] Touch targets min 44x44px
- [ ] Text readable at all sizes

### Micro-interactions
- [ ] Hover states defined
- [ ] Focus states visible
- [ ] Loading states present
- [ ] Transitions smooth

### Performance
- [ ] No layout shifts (CLS)
- [ ] Animations use transform/opacity
- [ ] Images properly sized
- [ ] Fonts preloaded

## Output Format

When analyzing, provide:
1. **Current State** - What exists
2. **Issues Found** - Problems with design
3. **Recommendations** - Specific improvements
4. **Code Examples** - Ready-to-use fixes
