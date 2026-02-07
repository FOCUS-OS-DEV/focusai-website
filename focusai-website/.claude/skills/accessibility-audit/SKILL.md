---
name: accessibility-audit
description: Comprehensive accessibility audit for WCAG 2.1 AA compliance with focus on Hebrew RTL support.
disable-model-invocation: true
---

# Accessibility Audit Skill

Perform a comprehensive accessibility audit following WCAG 2.1 AA guidelines:

## Perceivable

### Text Alternatives
- [ ] All images have meaningful alt text
- [ ] Decorative images use `alt=""` or `role="presentation"`
- [ ] Complex images have extended descriptions
- [ ] Icons have accessible names

### Time-Based Media
- [ ] Videos have captions
- [ ] Audio has transcripts

### Adaptable
- [ ] Proper heading hierarchy (single H1, logical order)
- [ ] Landmarks used (header, main, nav, footer)
- [ ] Lists properly marked up
- [ ] Tables have headers

### Distinguishable
- [ ] Color contrast: 4.5:1 for normal text, 3:1 for large text
- [ ] Text can be resized to 200% without loss
- [ ] No information conveyed by color alone

## Operable

### Keyboard Accessible
- [ ] All interactive elements focusable
- [ ] Logical focus order (RTL aware)
- [ ] No keyboard traps
- [ ] Skip links present

### Navigation
- [ ] Multiple ways to find pages
- [ ] Breadcrumbs present
- [ ] Current page indicated in navigation

### Input Modalities
- [ ] Touch targets minimum 44x44px
- [ ] Gestures have alternatives

## Understandable

### Readable
- [ ] Language declared: `lang="he"`
- [ ] Direction declared: `dir="rtl"`
- [ ] Abbreviations explained

### Predictable
- [ ] Consistent navigation
- [ ] Consistent identification
- [ ] No unexpected context changes

### Input Assistance
- [ ] Error identification clear
- [ ] Labels for form inputs
- [ ] Error suggestions provided

## Robust

### Compatible
- [ ] Valid HTML
- [ ] ARIA used correctly
- [ ] Custom widgets have proper roles

## RTL-Specific Checks (Hebrew)
- [ ] `dir="rtl"` on html or body
- [ ] Text alignment respects direction
- [ ] Icons flip where semantically appropriate
- [ ] Numbers and punctuation display correctly
- [ ] Bidirectional text handled properly
- [ ] Form fields align correctly

## Output
Generate:
- WCAG compliance score
- Issues by severity (Critical/Major/Minor)
- Specific fixes with code examples
- Browser/screen reader testing recommendations
