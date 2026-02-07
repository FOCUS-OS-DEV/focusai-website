---
name: astro-component
description: Create new Astro or React components following project conventions with Tailwind CSS and GSAP animations.
disable-model-invocation: true
---

# Astro Component Creator Skill

Create new components following the Focus AI website conventions:

## Component Types

### 1. Astro Component (.astro)
Use for:
- Static content sections
- Layout components
- Pages
- Components without client-side interactivity

```astro
---
// Props interface
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<section class="py-20 bg-[#0a0a0f]" dir="rtl">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold text-[#f5f5fa]">{title}</h2>
    {description && <p class="text-[#9090a8]">{description}</p>}
  </div>
</section>
```

### 2. React Component (.tsx)
Use for:
- Interactive components
- Components with state
- Animations with Framer Motion
- Client-side functionality

```tsx
"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

export const MyComponent = ({ title }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-[#f5f5fa]"
    >
      {title}
    </motion.div>
  );
};

export default MyComponent;
```

## Design System

### Colors (Dark Theme)
- Background: `#0a0a0f` (darkest), `#12121a` (cards)
- Text: `#f5f5fa` (primary), `#9090a8` (muted), `#c0c0d0` (secondary)
- Accent: `#a855f7` (purple), `#c084fc` (light purple)
- Borders: `#2a2a3a`

### Typography
- Headings: `font-bold` or `font-black`
- Body: Default weight
- Mono: `font-mono` for technical elements

### Spacing
- Sections: `py-20` or `py-32`
- Container: `container mx-auto px-6 lg:px-12`
- Grid gaps: `gap-6`, `gap-8`, `gap-12`

### RTL Support
- Always include `dir="rtl"` on sections
- Use `text-right` for Hebrew text
- Use `rtl:` prefix for direction-specific styles

## Animation Patterns

### GSAP ScrollTrigger (Astro)
```js
gsap.fromTo(element,
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
    }
  }
);
```

### Framer Motion (React)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
```

## File Location
- Components: `src/components/`
- Pages: `src/pages/`
- Layouts: `src/layouts/`

## Checklist Before Creating
- [ ] Determine if Astro or React is appropriate
- [ ] Define TypeScript props interface
- [ ] Include RTL support
- [ ] Add accessibility attributes
- [ ] Use design system colors/spacing
- [ ] Add appropriate animations
