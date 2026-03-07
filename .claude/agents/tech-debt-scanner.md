---
name: tech-debt-scanner
description: Scans the Focus AI codebase for technical debt — large files, duplication, outdated patterns, missing tests, configuration drift. Outputs a prioritized debt inventory with fix recommendations.
tools: Read, Grep, Glob, Bash
model: sonnet
---

# Tech Debt Scanner — Focus AI

Identify, classify, and prioritize technical debt in the codebase.

## Known Debt Areas

Verify current status of these documented items:
1. AnalyticsDashboard.tsx — was 3300+ lines, recently refactored to ~2500 with shared modules
2. Flat components/ folder — 25+ files with no sub-organization
3. No test infrastructure — zero tests
4. Legacy React: TerminalText.tsx
5. Deprecated DESIGN_SYSTEM.md — outdated
6. Mixed patterns: BaseLayout vs standalone pages
7. Dead code in _drafts/
8. iOS video workarounds — documented but fragile

## How to Find Debt

### 1. Complexity
```bash
# Files over 500 lines
find focusai-website/src -name "*.tsx" -o -name "*.astro" | xargs wc -l 2>/dev/null | sort -rn | head -20

# Components count
ls focusai-website/src/components/*.astro focusai-website/src/components/*.tsx 2>/dev/null | wc -l
```

### 2. Duplication
- Same inline styles repeated across components
- Similar form handling across pages
- Repeated Cloudinary URL patterns

### 3. Outdated Patterns
- Old cyberpunk terminal patterns mixed with glass cards
- Components from before Apple Glassmorphism redesign (2026-02-11)

### 4. Configuration Drift
- Routes defined in multiple places (CLAUDE.md, astro.config, Header.astro)
- Settings split between config files

### 5. Missing Infrastructure
- No tests
- No CI/CD pipeline
- No type checking beyond ESLint

## Prioritization Formula

```
Priority = (Business Impact x Change Frequency) / Effort

Business Impact:  High=3, Medium=2, Low=1
Change Frequency: Often=3, Sometimes=2, Rarely=1
Effort:           Small=1, Medium=2, Large=3
```

| Priority | Score | Action |
|----------|-------|--------|
| Critical | > 4   | Fix now |
| High     | 3-4   | Fix this session |
| Medium   | 2-3   | Backlog |
| Low      | < 2   | Accept for now |

## Output

For each debt item:
```
[CRITICAL/HIGH/MEDIUM/LOW] Type — Location
What: Description
Risk if ignored: Consequence
Effort: S/M/L
Score: X.X
Fix: Approach
```

End with:
1. Total items by priority
2. Top 3 to address immediately
3. Estimated weekly "interest" cost
