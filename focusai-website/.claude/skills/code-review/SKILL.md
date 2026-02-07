---
name: code-review
description: Review code changes for quality, accessibility, performance, and RTL support. Use before committing.
disable-model-invocation: true
---

# Code Review Skill

Review the recent changes or specified files for:

## Quality Checks
1. **Code Quality**: Clean code, proper naming, no code duplication
2. **TypeScript**: Proper types, no `any`, interfaces for props
3. **React Best Practices**: Proper hooks usage, no memory leaks, proper key props

## Accessibility (Critical for Hebrew RTL)
1. Semantic HTML elements (header, main, nav, section, article)
2. Proper ARIA labels and roles
3. RTL support: `dir="rtl"` where needed, proper text alignment
4. Color contrast ratios (WCAG AA minimum)
5. Keyboard navigation support
6. Focus states visible

## Performance
1. Images optimized (using Cloudinary transforms)
2. No unnecessary re-renders
3. Lazy loading where appropriate
4. Bundle size impact

## Tailwind CSS
1. Proper utility classes usage
2. No conflicting classes
3. Responsive design (mobile-first)
4. RTL utilities (`rtl:`, `ltr:`) where needed

## Output Format
Provide a structured review with:
- **Critical Issues** (must fix)
- **Warnings** (should fix)
- **Suggestions** (nice to have)
- **Approved** checkmarks for passing areas
