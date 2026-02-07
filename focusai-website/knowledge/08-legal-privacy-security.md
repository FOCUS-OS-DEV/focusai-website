# Focus AI - דרישות משפטיות, פרטיות ואבטחה

> מסמך מקיף על כל הדרישות החוקיות והטכניות לאתר Focus AI
> עדכון אחרון: 2026-02-05

---

## מקורות משפטיים

### חקיקה רלוונטית בישראל
- **חוק הגנת הפרטיות, תשמ"א-1981** (כולל תיקון 13)
- **תקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017**
- **חוק הגנת הצרכן, תשמ"א-1981**
- **חוק התקשורת (בזק ושידורים), תשמ"ב-1982** - סעיף 30א (ספאם)
- **חוק זכות יוצרים, תשס"ח-2007**
- **חוק עוולות מסחריות, תשנ"ט-1999**
- **תקן ישראלי IS 5568** (נגישות)

### מקורות מחקר
- [תיקון 13 - המדריך המלא](https://tabnav.com/he/info-center/tikon-13-compliance-guide)
- [Israel's Privacy Protection Law](https://cookie-script.com/privacy-laws/israel-privacy-protection-law-ppl)
- [Cookie Consent Implementation Guide](https://secureprivacy.ai/blog/cookie-consent-implementation)
- [IS 5568 Accessibility](https://accessibe.com/compliance/is-5568)

---

## תיקון 13 לחוק הגנת הפרטיות

### מה חדש?

תיקון 13 נכנס לתוקף ב-14 באוגוסט 2025 ומהווה רפורמה מקיפה בחוקי הפרטיות בישראל.

### דרישות עיקריות

| דרישה | פירוט |
|-------|-------|
| **הסכמה מפורשת** | Opt-in - הסכמה בשתיקה כבר לא מקובלת |
| **שקיפות** | יידוע על סוג המידע, מטרת איסוף, ומי מקבל |
| **זכות למחיקה** | חייבים לאפשר בקשת מחיקה |
| **אבטחת מידע** | הצפנה, בקרת גישה, ניטור |
| **דיווח על דליפות** | חובת דיווח על פריצות מידע |

### קנסות

- עד מאות אלפי שקלים בהפרות חמורות
- קנסות מנהליים ללא צורך בהליך משפטי
- הרשות להגנת הפרטיות מורשית לאכוף

---

## מסמכים משפטיים נדרשים באתר

### 1. מדיניות פרטיות (Privacy Policy)

**חובה לכלול:**
- זהות בעל האתר/מפעיל
- סוגי מידע הנאסף
- מטרות השימוש במידע
- משך שמירת המידע
- צדדים שלישיים שמקבלים מידע
- זכויות המשתמש (גישה, תיקון, מחיקה)
- דרכי יצירת קשר
- שינויים במדיניות

**מבנה מומלץ:**
```markdown
1. מבוא
2. מידע שאנו אוספים
   - מידע שמסרת לנו
   - מידע שנאסף אוטומטית
   - Cookies
3. מטרות השימוש במידע
4. שיתוף מידע עם צדדים שלישיים
5. אבטחת מידע
6. זכויות שלך
7. Cookies ו-tracking
8. שמירת מידע
9. ילדים
10. שינויים במדיניות
11. יצירת קשר
```

---

### 2. תנאי שימוש (Terms of Service)

**חובה לכלול:**
- הגדרות
- תנאי השימוש באתר
- הרשמה וחשבון משתמש
- קניין רוחני
- הגבלת אחריות
- הפרה וסיום
- שינויים בתנאים
- דין חל וסמכות שיפוט
- יצירת קשר

**לאתר עם מכירות (Academy) - להוסיף:**
- מדיניות ביטולים (14 יום לפי חוק)
- מדיניות החזרים
- תנאי תשלום
- אחריות על שירותים/מוצרים

---

### 3. הצהרת נגישות (Accessibility Statement)

**נדרש לפי IS 5568:**
- רמת הנגישות הנוכחית
- התאמות שבוצעו
- דרכים לדווח על בעיות
- פרטי רכז נגישות

**טמפלט:**
```
אנו מחויבים להנגשת האתר לאנשים עם מוגבלויות.
האתר עומד בתקן IS 5568 ברמת AA.

שירותי הנגישות באתר כוללים:
- ניווט מקלדת
- תמיכה בקוראי מסך
- ניגודיות צבעים מתאימה
- טקסט חלופי לתמונות

לדיווח על בעיית נגישות:
שם: [רכז נגישות]
אימייל: accessibility@focusai.co.il
טלפון: [מספר]
```

---

## Cookie Consent - יישום טכני

### סוגי Cookies

| קטגוריה | דרישת הסכמה | דוגמאות |
|---------|-------------|---------|
| **הכרחיים** | לא נדרשת | Session, CSRF, אימות |
| **פונקציונליים** | נדרשת | שפה, מצב כהה, העדפות |
| **אנליטיקה** | נדרשת | Google Analytics, Hotjar |
| **שיווק** | נדרשת | Facebook Pixel, Google Ads |

### דרישות הבאנר

**חובה:**
- ✅ כפתור "קבל" ו"דחה" באותו גודל וצבע
- ✅ הסבר ברור מה נאסף
- ✅ קישור למדיניות פרטיות
- ✅ אפשרות לנהל העדפות
- ✅ זכירת בחירה (לא לשאול שוב כל גלישה)

**אסור:**
- ❌ כפתור "קבל" בולט יותר
- ❌ הסכמה בשתיקה/גלילה
- ❌ Pre-checked checkboxes
- ❌ חוסם גישה לאתר עד הסכמה

### מבנה קוד Cookie Consent

```javascript
// Cookie Consent Manager
class CookieConsent {
  constructor() {
    this.consentKey = 'focusai_cookie_consent';
    this.categories = {
      necessary: true,      // תמיד פעיל
      functional: false,    // ברירת מחדל: כבוי
      analytics: false,     // ברירת מחדל: כבוי
      marketing: false      // ברירת מחדל: כבוי
    };
  }

  // שמירת הסכמה
  saveConsent(preferences) {
    const consent = {
      timestamp: new Date().toISOString(),
      version: '1.0',
      categories: preferences
    };
    localStorage.setItem(this.consentKey, JSON.stringify(consent));
  }

  // בדיקת הסכמה
  hasConsent(category) {
    const consent = this.getConsent();
    return consent?.categories?.[category] === true;
  }

  // טעינת סקריפטים רק לאחר הסכמה
  loadScript(category, src) {
    if (this.hasConsent(category)) {
      const script = document.createElement('script');
      script.src = src;
      document.head.appendChild(script);
    }
  }
}
```

### אינטגרציה עם Google Analytics

```javascript
// לא לטעון GA לפני הסכמה!
window.dataLayer = window.dataLayer || [];

// Google Consent Mode v2
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});

// עדכון לאחר הסכמה
function updateConsent(preferences) {
  gtag('consent', 'update', {
    'ad_storage': preferences.marketing ? 'granted' : 'denied',
    'analytics_storage': preferences.analytics ? 'granted' : 'denied',
    'ad_user_data': preferences.marketing ? 'granted' : 'denied',
    'ad_personalization': preferences.marketing ? 'granted' : 'denied'
  });
}
```

### אינטגרציה עם Facebook Pixel

```javascript
// לא לטעון Pixel לפני הסכמה!
if (cookieConsent.hasConsent('marketing')) {
  !function(f,b,e,v,n,t,s)
  {/* Facebook Pixel code */}
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
}
```

---

## אבטחת מידע

### דרישות תיקון 13

| אמצעי | פירוט |
|-------|-------|
| **הצפנה** | HTTPS חובה, הצפנת מידע רגיש |
| **בקרת גישה** | Role-based access |
| **ניטור** | לוגים, התרעות |
| **גיבוי** | גיבוי סדיר של מידע |
| **בדיקות אבטחה** | סריקות תקופתיות |

### Security Headers

```apache
# .htaccess
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com"
```

### הגנה על טפסים

```javascript
// CSRF Protection
function generateCSRFToken() {
  return crypto.randomUUID();
}

// Input Sanitization (Server-side)
function sanitizeInput(input) {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Rate Limiting
// להטמיע בשרת או ב-n8n webhook
```

---

## נגישות - IS 5568

### דרישות WCAG 2.0 AA

| קריטריון | דרישה | יישום |
|----------|-------|-------|
| **1.1.1** | טקסט חלופי | alt לכל תמונה |
| **1.3.1** | מידע ויחסים | HTML סמנטי |
| **1.4.3** | ניגודיות | 4.5:1 לטקסט רגיל |
| **2.1.1** | מקלדת | כל פונקציה נגישה במקלדת |
| **2.4.4** | מטרת קישור | טקסט קישור ברור |
| **3.1.1** | שפת הדף | lang="he" |
| **3.3.2** | תוויות | label לכל שדה טופס |
| **4.1.2** | שם, תפקיד, ערך | ARIA attributes |

### בדיקות נגישות

```bash
# כלים מומלצים
- WAVE (wave.webaim.org)
- axe DevTools (תוסף Chrome)
- Lighthouse Accessibility
- NVDA/VoiceOver לבדיקת קורא מסך
```

### קוד נגיש

```html
<!-- HTML סמנטי -->
<header role="banner">
  <nav role="navigation" aria-label="תפריט ראשי">
    <ul>
      <li><a href="/">דף הבית</a></li>
    </ul>
  </nav>
</header>

<main role="main">
  <article>
    <h1>כותרת ראשית</h1>
  </article>
</main>

<footer role="contentinfo">
  <!-- תוכן פוטר -->
</footer>

<!-- טפסים נגישים -->
<form>
  <div class="form-group">
    <label for="email">אימייל *</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-describedby="email-hint"
    />
    <span id="email-hint" class="hint">נשתמש באימייל ליצירת קשר</span>
  </div>
</form>

<!-- תמונות עם alt -->
<img src="team.jpg" alt="צוות Focus AI - שחר, אוניל וכפיר" />

<!-- Skip link -->
<a href="#main-content" class="skip-link">דלג לתוכן הראשי</a>
```

### CSS לנגישות

```css
/* Focus visible */
:focus-visible {
  outline: 3px solid var(--purple-primary);
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--purple-primary);
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## טפסים - דרישות הסכמה

### כל טופס חייב לכלול:

1. **הצהרת הסכמה מפורשת:**
```html
<div class="consent-checkbox">
  <input type="checkbox" id="consent" name="consent" required />
  <label for="consent">
    קראתי ואני מסכים/ה ל<a href="/privacy">מדיניות הפרטיות</a>
    ול<a href="/terms">תנאי השימוש</a>
  </label>
</div>
```

2. **הסכמה לשיווק (נפרדת!):**
```html
<div class="marketing-consent">
  <input type="checkbox" id="marketing" name="marketing" />
  <label for="marketing">
    אני מעוניין/ת לקבל עדכונים ומבצעים במייל
  </label>
</div>
```

3. **קישור למדיניות פרטיות ותנאים**

4. **הודעה על אפשרות הסרה:**
```html
<p class="form-note">
  ניתן להסיר את עצמך מרשימת התפוצה בכל עת
</p>
```

---

## חוק ספאם (סעיף 30א)

### מה אסור:
- לשלוח דיוור ללא הסכמה מפורשת
- לשלוח SMS שיווקי ללא הסכמה
- להקשות על הסרה מרשימת תפוצה

### מה חובה:
- **Opt-in מפורש** לדיוור שיווקי
- **לינק להסרה** בכל מייל שיווקי
- **זיהוי השולח** ברור

### יישום:
```html
<!-- בטופס הרשמה -->
<input type="checkbox" id="newsletter" name="newsletter" />
<label for="newsletter">
  אני מאשר/ת לקבל ניוזלטר ועדכונים שיווקיים מ-Focus AI
</label>

<!-- בכל מייל שיווקי -->
<footer>
  לא מעוניין לקבל מאיתנו עדכונים?
  <a href="https://focusai.co.il/unsubscribe?email={{email}}">להסרה לחצו כאן</a>
</footer>
```

---

## צ'קליסט יישום

### לפני השקה:

#### מסמכים משפטיים
- [ ] מדיניות פרטיות - כתובה ונגישה
- [ ] תנאי שימוש - כתובים ונגישים
- [ ] הצהרת נגישות - כתובה ונגישה
- [ ] מדיניות Cookies - מפורטת

#### Cookie Consent
- [ ] באנר Cookies מיושם
- [ ] כפתורי "קבל/דחה" שווים
- [ ] אפשרות לנהל העדפות
- [ ] סקריפטים לא נטענים לפני הסכמה
- [ ] Google Consent Mode v2 מוגדר
- [ ] Facebook Pixel ממתין להסכמה

#### אבטחה
- [ ] HTTPS פעיל
- [ ] Security headers מוגדרים
- [ ] טפסים מוגנים (CSRF, sanitization)
- [ ] Rate limiting על טפסים

#### נגישות
- [ ] בדיקת WAVE - ללא שגיאות
- [ ] בדיקת Lighthouse - 90+
- [ ] ניווט מקלדת עובד
- [ ] alt לכל התמונות
- [ ] ניגודיות צבעים תקינה
- [ ] Skip link קיים

#### טפסים
- [ ] הסכמה מפורשת בכל טופס
- [ ] קישור למדיניות פרטיות
- [ ] הסכמה נפרדת לשיווק
- [ ] Labels לכל שדה
- [ ] הודעות שגיאה נגישות

#### דיוור
- [ ] רק לנרשמים
- [ ] לינק הסרה בכל מייל
- [ ] זיהוי שולח ברור

---

## ספקי שירות מומלצים

### Cookie Consent Solutions

| ספק | יתרונות | מחיר |
|-----|---------|------|
| **CookieScript** | תמיכה בישראל, Google Consent Mode | מ-$0/חודש |
| **CookieYes** | קל ליישום, IAB TCF | מ-$0/חודש |
| **Osano** | Enterprise, מקיף | מ-$199/חודש |

### נגישות

| ספק | יתרונות | מחיר |
|-----|---------|------|
| **accessiBe** | אוטומטי, ישראלי | מ-$490/שנה |
| **UserWay** | Widget + ידני | מ-$490/שנה |
| **הנגשה ידנית** | שליטה מלאה | תלוי היקף |

**המלצה:** עדיף לבנות נגישות מהיסוד מאשר להסתמך על widget!

---

## סיכום דרישות קוד

### קבצי HTML נדרשים:
- `/privacy` - מדיניות פרטיות
- `/terms` - תנאי שימוש
- `/accessibility` - הצהרת נגישות

### קומפוננטות נדרשות:
- `CookieConsent.astro` - באנר cookies
- `CookieSettings.astro` - מודל הגדרות
- `ConsentCheckbox.astro` - checkbox הסכמה

### Scripts:
- `cookie-consent.js` - ניהול הסכמות
- `analytics.js` - טעינה מותנית של GA
- `pixels.js` - טעינה מותנית של פיקסלים

### התאמות CSS:
- Focus states לנגישות
- Skip link
- Reduced motion
- High contrast mode

---

## מידע ליצירת קשר

לכל בקשה הקשורה לפרטיות:
- **אימייל:** privacy@focusai.co.il
- **טלפון:** [להשלים]
- **כתובת:** [להשלים]
