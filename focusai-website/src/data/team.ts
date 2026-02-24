/**
 * Team Data - Founders and Team Members
 * Single source of truth for all team/instructor information
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  fullBio?: string;
  image: string;
  credentials: string[];
  status?: "ONLINE" | "OFFLINE" | "BUSY";
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

/**
 * Company Founders
 * שחר דדיה & אוניל סחר - The real founders of Focus AI
 */
export const founders: TeamMember[] = [
  {
    id: "shahar",
    name: "שחר דדיה",
    role: "מייסד שותף",
    title: "CEO & AI Strategy",
    bio: "עורך דין ויזם. מתמחה באפיון והטמעת סוכני AI לעסקים. מרצה ומפתח תוכניות הכשרה באוניברסיטת חיפה ובטכניון.",
    fullBio: `עורך דין ויזם סדרתי עם רקע ייחודי המשלב משפטים, טכנולוגיה ועסקים.
מתמחה באפיון והטמעת סוכני AI לעסקים, עם דגש על ROI מהיר ותוצאות מדידות.
מרצה ומפתח תוכניות הכשרה באוניברסיטת חיפה ובטכניון, מביא את הניסיון המעשי לכיתה.
מאמין שטכנולוגיה צריכה לשרת את האדם, לא להפך.`,
    image: "https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_600,h_500,c_fill,g_face/v1764519896/WhatsApp_Image_2025-11-30_at_18.24.31_1_osvagi.jpg",
    credentials: ["אוניברסיטת חיפה", "טכניון", "עורך דין"],
    status: "ONLINE",
    social: {
      linkedin: "#", // TBD
    },
  },
  {
    id: "unil",
    name: "אוניל סחר",
    role: "מייסד שותף",
    title: "COO & Business Development",
    bio: "יזם, מנהל רשתות, בעל ניסיון עשיר בניהול, תפעול וצמיחה עסקית. מרצה ומפתח תוכניות הכשרה באוניברסיטת חיפה ובטכניון.",
    fullBio: `יזם, מנהל רשתות, בעל ניסיון עשיר בניהול, תפעול וצמיחה עסקית. סמנכ"ל תפעול ושיווק לשעבר ברשתות קמעונאיות מובילות, מביא פרספקטיבה עסקית לפתרונות טכנולוגיים. מפתח מערכות בשילוב AI, פיתוח עסקי ויישום פתרונות AI עם הבנה עמוקה לצרכי הלקוח והארגון. מרצה ומפתח תוכניות הכשרה באוניברסיטת חיפה ובטכניון, מחבר בין עולם העסקים לטכנולוגיה.`,
    image: "https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_600,h_500,c_fill,g_face/v1770364984/IMG_4898.JPG_uate4o.jpg",
    credentials: ["אוניברסיטת חיפה", "טכניון", "ניהול תפעול"],
    status: "ONLINE",
    social: {
      linkedin: "#", // TBD
    },
  },
];

/**
 * Instructors - Alias for founders
 * Used in workshops (sadnaot) and academy pages
 * The founders ARE the instructors - no fake team members!
 */
export const instructors = founders;

/**
 * Company Values
 */
export const companyValues = [
  {
    code: "PRACTICAL",
    title: "מעשיות",
    desc: "כל מה שמלמדים - מיושם מיד",
    iconType: "wrench",
  },
  {
    code: "SUPPORT",
    title: "ליווי",
    desc: "לא משאירים אתכם לבד",
    iconType: "users",
  },
  {
    code: "INNOVATION",
    title: "חדשנות",
    desc: "תמיד בחזית הטכנולוגיה",
    iconType: "rocket",
  },
  {
    code: "HUMAN",
    title: "אנושיות",
    desc: "טכנולוגיה בשירות האדם",
    iconType: "heart",
  },
];

// Helper to get founder by ID
export const getFounderById = (id: string): TeamMember | undefined =>
  founders.find(f => f.id === id);

// Helper to get all instructors for a course/workshop
export const getInstructorsForWorkshop = (): TeamMember[] => instructors;
