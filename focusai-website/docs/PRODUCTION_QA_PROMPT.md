# Focus AI Website - Production Readiness QA Prompt

> **פרומפט מקיף להכנת האתר לפרודקשן**
> שימוש: העתק את הפרומפט הזה לסשן חדש של Claude Code
> **Last Updated:** 2026-02-11

---

## הפרומפט

```
אתה מומחה QA, UI/UX, ביצועים והמרות לאתרים. אתה עובד על אתר Focus AI — חברת ייעוץ וטרנספורמציה דיגיטלית ישראלית המתמחה ב-AI.

## הקשר הפרויקט

**האתר:** https://focusai-website.vercel.app
**טכנולוגיה:** Astro 5.x (SSG), Tailwind CSS 4.x, React islands, GSAP + ScrollTrigger, Lenis smooth scroll
**שפה:** עברית (RTL)
**עיצוב:** Cyberpunk Terminal — רקע כהה (#0a0a0f), סגול ניאון (#a855f7), כרטיסים בסגנון טרמינל
**קהל יעד:** (1) ארגונים שרוצים טרנספורמציית AI, (2) יחידים שרוצים ללמוד AI
**מטרה עסקית:** 70% אקדמיה (קורסים), 30% שירותי B2B

### מבנה דף הבית (לפי סדר הסקשנים)
1. **HeroSection** — כותרת ראשית + חבובוט (מסקוט) + CTA
2. **ClientLogosGrid** — לוגואים של לקוחות/שותפים
3. **StorySection** — סיפור בעיה→פתרון→הוכחה
4. **AcademyIntro** — הקדמה לעולם ההכשרות
5. **AcademyPreview** — כרטיסי קורסים (Bot-Camp, AI Ready, AI First)
6. **ServicesPreview** — שירותי B2B
7. **Testimonials** — עדויות לקוחות
8. **WhatsAppCommunity** — CTA לקהילת וואטסאפ
9. **TeamFounders** — מייסדים (שחר דדיה, אוניל סהר)
10. **CTAContact** — טופס יצירת קשר
11. **RelatedContent** — קישורים נוספים

### עמודים נוספים
- `/about` — אודות
- `/services/strategy` — ייעוץ אסטרטגי
- `/services/ai-agents` — סוכני AI
- `/services/development` — פיתוח מערכות
- `/academy/bot-camp` — Bot-Camp (מוצר דגל)
- `/academy/ai-ready` — AI Ready
- `/academy/ai-first` — AI First
- `/sadnaot` — סדנאות לארגונים
- `/tools` — כלי AI מומלצים
- `/blog` — בלוג

---

## המשימה שלך

בצע ביקורת מקיפה (Production Readiness Audit) על האתר. השתמש במולטי-אייגנטים שעובדים במקביל. כל אייגנט אחראי על תחום מסוים. בסיום, אסוף את כל הממצאים לדוח אחד מסודר עם רשימת פעולות מתועדפת.

---

## אייגנט 1: מחקר עומק — Web Performance Best Practices (2026)

**סוג:** Explore + WebSearch
**משימה:**

חקור ברשת את ה-best practices העדכניים ביותר (2026) עבור:

### 1.1 ביצועים ומהירות
- מה נחשב ל-Core Web Vitals טובים ב-2026? (LCP, FID/INP, CLS)
- Astro SSG performance best practices
- Image optimization — lazy loading, srcset, sizes, modern formats (AVIF vs WebP)
- Font loading strategies — preload, font-display, subsetting
- CSS delivery — critical CSS, async loading
- JavaScript budget — מה נחשב סביר לאתר כזה?
- Cloudinary-specific optimization tips
- Lenis smooth scroll — impact on performance
- GSAP ScrollTrigger — impact on mobile performance

### 1.2 Mobile-First Best Practices
- Touch target sizes (WCAG 2.2 standards)
- Viewport and safe area handling
- Mobile font sizes — minimum readable
- Scroll jank prevention techniques
- Mobile animation performance (CSS vs JS)
- Reduce motion preference handling (`prefers-reduced-motion`)
- iOS Safari specific issues & fixes
- Android Chrome specific issues & fixes

### 1.3 RTL Specific
- RTL layout pitfalls in Tailwind CSS
- Hebrew typography best practices
- Mixed RTL/LTR content (Hebrew + English)
- RTL animations (slide directions)

**פלט מצופה:** דוח מחקר עם לינקים, מספרים, ו-benchmarks להשוואה

---

## אייגנט 2: ביקורת ביצועים — Performance Audit

**סוג:** General-purpose (Bash + Read + Grep)
**משימה:**

### 2.1 ניתוח Bundle
- מפה את כל קבצי JS ו-CSS ב-dist/ עם גדלים
- חשב total JS, total CSS, total HTML
- זהה את הקבצים הכבדים ביותר
- בדוק האם יש קוד מת (dead code) — קומפוננטות שלא בשימוש
- בדוק imports שלא בשימוש
- בדוק האם React עדיין נטען בדפים שלא צריכים אותו

### 2.2 ניתוח תמונות
- סרוק את כל URLs של Cloudinary בכל הקומפוננטות
- וודא שלכל תמונה יש `q_auto,f_auto,w_XXX`
- זהה תמונות ללא `loading="lazy"` (שצריכות)
- זהה תמונות ללא `width`/`height` attributes (גורם CLS)
- בדוק אם יש תמונות כפולות (אותו URL בכמה מקומות)
- חשב total estimated image weight

### 2.3 ניתוח פונטים
- כמה font weights נטענים?
- האם יש `font-display: swap`?
- האם Google Fonts נטענים ב-preconnect?
- האם יש @import של פונטים (render blocking)?

### 2.4 ניתוח CSS
- גודל global.css
- האם יש CSS שלא בשימוש? (dead selectors)
- האם יש קונפליקטים בין global.css ל-component styles?
- בדוק `body::before` ו-`body::after` — משקל ועלות

### 2.5 ניתוח Scripts
- כמה inline scripts יש?
- האם יש GSAP כפול (static import + dynamic import)?
- scroll event listeners — כמה יש? האם הם passive?
- האם `requestAnimationFrame` בשימוש נכון?

**פלט מצופה:** טבלה מפורטת עם כל הממצאים, סיווג חומרה (קריטי/בינוני/נמוך)

---

## אייגנט 3: ביקורת UI/UX — Mobile First

**סוג:** General-purpose (Read + WebFetch)
**משימה:**

### 3.1 Responsive Design — כל breakpoint
בדוק כל סקשן בדף הבית עבור:

| Breakpoint | Width | Device |
|------------|-------|--------|
| xs | 320px | iPhone SE |
| sm | 375px | iPhone 12/13/14 |
| md | 768px | iPad Mini / Tablet |
| lg | 1024px | iPad Pro / Small laptop |
| xl | 1280px | Desktop |
| 2xl | 1536px | Large monitor |

לכל סקשן, בדוק:
- האם הטקסט קריא? (גודל, ריווח שורות, ניגודיות)
- האם הכפתורים בגודל נגיש? (מינימום 44x44px)
- האם יש אלמנטים שחורגים מגבולות המסך (overflow-x)?
- האם padding/margin מתאים למסך קטן?
- האם grid/flexbox מתנהג נכון? (1 col mobile → 2 col tablet → 3 col desktop)
- האם תמונות מתכווצות נכון?
- האם יש אלמנטים שנעלמים ולא צריכים?
- האם text-align נכון ב-RTL?

### 3.2 סדר תוכן (Content Hierarchy)
- האם ה-order נכון במובייל? (text → image / image → text)
- האם ה-z-index layers נכונים?
- האם אין רכיבים שמסתירים אחד את השני?

### 3.3 גדלי סקשנים
לכל סקשן, דווח על:
- `min-height` / `height` בכל breakpoint
- `padding` top/bottom
- האם יש spacing מוגזם בין סקשנים?
- האם יש סקשנים ארוכים מדי במובייל?

### 3.4 Navigation & Header
- האם התפריט עובד במובייל?
- האם יש hamburger menu?
- האם ה-header מתנהג נכון בגלילה? (hide/show)
- האם dropdown menus נגישים במגע?

### 3.5 Footer
- האם כל הלינקים עובדים?
- האם מידע ליצירת קשר נגיש?
- האם social links פועלים?

**פלט מצופה:** רשימת בעיות עם screenshots descriptions, breakpoint, סקשן, ודרגת חומרה

---

## אייגנט 4: ביקורת Scroll & Animation Experience

**סוג:** General-purpose (Read + Grep)
**משימה:**

### 4.1 מערכת אנימציות
- עבור על `scroll-animations.ts` — האם כל אנימציה עובדת?
- האם `data-animate` קיים על כל הסקשנים?
- האם `gsap.fromTo` מגדיר `opacity: 0` — מה קורה אם GSAP לא נטען? (FOIC — Flash of Invisible Content)
- האם יש fallback ל-CSS אם JS נכשל?
- מה קורה עם `prefers-reduced-motion`?

### 4.2 חווית גלילה
- האם Lenis smooth scroll עובד נכון?
- האם יש scroll jank / stuttering?
- האם anchor links (#academy, #services) עובדים?
- האם Back-to-top button עובד?
- האם scroll position נשמר בניווט אחורה?

### 4.3 Parallax & Background Effects
- `body::before` fingerprint — האם מכביד?
- `body::after` scanlines — האם מכביד?
- Background blur effects — performance impact
- Hero particles animation — performance impact

### 4.4 מעברים בין סקשנים
- האם יש מעבר חלק בין סקשנים?
- האם הרקע מתחלף בצורה טובה?
- האם Fingerprint backgrounds חופפים נכון?

### 4.5 GSAP Specifics
- האם ScrollTrigger `start`/`end` points מכוילים נכון?
- האם `toggleActions` נכונים? (play once vs replay)
- האם אנימציות Stagger עובדות בסדר הנכון ב-RTL?

**פלט מצופה:** רשימת בעיות אנימציה עם קובץ, שורה, ותיאור

---

## אייגנט 5: ביקורת המרות ו-Storytelling

**סוג:** General-purpose (Read + WebSearch)
**משימה:**

### 5.1 User Journey Analysis
עבור על דף הבית מלמעלה למטה מנקודת מבט של:

**פרסונה A: מנכ"ל עסק בינוני**
- מחפש פתרונות AI לעסק
- זמן תשומת לב: 30 שניות
- שאלות: "מה תעשו בשבילי?", "כמה זה עולה?", "יש הוכחות?"
- האם ה-journey שלו ברור? Hero → Story → Services → Testimonials → CTA

**פרסונה B: מקצוען שרוצה ללמוד AI**
- מחפש קורס AI מקצועי
- שאלות: "מה אלמד?", "מי מלמד?", "איזה תעודה?", "כמה עולה?"
- האם ה-journey שלו ברור? Hero → AcademyIntro → AcademyPreview → Testimonials → CTA

### 5.2 Storytelling Flow
- האם יש סיפור ברור שעובר דרך כל הסקשנים?
- בעיה → פתרון → הוכחה → פעולה (Problem → Solution → Proof → Action)
- האם כל סקשן מחזק את הקודם?
- האם יש "נקודות נשירה" — מקומות שהגולש עלול לעזוב?

### 5.3 CTA (Call to Action) Optimization
- כמה CTAs יש בעמוד?
- האם ה-CTAs מגוונים? (אקדמיה / ייעוץ / וואטסאפ / טופס)
- האם כל CTA בולט מספיק?
- האם הצבעים של כפתורי CTA עקביים?
- האם יש urgency / scarcity elements?
- האם הטקסט של הכפתורים ברור? ("שלח" vs "קבע שיחת ייעוץ חינם")

### 5.4 Social Proof & Trust Signals
- לוגואים של לקוחות — האם מספיק בולטים?
- עדויות — האם אמינות? (שם, תמונה, חברה)
- ליווי אקדמי — האם מודגש מספיק? (אוניברסיטת חיפה, טכניון)
- מספרים — האם יש מספרים/סטטיסטיקות?
- שותפות n8n — האם מספיק בולטת?

### 5.5 מחקר web — conversion best practices
- חקור conversion rate benchmarks לאתרי B2B ו-education (2026)
- מה הם ה-CRO best practices העדכניים?
- Live chat / chatbot — האם כדאי להוסיף?
- Social proof positioning — מה עובד הכי טוב?
- Form optimization — best practices (fields count, inline validation)

**פלט מצופה:** דוח storytelling + conversion עם המלצות ספציפיות ומתועדפות

---

## אייגנט 6: ביקורת קוד ואיכות — Code Quality & Accessibility

**סוג:** General-purpose (Read + Grep + Bash)
**משימה:**

### 6.1 HTML Quality
- האם כל הדפים מייצרים HTML תקני?
- האם יש semantic HTML נכון? (`<main>`, `<nav>`, `<article>`, `<section>`)
- האם heading hierarchy נכונה? (h1 → h2 → h3, ללא דילוגים)
- האם יש `alt` text לכל התמונות?
- האם לתמונות דקורטיביות יש `alt=""` ו-`aria-hidden="true"`?

### 6.2 SEO
- `<title>` — האם ייחודי ומתאים לכל עמוד?
- `<meta name="description">` — האם קיים ונכון?
- Open Graph tags — האם קיימים?
- Canonical URLs — האם מוגדרים?
- Sitemap — האם קיים ותקין?
- robots.txt — האם קיים?
- Schema.org markup — האם יש? (Organization, Course, FAQPage)

### 6.3 Accessibility (WCAG 2.2)
- Color contrast ratio (מינימום 4.5:1 לטקסט, 3:1 לגדול)
- Focus indicators — האם כל אלמנט אינטראקטיבי מראה focus?
- Keyboard navigation — האם אפשר לנווט בלי עכבר?
- Screen reader — האם `aria-labels` נכונים?
- Skip to main content link?
- Language attribute — `lang="he"` ו-`dir="rtl"`?

### 6.4 Forms
- טופס יצירת קשר — validation?
- האם יש error messages?
- האם השדות מסומנים ב-`<label>`?
- האם יש `autocomplete` attributes?
- האם הטופס עובד בלי JS?

### 6.5 קבצים מיותרים
- בדוק האם יש קומפוננטות ב-src/components/ שלא בשימוש באף עמוד
- בדוק האם HeroSection.tsx עדיין בשימוש (הומר ל-.astro)
- בדוק האם יש קבצי ZIP, nul, או קבצים זמניים ב-repo

**פלט מצופה:** רשימת ממצאים עם קובץ, שורה, בעיה, דרגת חומרה

---

## אייגנט 7: השוואת Desktop vs Mobile — Visual Regression

**סוג:** General-purpose (Read + WebFetch)
**משימה:**

### 7.1 השוואה סקשן-סקשן
לכל אחד מ-11 הסקשנים בדף הבית, בדוק:

| Aspect | Desktop (1280px) | Tablet (768px) | Mobile (375px) |
|--------|-------------------|-----------------|-----------------|
| Layout | ? | ? | ? |
| Typography sizes | ? | ? | ? |
| Image sizes | ? | ? | ? |
| Padding/spacing | ? | ? | ? |
| Button sizes | ? | ? | ? |
| Content visibility | ? | ? | ? |
| Animation behavior | ? | ? | ? |

### 7.2 בעיות ידועות לחקירה
- Hero: האם n8n badge לא מסתיר טקסט במובייל?
- ClientLogos: האם הלוגואים מתכווצים מדי?
- AcademyPreview: האם כרטיסי הקורסים stack נכון?
- Testimonials: האם הקרוסלה עובדת במגע?
- CTAContact: האם הטופס נגיש במובייל?
- Footer: האם columns מתקפלים נכון?

### 7.3 Safe Areas
- האם יש padding מספיק ל-notch (iPhone)?
- האם יש התחשבות ב-bottom navigation bar?
- האם Sticky elements לא חוסמים תוכן?

### 7.4 Touch Interactions
- האם hover effects מומרים ל-active/tap effects במובייל?
- האם swipe gestures עובדים בקרוסלות?
- האם אין double-tap zoom issues?
- האם pinch-to-zoom עובד?

**פלט מצופה:** טבלת השוואה מפורטת עם ממצאים לכל סקשן

---

## סיכום ודוח סופי

אחרי שכל האייגנטים מסיימים, אסוף את כל הממצאים לדוח מאוחד:

### מבנה הדוח

```
# Focus AI — Production Readiness Report

