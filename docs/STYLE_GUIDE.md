# Focus AI - Style Guide

## 1. Brand Colors

### Primary Palette
| Name | Hex | Usage |
|------|-----|-------|
| Focus Purple | `#a855f7` | Primary actions, links, accents |
| Focus Pink | `#ec4899` | Secondary accent, gradient end |
| Neon Purple | `#b86cff` | Glow effects, highlights |
| Neon Pink | `#ff4fd8` | Glow effects, gradients |

### Dark Theme
| Name | Hex | Usage |
|------|-----|-------|
| Background Dark | `#0a0612` | Main background |
| Background Alt | `#1b0125` | Card backgrounds |
| Surface | `#1a0f2e` | Elevated surfaces |
| Card Glass | `rgba(27, 1, 37, 0.6)` | Glassmorphic cards |

### Light Theme
| Name | Hex | Usage |
|------|-----|-------|
| Background | `#ffffff` | Main background |
| Background Alt | `#faf8ff` | Section alternates |
| Purple Tint | `#f3e8ff` | Hero gradients |
| Pink Tint | `#fce7f3` | Hero gradients |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Text Light | `#ffffff` | Dark theme text |
| Text Dark | `#1f2937` | Light theme text |
| Muted Light | `#d7cdef` | Secondary text (dark theme) |
| Muted Dark | `#6b7280` | Secondary text (light theme) |

### Functional Colors
| Name | Hex | Usage |
|------|-----|-------|
| Success | `#22c55e` | Success states, checkmarks |
| Warning | `#f59e0b` | Warnings, alerts |
| Error | `#ef4444` | Errors, validation |

---

## 2. Typography

### Font Family
```css
font-family: 'Rubik', system-ui, -apple-system, sans-serif;
```

### Type Scale

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display | 4rem-5rem | 900 | 1.1 | Hero headlines |
| H1 | 2.5rem-3rem | 800 | 1.2 | Page titles |
| H2 | 2rem-2.5rem | 700 | 1.25 | Section headers |
| H3 | 1.5rem | 700 | 1.3 | Card titles |
| H4 | 1.25rem | 600 | 1.4 | Subsections |
| Body Large | 1.125rem | 400 | 1.6 | Lead paragraphs |
| Body | 1rem | 400 | 1.6 | Body text |
| Small | 0.875rem | 400 | 1.5 | Captions, meta |
| XSmall | 0.75rem | 500 | 1.4 | Labels, badges |

### Responsive Type (Using Clamp)
```css
/* Hero headline */
font-size: clamp(2.5rem, 5vw + 1rem, 5rem);

/* Section header */
font-size: clamp(1.75rem, 3vw + 0.5rem, 3rem);

/* Body large */
font-size: clamp(1rem, 1.5vw + 0.5rem, 1.25rem);
```

---

## 3. Spacing System

### Base Scale (8px grid)
| Token | Value | Pixels |
|-------|-------|--------|
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-5` | 1.25rem | 20px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-10` | 2.5rem | 40px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |
| `--space-20` | 5rem | 80px |
| `--space-24` | 6rem | 96px |

### Section Padding
```css
/* Responsive section padding */
padding-block: clamp(3rem, 8vw, 6rem);
padding-inline: clamp(1rem, 4vw, 2rem);
```

### Container Max Widths
| Name | Width | Usage |
|------|-------|-------|
| xs | 480px | Single column content |
| sm | 640px | Narrow content |
| md | 768px | Forms, text blocks |
| lg | 1024px | Cards grid |
| xl | 1280px | Main content |
| 2xl | 1400px | Full-width sections |

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Small buttons, chips |
| `--radius-md` | 12px | Cards, inputs |
| `--radius-lg` | 16px | Large cards |
| `--radius-xl` | 20px-24px | Hero cards, modals |
| `--radius-2xl` | 32px | Feature sections |
| `--radius-full` | 9999px | Pills, avatars, CTAs |

---

## 5. Shadows

### Elevation Levels
```css
/* Subtle */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Card */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Elevated */
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

/* Modal */
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
```

### Glow Effects
```css
/* Purple glow */
box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);

/* Pink glow */
box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);

/* Gradient glow (for CTAs) */
box-shadow:
  0 4px 20px rgba(168, 85, 247, 0.4),
  0 8px 30px rgba(236, 72, 153, 0.2);
```

---

## 6. Components

### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
  font-weight: 700;
  padding: 0.875rem 2rem;
  border-radius: 9999px;
  box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(168, 85, 247, 0.5);
}
```

### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: #a855f7;
  font-weight: 700;
  padding: 0.875rem 2rem;
  border: 2px solid #a855f7;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #a855f7;
  color: white;
}
```

### Card (Glass Effect)
```css
.card-glass {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 1.5rem;
}
```

### Input Field
```css
.input-field {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #a855f7;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
}
```

---

## 7. Animations

### Timing Functions
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Common Animations
```css
/* Float */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Pulse Glow */
@keyframes pulse-glow {
  0%, 100% { opacity: 1; filter: brightness(1); }
  50% { opacity: 0.7; filter: brightness(1.2); }
}

/* Fade In Up */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Hover Transitions
```css
/* Standard */
transition: all 0.3s ease;

/* Button lift */
transition: transform 0.3s var(--spring), box-shadow 0.3s ease;

/* Fast (micro-interactions) */
transition: all 0.15s ease;
```

---

## 8. Gradients

### Primary Gradient
```css
background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
```

### Text Gradient
```css
background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Hero Background (Light)
```css
background: linear-gradient(
  135deg,
  #faf8ff 0%,
  #f3e8ff 50%,
  #fce7f3 100%
);
```

### Hero Background (Dark)
```css
background: linear-gradient(
  180deg,
  #0a0612 0%,
  #1b0125 100%
);
```

---

## 9. Breakpoints

| Name | Min Width | Target |
|------|-----------|--------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Mobile-First Media Queries
```css
/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 1024px) { }

/* Large desktop */
@media (min-width: 1280px) { }
```

---

## 10. Accessibility

### Focus States
```css
:focus-visible {
  outline: 2px solid #a855f7;
  outline-offset: 2px;
}
```

### Color Contrast
- Ensure 4.5:1 contrast ratio for body text
- Ensure 3:1 contrast ratio for large text and UI components
- Test with grayscale filter for color blindness

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. RTL Considerations

### Direction-Aware Properties
```css
/* Use logical properties */
padding-inline-start: 1rem;  /* Instead of padding-left */
padding-inline-end: 1rem;    /* Instead of padding-right */
margin-inline: auto;         /* Instead of margin: 0 auto */
inset-inline-start: 0;       /* Instead of left: 0 */
```

### Icon Mirroring
```css
[dir="rtl"] .icon-arrow {
  transform: scaleX(-1);
}
```

### Gradient Direction
```css
/* RTL-aware gradient */
background: linear-gradient(to left, #a855f7, #ec4899);
```

---

*Document created: 2026-01-21*
*Last updated: 2026-01-21*
