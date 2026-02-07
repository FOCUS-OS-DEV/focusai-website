const founders = [
  {
    id: "shahar",
    name: "שחר דדיה",
    role: "מייסד שותף",
    title: "CEO & AI Strategy",
    bio: "עורך דין ויזם. מתמחה באפיון והטמעת סוכני AI לעסקים. מרצה באוניברסיטת חיפה ובטכניון.",
    fullBio: `עורך דין ויזם סדרתי עם רקע ייחודי המשלב משפטים, טכנולוגיה ועסקים.
מתמחה באפיון והטמעת סוכני AI לעסקים, עם דגש על ROI מהיר ותוצאות מדידות.
מרצה באוניברסיטת חיפה ובטכניון, מביא את הניסיון המעשי לכיתה.
מאמין שטכנולוגיה צריכה לשרת את האדם, לא להפך.`,
    image: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764519896/WhatsApp_Image_2025-11-30_at_18.24.31_1_osvagi.jpg",
    credentials: ["אוניברסיטת חיפה", "טכניון", "עורך דין"],
    status: "ONLINE",
    social: {
      linkedin: "#"
      // TBD
    }
  },
  {
    id: "unil",
    name: "אוניל סחר",
    role: "מייסד שותף",
    title: "COO & Business Development",
    bio: 'יזם וסמנכ"ל תפעול לשעבר. מתמחה בפיתוח עסקי ויישום פתרונות AI. מרצה באוניברסיטת חיפה ובטכניון.',
    fullBio: `יזם עם ניסיון עשיר בניהול תפעול וצמיחה עסקית.
סמנכ"ל תפעול לשעבר ברשתות קמעונאיות מובילות, מביא פרספקטיבה עסקית לפתרונות טכנולוגיים.
מתמחה בפיתוח עסקי ויישום פתרונות AI עם הבנה עמוקה של צרכי הלקוח.
מרצה באוניברסיטת חיפה ובטכניון, מחבר בין עולם העסקים לטכנולוגיה.`,
    image: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1770364984/IMG_4898.JPG_uate4o.jpg",
    credentials: ["אוניברסיטת חיפה", "טכניון", "ניהול תפעול"],
    status: "ONLINE",
    social: {
      linkedin: "#"
      // TBD
    }
  }
];
const instructors = founders;
const companyValues = [
  {
    code: "PRACTICAL",
    title: "מעשיות",
    desc: "כל מה שמלמדים - מיושם מיד",
    iconType: "wrench"
  },
  {
    code: "SUPPORT",
    title: "ליווי",
    desc: "לא משאירים אתכם לבד",
    iconType: "users"
  },
  {
    code: "INNOVATION",
    title: "חדשנות",
    desc: "תמיד בחזית הטכנולוגיה",
    iconType: "rocket"
  },
  {
    code: "HUMAN",
    title: "אנושיות",
    desc: "טכנולוגיה בשירות האדם",
    iconType: "heart"
  }
];

export { companyValues as c, founders as f, instructors as i };
