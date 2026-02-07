import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CX4f0l_Y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_CPo-c6EZ.mjs';
import { i as instructors } from '../chunks/team_BLB99Tae.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Sadnaot = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Focus AI | \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA AI \u05DC\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD";
  const pageDescription = "\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05D1\u05D9\u05E0\u05D4 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA \u05DE\u05E2\u05E9\u05D9\u05D5\u05EA \u05DC\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD \u05D5\u05D7\u05D1\u05E8\u05D5\u05EA. \u05E9\u05E4\u05E8\u05D5 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D5\u05D3\u05D5\u05E7\u05D8\u05D9\u05D1\u05D9\u05D5\u05EA \u05D5\u05D4\u05D7\u05D3\u05E9\u05E0\u05D5\u05EA \u05D1\u05D0\u05E8\u05D2\u05D5\u05DF \u05E9\u05DC\u05DB\u05DD \u05E2\u05DD \u05D4\u05DB\u05E9\u05E8\u05D4 \u05DE\u05D5\u05EA\u05D0\u05DE\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA.";
  const audiences = [
    {
      title: "\u05DE\u05E0\u05D4\u05DC\u05D9\u05DD \u05D5-C-Level",
      description: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05D5\u05D1\u05D9\u05DC \u05D8\u05E8\u05E0\u05E1\u05E4\u05D5\u05E8\u05DE\u05E6\u05D9\u05D4 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9\u05EA \u05D5\u05DC\u05E7\u05D1\u05DC \u05D4\u05D7\u05DC\u05D8\u05D5\u05EA \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D5\u05EA \u05DE\u05D1\u05D5\u05E1\u05E1\u05D5\u05EA \u05D7\u05D3\u05E9\u05E0\u05D5\u05EA.",
      icon: "briefcase",
      code: "MGMT"
    },
    {
      title: "\u05E6\u05D5\u05D5\u05EA\u05D9 \u05E9\u05D9\u05D5\u05D5\u05E7 \u05D5\u05EA\u05D5\u05DB\u05DF",
      description: "\u05E9\u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05E0\u05D9\u05DD \u05DC\u05D9\u05D9\u05E6\u05E8 \u05D9\u05D5\u05EA\u05E8 \u05EA\u05D5\u05DB\u05DF, \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05D5\u05D1\u05E4\u05D7\u05D5\u05EA \u05D6\u05DE\u05DF \u05D1\u05E2\u05D6\u05E8\u05EA \u05DB\u05DC\u05D9 AI.",
      icon: "users",
      code: "MKT"
    },
    {
      title: "\u05D0\u05E0\u05E9\u05D9 \u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4",
      description: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05DB\u05D9\u05E8 \u05DB\u05DC\u05D9 AI \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05D5\u05DC\u05D4\u05D8\u05DE\u05D9\u05E2 \u05D0\u05D5\u05EA\u05DD \u05D1\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05D4\u05E4\u05D9\u05EA\u05D5\u05D7.",
      icon: "code",
      code: "TECH"
    },
    {
      title: "\u05E6\u05D5\u05D5\u05EA\u05D9 \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA",
      description: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05E9\u05E4\u05E8 \u05D0\u05EA \u05D4\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA, \u05DC\u05E0\u05EA\u05D7 \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D5\u05DC\u05D9\u05D9\u05E6\u05E8 \u05DC\u05D9\u05D3\u05D9\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA AI.",
      icon: "chart",
      code: "SALES"
    },
    {
      title: "\u05E6\u05D5\u05D5\u05EA\u05D9 HR \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7 \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9",
      description: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D9\u05D9\u05E2\u05DC \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05D2\u05D9\u05D5\u05E1, \u05D4\u05D3\u05E8\u05DB\u05D4 \u05D5\u05E0\u05D9\u05D4\u05D5\u05DC \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05E2\u05DD \u05DB\u05DC\u05D9\u05DD \u05D7\u05DB\u05DE\u05D9\u05DD.",
      icon: "people",
      code: "HR"
    },
    {
      title: "\u05D9\u05D6\u05DE\u05D9\u05DD \u05D5\u05E2\u05E6\u05DE\u05D0\u05D9\u05DD",
      description: "\u05E9\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05DB\u05E4\u05D9\u05DC \u05D0\u05EA \u05D4\u05E4\u05E8\u05D5\u05D3\u05D5\u05E7\u05D8\u05D9\u05D1\u05D9\u05D5\u05EA \u05D5\u05DC\u05D4\u05E8\u05D7\u05D9\u05D1 \u05D0\u05EA \u05D4\u05D9\u05DB\u05D5\u05DC\u05D5\u05EA \u05D4\u05E2\u05E1\u05E7\u05D9\u05D5\u05EA.",
      icon: "rocket",
      code: "STARTUP"
    }
  ];
  const topics = [
    {
      title: "\u05DE\u05D1\u05D5\u05D0 \u05DC\u05E2\u05D5\u05DC\u05DD \u05D4-AI",
      description: "\u05D4\u05D1\u05E0\u05EA \u05D4\u05DE\u05D5\u05E9\u05D2\u05D9\u05DD \u05D4\u05D1\u05E1\u05D9\u05E1\u05D9\u05D9\u05DD, \u05E1\u05D5\u05D2\u05D9 \u05DE\u05D5\u05D3\u05DC\u05D9\u05DD, \u05D5\u05D9\u05DB\u05D5\u05DC\u05D5\u05EA \u05E2\u05D3\u05DB\u05E0\u05D9\u05D5\u05EA",
      icon: "target"
    },
    {
      title: "Prompt Engineering",
      description: "\u05D8\u05DB\u05E0\u05D9\u05E7\u05D5\u05EA \u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05DC\u05DB\u05EA\u05D9\u05D1\u05EA \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05D0\u05E4\u05E7\u05D8\u05D9\u05D1\u05D9\u05D9\u05DD",
      icon: "chat"
    },
    {
      title: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05D5\u05DB\u05DF \u05E2\u05DD AI",
      description: "\u05DB\u05EA\u05D9\u05D1\u05D4, \u05E2\u05E8\u05D9\u05DB\u05D4, \u05EA\u05E8\u05D2\u05D5\u05DD \u05D5\u05D4\u05E4\u05E7\u05EA \u05EA\u05D5\u05DB\u05DF \u05E9\u05D9\u05D5\u05D5\u05E7\u05D9",
      icon: "edit"
    },
    {
      title: "\u05E2\u05D9\u05D1\u05D5\u05D3 \u05EA\u05DE\u05D5\u05E0\u05D4 \u05D5\u05D5\u05D9\u05D3\u05D0\u05D5",
      description: "\u05DB\u05DC\u05D9\u05DD \u05DC\u05D9\u05E6\u05D9\u05E8\u05D4 \u05D5\u05E2\u05E8\u05D9\u05DB\u05D4 \u05E9\u05DC \u05DE\u05D3\u05D9\u05D4 \u05D5\u05D9\u05D6\u05D5\u05D0\u05DC\u05D9\u05EA",
      icon: "image"
    },
    {
      title: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05E2\u05E1\u05E7\u05D9\u05D5\u05EA",
      description: "\u05D7\u05D9\u05D1\u05D5\u05E8 \u05DB\u05DC\u05D9 AI \u05DC\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05D9\u05D5\u05DE\u05D9\u05D5\u05DE\u05D9\u05D9\u05DD",
      icon: "bolt"
    },
    {
      title: "\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD",
      description: "\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1-AI \u05DC\u05E0\u05D9\u05EA\u05D5\u05D7 \u05D3\u05D0\u05D8\u05D4 \u05D5\u05E7\u05D1\u05DC\u05EA \u05EA\u05D5\u05D1\u05E0\u05D5\u05EA",
      icon: "chart"
    },
    {
      title: "AI \u05DC\u05DE\u05DB\u05D9\u05E8\u05D5\u05EA \u05D5\u05E9\u05D9\u05E8\u05D5\u05EA",
      description: "\u05E9\u05D9\u05E4\u05D5\u05E8 \u05D7\u05D5\u05D5\u05D9\u05EA \u05D4\u05DC\u05E7\u05D5\u05D7 \u05D5\u05D4\u05D2\u05D3\u05DC\u05EA \u05D4\u05DE\u05DB\u05D9\u05E8\u05D5\u05EA",
      icon: "handshake"
    },
    {
      title: "\u05D0\u05D1\u05D8\u05D7\u05D4 \u05D5\u05D0\u05EA\u05D9\u05E7\u05D4",
      description: "\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D0\u05D7\u05E8\u05D0\u05D9 \u05D1-AI \u05D5\u05D4\u05D2\u05E0\u05D4 \u05E2\u05DC \u05DE\u05D9\u05D3\u05E2 \u05E8\u05D2\u05D9\u05E9",
      icon: "shield"
    }
  ];
  const processSteps = [
    {
      step: 1,
      title: "\u05E9\u05D9\u05D7\u05EA \u05D0\u05E4\u05D9\u05D5\u05DF",
      description: "\u05E0\u05D1\u05D9\u05DF \u05D0\u05EA \u05D4\u05E6\u05E8\u05DB\u05D9\u05DD, \u05D4\u05D0\u05EA\u05D2\u05E8\u05D9\u05DD \u05D5\u05D4\u05DE\u05D8\u05E8\u05D5\u05EA \u05E9\u05DC \u05D4\u05D0\u05E8\u05D2\u05D5\u05DF \u05E9\u05DC\u05DB\u05DD",
      code: "DISCOVERY"
    },
    {
      step: 2,
      title: "\u05EA\u05DB\u05E0\u05D5\u05DF \u05DE\u05D5\u05EA\u05D0\u05DD",
      description: "\u05E0\u05D1\u05E0\u05D4 \u05E1\u05D9\u05DC\u05D1\u05D5\u05E1 \u05DE\u05D5\u05EA\u05D0\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA \u05DC\u05E6\u05D5\u05D5\u05EA \u05D5\u05DC\u05EA\u05D7\u05D5\u05DD \u05E9\u05DC\u05DB\u05DD",
      code: "PLANNING"
    },
    {
      step: 3,
      title: "\u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E1\u05D3\u05E0\u05D4",
      description: "\u05D4\u05D3\u05E8\u05DB\u05D4 \u05DE\u05E2\u05E9\u05D9\u05EA \u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DC hands-on \u05E2\u05DC \u05DB\u05DC\u05D9\u05DD \u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD",
      code: "EXECUTION"
    },
    {
      step: 4,
      title: "\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D5\u05D4\u05D8\u05DE\u05E2\u05D4",
      description: "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05DC\u05D0\u05D7\u05E8 \u05D4\u05E1\u05D3\u05E0\u05D4 \u05DC\u05D4\u05D1\u05D8\u05D7\u05EA \u05D9\u05D9\u05E9\u05D5\u05DD \u05DE\u05D5\u05E6\u05DC\u05D7",
      code: "SUPPORT"
    }
  ];
  const team = instructors;
  const testimonials = [
    {
      quote: "\u05D4\u05E1\u05D3\u05E0\u05D4 \u05E9\u05D9\u05E0\u05EA\u05D4 \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA \u05E9\u05D1\u05D4 \u05D4\u05E6\u05D5\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3. \u05D7\u05E1\u05DB\u05E0\u05D5 \u05E9\u05E2\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4 \u05DB\u05DC \u05D9\u05D5\u05DD.",
      author: "\u05DE\u05D9\u05DB\u05DC \u05DB\u05D4\u05DF",
      role: "\u05DE\u05E0\u05D4\u05DC\u05EA \u05E9\u05D9\u05D5\u05D5\u05E7",
      company: "\u05D7\u05D1\u05E8\u05EA \u05D4\u05D9\u05D9\u05D8\u05E7 \u05DE\u05D5\u05D1\u05D9\u05DC\u05D4"
    },
    {
      quote: "\u05D4\u05DE\u05D3\u05E8\u05D9\u05DB\u05D9\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D9\u05DD \u05D5\u05DE\u05D1\u05D9\u05E0\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05EA\u05D2\u05E8\u05D9\u05DD \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD \u05E9\u05DC \u05E2\u05E1\u05E7\u05D9\u05DD. \u05DE\u05DE\u05DC\u05D9\u05E5 \u05D1\u05D7\u05D5\u05DD!",
      author: "\u05D9\u05D5\u05E1\u05D9 \u05DC\u05D5\u05D9",
      role: '\u05DE\u05E0\u05DB"\u05DC',
      company: "\u05E1\u05D8\u05D0\u05E8\u05D8\u05D0\u05E4 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05E4\u05D9\u05E0\u05D8\u05E7"
    },
    {
      quote: "\u05E1\u05D5\u05E3 \u05E1\u05D5\u05E3 \u05D4\u05DB\u05E9\u05E8\u05D4 \u05E9\u05DE\u05EA\u05DE\u05E7\u05D3\u05EA \u05D1\u05E4\u05E8\u05E7\u05D8\u05D9\u05E7\u05D4 \u05D5\u05DC\u05D0 \u05E8\u05E7 \u05D1\u05EA\u05D9\u05D0\u05D5\u05E8\u05D9\u05D4. \u05D4\u05E6\u05D5\u05D5\u05EA \u05D9\u05E6\u05D0 \u05E2\u05DD \u05DB\u05DC\u05D9\u05DD \u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD.",
      author: "\u05E8\u05D5\u05E0\u05D9\u05EA \u05E9\u05DE\u05D9\u05E8",
      role: "VP HR",
      company: "\u05D7\u05D1\u05E8\u05EA \u05D1\u05D9\u05D8\u05D5\u05D7 \u05D2\u05D3\u05D5\u05DC\u05D4"
    }
  ];
  const clients = [
    "https://focusai.co.il/wp-content/uploads/2025/11/32-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/33-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/34-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/37-1-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/36-1-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/33-1-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/29-1-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/28-1-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/27-1-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/25-1-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/635434-150x150.png",
    "https://focusai.co.il/wp-content/uploads/2025/11/123546321-150x150.png"
  ];
  const galleryImages = [
    "https://focusai.co.il/wp-content/uploads/2025/08/IMG_8766-scaled.jpg",
    "https://focusai.co.il/wp-content/uploads/2025/08/IMG_8779-scaled.jpg",
    "https://focusai.co.il/wp-content/uploads/2025/08/IMG_8788-scaled.jpg",
    "https://focusai.co.il/wp-content/uploads/2025/08/IMG_8792-scaled.jpg",
    "https://focusai.co.il/wp-content/uploads/2025/08/IMG_8798-scaled.jpg",
    "https://focusai.co.il/wp-content/uploads/2025/08/IMG_8802-scaled.jpg"
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-cnovaszo": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" data-astro-cid-cnovaszo> <!-- Background Effects --> <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" data-astro-cid-cnovaszo> <div class="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" data-astro-cid-cnovaszo></div> <div class="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px]" data-astro-cid-cnovaszo></div> <!-- Grid pattern --> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-cnovaszo></div> </div> <div class="container mx-auto px-4 relative z-10 max-w-7xl" data-astro-cid-cnovaszo> <div class="flex flex-col items-center text-center" data-astro-cid-cnovaszo> <!-- Logo Animation --> <div class="mb-8 relative" data-astro-cid-cnovaszo> <div class="absolute inset-0 bg-[#a855f7]/20 blur-3xl rounded-full" data-astro-cid-cnovaszo></div> <img src="https://res.cloudinary.com/dfudxxzlj/image/upload/v1765265415/2_fxdcio.png" alt="Focus AI - סדנאות AI לארגונים" class="relative w-64 h-64 md:w-80 md:h-80 object-contain animate-float" style="filter: drop-shadow(0 0 30px rgba(168, 85, 247, 0.4));" data-astro-cid-cnovaszo> </div> <!-- Headline --> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 font-display" data-astro-cid-cnovaszo> <span class="block text-white mb-2" data-astro-cid-cnovaszo>הפכו את הארגון</span> <span class="text-[#a855f7]" style="text-shadow: 0 0 40px rgba(168, 85, 247, 0.5);" data-astro-cid-cnovaszo>למעצמת AI</span> </h1> <!-- Subheadline --> <p class="text-lg md:text-xl text-[#d0d0e0] max-w-2xl mb-10 leading-relaxed" data-astro-cid-cnovaszo>
אנחנו מגשרים על הפער בין אנשים לטכנולוגיה, ומטמיעים בינה מלאכותית בארגון שלכם
<span class="text-white font-medium" data-astro-cid-cnovaszo>בצורה חכמה, מעשית ואנושית.</span> </p> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-4" data-astro-cid-cnovaszo> <a href="#contact" class="group relative px-8 py-4 bg-[#a855f7] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.5)]" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-cnovaszo> <span class="flex items-center gap-2" data-astro-cid-cnovaszo> <span class="w-2 h-2 rounded-full bg-[#0a0a0f] animate-pulse" data-astro-cid-cnovaszo></span>
לשיחת אפיון ללא עלות
</span> </a> <a href="#process" class="px-8 py-4 border-2 border-[#a855f7]/50 text-[#a855f7] font-mono uppercase tracking-wider hover:bg-[#a855f7]/10 transition-all duration-300" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-cnovaszo>
איך זה עובד?
</a> </div> <!-- Client Logos Marquee --> <div class="mt-20 w-full" data-astro-cid-cnovaszo> <p class="text-sm font-mono text-[#b0b0c0] mb-8 uppercase tracking-wider" data-astro-cid-cnovaszo>[TRUSTED_BY] חלק מהלקוחות שסומכים עלינו</p> <div class="relative overflow-hidden" style="mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);" data-astro-cid-cnovaszo> <div class="flex gap-6 animate-marquee" data-astro-cid-cnovaszo> ${[...clients, ...clients].map((logo) => renderTemplate`<div class="flex-shrink-0 w-24 h-24 bg-white rounded-xl p-3 flex items-center justify-center" data-astro-cid-cnovaszo> <img${addAttribute(logo, "src")} alt="לקוח" class="max-h-16 max-w-full object-contain" loading="lazy" data-astro-cid-cnovaszo> </div>`)} </div> </div> </div> </div> </div> </section>  <section id="contact" class="relative py-20 bg-[#0d0d12]" data-astro-cid-cnovaszo> <div class="container mx-auto px-4 max-w-4xl" data-astro-cid-cnovaszo> <div class="relative p-8 md:p-12 border border-[#2a2a3a] bg-[#12121a]" style="clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));" data-astro-cid-cnovaszo> <!-- Decorative corners --> <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#a855f7]" data-astro-cid-cnovaszo></div> <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#a855f7]" data-astro-cid-cnovaszo></div> <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#a855f7]" data-astro-cid-cnovaszo></div> <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#a855f7]" data-astro-cid-cnovaszo></div> <header class="text-center mb-10" data-astro-cid-cnovaszo> <p class="font-mono text-[#a855f7] text-sm mb-2" data-astro-cid-cnovaszo>[CONTACT_FORM]</p> <h2 class="text-3xl md:text-4xl font-black mb-4" data-astro-cid-cnovaszo>
רוצים <span class="text-[#a855f7]" data-astro-cid-cnovaszo>להתחיל?</span> </h2> <p class="text-[#d0d0e0]" data-astro-cid-cnovaszo>
השאירו פרטים ונחזור אליכם תוך 24 שעות לשיחת אפיון ללא התחייבות.
</p> </header> <form id="contact-form" class="space-y-6" data-astro-cid-cnovaszo> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-cnovaszo> <div data-astro-cid-cnovaszo> <label for="name" class="block text-sm font-mono text-[#d0d0e0] mb-2" data-astro-cid-cnovaszo>שם מלא <span class="text-[#a855f7]" data-astro-cid-cnovaszo>*</span></label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono" placeholder="ישראל ישראלי" data-astro-cid-cnovaszo> </div> <div data-astro-cid-cnovaszo> <label for="email" class="block text-sm font-mono text-[#d0d0e0] mb-2" data-astro-cid-cnovaszo>אימייל עסקי <span class="text-[#a855f7]" data-astro-cid-cnovaszo>*</span></label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono" placeholder="name@company.com" data-astro-cid-cnovaszo> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-cnovaszo> <div data-astro-cid-cnovaszo> <label for="phone" class="block text-sm font-mono text-[#d0d0e0] mb-2" data-astro-cid-cnovaszo>טלפון <span class="text-[#a855f7]" data-astro-cid-cnovaszo>*</span></label> <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono" placeholder="050-0000000" data-astro-cid-cnovaszo> </div> <div data-astro-cid-cnovaszo> <label for="company" class="block text-sm font-mono text-[#d0d0e0] mb-2" data-astro-cid-cnovaszo>שם החברה</label> <input type="text" id="company" name="company" class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono" placeholder="שם הארגון" data-astro-cid-cnovaszo> </div> </div> <div data-astro-cid-cnovaszo> <label for="message" class="block text-sm font-mono text-[#d0d0e0] mb-2" data-astro-cid-cnovaszo>מה חשוב לכם?</label> <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] text-white focus:border-[#a855f7] focus:outline-none transition-colors font-mono resize-none" placeholder="ספרו לנו קצת על הצוות ועל המטרות שלכם..." data-astro-cid-cnovaszo></textarea> </div> <div class="text-center pt-4" data-astro-cid-cnovaszo> <button type="submit" class="inline-flex items-center gap-3 px-10 py-4 bg-[#a855f7] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-cnovaszo> <span class="w-2 h-2 rounded-full bg-[#0a0a0f] animate-pulse" data-astro-cid-cnovaszo></span>
שלחו פרטים
</button> </div> </form> </div> </div> </section>  <section id="audience" class="relative py-20 lg:py-32" data-astro-cid-cnovaszo> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-cnovaszo> <header class="text-center max-w-3xl mx-auto mb-16" data-astro-cid-cnovaszo> <p class="font-mono text-[#a855f7] text-sm mb-4" data-astro-cid-cnovaszo>[TARGET_AUDIENCE]</p> <h2 class="text-3xl md:text-5xl font-black mb-6" data-astro-cid-cnovaszo>
למי הסדנאות <span class="text-[#a855f7]" data-astro-cid-cnovaszo>מתאימות?</span> </h2> <p class="text-[#d0d0e0] text-lg" data-astro-cid-cnovaszo>
אנחנו מתאימים את ההכשרה לכל רמה טכנולוגית, מאנשים שמעולם לא נגעו ב-AI ועד צוותי פיתוח מתקדמים.
</p> </header> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-cnovaszo> ${audiences.map((audience) => renderTemplate`<article class="group relative p-6 border border-[#2a2a3a] bg-[#12121a] hover:border-[#a855f7]/50 transition-all duration-300 hover:-translate-y-2" data-astro-cid-cnovaszo> <div class="absolute top-4 left-4 font-mono text-[11px] md:text-xs text-[#b0b0c0]" data-astro-cid-cnovaszo>[${audience.code}]</div> <div class="w-12 h-12 bg-[#a855f7]/10 border border-[#a855f7]/30 flex items-center justify-center mb-4 group-hover:bg-[#a855f7]/20 transition-colors" data-astro-cid-cnovaszo> ${audience.icon === "briefcase" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" data-astro-cid-cnovaszo></path> </svg>`} ${audience.icon === "users" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" data-astro-cid-cnovaszo></path> </svg>`} ${audience.icon === "code" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" data-astro-cid-cnovaszo></path> </svg>`} ${audience.icon === "chart" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" data-astro-cid-cnovaszo></path> </svg>`} ${audience.icon === "people" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" data-astro-cid-cnovaszo></path> </svg>`} ${audience.icon === "rocket" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" data-astro-cid-cnovaszo></path> </svg>`} </div> <h3 class="text-xl font-bold text-white mb-2" data-astro-cid-cnovaszo>${audience.title}</h3> <p class="text-[#d0d0e0] leading-relaxed" data-astro-cid-cnovaszo>${audience.description}</p> </article>`)} </div> </div> </section>  <section id="topics" class="relative py-20 lg:py-32 bg-[#0d0d12]" data-astro-cid-cnovaszo> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-cnovaszo> <header class="text-center max-w-3xl mx-auto mb-16" data-astro-cid-cnovaszo> <p class="font-mono text-[#a855f7] text-sm mb-4" data-astro-cid-cnovaszo>[SYLLABUS]</p> <h2 class="text-3xl md:text-5xl font-black mb-6" data-astro-cid-cnovaszo>
מה <span class="text-[#a855f7]" data-astro-cid-cnovaszo>נלמד?</span> </h2> <p class="text-[#d0d0e0] text-lg" data-astro-cid-cnovaszo>
הסדנאות מותאמות לצרכים שלכם. הנה כמה מהנושאים שאנחנו מכסים:
</p> </header> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-astro-cid-cnovaszo> ${topics.map((topic, index) => renderTemplate`<div class="group p-6 border border-[#2a2a3a] bg-[#12121a] hover:border-[#a855f7]/50 transition-all duration-300" data-astro-cid-cnovaszo> <div class="flex items-center gap-3 mb-3" data-astro-cid-cnovaszo> <div class="w-8 h-8 flex items-center justify-center" data-astro-cid-cnovaszo> ${topic.icon === "target" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" data-astro-cid-cnovaszo></path> </svg>`} ${topic.icon === "chat" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" data-astro-cid-cnovaszo></path> </svg>`} ${topic.icon === "edit" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" data-astro-cid-cnovaszo></path> </svg>`} ${topic.icon === "image" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" data-astro-cid-cnovaszo></path> </svg>`} ${topic.icon === "bolt" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" data-astro-cid-cnovaszo></path> </svg>`} ${topic.icon === "chart" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" data-astro-cid-cnovaszo></path> </svg>`} ${topic.icon === "handshake" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" data-astro-cid-cnovaszo></path> </svg>`} ${topic.icon === "shield" && renderTemplate`<svg class="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" data-astro-cid-cnovaszo> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" data-astro-cid-cnovaszo></path> </svg>`} </div> <span class="font-mono text-[11px] md:text-xs text-[#b0b0c0]" data-astro-cid-cnovaszo>[0${index + 1}]</span> </div> <h3 class="text-lg font-bold text-white mb-2" data-astro-cid-cnovaszo>${topic.title}</h3> <p class="text-sm text-[#d0d0e0]" data-astro-cid-cnovaszo>${topic.description}</p> </div>`)} </div> </div> </section>  <section id="process" class="relative py-20 lg:py-32" data-astro-cid-cnovaszo> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-cnovaszo> <header class="text-center max-w-3xl mx-auto mb-16" data-astro-cid-cnovaszo> <p class="font-mono text-[#a855f7] text-sm mb-4" data-astro-cid-cnovaszo>[PROCESS]</p> <h2 class="text-3xl md:text-5xl font-black mb-6" data-astro-cid-cnovaszo>
איך זה <span class="text-[#a855f7]" data-astro-cid-cnovaszo>עובד?</span> </h2> </header> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-cnovaszo> ${processSteps.map((step) => renderTemplate`<div class="relative" data-astro-cid-cnovaszo> <!-- Step number --> <div class="w-16 h-16 bg-[#a855f7] text-[#0a0a0f] font-mono font-black text-2xl flex items-center justify-center mb-6" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-cnovaszo> ${step.step} </div> <p class="font-mono text-[11px] md:text-xs text-[#b0b0c0] mb-2" data-astro-cid-cnovaszo>[${step.code}]</p> <h3 class="text-xl font-bold text-white mb-3" data-astro-cid-cnovaszo>${step.title}</h3> <p class="text-[#d0d0e0]" data-astro-cid-cnovaszo>${step.description}</p> </div>`)} </div> </div> </section>  <section id="team" class="relative py-20 lg:py-32 bg-[#0d0d12]" data-astro-cid-cnovaszo> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-cnovaszo> <header class="text-center max-w-3xl mx-auto mb-16" data-astro-cid-cnovaszo> <p class="font-mono text-[#a855f7] text-sm mb-4" data-astro-cid-cnovaszo>[TEAM]</p> <h2 class="text-3xl md:text-5xl font-black mb-6" data-astro-cid-cnovaszo>
הצוות <span class="text-[#a855f7]" data-astro-cid-cnovaszo>שלנו</span> </h2> <p class="text-[#d0d0e0] text-lg" data-astro-cid-cnovaszo>
למדו מאנשי מקצוע עם ניסיון אמיתי בהטמעת AI בארגונים
</p> </header> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto" data-astro-cid-cnovaszo> ${team.map((member) => renderTemplate`<div class="text-center group" data-astro-cid-cnovaszo> <div class="relative w-48 h-48 mx-auto mb-6" data-astro-cid-cnovaszo> <div class="absolute inset-0 bg-[#a855f7]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-cnovaszo></div> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="relative w-full h-full object-cover border-2 border-[#2a2a3a] group-hover:border-[#a855f7] transition-colors" style="clip-path: polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px));" data-astro-cid-cnovaszo> </div> <h3 class="text-xl font-bold text-white mb-1" data-astro-cid-cnovaszo>${member.name}</h3> <p class="font-mono text-[#a855f7] text-sm mb-2" data-astro-cid-cnovaszo>${member.title}</p> <p class="text-[#d0d0e0] text-sm" data-astro-cid-cnovaszo>${member.bio}</p>  <div class="flex flex-wrap justify-center gap-2 mt-4" data-astro-cid-cnovaszo> ${member.credentials.map((cred) => renderTemplate`<span class="px-2 py-1 text-[11px] md:text-xs font-mono text-[#a855f7] border border-[#a855f7]/30 bg-[#a855f7]/5" data-astro-cid-cnovaszo> ${cred} </span>`)} </div> </div>`)} </div> </div> </section>  <section id="testimonials" class="relative py-20 lg:py-32" data-astro-cid-cnovaszo> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-cnovaszo> <header class="text-center max-w-3xl mx-auto mb-16" data-astro-cid-cnovaszo> <p class="font-mono text-[#a855f7] text-sm mb-4" data-astro-cid-cnovaszo>[TESTIMONIALS]</p> <h2 class="text-3xl md:text-5xl font-black mb-6" data-astro-cid-cnovaszo>
מה <span class="text-[#a855f7]" data-astro-cid-cnovaszo>אומרים עלינו</span> </h2> </header> <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-astro-cid-cnovaszo> ${testimonials.map((testimonial) => renderTemplate`<blockquote class="relative p-8 border border-[#2a2a3a] bg-[#12121a]" data-astro-cid-cnovaszo> <div class="absolute top-4 right-4 text-[#a855f7]/20 text-6xl font-serif" data-astro-cid-cnovaszo>"</div> <p class="text-white text-lg mb-6 relative z-10" data-astro-cid-cnovaszo>"${testimonial.quote}"</p> <footer data-astro-cid-cnovaszo> <cite class="not-italic" data-astro-cid-cnovaszo> <span class="block text-white font-bold" data-astro-cid-cnovaszo>${testimonial.author}</span> <span class="text-[#a855f7] font-mono text-sm" data-astro-cid-cnovaszo>${testimonial.role}</span> <span class="block text-[#b0b0c0] text-sm" data-astro-cid-cnovaszo>${testimonial.company}</span> </cite> </footer> </blockquote>`)} </div> </div> </section>  <section id="gallery" class="relative py-20 lg:py-32 bg-[#0d0d12]" data-astro-cid-cnovaszo> <div class="container mx-auto px-4 max-w-7xl" data-astro-cid-cnovaszo> <header class="text-center max-w-3xl mx-auto mb-16" data-astro-cid-cnovaszo> <p class="font-mono text-[#a855f7] text-sm mb-4" data-astro-cid-cnovaszo>[GALLERY]</p> <h2 class="text-3xl md:text-5xl font-black mb-6" data-astro-cid-cnovaszo>
מהסדנאות <span class="text-[#a855f7]" data-astro-cid-cnovaszo>שלנו</span> </h2> </header> <div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-astro-cid-cnovaszo> ${galleryImages.map((image) => renderTemplate`<div class="aspect-[4/3] overflow-hidden border border-[#2a2a3a] hover:border-[#a855f7]/50 transition-colors" data-astro-cid-cnovaszo> <img${addAttribute(image, "src")} alt="מהסדנאות שלנו" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" data-astro-cid-cnovaszo> </div>`)} </div> </div> </section>  <section class="relative py-20 lg:py-32" data-astro-cid-cnovaszo> <div class="container mx-auto px-4 max-w-4xl text-center" data-astro-cid-cnovaszo> <p class="font-mono text-[#a855f7] text-sm mb-4" data-astro-cid-cnovaszo>[READY_TO_START]</p> <h2 class="text-3xl md:text-5xl font-black mb-6" data-astro-cid-cnovaszo>
מוכנים להפוך את הארגון <span class="text-[#a855f7]" data-astro-cid-cnovaszo>למעצמת AI?</span> </h2> <p class="text-[#d0d0e0] text-lg mb-10 max-w-2xl mx-auto" data-astro-cid-cnovaszo>
השאירו פרטים ונחזור אליכם תוך 24 שעות עם הצעה מותאמת לצרכים שלכם.
</p> <a href="#contact" class="inline-flex items-center gap-3 px-10 py-4 bg-[#a855f7] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.5)]" style="clip-path: polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px));" data-astro-cid-cnovaszo> <span class="w-2 h-2 rounded-full bg-[#0a0a0f] animate-pulse" data-astro-cid-cnovaszo></span>
בואו נדבר
</a> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer", "data-astro-cid-cnovaszo": true })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "currentPath": "/sadnaot", "data-astro-cid-cnovaszo": true })}` })} `;
}, "C:/sites/maderfuker/focusai-website/src/pages/sadnaot.astro", void 0);

const $$file = "C:/sites/maderfuker/focusai-website/src/pages/sadnaot.astro";
const $$url = "/sadnaot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sadnaot,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
