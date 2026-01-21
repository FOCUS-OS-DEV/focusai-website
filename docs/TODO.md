# Focus AI - Project Task Tracker

> **Status Legend:** `TODO` | `IN PROGRESS` | `BLOCKED` | `DONE`

---

## PHASE A: Discovery — `DONE`

### A1: Repository Analysis
| Field | Value |
|-------|-------|
| **Status** | `DONE` |
| **Completed** | 2026-01-22 |

### A2: WordPress Site Analysis
| Field | Value |
|-------|-------|
| **Status** | `DONE` |
| **Completed** | 2026-01-22 |

### A3: Documentation Setup
| Field | Value |
|-------|-------|
| **Status** | `DONE` |
| **Completed** | 2026-01-22 |

---

## PHASE B: Strategy & Architecture — `DONE`

### B1: Sitemap Definition
| Field | Value |
|-------|-------|
| **Status** | `DONE` |
| **Completed** | 2026-01-22 |

### B2: Navigation Architecture
| Field | Value |
|-------|-------|
| **Status** | `DONE` |
| **Completed** | 2026-01-22 |

### B3: Client Approval on Sitemap
| Field | Value |
|-------|-------|
| **Status** | `DONE` |
| **Completed** | 2026-01-22 |
| **Notes** | Approved as-is. Active courses: AI FIRST, AI READY, AI TECH. No prices in menu. Academy = hub page. |

---

## PHASE C: Homepage Build — `IN PROGRESS`

### C0: Homepage Design Confirmation
| Field | Value |
|-------|-------|
| **Objective** | Confirm design reference and theme direction |
| **Status** | `DONE` |
| **Completed** | 2026-01-22 |
| **Notes** | Reference: profit-fs.com (structure only). Theme: Dark, tech/AI, high contrast, enterprise trust. |

### C1: Homepage Specification
| Field | Value |
|-------|-------|
| **Objective** | Create detailed section-by-section spec for homepage build |
| **Acceptance Criteria** | - All sections defined with content requirements<br>- Container structure planned<br>- Reusable components identified<br>- HOMEPAGE_SPEC.md created |
| **Status** | `DONE` |
| **Completed** | 2026-01-22 |
| **Artifact** | `/docs/HOMEPAGE_SPEC.md` |

### C2: Elementor Global Setup
| Field | Value |
|-------|-------|
| **Objective** | Configure Elementor Site Settings with brand colors, fonts, and global styles |
| **Acceptance Criteria** | - Global colors defined<br>- Global fonts set (Rubik)<br>- Custom CSS added<br>- Experiments enabled |
| **Status** | `IN PROGRESS` |
| **Artifact** | `/docs/IMPLEMENTATION_C2-C4.md` (detailed step-by-step guide) |

### C3: Header Template
| Field | Value |
|-------|-------|
| **Objective** | Build global header using Elementor Theme Builder |
| **Acceptance Criteria** | - Logo + navigation implemented<br>- Dropdowns functional<br>- Mobile hamburger menu working<br>- Sticky behavior enabled<br>- RTL tested |
| **Status** | `TODO` |
| **Artifact** | `/docs/ELEMENTOR_SETUP.md` (instructions ready) |

### C4: Footer Template
| Field | Value |
|-------|-------|
| **Objective** | Build global footer using Elementor Theme Builder |
| **Acceptance Criteria** | - Footer layout matches spec<br>- All links functional<br>- Social icons included<br>- RTL tested |
| **Status** | `TODO` |
| **Artifact** | `/docs/ELEMENTOR_SETUP.md` (instructions ready) |

---

## ⏸️ CHECKPOINT: Approval Required

**Before proceeding to C5 (Homepage Sections Build), client approval is required on:**

1. [docs/HOMEPAGE_SPEC.md](./HOMEPAGE_SPEC.md) — Section list and structure
2. [docs/ELEMENTOR_SETUP.md](./ELEMENTOR_SETUP.md) — Global setup and template instructions

---

### C5: Homepage Sections Build
| Field | Value |
|-------|-------|
| **Objective** | Build all homepage sections using Elementor containers |
| **Status** | `BLOCKED` |
| **Blocker** | Awaiting approval checkpoint |
| **Sub-tasks** | |

| Section | Status |
|---------|--------|
| 02. Hero | `TODO` |
| 03. Value Proposition Cards | `TODO` |
| 04. Why Focus AI | `TODO` |
| 05. Services Preview | `TODO` |
| 06. Academy Preview | `TODO` |
| 07. Testimonials | `TODO` |
| 08. Team/Founders | `TODO` |
| 09. CTA/Contact Form | `TODO` |

### C6: Forms Integration
| Field | Value |
|-------|-------|
| **Objective** | Implement lead capture forms with Elementor Forms |
| **Acceptance Criteria** | - Form styled to match design<br>- All fields functional<br>- Validation working<br>- Success message displayed |
| **Status** | `TODO` |
| **Form Action** | Placeholder: `TO_BE_CONNECTED_LATER` |

---

## PHASE D: Landing Page Migration — `NOT STARTED`

| Task | Source | Target | Status |
|------|--------|--------|--------|
| D1: AI FIRST | HTML file | /academy/ai-first/ | `TODO` |
| D2: AI READY | HTML file | /academy/ai-ready/ | `TODO` |
| D3: B2B Workshops | HTML file | /services/workshops/ | `TODO` |
| D4: Academy Hub | New | /academy/ | `TODO` |
| D5: Services Hub | New | /services/ | `TODO` |

---

## PHASE E: Quality & Launch — `NOT STARTED`

| Task | Status |
|------|--------|
| E1: Performance optimization | `TODO` |
| E2: Accessibility audit | `TODO` |
| E3: SEO basics | `TODO` |
| E4: Cross-browser testing | `TODO` |
| E5: Mobile testing | `TODO` |
| E6: Final client review | `TODO` |
| E7: Launch | `TODO` |

---

## BLOCKERS LOG

| ID | Description | Status | Resolved |
|----|-------------|--------|----------|
| ~~BLK-001~~ | Homepage design reference | `RESOLVED` | 2026-01-22 |
| ~~BLK-002~~ | Elementor Pro status | `RESOLVED` | 2026-01-22 |
| ~~BLK-003~~ | Form destination URL | `RESOLVED` | 2026-01-22 (placeholder) |
| ~~BLK-004~~ | Theme preference | `RESOLVED` | 2026-01-22 |
| ~~BLK-005~~ | Sitemap approval | `RESOLVED` | 2026-01-22 |
| BLK-006 | Approval for C2-C4 before C5 | `ACTIVE` | Pending |

---

## ARTIFACTS INDEX

| Document | Purpose | Status |
|----------|---------|--------|
| [PROJECT_BRIEF.md](./PROJECT_BRIEF.md) | Business context, brand identity | Complete |
| [TECH_DECISIONS.md](./TECH_DECISIONS.md) | ADR-style architectural decisions | Updated |
| [STYLE_GUIDE.md](./STYLE_GUIDE.md) | Design tokens, components | Complete |
| [SITEMAP.md](./SITEMAP.md) | Site structure, navigation | Approved |
| [HOMEPAGE_SPEC.md](./HOMEPAGE_SPEC.md) | Homepage section breakdown | Approved |
| [ELEMENTOR_SETUP.md](./ELEMENTOR_SETUP.md) | Global setup + templates | Approved |
| [IMPLEMENTATION_C2-C4.md](./IMPLEMENTATION_C2-C4.md) | Step-by-step build guide | Ready |
| [TODO.md](./TODO.md) | This file | Current |

---

*Last updated: 2026-01-22*
