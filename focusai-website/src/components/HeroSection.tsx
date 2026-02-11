"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Brand assets
const chavobot = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1770379453/6962a37d-21ba-4e69-9946-59e37d731ed3_qjwm7h.png";
const fingerprint = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1765571815/FOCUS_LOGO-06_2_grkja9.png";
const n8nBadge = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1770414664/f4b939e2-bcbe-4c98-adff-db93933b12e3_bhhw3i.png";

// Floating Data Particles
const DataParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    char: ['0', '1', '>', '<', '/', '*', '#', '@'][Math.floor(Math.random() * 8)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
    size: Math.random() * 10 + 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute font-mono text-[#a855f7]/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: p.size,
          }}
          animate={{
            y: [0, -200],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          {p.char}
        </motion.span>
      ))}
    </div>
  );
};

// Neon Button
const NeonButton = ({
  children,
  href,
  variant = 'primary'
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary'
}) => {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-3
    px-10 py-4 font-bold text-lg tracking-wide
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

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
};

// Rotating messages for terminal
const terminalMessages = [
  "initializing focus protocol",
  "Your AI Partner",
  "מחברים אנשים וטכנולוגיה",
  "Building the Future",
  "AI Solutions for Business",
];

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);

  // Typewriter effect - delete and rewrite
  useEffect(() => {
    const currentMessage = terminalMessages[messageIndex];

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentMessage.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next message
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % terminalMessages.length);
      }
    }
  }, [displayText, isDeleting, messageIndex]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#a855f7] font-mono text-2xl"
        >
          <span className="animate-pulse">[LOADING...]</span>
        </motion.div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#0a0a0f]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#a855f7]/8 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#7c3aed]/8 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-[#c084fc]/5 rounded-full blur-[150px]" />
      </div>


      <DataParticles />

      {/* Blink animation style */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>

      {/* Terminal prompt - below header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-20 md:top-24 right-4 md:right-8 lg:right-12 z-30"
      >
        <span className="font-mono text-[#a855f7] text-xs md:text-sm">
          <span className="text-[#9090a8]">&gt;</span>
          {" "}
          <span>
            {displayText}
          </span>
          <span className="animate-blink">_</span>
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 container min-h-screen flex items-center px-4 md:px-8 pt-20 md:pt-24"
        style={{ opacity }}
      >
        <div className="w-full py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

            {/* Text Content */}
            <div className="text-center lg:text-right order-2 lg:order-1 relative px-4">
              {/* Fingerprint behind text - positioned to the side */}
              <motion.img
                src={fingerprint}
                alt=""
                aria-hidden="true"
                className="absolute top-1/2 right-[-30%] lg:right-[-35%] w-[600px] lg:w-[800px] h-auto pointer-events-none select-none -z-10"
                style={{ transform: 'translateY(-50%)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2, delay: 1 }}
              />

              {/* Main Headline */}
              <motion.div
                className="mb-6"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.95] tracking-tighter">
                  <span className="text-[#f5f5fa]">Focus</span>
                  <span
                    className="text-transparent bg-clip-text mr-4"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #a855f7, #c084fc, #e879f9)',
                    }}
                  >AI</span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                className="mb-8 overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold leading-tight">
                  <span className="text-[#f5f5fa]">מחברים אנשים </span>
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #a855f7, #c084fc, #e879f9)',
                    }}
                  >
                    וטכנולוגיה
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mb-10"
              >
                <p className="text-xl md:text-2xl text-[#f5f5fa] mb-2 font-semibold">
                  אצלנו הפוקוס הוא עלייך.
                </p>
                <p className="text-lg md:text-xl text-[#9090a8] font-mono">
                  // הכשרות מקצועיות ופתרונות AI לעסקים
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <NeonButton href="#academy" variant="primary">
                  אקדמיה
                </NeonButton>
                <NeonButton href="#services" variant="secondary">
                  פיתוח מערכות
                </NeonButton>
              </motion.div>

            </div>

            {/* Chavobot + n8n Badge - grouped as single unit */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center items-center lg:-translate-x-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <div className="relative">
                {/* n8n Official Partner Badge - partially behind Chavobot */}
                <img
                  src={n8nBadge}
                  alt="n8n Official Partner"
                  className="absolute z-0 w-[160px] sm:w-[200px] md:w-[260px] lg:w-[320px] h-auto"
                  style={{
                    top: '-2%',
                    right: '8%',
                    transform: 'rotate(8deg)',
                  }}
                />

                {/* Main image */}
                <img
                  src={chavobot}
                  alt="חבובוט - הנציג החכם של Focus AI"
                  className="relative z-10 w-[90vw] max-w-[420px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[700px] h-auto"
                  style={{
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
