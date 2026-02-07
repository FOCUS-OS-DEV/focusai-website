import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as addAttribute, r as renderComponent } from '../chunks/astro/server_CX4f0l_Y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from '../chunks/Footer_CPo-c6EZ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { useScroll, useTransform, motion, useInView } from 'framer-motion';
import 'clsx';
/* empty css                                 */
import { f as founders, c as companyValues } from '../chunks/team_BLB99Tae.mjs';
import { $ as $$CTAContact } from '../chunks/CTAContact_CsPQoIMH.mjs';
export { renderers } from '../renderers.mjs';

const chavobot = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1770379453/6962a37d-21ba-4e69-9946-59e37d731ed3_qjwm7h.png";
const fingerprint = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1765571815/FOCUS_LOGO-06_2_grkja9.png";
const n8nBadge = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1770414664/f4b939e2-bcbe-4c98-adff-db93933b12e3_bhhw3i.png";
const GlitchText = ({ children, className = "" }) => /* @__PURE__ */ jsxs("span", { className: `relative inline-block ${className}`, children: [
  /* @__PURE__ */ jsx("span", { className: "relative z-10", children }),
  /* @__PURE__ */ jsx(
    "span",
    {
      className: "absolute inset-0 text-[#c084fc] opacity-70 animate-glitch-1",
      style: { clipPath: "inset(40% 0 20% 0)" },
      "aria-hidden": "true",
      children
    }
  ),
  /* @__PURE__ */ jsx(
    "span",
    {
      className: "absolute inset-0 text-[#a855f7] opacity-70 animate-glitch-2",
      style: { clipPath: "inset(20% 0 40% 0)" },
      "aria-hidden": "true",
      children
    }
  )
] });
const Scanlines = () => /* @__PURE__ */ jsx(
  "div",
  {
    className: "pointer-events-none absolute inset-0 z-50 opacity-[0.03]",
    style: {
      background: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.5) 2px,
        rgba(0, 0, 0, 0.5) 4px
      )`
    }
  }
);
const CyberGrid = () => /* @__PURE__ */ jsx(
  "div",
  {
    className: "absolute inset-0 opacity-[0.05]",
    style: {
      backgroundImage: `
        linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px"
    }
  }
);
const HUDCorner = ({ position }) => {
  const positionClasses = {
    "top-left": "top-4 left-4 border-t-2 border-l-2",
    "top-right": "top-4 right-4 border-t-2 border-r-2",
    "bottom-left": "bottom-4 left-4 border-b-2 border-l-2",
    "bottom-right": "bottom-4 right-4 border-b-2 border-r-2"
  };
  return /* @__PURE__ */ jsx("div", { className: `absolute w-8 h-8 border-[#a855f7]/30 ${positionClasses[position]}` });
};
const DataParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    char: ["0", "1", ">", "<", "/", "*", "#", "@"][Math.floor(Math.random() * 8)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
    size: Math.random() * 10 + 8
  }));
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: particles.map((p) => /* @__PURE__ */ jsx(
    motion.span,
    {
      className: "absolute font-mono text-[#a855f7]/20",
      style: {
        left: `${p.x}%`,
        top: `${p.y}%`,
        fontSize: p.size
      },
      animate: {
        y: [0, -200],
        opacity: [0, 0.5, 0]
      },
      transition: {
        duration: p.duration,
        repeat: Infinity,
        delay: p.delay,
        ease: "linear"
      },
      children: p.char
    },
    p.id
  )) });
};
const TerminalText = ({ text, delay = 0 }) => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("span", { className: "font-mono", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[#a855f7]", children: "> " }),
    displayed,
    /* @__PURE__ */ jsx("span", { className: `${showCursor ? "opacity-100" : "opacity-0"} text-[#a855f7]`, children: "_" })
  ] });
};
const NeonButton = ({
  children,
  href,
  variant = "primary"
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-3
    px-12 py-5 font-bold text-lg md:text-xl tracking-wide
    transition-all duration-200 rounded-full
    focus:outline-none focus:ring-2 focus:ring-[#a855f7] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]
  `;
  const variants = {
    primary: `
      bg-[#a855f7] text-white
      hover:bg-[#9333ea] hover:scale-105
      shadow-[0_0_25px_rgba(168,85,247,0.5),0_0_50px_rgba(168,85,247,0.3)]
      hover:shadow-[0_0_35px_rgba(168,85,247,0.7),0_0_70px_rgba(168,85,247,0.4)]
    `,
    secondary: `
      bg-transparent text-[#a855f7] border-2 border-[#a855f7]
      hover:bg-[#a855f7]/15 hover:scale-105
      shadow-[0_0_15px_rgba(168,85,247,0.3)]
      hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
    `
  };
  return /* @__PURE__ */ jsx(
    motion.a,
    {
      href,
      className: `${baseClasses} ${variants[variant]}`,
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.98 },
      children
    }
  );
};
const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ jsx("section", { className: "relative min-h-screen bg-[#0a0a0f] flex items-center justify-center", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "text-[#a855f7] font-mono text-2xl",
        children: /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "[INITIALIZING...]" })
      }
    ) });
  }
  return /* @__PURE__ */ jsxs("section", { ref: containerRef, className: "relative min-h-screen bg-[#0a0a0f]", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-1/2 h-1/2 bg-[#a855f7]/8 rounded-full blur-[200px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#7c3aed]/8 rounded-full blur-[200px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-[#c084fc]/5 rounded-full blur-[150px]" })
    ] }),
    /* @__PURE__ */ jsx(CyberGrid, {}),
    /* @__PURE__ */ jsx(DataParticles, {}),
    /* @__PURE__ */ jsx(Scanlines, {}),
    /* @__PURE__ */ jsx(HUDCorner, { position: "top-left" }),
    /* @__PURE__ */ jsx(HUDCorner, { position: "top-right" }),
    /* @__PURE__ */ jsx(HUDCorner, { position: "bottom-left" }),
    /* @__PURE__ */ jsx(HUDCorner, { position: "bottom-right" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-1/2 -translate-x-1/2 z-20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 px-6 py-2 bg-[#12121a]/80 border border-[#2a2a3a] backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-sm font-mono text-[#9090a8]", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" }),
        "SYSTEM ONLINE"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-[#2a2a3a]", children: "|" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-mono text-[#a855f7]", children: "FOCUS_AI v2.0" })
    ] }) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "relative z-10 container min-h-screen flex items-center",
        style: { opacity },
        children: /* @__PURE__ */ jsx("div", { className: "w-full py-32 lg:py-0", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-right order-2 lg:order-1 relative", children: [
            /* @__PURE__ */ jsx(
              motion.img,
              {
                src: fingerprint,
                alt: "",
                "aria-hidden": "true",
                className: "absolute top-1/2 right-0 lg:right-[-20%] w-[800px] lg:w-[1000px] h-auto pointer-events-none select-none -z-10",
                style: { transform: "translateY(-50%)" },
                initial: { opacity: 0 },
                animate: { opacity: 0.12 },
                transition: { duration: 2, delay: 1 }
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.2 },
                className: "mb-8 mt-4 text-base text-[#9090a8]",
                children: /* @__PURE__ */ jsx(TerminalText, { text: "initializing focus protocol...", delay: 500 })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "mb-6",
                initial: { y: 100, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 0.8, delay: 0.3 },
                children: /* @__PURE__ */ jsx("h1", { className: "text-[clamp(4rem,12vw,10rem)] font-black leading-[0.95] tracking-tighter", children: /* @__PURE__ */ jsxs(GlitchText, { className: "block text-[#f5f5fa]", children: [
                  "Focus",
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-transparent bg-clip-text ml-4",
                      style: {
                        backgroundImage: "linear-gradient(90deg, #a855f7, #c084fc, #e879f9)"
                      },
                      children: "AI"
                    }
                  )
                ] }) })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "mb-8 overflow-hidden",
                initial: { y: 100, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 0.8, delay: 0.5 },
                children: /* @__PURE__ */ jsxs("h2", { className: "text-[clamp(2rem,5vw,4rem)] font-bold leading-tight", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[#f5f5fa]", children: "מחברים אנשים " }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "text-transparent bg-clip-text",
                      style: {
                        backgroundImage: "linear-gradient(90deg, #a855f7, #c084fc, #e879f9)",
                        textShadow: "0 0 40px rgba(168, 85, 247, 0.5)"
                      },
                      children: "וטכנולוגיה"
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.7 },
                className: "mb-12",
                children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-[#f5f5fa] mb-2 font-semibold", children: "אצלנו הפוקוס הוא עלייך." }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-[#c0c0d0] font-mono", children: "// הכשרות מקצועיות ופתרונות AI לעסקים" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.9 },
                className: "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16",
                children: [
                  /* @__PURE__ */ jsx(NeonButton, { href: "/academy", variant: "primary", children: "אקדמיה" }),
                  /* @__PURE__ */ jsx(NeonButton, { href: "/services", variant: "secondary", children: "פיתוח מערכות" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "order-1 lg:order-2 flex justify-center items-center relative",
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1.2, delay: 0.5 },
              children: [
                /* @__PURE__ */ jsx(
                  motion.img,
                  {
                    src: n8nBadge,
                    alt: "n8n Official Partner",
                    className: "absolute z-0 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-auto",
                    style: {
                      top: "-2%",
                      right: "-8%",
                      opacity: 0.8,
                      transform: "rotate(20deg)"
                    },
                    initial: { opacity: 0, x: 50 },
                    animate: { opacity: 0.8, x: 0 },
                    transition: { duration: 1, delay: 1.5 }
                  }
                ),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: chavobot,
                    alt: "חבובוט - הנציג החכם של Focus AI",
                    className: "relative z-10 w-[85vw] max-w-[400px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] h-auto",
                    style: {
                      maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)"
                    }
                  }
                )
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-1px, -1px); }
          80% { transform: translate(1px, 1px); }
        }
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(-2px, 2px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(-1px, -1px); }
        }
        .animate-glitch-1 {
          animation: glitch-1 3s infinite;
        }
        .animate-glitch-2 {
          animation: glitch-2 3s infinite;
          animation-delay: 0.1s;
        }
      ` })
  ] });
};

const clients = [
  // Academic Partners
  { name: "אוניברסיטת חיפה", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239338/41_nufstk.png" },
  { name: "הטכניון", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239319/24_fcxmpa.png" },
  { name: "אגודת הסטודנטים חיפה", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239331/37_xm34qd.png" },
  { name: "דיקנאט הסטודנטים", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239329/36_ddwaud.png" },
  { name: "ויצו הדסים", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239325/32_fy3shq.png" },
  // Business Partners
  { name: "דיקיפר", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239335/40_xskhce.png" },
  { name: "ג'ונגל סיטי", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239334/38_ornkqc.png" },
  { name: "בי בי בייבי", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239327/35_gopg6v.png" },
  { name: "דרכא", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239326/34_hfdzkq.png" },
  { name: "היסוד הבסיסי", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239324/31_brygr5.png" },
  { name: "ניו מארק", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239322/28_wg1jv8.png" },
  // Additional Partners
  { name: "לקוח 30", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239323/30_ahmcfn.png" },
  { name: "לקוח 27", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239321/27_gzwe5z.png" },
  { name: "לקוח 26", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239320/26_opmxu4.png" },
  { name: "לקוח 25", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239320/25_nxubzg.png" },
  { name: "לקוח 39", logo: "https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239334/39_oc5dfg.png" }
];

const ClientLogos = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const allLogos = [...clients, ...clients];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: containerRef,
      className: "relative py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f] overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "container relative z-10 mb-20 text-center",
            initial: { opacity: 0, y: 20 },
            animate: isInView ? { opacity: 1, y: 0 } : {},
            transition: { duration: 0.6 },
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-[#a855f7]/70 uppercase tracking-[0.4em] mb-4", children: "Trusted By" }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-semibold text-[#f5f5fa]/90", children: "חלק מהלקוחות שסומכים עלינו" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "relative logo-marquee",
            style: {
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
            },
            children: /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "flex items-center gap-20 lg:gap-28 logo-track",
                animate: {
                  x: ["0%", "-50%"]
                },
                transition: {
                  x: {
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear"
                  }
                },
                children: allLogos.map((client, index) => /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "flex-shrink-0 logo-item",
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: client.logo,
                        alt: client.name,
                        className: "h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-500 ease-out",
                        loading: "lazy"
                      }
                    )
                  },
                  `${client.name}-${index}`
                ))
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("style", { children: `
        /* Base state: multiply blend mode makes white transparent on dark bg */
        .logo-item img {
          mix-blend-mode: multiply;
          filter: grayscale(100%) brightness(2) contrast(1.2);
          opacity: 0.85;
          transition: all 0.4s ease;
        }

        /* Hover state: show with better visibility */
        .logo-item:hover img {
          filter: grayscale(0%) brightness(1.1) contrast(1.1);
          opacity: 1;
        }

        /* Pause animation on hover */
        .logo-marquee:hover .logo-track {
          animation-play-state: paused;
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none !important;
            transform: none !important;
          }
          .logo-marquee {
            mask-image: none !important;
            -webkit-mask-image: none !important;
          }
        }
      ` })
      ]
    }
  );
};

const $$StorySection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="story" class="relative overflow-hidden bg-[#0a0a0f]" data-section data-astro-cid-wyxho7sb> <!-- THE PROBLEM --> <div class="py-24 lg:py-32 relative" data-astro-cid-wyxho7sb> <!-- Background glow --> <div class="absolute inset-0 section-bg" data-astro-cid-wyxho7sb> <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff3366]/5 rounded-full blur-[200px]" data-astro-cid-wyxho7sb></div> </div> <!-- Grid pattern --> <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(255, 51, 102, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 51, 102, 0.5) 1px, transparent 1px); background-size: 60px 60px;" data-astro-cid-wyxho7sb></div> <div class="container relative z-10" data-astro-cid-wyxho7sb> <!-- Section indicator --> <div class="flex items-center gap-4 mb-12" data-animate="fade-up" data-astro-cid-wyxho7sb> <div class="flex items-center gap-2" data-astro-cid-wyxho7sb> <span class="w-3 h-3 rounded-full bg-[#ff3366] animate-pulse" data-astro-cid-wyxho7sb></span> <span class="font-mono text-sm font-semibold text-[#ff3366] uppercase tracking-[0.2em]" data-astro-cid-wyxho7sb>PROBLEM_DETECTED</span> </div> <div class="h-px flex-1 bg-gradient-to-r from-[#ff3366]/50 to-transparent" data-astro-cid-wyxho7sb></div> </div> <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-astro-cid-wyxho7sb> <!-- Text content --> <div data-astro-cid-wyxho7sb> <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight" data-animate="glitch" data-astro-cid-wyxho7sb> <span class="text-[#9090a8]" data-astro-cid-wyxho7sb>כולם מדברים על </span> <span class="text-[#ff3366]" style="text-shadow: 0 0 30px rgba(255, 51, 102, 0.5);" data-astro-cid-wyxho7sb>AI</span> <br data-astro-cid-wyxho7sb> <span class="text-[#f5f5fa]" data-astro-cid-wyxho7sb>אבל מעטים יודעים</span> <br data-astro-cid-wyxho7sb> <span class="text-[#f5f5fa]" data-astro-cid-wyxho7sb>מה לעשות איתו</span> </h2> <div class="space-y-6 text-lg text-[#c0c0d0]" data-animate="stagger" data-astro-cid-wyxho7sb> <p class="font-mono" data-line data-astro-cid-wyxho7sb> <span class="text-[#ff3366]" data-astro-cid-wyxho7sb>></span> ארגונים משקיעים מיליונים בכלי AI מתקדמים
</p> <p class="font-mono" data-line data-astro-cid-wyxho7sb> <span class="text-[#ff3366]" data-astro-cid-wyxho7sb>></span> אבל העובדים לא יודעים איך להשתמש בהם
</p> <p class="font-mono" data-line data-astro-cid-wyxho7sb> <span class="text-[#ff3366]" data-astro-cid-wyxho7sb>></span> התוצאה? בזבוז משאבים, תסכול, ופער הולך וגדל
</p> </div> <!-- Warning panel --> <div class="mt-10 p-6 bg-[#ff3366]/5 border border-[#ff3366]/30 rounded-xl" data-animate="neon-pulse" data-delay="0.3" data-astro-cid-wyxho7sb> <div class="flex items-start gap-4" data-astro-cid-wyxho7sb> <div class="w-8 h-8 flex items-center justify-center border border-[#ff3366]/50 rounded-lg" data-astro-cid-wyxho7sb> <svg class="w-5 h-5 text-[#ff3366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wyxho7sb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" data-astro-cid-wyxho7sb></path> </svg> </div> <div data-astro-cid-wyxho7sb> <div class="font-mono text-base font-semibold text-[#ff3366] mb-2" data-astro-cid-wyxho7sb>WARNING: COMPETITIVE_GAP</div> <p class="text-[#d0d0e0] text-base" data-astro-cid-wyxho7sb>ארגונים שלא יאמצו AI בצורה נכונה יישארו מאחור. השאלה היא לא "אם" אלא "מתי".</p> </div> </div> </div> </div> <!-- Visual element - Data visualization --> <div class="relative" data-animate="terminal" data-delay="0.2" data-astro-cid-wyxho7sb> <div class="relative bg-[#12121a] border border-[#2a2a3a] p-8 rounded-2xl overflow-hidden" data-astro-cid-wyxho7sb> <!-- Terminal header --> <div class="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-3 bg-[#0a0a0f] border-b border-[#2a2a3a] rounded-t-2xl" data-astro-cid-wyxho7sb> <div class="flex items-center gap-1.5" data-astro-cid-wyxho7sb> <span class="w-2 h-2 rounded-full bg-[#ff3366]" data-astro-cid-wyxho7sb></span> <span class="w-2 h-2 rounded-full bg-[#ffff00]" data-astro-cid-wyxho7sb></span> <span class="w-2 h-2 rounded-full bg-[#a855f7]" data-astro-cid-wyxho7sb></span> </div> <span class="font-mono text-[11px] md:text-xs font-medium text-[#ff3366] tracking-wider" data-astro-cid-wyxho7sb>MARKET_ANALYSIS.log</span> </div> <div class="pt-8 space-y-6" data-astro-cid-wyxho7sb> <!-- Stat bars --> <div data-astro-cid-wyxho7sb> <div class="flex justify-between mb-2" data-astro-cid-wyxho7sb> <span class="font-mono text-sm font-medium text-[#b0b0c0]" data-astro-cid-wyxho7sb>ADOPTION_RATE</span> <span class="font-mono text-sm font-semibold text-[#ff3366]" data-astro-cid-wyxho7sb>23%</span> </div> <div class="h-2 bg-[#1a1a24] overflow-hidden" data-astro-cid-wyxho7sb> <div class="h-full w-[23%] bg-gradient-to-r from-[#ff3366] to-[#ff3366]/50" style="box-shadow: 0 0 10px rgba(255, 51, 102, 0.5);" data-astro-cid-wyxho7sb></div> </div> </div> <div data-astro-cid-wyxho7sb> <div class="flex justify-between mb-2" data-astro-cid-wyxho7sb> <span class="font-mono text-sm font-medium text-[#b0b0c0]" data-astro-cid-wyxho7sb>SKILL_GAP</span> <span class="font-mono text-sm font-semibold text-[#ff3366]" data-astro-cid-wyxho7sb>67%</span> </div> <div class="h-2 bg-[#1a1a24] overflow-hidden" data-astro-cid-wyxho7sb> <div class="h-full w-[67%] bg-gradient-to-r from-[#ff3366] to-[#ff3366]/50" style="box-shadow: 0 0 10px rgba(255, 51, 102, 0.5);" data-astro-cid-wyxho7sb></div> </div> </div> <div data-astro-cid-wyxho7sb> <div class="flex justify-between mb-2" data-astro-cid-wyxho7sb> <span class="font-mono text-sm font-medium text-[#b0b0c0]" data-astro-cid-wyxho7sb>RESOURCE_WASTE</span> <span class="font-mono text-sm font-semibold text-[#ff3366]" data-astro-cid-wyxho7sb>45%</span> </div> <div class="h-2 bg-[#1a1a24] overflow-hidden" data-astro-cid-wyxho7sb> <div class="h-full w-[45%] bg-gradient-to-r from-[#ff3366] to-[#ff3366]/50" style="box-shadow: 0 0 10px rgba(255, 51, 102, 0.5);" data-astro-cid-wyxho7sb></div> </div> </div> <div class="pt-4 border-t border-[#2a2a3a]" data-astro-cid-wyxho7sb> <p class="font-mono text-sm text-[#c0c0d0]" data-astro-cid-wyxho7sb> <span class="text-[#ff3366]" data-astro-cid-wyxho7sb>//</span> רק 23% מהארגונים מצליחים לממש את פוטנציאל ה-AI שלהם
</p> </div> </div> </div> <!-- Decorative elements --> <div class="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#ff3366]/30" data-astro-cid-wyxho7sb></div> <div class="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#ff3366]/30" data-astro-cid-wyxho7sb></div> </div> </div> </div> </div> <!-- Transition line --> <div class="relative h-32" data-astro-cid-wyxho7sb> <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ff3366] via-[#a855f7] to-[#a855f7]" data-astro-cid-wyxho7sb></div> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#a855f7] rotate-45" style="box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);" data-astro-cid-wyxho7sb></div> </div> <!-- THE SOLUTION --> <div class="py-24 lg:py-32 relative" data-astro-cid-wyxho7sb> <!-- Background glow --> <div class="absolute inset-0" data-astro-cid-wyxho7sb> <div class="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-[#a855f7]/5 rounded-full blur-[200px]" data-astro-cid-wyxho7sb></div> </div> <!-- Grid pattern --> <div class="absolute inset-0 opacity-[0.02]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 60px 60px;" data-astro-cid-wyxho7sb></div> <div class="container relative z-10" data-astro-cid-wyxho7sb> <!-- Section indicator --> <div class="flex items-center gap-4 mb-12" data-animate="fade-up" data-astro-cid-wyxho7sb> <div class="flex items-center gap-2" data-astro-cid-wyxho7sb> <span class="w-3 h-3 rounded-full bg-[#a855f7] animate-pulse" data-astro-cid-wyxho7sb></span> <span class="font-mono text-sm font-semibold text-[#a855f7] uppercase tracking-[0.2em]" data-astro-cid-wyxho7sb>SOLUTION_FOUND</span> </div> <div class="h-px flex-1 bg-gradient-to-r from-[#a855f7]/50 to-transparent" data-astro-cid-wyxho7sb></div> </div> <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center" data-astro-cid-wyxho7sb> <!-- Visual element first on desktop - Character Image --> <div class="order-2 lg:order-1 relative flex items-center justify-center" data-animate="scale-up" data-astro-cid-wyxho7sb> <!-- Glow effect behind character --> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-wyxho7sb> <div class="w-[400px] h-[400px] bg-[#a855f7]/15 rounded-full blur-[100px]" data-astro-cid-wyxho7sb></div> </div> <!-- Character image with fade edges --> <div class="relative" data-astro-cid-wyxho7sb> <img src="https://res.cloudinary.com/dfudxxzlj/image/upload/v1770417795/0616a06c-820e-4c75-89fd-3f92a1159877_ndhfnn.png" alt="חבובוט - הבוט החכם של Focus AI" class="relative z-10 w-full max-w-[500px] h-auto chavobot-fade" loading="lazy" data-astro-cid-wyxho7sb> </div> </div> <!-- Text content --> <div class="order-1 lg:order-2" data-astro-cid-wyxho7sb> <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight" data-animate="slide-left" data-astro-cid-wyxho7sb> <span class="text-[#f5f5fa]" data-astro-cid-wyxho7sb>אנחנו לא</span> <br data-astro-cid-wyxho7sb> <span class="text-[#9090a8]" data-astro-cid-wyxho7sb>מלמדים תיאוריה</span> <br data-astro-cid-wyxho7sb> <span class="text-[#a855f7]" style="text-shadow: 0 0 30px rgba(168, 85, 247, 0.5);" data-astro-cid-wyxho7sb>אנחנו בונים</span> <br data-astro-cid-wyxho7sb> <span class="text-[#a855f7]" style="text-shadow: 0 0 30px rgba(168, 85, 247, 0.5);" data-astro-cid-wyxho7sb>יכולות</span> </h2> <div class="space-y-6 text-lg text-[#c0c0d0]" data-animate="stagger" data-delay="0.2" data-astro-cid-wyxho7sb> <p class="font-mono" data-line data-astro-cid-wyxho7sb> <span class="text-[#a855f7]" data-astro-cid-wyxho7sb>></span> צוות המרצים שלנו עובד עם AI בשטח, כל יום
</p> <p class="font-mono" data-line data-astro-cid-wyxho7sb> <span class="text-[#a855f7]" data-astro-cid-wyxho7sb>></span> ההכשרות נבנות סביב אתגרים אמיתיים
</p> <p class="font-mono" data-line data-astro-cid-wyxho7sb> <span class="text-[#a855f7]" data-astro-cid-wyxho7sb>></span> תצאו עם כלים שעובדים - לא רק ידע
</p> </div> <!-- Success panel --> <div class="mt-10 p-6 bg-[#a855f7]/5 border border-[#a855f7]/30 rounded-xl" data-animate="neon-pulse" data-delay="0.4" data-astro-cid-wyxho7sb> <div class="flex items-start gap-4" data-astro-cid-wyxho7sb> <div class="w-8 h-8 flex items-center justify-center border border-[#a855f7]/50 rounded-lg" data-astro-cid-wyxho7sb> <svg class="w-5 h-5 text-[#a855f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-wyxho7sb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-wyxho7sb></path> </svg> </div> <div data-astro-cid-wyxho7sb> <div class="font-mono text-base font-semibold text-[#a855f7] mb-2" data-astro-cid-wyxho7sb>STATUS: MISSION_READY</div> <p class="text-[#d0d0e0] text-base" data-astro-cid-wyxho7sb> <span class="text-[#f5f5fa] font-semibold" data-astro-cid-wyxho7sb>אצלנו הפוקוס הוא עליך.</span> אנחנו כאן כדי להפוך אתכם לאנשי מקצוע ב-AI - לא למכור לכם עוד הכשרה.
</p> </div> </div> </div> </div> </div> </div> </div> <!-- Transition to proof --> <div class="relative h-32" data-astro-cid-wyxho7sb> <div class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#a855f7] via-[#c084fc] to-[#c084fc]" data-astro-cid-wyxho7sb></div> <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#c084fc] rotate-45" style="box-shadow: 0 0 20px rgba(192, 132, 252, 0.5);" data-astro-cid-wyxho7sb></div> </div> <!-- THE PROOF - Teaser --> <div class="py-16 relative" data-astro-cid-wyxho7sb> <div class="container relative z-10" data-astro-cid-wyxho7sb> <!-- Section indicator --> <div class="flex items-center gap-4 mb-8" data-animate="fade-up" data-astro-cid-wyxho7sb> <div class="flex items-center gap-2" data-astro-cid-wyxho7sb> <span class="w-3 h-3 rounded-full bg-[#c084fc] animate-pulse" data-astro-cid-wyxho7sb></span> <span class="font-mono text-sm font-semibold text-[#c084fc] uppercase tracking-[0.2em]" data-astro-cid-wyxho7sb>PROOF_VERIFIED</span> </div> <div class="h-px flex-1 bg-gradient-to-r from-[#c084fc]/50 to-transparent" data-astro-cid-wyxho7sb></div> </div> <div class="text-center" data-animate="scale-up" data-astro-cid-wyxho7sb> <h3 class="text-2xl md:text-3xl font-black text-[#f5f5fa] mb-4" data-astro-cid-wyxho7sb>
אל תאמינו לנו.
<span class="text-[#c084fc]" data-astro-cid-wyxho7sb> תקשיבו להם.</span> </h3> <p class="text-[#b0b0c0] font-mono text-base font-medium" data-astro-cid-wyxho7sb>SCROLL_DOWN >> VIEW_TESTIMONIALS</p> </div> </div> </div> </section> `;
}, "C:/sites/maderfuker/focusai-website/src/components/StorySection.astro", void 0);

const $$ServicesPreview = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      id: "SRV_001",
      title: "\u05E0\u05E6\u05D9\u05D2 AI \u05DC\u05E2\u05E1\u05E7",
      subtitle: "DIGITAL_AGENT",
      description: "\u05D1\u05D5\u05D8 \u05D7\u05DB\u05DD \u05E9\u05DE\u05D1\u05D9\u05DF \u05D0\u05EA \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E9\u05DC\u05DB\u05DD, \u05E2\u05D5\u05E0\u05D4 \u05E2\u05DC \u05E9\u05D0\u05DC\u05D5\u05EA, \u05E7\u05D5\u05D1\u05E2 \u05E4\u05D2\u05D9\u05E9\u05D5\u05EA \u05D5\u05DE\u05D8\u05E4\u05DC \u05D1\u05DB\u05DC \u05D4\u05D4\u05D5\u05D3\u05E2\u05D5\u05EA - \u05D2\u05DD \u05D1\u05E9\u05DC\u05D5\u05E9 \u05D1\u05DC\u05D9\u05DC\u05D4.",
      features: ["WhatsApp", "Instagram", "Facebook", "Website"],
      metric: "90%",
      metricLabel: "TIME_SAVED",
      neonColor: "magenta"
    },
    {
      id: "SRV_002",
      title: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05D7\u05DB\u05DE\u05D5\u05EA",
      subtitle: "SMART_AUTOMATION",
      description: "\u05DC\u05D9\u05D3 \u05E0\u05DB\u05E0\u05E1? \u05DE\u05D9\u05D3 \u05E0\u05E4\u05EA\u05D7 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D1-CRM, \u05E0\u05E9\u05DC\u05D7 \u05DE\u05D9\u05D9\u05DC, \u05DE\u05EA\u05D5\u05D0\u05DD \u05E4\u05D5\u05DC\u05D5\u05D0\u05E4 \u05D1\u05D9\u05D5\u05DE\u05DF. \u05D4\u05DB\u05DC \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9.",
      features: ["N8N", "Zapier", "API"],
      metric: "50+",
      metricLabel: "INTEGRATIONS",
      neonColor: "cyan"
    },
    {
      id: "SRV_003",
      title: "\u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05DC\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD",
      subtitle: "TEAM_TRAINING",
      description: "\u05DC\u05D0 \u05E2\u05D5\u05D3 \u05DE\u05E6\u05D2\u05D5\u05EA \u05DE\u05E9\u05E2\u05DE\u05DE\u05D5\u05EA. \u05E1\u05D3\u05E0\u05D0\u05D5\u05EA \u05DE\u05E2\u05E9\u05D9\u05D5\u05EA \u05E9\u05D1\u05D4\u05DF \u05D4\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05E2\u05DD \u05DB\u05DC\u05D9\u05DD \u05E9\u05D4\u05DD \u05D1\u05D0\u05DE\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D4\u05DD.",
      features: ["ChatGPT", "Claude", "Midjourney", "Automation"],
      metric: "500+",
      metricLabel: "GRADUATES",
      neonColor: "green"
    }
  ];
  const processSteps = [
    { num: "01", code: "DISCOVER", title: "\u05DE\u05D1\u05D9\u05E0\u05D9\u05DD", desc: "\u05E4\u05D2\u05D9\u05E9\u05EA \u05D0\u05E4\u05D9\u05D5\u05DF \u05E2\u05DE\u05D5\u05E7\u05D4 \u05DC\u05D4\u05D1\u05E0\u05EA \u05D4\u05E6\u05E8\u05DB\u05D9\u05DD" },
    { num: "02", code: "BUILD", title: "\u05D1\u05D5\u05E0\u05D9\u05DD", desc: "\u05E4\u05D9\u05EA\u05D5\u05D7 \u05D4\u05E4\u05EA\u05E8\u05D5\u05DF \u05D4\u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05E2\u05E1\u05E7" },
    { num: "03", code: "CONNECT", title: "\u05DE\u05D7\u05D1\u05E8\u05D9\u05DD", desc: "\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05DC\u05DB\u05DC \u05D4\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05E7\u05D9\u05D9\u05DE\u05D5\u05EA" },
    { num: "04", code: "SUPPORT", title: "\u05DE\u05DC\u05D5\u05D5\u05D9\u05DD", desc: "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05E2\u05D3 \u05E9\u05E2\u05D5\u05D1\u05D3 \u05DE\u05D5\u05E9\u05DC\u05DD" }
  ];
  const getNeonColor = (color) => {
    const colors = {
      green: "#a855f7",
      cyan: "#c084fc",
      magenta: "#e879f9"
    };
    return colors[color] || colors.green;
  };
  return renderTemplate`${maybeRenderHead()}<section id="services" class="py-24 lg:py-32 relative overflow-hidden bg-[#0a0a0f]" data-section data-astro-cid-uwoyub3z> <!-- Background effects --> <div class="absolute inset-0 section-bg" data-astro-cid-uwoyub3z> <div class="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#e879f9]/5 rounded-full blur-[200px]" data-astro-cid-uwoyub3z></div> <div class="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#c084fc]/5 rounded-full blur-[200px]" data-astro-cid-uwoyub3z></div> </div> <!-- Circuit grid --> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-uwoyub3z></div> <!-- Scan line effect --> <div class="absolute inset-0 pointer-events-none overflow-hidden" data-astro-cid-uwoyub3z> <div class="scan-line absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#a855f7]/50 to-transparent" data-astro-cid-uwoyub3z></div> </div> <div class="container relative z-10" data-astro-cid-uwoyub3z> <!-- Section Header --> <div class="text-center mb-16 lg:mb-24" data-astro-cid-uwoyub3z> <!-- Terminal badge --> <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#e879f9]/30 mb-8" data-animate="fade-up" data-astro-cid-uwoyub3z> <span class="w-2 h-2 rounded-full bg-[#e879f9] animate-pulse" data-astro-cid-uwoyub3z></span> <span class="font-mono text-sm font-semibold text-[#e879f9] uppercase tracking-[0.15em]" data-astro-cid-uwoyub3z>SERVICES_MODULE</span> </div> <h2 class="text-4xl md:text-5xl lg:text-7xl font-black mb-6" data-animate="glitch" data-astro-cid-uwoyub3z> <span class="text-[#f5f5fa]" data-astro-cid-uwoyub3z>בונים. מחברים.</span> <span class="block mt-2 gradient-text-magenta" data-astro-cid-uwoyub3z>מלווים.</span> </h2> <p class="text-xl text-[#b0b0c0] max-w-3xl mx-auto font-mono" data-animate="fade-up" data-delay="0.2" data-astro-cid-uwoyub3z> <span class="text-[#e879f9]" data-astro-cid-uwoyub3z>></span> לא רק מייעצים - בונים את הפתרון ומוודאים שהוא
<span class="text-[#f5f5fa]" data-astro-cid-uwoyub3z> עובד מושלם.</span> </p> </div> <!-- Services Grid - Bento Style --> <div class="grid lg:grid-cols-3 gap-6 mb-20" data-astro-cid-uwoyub3z> ${services.map((service, index) => {
    const neonHex = getNeonColor(service.neonColor);
    return renderTemplate`<div class="service-card group relative"${addAttribute(`--neon-color: ${neonHex};`, "style")} data-animate="flip"${addAttribute(`${index * 0.15}`, "data-delay")} data-astro-cid-uwoyub3z>  <div class="relative h-full bg-[#12121a] border border-[#2a2a3a] hover:border-[var(--neon-color)] transition-all duration-300 overflow-hidden rounded-2xl" data-astro-cid-uwoyub3z>  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"${addAttribute(`box-shadow: inset 0 0 60px ${neonHex}20;`, "style")} data-astro-cid-uwoyub3z></div>  <div class="flex items-center justify-between px-6 py-3 border-b border-[#2a2a3a] bg-[#0a0a0f]/50 rounded-t-2xl" data-astro-cid-uwoyub3z> <div class="flex items-center gap-2" data-astro-cid-uwoyub3z> <span class="w-2.5 h-2.5 rounded-full bg-[#ff3366]" data-astro-cid-uwoyub3z></span> <span class="w-2.5 h-2.5 rounded-full bg-[#ffff00]" data-astro-cid-uwoyub3z></span> <span class="w-2.5 h-2.5 rounded-full bg-[#a855f7]" data-astro-cid-uwoyub3z></span> </div> <span class="font-mono text-sm font-medium text-[#b0b0c0] tracking-wider" data-astro-cid-uwoyub3z>${service.id}</span> </div>  <div class="p-6 lg:p-8" data-astro-cid-uwoyub3z>  <div class="flex items-start justify-between mb-6" data-astro-cid-uwoyub3z> <div data-astro-cid-uwoyub3z> <span class="font-mono text-sm font-medium uppercase tracking-[0.2em] mb-2 block"${addAttribute(`color: ${neonHex};`, "style")} data-astro-cid-uwoyub3z> ${service.subtitle} </span> <h3 class="text-2xl font-bold text-[#f5f5fa] group-hover:text-[var(--neon-color)] transition-colors" data-astro-cid-uwoyub3z> ${service.title} </h3> </div> <div class="text-left" data-astro-cid-uwoyub3z> <div class="text-3xl font-black font-mono"${addAttribute(`color: ${neonHex}; text-shadow: 0 0 20px ${neonHex}50;`, "style")} data-astro-cid-uwoyub3z> ${service.metric} </div> <div class="text-sm font-medium text-[#b0b0c0] font-mono uppercase tracking-wider" data-astro-cid-uwoyub3z>${service.metricLabel}</div> </div> </div>  <p class="text-[#d0d0e0] leading-relaxed mb-6 text-sm" data-astro-cid-uwoyub3z> ${service.description} </p>  <div class="flex flex-wrap gap-2 mb-6" data-astro-cid-uwoyub3z> ${service.features.map((feature) => renderTemplate`<span class="px-3 py-1.5 text-sm font-medium font-mono uppercase tracking-wider border rounded-full transition-all duration-300"${addAttribute(`border-color: ${neonHex}30; color: ${neonHex};`, "style")} data-astro-cid-uwoyub3z> ${feature} </span>`)} </div>  <a href="#contact" class="inline-flex items-center gap-2 font-mono text-[11px] md:text-xs uppercase tracking-wider transition-all duration-300 group/link"${addAttribute(`color: ${neonHex};`, "style")} data-astro-cid-uwoyub3z> <span class="w-1.5 h-1.5 rounded-full transition-colors"${addAttribute(`background-color: ${neonHex};`, "style")} data-astro-cid-uwoyub3z></span> <span data-astro-cid-uwoyub3z>ACCESS_DETAILS</span> </a> </div> </div> </div>`;
  })} </div> <!-- Process Timeline - Terminal Style --> <div class="relative bg-[#12121a] border border-[#2a2a3a] overflow-hidden rounded-2xl" data-astro-cid-uwoyub3z> <!-- Glow effects --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#a855f7]/5 rounded-full blur-[150px]" data-astro-cid-uwoyub3z></div> <!-- Horizontal lines --> <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent" data-astro-cid-uwoyub3z></div> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent" data-astro-cid-uwoyub3z></div>  <div class="flex items-center justify-between px-6 py-3 border-b border-[#2a2a3a] bg-[#0a0a0f]/50 rounded-t-2xl" data-astro-cid-uwoyub3z> <div class="flex items-center gap-2" data-astro-cid-uwoyub3z> <span class="w-2.5 h-2.5 rounded-full bg-[#ff3366]" data-astro-cid-uwoyub3z></span> <span class="w-2.5 h-2.5 rounded-full bg-[#ffff00]" data-astro-cid-uwoyub3z></span> <span class="w-2.5 h-2.5 rounded-full bg-[#a855f7]" data-astro-cid-uwoyub3z></span> </div> <span class="font-mono text-sm font-medium text-[#b0b0c0] tracking-wider" data-astro-cid-uwoyub3z>PROCESS_PROTOCOL</span> </div> <div class="relative z-10 p-8 lg:p-16" data-astro-cid-uwoyub3z> <div class="text-center mb-12" data-astro-cid-uwoyub3z> <h3 class="text-3xl lg:text-4xl font-black text-[#f5f5fa] mb-4" data-astro-cid-uwoyub3z> <span class="font-mono text-[#a855f7]" data-astro-cid-uwoyub3z>$</span> 4 שלבים - ואתם
<span class="gradient-text-glow" data-astro-cid-uwoyub3z> באוויר</span> </h3> <p class="text-[#b0b0c0] max-w-xl mx-auto font-mono text-sm" data-astro-cid-uwoyub3z>
// תהליך מוכח שמביא תוצאות תוך 30 יום
</p> </div> <!-- Steps --> <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-uwoyub3z> ${processSteps.map((step, index) => renderTemplate`<div class="process-step relative group"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-uwoyub3z>  ${index < 3 && renderTemplate`<div class="hidden lg:block absolute top-1/2 left-full w-full h-px" data-astro-cid-uwoyub3z> <div class="w-full h-full bg-gradient-to-r from-[#a855f7]/50 to-transparent" data-astro-cid-uwoyub3z></div> </div>`} <div class="relative text-center p-6 bg-[#0a0a0f] border border-[#2a2a3a] hover:border-[#a855f7]/50 transition-all duration-300 rounded-xl" data-astro-cid-uwoyub3z>  <div class="font-mono text-6xl font-black text-[#1c1c2e] group-hover:text-[#a855f7]/10 transition-colors absolute top-2 right-4" data-astro-cid-uwoyub3z> ${step.num} </div>  <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#a855f7]/10 border border-[#a855f7]/30 mb-4" data-astro-cid-uwoyub3z> <span class="w-1.5 h-1.5 rounded-full bg-[#a855f7]" data-astro-cid-uwoyub3z></span> <span class="font-mono text-sm font-medium text-[#a855f7] uppercase tracking-wider" data-astro-cid-uwoyub3z>${step.code}</span> </div> <h4 class="text-xl font-bold text-[#f5f5fa] mb-2" data-astro-cid-uwoyub3z>${step.title}</h4> <p class="text-[#b0b0c0] text-sm font-mono" data-astro-cid-uwoyub3z>${step.desc}</p> </div> </div>`)} </div> </div> </div> <!-- CTA Section --> <div class="text-center mt-16" data-astro-cid-uwoyub3z> <div class="inline-flex flex-col sm:flex-row gap-4" data-astro-cid-uwoyub3z> <a href="#contact" class="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#a855f7] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] hover:brightness-110 transition-all duration-300 rounded-full" data-astro-cid-uwoyub3z> <span class="w-2 h-2 rounded-full bg-[#0a0a0f] animate-pulse" data-astro-cid-uwoyub3z></span>
לשיחת אפיון בחינם
</a> <a href="https://wa.me/972539466408" class="inline-flex items-center justify-center gap-3 px-10 py-5 border border-[#a855f7]/30 text-[#a855f7] font-mono uppercase tracking-wider hover:bg-[#a855f7]/10 transition-all duration-300 rounded-full" data-astro-cid-uwoyub3z> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-uwoyub3z> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-uwoyub3z></path> </svg>
WhatsApp
</a> </div> </div> </div> </section> `;
}, "C:/sites/maderfuker/focusai-website/src/components/ServicesPreview.astro", void 0);

const $$AcademyPreview = createComponent(($$result, $$props, $$slots) => {
  const courses = [
    {
      id: "AI_FIRST_001",
      name: "AI First",
      tagline: "// \u05D4\u05E6\u05E2\u05D3 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF",
      outcome: "\u05DE\u05D1\u05D9\u05E0\u05D9\u05DD \u05D5\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9",
      duration: "5 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD",
      hours: "15 \u05E9\u05E2\u05D5\u05EA",
      description: "\u05D4\u05DB\u05E0\u05D9\u05E1\u05D4 \u05E9\u05DC\u05DB\u05DD \u05DC\u05E2\u05D5\u05DC\u05DD \u05D4-AI. \u05DC\u05D5\u05DE\u05D3\u05D9\u05DD \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1-ChatGPT, Claude \u05D5\u05E2\u05D5\u05D3 \u05DB\u05DC\u05D9\u05DD \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA.",
      features: [
        "\u05D4\u05DB\u05E8\u05EA \u05DB\u05DC\u05D9 AI \u05DE\u05E8\u05DB\u05D6\u05D9\u05D9\u05DD",
        "\u05DB\u05EA\u05D9\u05D1\u05EA \u05E4\u05E8\u05D5\u05DE\u05E4\u05D8\u05D9\u05DD \u05D0\u05E4\u05E7\u05D8\u05D9\u05D1\u05D9\u05D9\u05DD",
        "\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D9\u05D5\u05DD-\u05D9\u05D5\u05DD \u05D1\u05E2\u05D1\u05D5\u05D3\u05D4",
        "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D4\u05E9\u05EA\u05EA\u05E4\u05D5\u05EA"
      ],
      neonColor: "cyan",
      featured: false,
      level: "BEGINNER",
      href: "/academy/ai-first"
    },
    {
      id: "BOT_CAMP_002",
      name: "Bot-Camp",
      tagline: "// \u05D4\u05D4\u05DB\u05E9\u05E8\u05D4 \u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA",
      outcome: "\u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05E2\u05DD \u05EA\u05D9\u05E7 \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D5\u05D9\u05DB\u05D5\u05DC\u05EA \u05DC\u05D4\u05E8\u05D5\u05D5\u05D9\u05D7",
      duration: "12 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD",
      hours: "72 \u05E9\u05E2\u05D5\u05EA",
      description: "\u05D4\u05DB\u05E9\u05E8\u05D4 \u05DE\u05E7\u05D9\u05E4\u05D4 \u05DC\u05D1\u05E0\u05D9\u05D9\u05EA \u05E1\u05D5\u05DB\u05E0\u05D9 AI, \u05D1\u05D5\u05D8\u05D9\u05DD \u05D5\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA. \u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05E2\u05DD \u05EA\u05E2\u05D5\u05D3\u05D4 \u05D0\u05E7\u05D3\u05DE\u05D9\u05EA \u05D5\u05D9\u05D3\u05E2 \u05DE\u05E2\u05E9\u05D9.",
      features: [
        "\u05E4\u05E8\u05D5\u05E0\u05D8\u05DC\u05D9 / Zoom Live",
        "2-3 \u05DE\u05E8\u05E6\u05D9\u05DD \u05D1\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9",
        "\u05E4\u05D5\u05E8\u05D8\u05DC \u05DC\u05D9\u05DE\u05D5\u05D3 \u05DE\u05EA\u05E7\u05D3\u05DD + \u05E1\u05D5\u05DB\u05E0\u05D9 AI",
        "\u05E7\u05D4\u05D9\u05DC\u05EA \u05D1\u05D5\u05D2\u05E8\u05D9\u05DD \u05D5\u05E0\u05D8\u05D5\u05D5\u05E8\u05E7\u05D9\u05E0\u05D2",
        "\u05EA\u05D9\u05E7 \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05DE\u05D5\u05DB\u05DF",
        "\u05EA\u05E2\u05D5\u05D3\u05D4 \u05D1\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05E7\u05D3\u05DE\u05D9"
      ],
      neonColor: "green",
      featured: true,
      level: "ALL_LEVELS",
      href: "/academy/bot-camp"
    },
    {
      id: "AI_READY_003",
      name: "AI Ready",
      tagline: "// \u05D9\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05E2\u05E6\u05DE\u05DB\u05DD",
      outcome: "\u05D1\u05D5\u05E0\u05D9\u05DD \u05D4\u05DB\u05DC \u05D1\u05E2\u05E6\u05DE\u05DB\u05DD",
      duration: "8 \u05DE\u05E4\u05D2\u05E9\u05D9\u05DD",
      hours: "30 \u05E9\u05E2\u05D5\u05EA",
      description: "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05D5\u05DB\u05DF, \u05D3\u05E4\u05D9 \u05E0\u05D7\u05D9\u05EA\u05D4, \u05DE\u05E6\u05D2\u05D5\u05EA, \u05D3\u05E9\u05D1\u05D5\u05E8\u05D3\u05D9\u05DD \u05D5\u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD - \u05D4\u05DB\u05DC \u05D1\u05E2\u05E6\u05DE\u05DB\u05DD \u05E2\u05DD AI.",
      features: [
        "\u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05D5\u05DB\u05DF \u05E9\u05D9\u05D5\u05D5\u05E7\u05D9",
        "\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E2\u05DD Midjourney",
        "\u05D1\u05E0\u05D9\u05D9\u05EA \u05D3\u05E4\u05D9 \u05E0\u05D7\u05D9\u05EA\u05D4",
        "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05D1\u05E1\u05D9\u05E1\u05D9\u05D5\u05EA",
        "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D4\u05E9\u05EA\u05EA\u05E4\u05D5\u05EA"
      ],
      neonColor: "magenta",
      featured: false,
      level: "INTERMEDIATE",
      href: "/academy/ai-ready"
    }
  ];
  const benefits = [
    { text: "2-3 \u05DE\u05E8\u05E6\u05D9\u05DD \u05D1\u05DB\u05DC \u05DE\u05E4\u05D2\u05E9" },
    { text: "\u05DC\u05D9\u05D5\u05D5\u05D9 \u05D0\u05E7\u05D3\u05DE\u05D9 \u05E9\u05DC \u05D0\u05D5\u05E0\u05D9\u05D1\u05E8\u05E1\u05D9\u05D8\u05EA \u05D7\u05D9\u05E4\u05D4" },
    { text: "\u05EA\u05D9\u05E7 \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D0\u05DE\u05D9\u05EA\u05D9" },
    { text: "\u05E7\u05D4\u05D9\u05DC\u05EA \u05D1\u05D5\u05D2\u05E8\u05D9\u05DD \u05E4\u05E2\u05D9\u05DC\u05D4" }
  ];
  const getNeonClasses = (color, featured) => {
    const colors = {
      green: {
        border: featured ? "border-[#a855f7]" : "border-[#a855f7]/30",
        text: "text-[#a855f7]",
        bg: "bg-[#a855f7]",
        glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
        glowHover: "hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
      },
      cyan: {
        border: featured ? "border-[#c084fc]" : "border-[#c084fc]/30",
        text: "text-[#c084fc]",
        bg: "bg-[#c084fc]",
        glow: "shadow-[0_0_20px_rgba(192,132,252,0.3)]",
        glowHover: "hover:shadow-[0_0_30px_rgba(192,132,252,0.5)]"
      },
      magenta: {
        border: featured ? "border-[#e879f9]" : "border-[#e879f9]/30",
        text: "text-[#e879f9]",
        bg: "bg-[#e879f9]",
        glow: "shadow-[0_0_20px_rgba(232,121,249,0.3)]",
        glowHover: "hover:shadow-[0_0_30px_rgba(232,121,249,0.5)]"
      }
    };
    return colors[color] || colors.green;
  };
  return renderTemplate`${maybeRenderHead()}<section id="academy" class="py-24 lg:py-32 relative overflow-hidden bg-[#0a0a0f]" data-section data-astro-cid-zmkvw3ma> <!-- Background effects --> <div class="absolute inset-0" data-astro-cid-zmkvw3ma> <!-- Gradient mesh --> <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#a855f7]/5 rounded-full blur-[200px]" data-astro-cid-zmkvw3ma></div> <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#e879f9]/5 rounded-full blur-[200px]" data-astro-cid-zmkvw3ma></div> </div> <!-- Circuit grid --> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-zmkvw3ma></div> <div class="container relative z-10" data-astro-cid-zmkvw3ma> <!-- Section Header - Terminal Style --> <div class="text-center mb-16 lg:mb-20" data-astro-cid-zmkvw3ma> <!-- Terminal badge --> <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#a855f7]/30 mb-8" data-animate="fade-up" data-astro-cid-zmkvw3ma> <span class="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" data-astro-cid-zmkvw3ma></span> <span class="font-mono text-sm font-semibold text-[#a855f7] uppercase tracking-[0.15em]" data-astro-cid-zmkvw3ma>ACADEMY_PROTOCOLS</span> </div> <h2 class="text-4xl md:text-5xl lg:text-7xl font-black mb-6" data-animate="blur-in" data-delay="0.1" data-astro-cid-zmkvw3ma> <span class="text-[#f5f5fa]" data-astro-cid-zmkvw3ma>הכשרות שמשנות</span> <span class="block mt-2 gradient-text-glow" data-astro-cid-zmkvw3ma>קריירות</span> </h2> <p class="text-xl text-[#b0b0c0] max-w-3xl mx-auto font-mono" data-animate="fade-up" data-delay="0.2" data-astro-cid-zmkvw3ma> <span class="text-[#a855f7]" data-astro-cid-zmkvw3ma>></span> לא קורס מוקלט. הכשרה שבה
<span class="text-[#f5f5fa]" data-astro-cid-zmkvw3ma> מחזיקים לך את היד עד הסוף.</span> </p> </div> <!-- Benefits Bar - HUD Style --> <div class="flex flex-wrap justify-center gap-4 mb-16" data-animate="stagger" data-astro-cid-zmkvw3ma> ${benefits.map((benefit, i) => renderTemplate`<div class="flex items-center gap-3 px-5 py-3 bg-[#12121a] border border-[#2a2a3a] hover:border-[#a855f7]/50 transition-all duration-300 rounded-full" data-astro-cid-zmkvw3ma> <svg class="w-4 h-4 text-[#a855f7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-zmkvw3ma> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zmkvw3ma></path> </svg> <span class="text-sm text-[#d0d0e0] font-mono" data-astro-cid-zmkvw3ma>${benefit.text}</span> </div>`)} </div> <!-- Courses Grid --> <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16" data-animate="stagger" data-astro-cid-zmkvw3ma> ${courses.map((course, index) => {
    const neon = getNeonClasses(course.neonColor, course.featured);
    return renderTemplate`<div${addAttribute(`course-card group relative ${course.featured ? "lg:-mt-6 lg:mb-6" : ""}`, "class")}${addAttribute(`animation-delay: ${index * 0.15}s`, "style")} data-astro-cid-zmkvw3ma>  <div${addAttribute(`relative h-full bg-[#12121a] border ${neon.border} ${course.featured ? neon.glow : ""} ${neon.glowHover} transition-all duration-300 rounded-2xl overflow-hidden`, "class")} data-astro-cid-zmkvw3ma>  <div class="flex items-center justify-between px-6 py-3 border-b border-[#2a2a3a] bg-[#0a0a0f]/50 rounded-t-2xl" data-astro-cid-zmkvw3ma> <div class="flex items-center gap-2" data-astro-cid-zmkvw3ma> <span class="w-2.5 h-2.5 rounded-full bg-[#ff3366]" data-astro-cid-zmkvw3ma></span> <span class="w-2.5 h-2.5 rounded-full bg-[#ffff00]" data-astro-cid-zmkvw3ma></span> <span class="w-2.5 h-2.5 rounded-full bg-[#a855f7]" data-astro-cid-zmkvw3ma></span> </div> <span class="font-mono text-xs font-medium text-[#b0b0c0] tracking-wider" data-astro-cid-zmkvw3ma>${course.id}</span> </div>  ${course.featured && renderTemplate`<div class="absolute -top-3 left-1/2 -translate-x-1/2 z-20" data-astro-cid-zmkvw3ma> <div${addAttribute(`px-4 py-1.5 ${neon.bg} text-[#0a0a0f] text-xs font-mono font-bold uppercase tracking-wider rounded-full`, "class")} data-astro-cid-zmkvw3ma>
RECOMMENDED
</div> </div>`}  <div class="p-6 lg:p-8" data-astro-cid-zmkvw3ma>  <div class="mb-6" data-astro-cid-zmkvw3ma> <div class="flex items-center justify-between mb-3" data-astro-cid-zmkvw3ma> <span${addAttribute(`px-3 py-1.5 text-[11px] md:text-xs font-medium font-mono uppercase tracking-wider border ${neon.border} ${neon.text} rounded-full`, "class")} data-astro-cid-zmkvw3ma> ${course.level} </span> <span class="font-mono text-sm text-[#a0a0b8]" data-astro-cid-zmkvw3ma>${course.tagline}</span> </div> <h3${addAttribute(`text-3xl lg:text-4xl font-black ${neon.text}`, "class")}${addAttribute(`text-shadow: 0 0 20px ${course.neonColor === "green" ? "rgba(168,85,247,0.3)" : course.neonColor === "cyan" ? "rgba(0,212,255,0.3)" : "rgba(255,0,255,0.3)"};`, "style")} data-astro-cid-zmkvw3ma> ${course.name} </h3> </div>  <p${addAttribute(`text-base font-semibold ${neon.text} mb-4 font-mono`, "class")} data-astro-cid-zmkvw3ma>
> ${course.outcome} </p>  <p class="text-[#d0d0e0] leading-relaxed mb-6 text-sm" data-astro-cid-zmkvw3ma> ${course.description} </p>  <div class="flex items-center gap-6 mb-6 pb-6 border-b border-[#2a2a3a]" data-astro-cid-zmkvw3ma> <div class="flex items-center gap-2" data-astro-cid-zmkvw3ma> <svg class="w-5 h-5 text-[#a0a0b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zmkvw3ma> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-zmkvw3ma></path> </svg> <span class="text-sm text-[#d0d0e0] font-mono" data-astro-cid-zmkvw3ma>${course.duration}</span> </div> <div class="flex items-center gap-2" data-astro-cid-zmkvw3ma> <svg class="w-5 h-5 text-[#a0a0b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-zmkvw3ma> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-zmkvw3ma></path> </svg> <span class="text-sm text-[#d0d0e0] font-mono" data-astro-cid-zmkvw3ma>${course.hours}</span> </div> </div>  <ul class="space-y-3 mb-8" data-astro-cid-zmkvw3ma> ${course.features.map((feature) => renderTemplate`<li class="flex items-start gap-3" data-astro-cid-zmkvw3ma> <span${addAttribute(`${neon.text} font-mono text-sm`, "class")} data-astro-cid-zmkvw3ma>[+]</span> <span class="text-sm text-[#d0d0e0]" data-astro-cid-zmkvw3ma>${feature}</span> </li>`)} </ul>  <a${addAttribute(course.href, "href")}${addAttribute(`block w-full text-center py-4 font-mono text-sm uppercase tracking-wider transition-all duration-300 rounded-full ${course.featured ? `${neon.bg} text-[#0a0a0f] font-bold ${neon.glow} hover:brightness-110` : `border ${neon.border} ${neon.text} hover:${neon.bg} hover:text-[#0a0a0f]`}`, "class")} data-astro-cid-zmkvw3ma> ${course.featured ? "\u05D4\u05EA\u05D7\u05DC \u05E2\u05DB\u05E9\u05D9\u05D5" : "\u05DC\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"} </a> </div> </div> </div>`;
  })} </div> <!-- Bottom CTA Section - Terminal Style --> <div class="relative bg-[#12121a] border border-[#2a2a3a] overflow-hidden rounded-2xl" data-animate="terminal" data-astro-cid-zmkvw3ma> <!-- Glow effects --> <div class="absolute top-0 right-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[150px]" data-astro-cid-zmkvw3ma></div> <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-[#e879f9]/10 rounded-full blur-[150px]" data-astro-cid-zmkvw3ma></div> <!-- Terminal header --> <div class="flex items-center justify-between px-6 py-3 border-b border-[#2a2a3a] bg-[#0a0a0f]/50 rounded-t-2xl" data-astro-cid-zmkvw3ma> <div class="flex items-center gap-2" data-astro-cid-zmkvw3ma> <span class="w-2.5 h-2.5 rounded-full bg-[#ff3366]" data-astro-cid-zmkvw3ma></span> <span class="w-2.5 h-2.5 rounded-full bg-[#ffff00]" data-astro-cid-zmkvw3ma></span> <span class="w-2.5 h-2.5 rounded-full bg-[#a855f7]" data-astro-cid-zmkvw3ma></span> </div> <span class="font-mono text-xs font-medium text-[#b0b0c0] tracking-wider" data-astro-cid-zmkvw3ma>CONSULTATION_MODULE</span> </div> <div class="relative z-10 p-8 lg:p-12" data-astro-cid-zmkvw3ma> <div class="grid md:grid-cols-2 gap-8 items-center" data-astro-cid-zmkvw3ma> <div data-astro-cid-zmkvw3ma> <h3 class="text-2xl lg:text-3xl font-bold text-[#f5f5fa] mb-4" data-astro-cid-zmkvw3ma> <span class="font-mono text-[#a855f7]" data-astro-cid-zmkvw3ma>></span> לא בטוחים איזה מסלול
<span class="gradient-text-glow" data-astro-cid-zmkvw3ma> מתאים לכם?</span> </h3> <p class="text-[#b0b0c0] mb-6 font-mono text-sm" data-astro-cid-zmkvw3ma>
// בשיחה קצרה של 15 דקות נבין את הרקע שלכם, את המטרות, ונתאים לכם את המסלול המושלם.
</p> <div class="flex flex-wrap gap-4" data-astro-cid-zmkvw3ma> <a href="#contact" class="inline-flex items-center gap-3 px-8 py-4 bg-[#a855f7] text-[#0a0a0f] font-mono font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] hover:brightness-110 transition-all duration-300 rounded-full" data-astro-cid-zmkvw3ma> <span class="w-2 h-2 rounded-full bg-[#0a0a0f] animate-pulse" data-astro-cid-zmkvw3ma></span>
שיחת ייעוץ בחינם
</a> <a href="https://wa.me/972539466408" class="inline-flex items-center gap-3 px-8 py-4 border border-[#a855f7]/30 text-[#a855f7] font-mono text-sm uppercase tracking-wider hover:bg-[#a855f7]/10 transition-all duration-300 rounded-full" data-astro-cid-zmkvw3ma> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-zmkvw3ma> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-zmkvw3ma></path> </svg>
WhatsApp
</a> </div> </div> <div class="hidden md:flex justify-center" data-astro-cid-zmkvw3ma> <div class="relative" data-astro-cid-zmkvw3ma> <div class="absolute inset-0 bg-gradient-to-br from-[#a855f7]/20 to-[#e879f9]/10 blur-2xl" data-astro-cid-zmkvw3ma></div> <div class="relative bg-[#0a0a0f] border border-[#2a2a3a] p-6 rounded-2xl" data-astro-cid-zmkvw3ma> <div class="grid grid-cols-2 gap-6" data-astro-cid-zmkvw3ma> ${[
    { num: "500+", label: "\u05D1\u05D5\u05D2\u05E8\u05D9\u05DD" },
    { num: "98%", label: "\u05E9\u05D1\u05D9\u05E2\u05D5\u05EA \u05E8\u05E6\u05D5\u05DF" },
    { num: "30", label: "\u05D9\u05DE\u05D9\u05DD \u05DC-ROI" },
    { num: "4.9", label: "\u05D3\u05D9\u05E8\u05D5\u05D2 \u05DE\u05DE\u05D5\u05E6\u05E2" }
  ].map((stat) => renderTemplate`<div class="text-center p-4 border border-[#2a2a3a] rounded-xl" data-astro-cid-zmkvw3ma> <div class="text-2xl font-black text-[#a855f7] font-mono" style="text-shadow: 0 0 20px rgba(168,85,247,0.5);" data-astro-cid-zmkvw3ma> ${stat.num} </div> <div class="text-[11px] md:text-xs font-medium text-[#b0b0c0] mt-1 font-mono uppercase tracking-wider" data-astro-cid-zmkvw3ma>${stat.label}</div> </div>`)} </div> </div> </div> </div> </div> </div> </div> </div> </section> `;
}, "C:/sites/maderfuker/focusai-website/src/components/AcademyPreview.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const videoTestimonials = [
    {
      name: "\u05DE\u05D8\u05E8",
      role: "\u05D1\u05D5\u05D2\u05E8\u05EA",
      video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1768483285/\u05DE\u05D8\u05E8_\u05E4\u05D5\u05E7\u05D5\u05E1_AI_pvninr.mp4",
      id: "VID_001"
    },
    {
      name: "\u05D7\u05D2\u05D9\u05EA",
      role: "\u05DE\u05E0\u05D4\u05DC\u05EA, \u05D0\u05D5\u05E0\u05D9\u05D1\u05E8\u05E1\u05D9\u05D8\u05EA \u05D7\u05D9\u05E4\u05D4",
      video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1768547859/IMG_0753_iah7ft.mov",
      id: "VID_002"
    },
    {
      name: "\u05E9\u05E0\u05D9\u05E8",
      role: "\u05D1\u05D5\u05D2\u05E8",
      video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1768483262/\u05E9\u05E0\u05D9\u05E8_\u05E4\u05D5\u05E7\u05D5\u05E1_AI_mxbzrj.mp4",
      id: "VID_003"
    },
    {
      name: "\u05D6\u05D5\u05D4\u05E8 \u05D9\u05E2\u05E7\u05D1",
      role: "\u05E1\u05D8\u05D5\u05D3\u05E0\u05D8",
      video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1770301916/\u05E4\u05D5\u05E7\u05D5\u05E1_\u05D6\u05D5\u05D4\u05E8_\u05D9\u05E2\u05E7\u05D1_s4jds5.mp4",
      id: "VID_004"
    },
    {
      name: "\u05D1\u05E0\u05D9",
      role: "\u05D1\u05D5\u05D2\u05E8",
      video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1767274566/IMG_3467_pg6tos.mp4",
      id: "VID_005"
    },
    {
      name: "\u05D0\u05E8\u05D8\u05D9\u05D5\u05DD",
      role: "\u05D1\u05D5\u05D2\u05E8",
      video: "https://res.cloudinary.com/dfudxxzlj/video/upload/v1768483285/\u05D0\u05E8\u05D8\u05D9\u05D5\u05DD_\u05E4\u05D5\u05E7\u05D5\u05E1_AI_pzkt2y.mp4",
      id: "VID_006"
    }
  ];
  const screenshots = [
    "https://res.cloudinary.com/dfudxxzlj/image/upload/v1769108296/WhatsApp_Image_2026-01-22_at_19.57.33_uxlvn0.jpg",
    "https://res.cloudinary.com/dfudxxzlj/image/upload/v1769108296/WhatsApp_Image_2026-01-22_at_19.57.14_t4lh0q.jpg",
    "https://res.cloudinary.com/dfudxxzlj/image/upload/v1769108295/WhatsApp_Image_2026-01-22_at_19.55.36_qc8mqk.jpg",
    "https://res.cloudinary.com/dfudxxzlj/image/upload/v1769108295/WhatsApp_Image_2026-01-22_at_19.54.38_zgosjo.jpg",
    "https://res.cloudinary.com/dfudxxzlj/image/upload/v1769108295/WhatsApp_Image_2026-01-22_at_19.54.38_1_z35b4a.jpg",
    "https://res.cloudinary.com/dfudxxzlj/image/upload/v1769108295/WhatsApp_Image_2026-01-22_at_19.53.28_jjdzdw.jpg"
  ];
  const stats = [
    { value: "98%", label: "SATISFACTION", code: "SAT_RATE" },
    { value: "4.9", label: "AVG_RATING", code: "SCORE" },
    { value: "500+", label: "TESTIMONIALS", code: "COUNT" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="testimonials" class="py-24 lg:py-32 relative overflow-hidden bg-[#0a0a0f]" data-section data-astro-cid-aadlzisc> <!-- Background effects --> <div class="absolute inset-0 section-bg" data-astro-cid-aadlzisc> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#c084fc]/5 rounded-full blur-[200px]" data-astro-cid-aadlzisc></div> </div> <!-- Circuit grid --> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(192, 132, 252, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 132, 252, 0.5) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-aadlzisc></div> <div class="container relative z-10" data-astro-cid-aadlzisc> <!-- Section Header - Terminal Style --> <div class="text-center mb-16" data-astro-cid-aadlzisc> <!-- Terminal badge --> <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#c084fc]/30 mb-8" data-animate="fade-up" data-astro-cid-aadlzisc> <span class="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" data-astro-cid-aadlzisc></span> <span class="font-mono text-sm font-semibold text-[#c084fc] uppercase tracking-[0.15em]" data-astro-cid-aadlzisc>FEEDBACK_LOG</span> </div> <h2 class="text-4xl md:text-5xl lg:text-7xl font-black mb-6" data-animate="blur-in" data-astro-cid-aadlzisc> <span class="text-[#f5f5fa]" data-astro-cid-aadlzisc>פידבק</span> <span class="gradient-text-cyan" data-astro-cid-aadlzisc> אמיתי</span> </h2> <p class="text-xl text-[#b0b0c0] max-w-2xl mx-auto font-mono" data-animate="fade-up" data-delay="0.2" data-astro-cid-aadlzisc> <span class="text-[#c084fc]" data-astro-cid-aadlzisc>></span> לא מילים שלנו.
<span class="text-[#f5f5fa]" data-astro-cid-aadlzisc> הודעות אמיתיות</span>
מלקוחות ובוגרים.
</p> </div> <!-- Stats Bar - HUD Style --> <div class="flex flex-wrap justify-center gap-6 lg:gap-12 mb-16" data-animate="stagger" data-astro-cid-aadlzisc> ${stats.map((stat, i) => renderTemplate`<div class="relative px-8 py-4 bg-[#12121a] border border-[#2a2a3a] hover:border-[#c084fc]/50 transition-all duration-300 rounded-xl" data-astro-cid-aadlzisc> <div class="text-center" data-astro-cid-aadlzisc> <div class="text-3xl font-black font-mono text-[#c084fc]" style="text-shadow: 0 0 20px rgba(192, 132, 252, 0.5);" data-astro-cid-aadlzisc> ${stat.value} </div> <div class="text-sm font-medium text-[#b0b0c0] font-mono uppercase tracking-wider mt-1" data-astro-cid-aadlzisc> <span class="text-[#c084fc]/50" data-astro-cid-aadlzisc>[</span>${stat.label}<span class="text-[#c084fc]/50" data-astro-cid-aadlzisc>]</span> </div> </div> </div>`)} </div> <!-- Video Testimonials Grid - Featured --> <div class="mb-20" data-astro-cid-aadlzisc> <div class="flex items-center gap-4 mb-8" data-animate="fade-up" data-astro-cid-aadlzisc> <div class="h-px flex-1 bg-gradient-to-r from-transparent via-[#c084fc]/50 to-transparent" data-astro-cid-aadlzisc></div> <span class="font-mono text-sm font-semibold text-[#c084fc] uppercase tracking-[0.15em]" data-astro-cid-aadlzisc>VIDEO_LOGS</span> <div class="h-px flex-1 bg-gradient-to-l from-transparent via-[#c084fc]/50 to-transparent" data-astro-cid-aadlzisc></div> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-animate="stagger" data-astro-cid-aadlzisc> ${videoTestimonials.map((testimonial, index) => renderTemplate`<div class="video-card group relative"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-aadlzisc> <div class="relative bg-[#12121a] border border-[#2a2a3a] overflow-hidden hover:border-[#c084fc]/50 transition-all duration-300 rounded-xl" data-astro-cid-aadlzisc>  <div class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-2.5 py-2 bg-[#0a0a0f]/90 border-b border-[#2a2a3a] rounded-t-xl" data-astro-cid-aadlzisc> <div class="flex items-center gap-1.5" data-astro-cid-aadlzisc> <span class="w-1.5 h-1.5 rounded-full bg-[#ff3366]" data-astro-cid-aadlzisc></span> <span class="w-1.5 h-1.5 rounded-full bg-[#ffff00]" data-astro-cid-aadlzisc></span> <span class="w-1.5 h-1.5 rounded-full bg-[#a855f7]" data-astro-cid-aadlzisc></span> </div> <span class="font-mono text-[10px] md:text-[11px] text-[#c084fc] tracking-wider font-medium" data-astro-cid-aadlzisc>${testimonial.id}</span> </div>  <div class="pt-7 md:pt-8" data-astro-cid-aadlzisc> <video class="w-full aspect-[9/16] object-cover max-h-[320px] md:max-h-[360px]" controls preload="metadata"${addAttribute(`${testimonial.video.replace(/\.[^/.]+$/, ".jpg")}`, "poster")} data-astro-cid-aadlzisc> <source${addAttribute(testimonial.video, "src")} type="video/mp4" data-astro-cid-aadlzisc> </video> </div>  <div class="p-2.5 md:p-3 bg-[#0a0a0f]/80 border-t border-[#2a2a3a]" data-astro-cid-aadlzisc> <div class="flex items-center gap-2" data-astro-cid-aadlzisc> <div class="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" data-astro-cid-aadlzisc></div> <div data-astro-cid-aadlzisc> <div class="font-mono text-sm text-[#f5f5fa] font-medium" data-astro-cid-aadlzisc>${testimonial.name}</div> <div class="font-mono text-[11px] md:text-xs text-[#a0a0b8] uppercase tracking-wider" data-astro-cid-aadlzisc>${testimonial.role}</div> </div> </div> </div>  <div class="absolute inset-0 bg-gradient-to-t from-[#c084fc]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" data-astro-cid-aadlzisc></div> </div> </div>`)} </div> </div> <!-- Screenshots Grid - Terminal Cards --> <div class="mb-8" data-astro-cid-aadlzisc> <div class="flex items-center gap-4 mb-8" data-astro-cid-aadlzisc> <div class="h-px flex-1 bg-gradient-to-r from-transparent via-[#c084fc]/50 to-transparent" data-astro-cid-aadlzisc></div> <span class="font-mono text-sm font-semibold text-[#c084fc] uppercase tracking-[0.15em]" data-astro-cid-aadlzisc>MESSAGE_LOGS</span> <div class="h-px flex-1 bg-gradient-to-l from-transparent via-[#c084fc]/50 to-transparent" data-astro-cid-aadlzisc></div> </div> </div> <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16" data-astro-cid-aadlzisc> ${screenshots.map((src, index) => renderTemplate`<div class="testimonial-card group relative"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-aadlzisc>  <div class="relative bg-[#12121a] border border-[#2a2a3a] overflow-hidden hover:border-[#c084fc]/50 transition-all duration-300 rounded-xl" data-astro-cid-aadlzisc>  <div class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2.5 bg-[#0a0a0f]/90 border-b border-[#2a2a3a] rounded-t-xl" data-astro-cid-aadlzisc> <div class="flex items-center gap-1.5" data-astro-cid-aadlzisc> <span class="w-2 h-2 rounded-full bg-[#ff3366]" data-astro-cid-aadlzisc></span> <span class="w-2 h-2 rounded-full bg-[#ffff00]" data-astro-cid-aadlzisc></span> <span class="w-2 h-2 rounded-full bg-[#a855f7]" data-astro-cid-aadlzisc></span> </div> <span class="font-mono text-[11px] md:text-xs text-[#c084fc] tracking-wider font-medium" data-astro-cid-aadlzisc>MSG_${String(index + 1).padStart(3, "0")}</span> </div>  <div class="pt-8" data-astro-cid-aadlzisc> <img${addAttribute(src, "src")}${addAttribute(`\u05E4\u05D9\u05D3\u05D1\u05E7 \u05DE\u05DC\u05E7\u05D5\u05D7 ${index + 1}`, "alt")} class="w-full h-auto transition-transform duration-500 group-hover:scale-105" loading="lazy" data-astro-cid-aadlzisc> </div>  <div class="absolute inset-0 bg-gradient-to-t from-[#c084fc]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" data-astro-cid-aadlzisc></div>  <div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden" data-astro-cid-aadlzisc> <div class="scan-line-card absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#c084fc] to-transparent" data-astro-cid-aadlzisc></div> </div> </div> </div>`)} </div> <!-- Bottom CTA - Terminal Style --> <div class="text-center" data-astro-cid-aadlzisc> <div class="inline-block bg-[#12121a] border border-[#2a2a3a] overflow-hidden rounded-2xl" data-astro-cid-aadlzisc>  <div class="flex items-center justify-between px-6 py-2 bg-[#0a0a0f] border-b border-[#2a2a3a] rounded-t-2xl" data-astro-cid-aadlzisc> <div class="flex items-center gap-1.5" data-astro-cid-aadlzisc> <span class="w-2 h-2 rounded-full bg-[#ff3366]" data-astro-cid-aadlzisc></span> <span class="w-2 h-2 rounded-full bg-[#ffff00]" data-astro-cid-aadlzisc></span> <span class="w-2 h-2 rounded-full bg-[#a855f7]" data-astro-cid-aadlzisc></span> </div> <span class="font-mono text-sm font-medium text-[#b0b0c0] tracking-wider" data-astro-cid-aadlzisc>JOIN_REQUEST</span> </div> <div class="p-8" data-astro-cid-aadlzisc> <p class="text-lg text-[#d0d0e0] mb-6 font-mono" data-astro-cid-aadlzisc> <span class="text-[#c084fc]" data-astro-cid-aadlzisc>></span> רוצים להצטרף לרשימת הלקוחות המרוצים?
</p> <a href="#contact" class="group inline-flex items-center gap-3 px-10 py-4 bg-[#c084fc] text-[#0a0a0f] font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(192,132,252,0.5)] hover:shadow-[0_0_40px_rgba(192,132,252,0.7)] hover:brightness-110 transition-all duration-300 rounded-full" data-astro-cid-aadlzisc> <span data-astro-cid-aadlzisc>בואו נדבר</span> <svg class="w-5 h-5 rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-aadlzisc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-aadlzisc></path> </svg> </a> <div class="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-[#a0a0b8] font-mono" data-astro-cid-aadlzisc> <span class="flex items-center gap-2" data-astro-cid-aadlzisc> <span class="w-2 h-2 rounded-full bg-[#a855f7]" data-astro-cid-aadlzisc></span>
ללא התחייבות
</span> <span class="flex items-center gap-2" data-astro-cid-aadlzisc> <span class="w-2 h-2 rounded-full bg-[#a855f7]" data-astro-cid-aadlzisc></span>
תגובה תוך 24 שעות
</span> </div> </div> </div> </div> </div> </section> `;
}, "C:/sites/maderfuker/focusai-website/src/components/Testimonials.astro", void 0);

const $$TeamFounders = createComponent(($$result, $$props, $$slots) => {
  const displayFounders = founders.map((f, i) => ({
    ...f,
    displayId: `USR_00${i + 1}`,
    displayTitle: f.title.toUpperCase().replace(/ /g, "_")
  }));
  const values = companyValues;
  return renderTemplate`${maybeRenderHead()}<section id="team" class="py-24 lg:py-32 relative overflow-hidden bg-[#0a0a0f]" data-section data-astro-cid-rk2pysox> <!-- Background effects --> <div class="absolute inset-0 section-bg" data-astro-cid-rk2pysox> <div class="absolute top-0 right-0 w-96 h-96 bg-[#c084fc]/5 rounded-full blur-[200px]" data-astro-cid-rk2pysox></div> <div class="absolute bottom-0 left-0 w-80 h-80 bg-[#a855f7]/5 rounded-full blur-[200px]" data-astro-cid-rk2pysox></div> </div> <!-- Circuit grid --> <div class="absolute inset-0 opacity-[0.03]" style="background-image: linear-gradient(rgba(192, 132, 252, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 132, 252, 0.5) 1px, transparent 1px); background-size: 50px 50px;" data-astro-cid-rk2pysox></div> <div class="container relative z-10" data-astro-cid-rk2pysox> <!-- Section Header --> <div class="text-center mb-16 lg:mb-20" data-astro-cid-rk2pysox> <!-- Terminal badge --> <div class="inline-flex items-center gap-3 px-4 py-2 bg-[#12121a] border border-[#c084fc]/30 mb-8" data-animate="fade-up" data-astro-cid-rk2pysox> <span class="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse" data-astro-cid-rk2pysox></span> <span class="font-mono text-sm font-semibold text-[#c084fc] uppercase tracking-[0.15em]" data-astro-cid-rk2pysox>TEAM_PROFILES</span> </div> <h2 class="text-4xl md:text-5xl lg:text-7xl font-black mb-6" data-animate="glitch" data-astro-cid-rk2pysox> <span class="text-[#f5f5fa]" data-astro-cid-rk2pysox>לומדים ממי ש</span> <span class="gradient-text-magenta" data-astro-cid-rk2pysox>עושים</span> </h2> <p class="text-xl text-[#b0b0c0] max-w-3xl mx-auto font-mono" data-animate="fade-up" data-delay="0.2" data-astro-cid-rk2pysox> <span class="text-[#c084fc]" data-astro-cid-rk2pysox>></span> לא תיאורטיקנים.
<span class="text-[#f5f5fa]" data-astro-cid-rk2pysox> הידע מגיע מפרויקטים אמיתיים.</span> </p> </div> <!-- Founders Cards --> <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20" data-astro-cid-rk2pysox> ${displayFounders.map((founder, index) => renderTemplate`<div class="founder-card group relative" data-animate="terminal"${addAttribute(`${index * 0.2}`, "data-delay")} data-astro-cid-rk2pysox>  <div class="relative bg-[#12121a] border border-[#2a2a3a] hover:border-[#c084fc]/50 transition-all duration-500 overflow-hidden rounded-2xl" data-astro-cid-rk2pysox>  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style="box-shadow: inset 0 0 60px rgba(192, 132, 252, 0.1);" data-astro-cid-rk2pysox></div>  <div class="flex items-center justify-between px-6 py-3 border-b border-[#2a2a3a] bg-[#0a0a0f]/50 rounded-t-2xl" data-astro-cid-rk2pysox> <div class="flex items-center gap-2" data-astro-cid-rk2pysox> <span class="w-2.5 h-2.5 rounded-full bg-[#ff3366]" data-astro-cid-rk2pysox></span> <span class="w-2.5 h-2.5 rounded-full bg-[#ffff00]" data-astro-cid-rk2pysox></span> <span class="w-2.5 h-2.5 rounded-full bg-[#a855f7]" data-astro-cid-rk2pysox></span> </div> <span class="font-mono text-sm font-medium text-[#b0b0c0] tracking-wider" data-astro-cid-rk2pysox>${founder.displayId}</span> </div>  <div class="p-8" data-astro-cid-rk2pysox>  <div class="flex items-start gap-6 mb-6" data-astro-cid-rk2pysox>  <div class="relative flex-shrink-0" data-astro-cid-rk2pysox>  <div class="absolute -inset-2 rounded-xl border border-[#c084fc]/30 group-hover:border-[#c084fc]/60 transition-colors" data-astro-cid-rk2pysox></div> <div class="relative w-24 h-24 lg:w-28 lg:h-28 overflow-hidden rounded-xl" data-astro-cid-rk2pysox> <img${addAttribute(founder.image, "src")}${addAttribute(founder.name, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-astro-cid-rk2pysox>  <div class="absolute inset-0 bg-gradient-to-t from-[#c084fc]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-rk2pysox></div> </div>  <div class="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-2.5 py-1 bg-[#0a0a0f] border border-[#a855f7]/50 rounded-md" data-astro-cid-rk2pysox> <span class="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" data-astro-cid-rk2pysox></span> <span class="font-mono text-[10px] md:text-[11px] text-[#a855f7] font-medium" data-astro-cid-rk2pysox>${founder.status || "ONLINE"}</span> </div> </div>  <div class="flex-1 min-w-0" data-astro-cid-rk2pysox> <h3 class="text-2xl lg:text-3xl font-bold text-[#f5f5fa] mb-2 group-hover:text-[#c084fc] transition-colors" data-astro-cid-rk2pysox> ${founder.name} </h3> <p class="font-mono text-sm text-[#c084fc] uppercase tracking-wider mb-2" data-astro-cid-rk2pysox> ${founder.title} </p> <p class="text-[#a0a0b8] text-base font-mono" data-astro-cid-rk2pysox>${founder.role}</p> </div> </div>  <p class="text-[#d0d0e0] leading-relaxed mb-6 text-base" data-astro-cid-rk2pysox> ${founder.bio} </p>  <div class="flex flex-wrap gap-2 mb-6" data-astro-cid-rk2pysox> ${founder.credentials.map((cred) => renderTemplate`<span class="px-3 py-1 bg-[#0a0a0f] border border-[#c084fc]/30 text-[#c084fc] text-sm font-medium font-mono uppercase tracking-wider group-hover:border-[#c084fc]/60 transition-colors" data-astro-cid-rk2pysox> ${cred} </span>`)} </div>  ${founder.social && founder.social.linkedin && renderTemplate`<a${addAttribute(founder.social.linkedin, "href")} class="inline-flex items-center gap-2 px-4 py-2 border border-[#2a2a3a] hover:border-[#0077B5] hover:text-[#0077B5] text-[#b0b0c0] transition-all font-mono text-xs uppercase tracking-wider" aria-label="LinkedIn" data-astro-cid-rk2pysox> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-rk2pysox> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-rk2pysox></path> </svg>
CONNECT
</a>`} </div> </div> </div>`)} </div> <!-- Values Grid --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16" data-animate="stagger" data-astro-cid-rk2pysox> ${values.map((value, i) => renderTemplate`<div class="value-card group text-center p-6 bg-[#12121a] border border-[#2a2a3a] hover:border-[#a855f7]/50 transition-all duration-300 rounded-xl" data-astro-cid-rk2pysox>  <div class="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#a855f7]/10 border border-[#a855f7]/30 mb-4 rounded-full" data-astro-cid-rk2pysox> <span class="w-1.5 h-1.5 rounded-full bg-[#a855f7]" data-astro-cid-rk2pysox></span> <span class="font-mono text-[10px] md:text-[11px] text-[#a855f7] uppercase font-medium" data-astro-cid-rk2pysox>${value.code}</span> </div> <h4 class="font-bold text-lg text-[#f5f5fa] mb-2 group-hover:text-[#a855f7] transition-colors" data-astro-cid-rk2pysox>${value.title}</h4> <p class="text-sm text-[#a0a0b8] font-mono leading-relaxed" data-astro-cid-rk2pysox>${value.desc}</p> </div>`)} </div> <!-- Vision Statement --> <div class="max-w-4xl mx-auto" data-animate="scale-up" data-astro-cid-rk2pysox> <div class="relative bg-[#12121a] border border-[#2a2a3a] overflow-hidden rounded-2xl" data-astro-cid-rk2pysox>  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-[100px]" data-astro-cid-rk2pysox></div>  <div class="flex items-center justify-between px-6 py-3 border-b border-[#2a2a3a] bg-[#0a0a0f]/50 relative z-10 rounded-t-2xl" data-astro-cid-rk2pysox> <div class="flex items-center gap-2" data-astro-cid-rk2pysox> <span class="w-2.5 h-2.5 rounded-full bg-[#ff3366]" data-astro-cid-rk2pysox></span> <span class="w-2.5 h-2.5 rounded-full bg-[#ffff00]" data-astro-cid-rk2pysox></span> <span class="w-2.5 h-2.5 rounded-full bg-[#a855f7]" data-astro-cid-rk2pysox></span> </div> <span class="font-mono text-sm font-medium text-[#b0b0c0] tracking-wider" data-astro-cid-rk2pysox>MISSION_STATEMENT</span> </div>  <div class="absolute top-16 left-8 text-[#a855f7]/10 text-8xl font-serif" data-astro-cid-rk2pysox>"</div> <div class="absolute bottom-8 right-8 text-[#a855f7]/10 text-8xl font-serif rotate-180" data-astro-cid-rk2pysox>"</div> <div class="relative z-10 text-center p-10 lg:p-16" data-astro-cid-rk2pysox> <p class="text-2xl lg:text-4xl font-bold text-[#f5f5fa] leading-relaxed" data-astro-cid-rk2pysox>
מגשרים על הפער בין
<span class="gradient-text-glow" data-astro-cid-rk2pysox> אנשים לטכנולוגיה</span> </p> <div class="mt-6 flex items-center justify-center gap-4" data-astro-cid-rk2pysox> <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" data-astro-cid-rk2pysox></div> <span class="text-[#b0b0c0] text-sm font-mono uppercase tracking-wider" data-astro-cid-rk2pysox>Focus AI Mission</span> <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" data-astro-cid-rk2pysox></div> </div> </div> </div> </div> </div> </section> `;
}, "C:/sites/maderfuker/focusai-website/src/components/TeamFounders.astro", void 0);

const $$WhatsAppCommunity = createComponent(($$result, $$props, $$slots) => {
  const communityLink = "https://chat.whatsapp.com/HvcdO9wzJN7J8G4B632bZn?mode=gi_t";
  const imageUrl = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1770388356/0e214975-5aab-422d-a865-afb04e3179b7_pjtmso.png";
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gradient-to-b from-[#0a0a0f] to-[#0d0d12] relative overflow-hidden" data-section> <!-- Background glow --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#25D366]/10 rounded-full blur-[100px]"></div> <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12"> <!-- Image --> <div class="flex-shrink-0 w-full md:w-1/2" data-animate="scale-up"> <img${addAttribute(imageUrl, "src")} alt="הצטרפו לקהילת הוואטסאפ של Focus AI" class="w-full max-w-md mx-auto drop-shadow-2xl" loading="lazy"> </div> <!-- Content --> <div class="text-center md:text-right flex-1"> <!-- Badge --> <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/30 mb-6" data-animate="fade-up"> <svg class="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg> <span class="font-mono text-sm font-semibold text-[#25D366] uppercase tracking-wider">COMMUNITY</span> </div> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4" data-animate="fade-up" data-delay="0.1">
הצטרפו ל<span class="text-[#25D366]">קהילת AI</span> שלנו
</h2> <p class="text-[#d0d0e0] text-lg mb-6 max-w-md mx-auto md:mx-0" data-animate="fade-up" data-delay="0.2">
טיפים יומיים, עדכונים על כלים חדשים, שאלות ותשובות ונטוורקינג עם אנשי מקצוע בתחום
</p> <!-- Stats --> <div class="flex justify-center md:justify-start gap-6 mb-8" data-animate="stagger"> <div class="text-center"> <div class="text-2xl font-bold text-[#25D366]">850+</div> <div class="text-sm font-medium text-[#d0d0e0] font-mono">MEMBERS</div> </div> <div class="text-center"> <div class="text-2xl font-bold text-[#25D366]">FREE</div> <div class="text-sm font-medium text-[#d0d0e0] font-mono">ACCESS</div> </div> </div> <!-- CTA Button --> <a${addAttribute(communityLink, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] rounded-full" data-animate="neon-pulse" data-delay="0.3"> <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
הצטרפו עכשיו - חינם!
</a> </div> </div> </div> </section>`;
}, "C:/sites/maderfuker/focusai-website/src/components/WhatsAppCommunity.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Focus AI | \u05DE\u05D2\u05E9\u05E8\u05D9\u05DD \u05E2\u05DC \u05D4\u05E4\u05E2\u05E8 \u05D1\u05D9\u05DF \u05D0\u05E0\u05E9\u05D9\u05DD \u05DC\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4" }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/sites/maderfuker/focusai-website/src/components/HeroSection.tsx", "client:component-export": "default" })}  ${renderComponent($$result2, "ClientLogos", ClientLogos, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/sites/maderfuker/focusai-website/src/components/ClientLogos.tsx", "client:component-export": "default" })}  ${renderComponent($$result2, "StorySection", $$StorySection, {})}  ${renderComponent($$result2, "AcademyPreview", $$AcademyPreview, {})}  ${renderComponent($$result2, "ServicesPreview", $$ServicesPreview, {})}  ${renderComponent($$result2, "Testimonials", $$Testimonials, {})}  ${renderComponent($$result2, "WhatsAppCommunity", $$WhatsAppCommunity, {})}  ${renderComponent($$result2, "TeamFounders", $$TeamFounders, {})}  ${renderComponent($$result2, "CTAContact", $$CTAContact, {})}    `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "currentPath": "/" })}`, "scripts": ($$result2) => renderTemplate(_a || (_a = __template([`<script>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener('DOMContentLoaded', () => {

      // Generic fade up animations
      gsap.utils.toArray('[data-animate="fade-up"]').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Fade right animations
      gsap.utils.toArray('[data-animate="fade-right"]').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Fade left animations
      gsap.utils.toArray('[data-animate="fade-left"]').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Header hide/show on scroll
      let lastScroll = 0;
      const header = document.querySelector('header');

      if (header) {
        window.addEventListener('scroll', () => {
          const currentScroll = window.pageYOffset;

          if (currentScroll > 100) {
            if (currentScroll > lastScroll) {
              header.style.transform = 'translateY(-100%)';
            } else {
              header.style.transform = 'translateY(0)';
            }
          }

          lastScroll = currentScroll;
        });
      }
    });
  <\/script>`]))) })}`;
}, "C:/sites/maderfuker/focusai-website/src/pages/index.astro", void 0);

const $$file = "C:/sites/maderfuker/focusai-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
