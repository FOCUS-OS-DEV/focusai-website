# Focus AI - Sitemap & Navigation Architecture

## 1. Proposed Site Structure

```
focusai.co.il/
├── / (Homepage) ← NEW - unified entry point
│
├── /services/ (B2B Services Hub)
│   ├── /services/workshops/ (AI Workshops for Organizations)
│   └── /services/integrations/ (AI Integration Consulting)
│
├── /academy/ (Academy Hub - existing)
│   ├── /academy/ai-first/ (Beginner Course - 5 sessions)
│   ├── /academy/ai-ready/ (Manager Course - 8 sessions)
│   └── /academy/ai-tech/ (Technical Track - if applicable)
│
├── /about/ (About Focus AI)
│   └── /about/team/ (Team Page) or section on /about/
│
├── /contact/ (Contact Page with Form)
│
├── /blog/ (Future - optional)
│
└── /legal/
    ├── /privacy-policy/
    └── /terms/
```

---

## 2. Navigation Specification

### 2.1 Primary Navigation (Header)

```
┌─────────────────────────────────────────────────────────────────────┐
│ [Logo]   בית    שירותים ▼    אקדמיה ▼    אודות    צור קשר   [CTA] │
└─────────────────────────────────────────────────────────────────────┘
```

| Link | Hebrew | Target | Behavior |
|------|--------|--------|----------|
| Home | בית | `/` | Direct link |
| Services | שירותים | Dropdown | Mega menu or dropdown |
| Academy | אקדמיה | Dropdown | Mega menu with course cards |
| About | אודות | `/about/` | Direct link |
| Contact | צור קשר | `/contact/` | Direct link |
| CTA Button | הזמינו סדנה / הרשמו | Context-dependent | Opens form or scrolls |

### 2.2 Services Dropdown

```
┌──────────────────────────────────────┐
│  שירותים לארגונים                    │
│  ─────────────────────────────────── │
│  🏢 סדנאות AI לארגונים               │
│     הכשרות מותאמות לצוותים שלכם      │
│                                      │
│  ⚙️ אינטגרציות ואוטומציה            │
│     הטמעת AI בתהליכי העבודה          │
│                                      │
│  [שריינו שיחת אפיון →]               │
└──────────────────────────────────────┘
```

### 2.3 Academy Dropdown (Mega Menu Style)

```
┌──────────────────────────────────────────────────────────────────────┐
│  הקורסים שלנו                                                        │
│  ───────────────────────────────────────────────────────────────────  │
│                                                                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐       │
│  │ 🚀 AI FIRST     │  │ 📈 AI READY     │  │ 💻 AI TECH      │       │
│  │ למתחילים        │  │ למנהלים         │  │ למפתחים         │       │
│  │ 5 מפגשים        │  │ 8 מפגשים        │  │ בהרצליה         │       │
│  │ ₪1,490          │  │ ₪X,XXX          │  │ ₪X,XXX          │       │
│  │ [למידע נוסף]    │  │ [למידע נוסף]    │  │ [למידע נוסף]    │       │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘       │
│                                                                      │
│  [לכל הקורסים →]                                                     │
└──────────────────────────────────────────────────────────────────────┘
```

### 2.4 Mobile Navigation

```
┌────────────────────┐
│ [Logo]    [☰]      │
└────────────────────┘

Drawer Menu (Full Screen):
┌────────────────────┐
│         [✕]        │
│                    │
│      בית           │
│      ─────         │
│      שירותים       │
│        └ סדנאות    │
│        └ אינטגרציות │
│      ─────         │
│      אקדמיה        │
│        └ AI FIRST  │
│        └ AI READY  │
│      ─────         │
│      אודות         │
│      ─────         │
│      צור קשר       │
│                    │
│  ┌──────────────┐  │
│  │ הזמינו סדנה  │  │
│  └──────────────┘  │
└────────────────────┘
```

---

## 3. Page Purposes & CTAs

| Page | Primary Purpose | Primary CTA | Secondary CTA |
|------|-----------------|-------------|---------------|
| Homepage | Introduce Focus AI, direct to Services or Academy | שיחת אפיון | לאקדמיה |
| Services Hub | Overview of B2B offerings | שריינו שיחת אפיון | צפו בדוגמאות |
| Workshops | Detailed B2B workshop info | הזמינו סדנה | הורידו סילבוס |
| Academy Hub | Course overview & comparison | הרשמו לקורס | קבלו פרטים |
| AI FIRST | Course details + registration | הרשמו עכשיו | לסילבוס המלא |
| AI READY | Course details + registration | הרשמו עכשיו | לסילבוס המלא |
| About | Build trust, show team | צרו קשר | עקבו אחרינו |
| Contact | Capture leads | שלחו פנייה | התקשרו אלינו |

---

## 4. User Flows

### Flow 1: B2B Visitor (Organization)
```
Homepage → Services Dropdown → Workshops Page → Contact Form
                            → Integrations Page → Contact Form
```

### Flow 2: B2C Visitor (Individual Learner)
```
Homepage → Academy Dropdown → Course Page (AI FIRST/READY) → Registration
                           → Academy Hub → Compare Courses → Registration
```

### Flow 3: Returning/Direct Traffic
```
Direct Landing Page (from ads) → Course Page → Registration
```

---

## 5. Footer Structure

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  [Logo]                                                              │
│  אנחנו מגשרים על הפער בין אנשים לטכנולוגיה                           │
│                                                                      │
│  ───────────────────────────────────────────────────────────────────  │
│                                                                      │
│  ניווט מהיר          שירותים            אקדמיה           קהילה       │
│  ─────────           ───────            ──────           ─────       │
│  בית                 סדנאות לארגונים     AI FIRST        WhatsApp    │
│  אודות               אינטגרציות          AI READY        Instagram   │
│  צור קשר                                 AI TECH         TikTok      │
│  תנאי שימוש                                              LinkedIn    │
│  מדיניות פרטיות                                                      │
│                                                                      │
│  ───────────────────────────────────────────────────────────────────  │
│                                                                      │
│  © 2026 Focus AI. כל הזכויות שמורות.                                 │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 6. Internal Linking Strategy

### From Homepage
- Hero CTA → /contact/ or /academy/
- Services preview → /services/
- Academy preview → /academy/
- Team section → /about/
- All CTAs track to appropriate conversion pages

### From Course Pages
- Related courses → Other /academy/ pages
- "About our instructors" → /about/
- "For organizations" → /services/

### From Service Pages
- "Our courses" → /academy/
- Team mention → /about/
- All forms → /contact/ or inline

---

## 7. URL Redirects Needed

| Old/Current | New | Type |
|-------------|-----|------|
| /ai-first (if exists as standalone) | /academy/ai-first/ | 301 |
| /ai-ready (if exists as standalone) | /academy/ai-ready/ | 301 |
| Bio/Linktree page (if URL exists) | / (homepage) | 301 |

---

## 8. Questions for Client

1. **Services Structure:** Are "Workshops" and "Integrations" the correct service categories, or is there a different breakdown?

2. **Course Status:** Which courses are currently active? (AI FIRST, AI READY, AI TECH, others?)

3. **Pricing Display:** Should course prices be shown in the mega menu, or only on course pages?

4. **Blog/Content:** Is there a plan for a blog or resource section?

5. **Contact Preference:** Should the Contact page be a dedicated page or anchor to a homepage section?

6. **Academy Hub:** Should /academy/ be a hub page listing all courses, or redirect to the main course?

---

*Document created: 2026-01-21*
*Last updated: 2026-01-21*