## Executive Summary
- ציון כללי (מתוך 100)
- Top 5 בעיות קריטיות
- Top 5 הזדמנויות שיפור

## 1. ביצועים (Performance)
### קריטי (P0) — חייב לתקן לפני launch
### חשוב (P1) — מומלץ לתקן
### נמוך (P2) — nice to have

## 2. Mobile Experience
### קריטי / חשוב / נמוך

## 3. UI/UX & Design
### קריטי / חשוב / נמוך

## 4. המרות ו-Storytelling
### קריטי / חשוב / נמוך

## 5. קוד ואיכות
### קריטי / חשוב / נמוך

## 6. SEO & Accessibility
### קריטי / חשוב / נמוך

## רשימת פעולות מתועדפת
1. [P0] תיקון X בקובץ Y
2. [P0] תיקון Z בקובץ W
3. [P1] שיפור A
...

## Benchmarks להשוואה
- LCP Target: < 2.5s
- INP Target: < 200ms
- CLS Target: < 0.1
- Total JS Budget: < 150KB gzipped
- Total Page Weight: < 2MB
```

---

## הערות חשובות

1. **שפת הדוח:** עברית עם מונחים טכניים באנגלית
2. **נתיב הפרויקט:** `c:\sites\maderfuker\focusai-website\`
3. **ענף Git:** `main`
4. **Deployment:** Vercel (auto-deploy on push)
5. **SSG בלבד** — אין Node.js בשרת, אין SSR
6. **dist/ חייב להיות ב-git** — השרת לא בונה
7. **Cloudinary CDN** — כל התמונות ב-Cloudinary
8. **הקובץ src/styles/global.css** — ענק (~1460 שורות), מכיל הרבה CSS
9. **HeroSection** — הומר מ-React (.tsx) ל-Astro (.astro) לחיסכון של 308KB JS
10. **scroll-animations.ts** — מאותחל דרך BaseLayout.astro dynamic import
```

---

## איך להשתמש בפרומפט

### אופציה א: סשן Claude Code חדש
1. פתח סשן חדש
2. העתק את כל הפרומפט (מ-"אתה מומחה QA..." עד סוף ה-```)
3. הדבק ושלח

### אופציה ב: כפקודה בסשן קיים
```
רוץ על הפרומפט ב-docs/PRODUCTION_QA_PROMPT.md — הפעל את כל 7 האייגנטים במקביל
```

### אופציה ג: אייגנט בודד
```
רוץ רק את אייגנט 2 (Performance Audit) מתוך docs/PRODUCTION_QA_PROMPT.md
```
