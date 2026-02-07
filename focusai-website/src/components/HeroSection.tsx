"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Brand assets
const chavobot = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1770379453/6962a37d-21ba-4e69-9946-59e37d731ed3_qjwm7h.png";
const fingerprint = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1765571815/FOCUS_LOGO-06_2_grkja9.png";
const n8nBadge = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1770414664/f4b939e2-bcbe-4c98-adff-db93933b12e3_bhhw3i.png";
const focusLogo = "https://res.cloudinary.com/dfudxxzlj/image/upload/v1765265415/2_fxdcio.png";

// Glitch Text Component
const GlitchText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="relative z-10">{children}</span>
    <span
      className="absolute inset-0 text-[#c084fc] opacity-70 animate-glitch-1"
      style={{ clipPath: 'inset(40% 0 20% 0)' }}
      aria-hidden="true"
    >
      {children}
    </span>
    <span
      className="absolute inset-0 text-[#a855f7] opacity-70 animate-glitch-2"
      style={{ clipPath: 'inset(20% 0 40% 0)' }}
      aria-hidden="true"
    >
      {children}
    </span>
  </span>
);

// Scanline Overlay
const Scanlines = () => (
  <div
    className="pointer-events-none absolute inset-0 z-50 opacity-[0.03]"
    style={{
      background: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.5) 2px,
        rgba(0, 0, 0, 0.5) 4px
      )`
    }}
  />
);

// Cyber Grid Background
const CyberGrid = () => (
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px'
    }}
  />
);

// HUD Corner Element
const HUDCorner = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const positionClasses = {
    'top-left': 'top-4 left-4 border-t-2 border-l-2',
    'top-right': 'top-4 right-4 border-t-2 border-r-2',
    'bottom-left': 'bottom-4 left-4 border-b-2 border-l-2',
    'bottom-right': 'bottom-4 right-4 border-b-2 border-r-2',
  };

  return (
    <div className={`absolute w-8 h-8 border-[#a855f7]/30 ${positionClasses[position]}`} />
  );
};

// Floating Data Particles
const DataParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
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

// Terminal Text with typing effect
const TerminalText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
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
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono">
      <span className="text-[#a855f7]">&gt; </span>
      {displayed}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-[#a855f7]`}>_</span>
    </span>
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

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
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
          <span className="animate-pulse">[INITIALIZING...]</span>
        </motion.div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#0a0a0f]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Gradient mesh - Purple based */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#a855f7]/8 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#7c3aed]/8 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-[#c084fc]/5 rounded-full blur-[150px]" />
      </div>


      <CyberGrid />
      <DataParticles />
      <Scanlines />

      {/* HUD Corners */}
      <HUDCorner position="top-left" />
      <HUDCorner position="top-right" />
      <HUDCorner position="bottom-left" />
      <HUDCorner position="bottom-right" />

      {/* Main content */}
      <motion.div
        className="relative z-10 container min-h-screen flex items-center"
        style={{ opacity }}
      >
        <div className="w-full py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text Content */}
            <div className="text-center lg:text-right order-2 lg:order-1 relative">
              {/* Fingerprint behind text */}
              <motion.img
                src={fingerprint}
                alt=""
                aria-hidden="true"
                className="absolute top-1/2 right-0 lg:right-[-20%] w-[800px] lg:w-[1000px] h-auto pointer-events-none select-none -z-10"
                style={{ transform: 'translateY(-50%)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.12 }}
                transition={{ duration: 2, delay: 1 }}
              />

              {/* Terminal prompt */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 mt-4 text-base text-[#9090a8]"
              >
                <TerminalText text="initializing focus protocol..." delay={500} />
              </motion.div>

              {/* Main Headline with glitch */}
              <motion.div
                className="mb-6"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-[clamp(4rem,12vw,10rem)] font-black leading-[0.95] tracking-tighter">
                  <GlitchText className="block text-[#f5f5fa]">
                    Focus<span
                      className="text-transparent bg-clip-text ml-4"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #a855f7, #c084fc, #e879f9)',
                      }}
                    >AI</span>
                  </GlitchText>
                </h1>
              </motion.div>

              <motion.div
                className="mb-8 overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight">
                  <span className="text-[#f5f5fa]">מחברים אנשים </span>
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #a855f7, #c084fc, #e879f9)',
                      textShadow: '0 0 40px rgba(168, 85, 247, 0.5)'
                    }}
                  >
                    וטכנולוגיה
                  </span>
                </h2>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mb-12"
              >
                <p className="text-xl md:text-2xl text-[#f5f5fa] mb-2 font-semibold">
                  אצלנו הפוקוס הוא עלייך.
                </p>
                <p className="text-xl md:text-2xl text-[#c0c0d0] font-mono">
                  // הכשרות מקצועיות ופתרונות AI לעסקים
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
              >
                <NeonButton href="/academy" variant="primary">
                  אקדמיה
                </NeonButton>
                <NeonButton href="/services" variant="secondary">
                  פיתוח מערכות
                </NeonButton>
              </motion.div>

            </div>

            {/* Chavobot Visual */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center items-center relative lg:-translate-x-12 xl:-translate-x-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              {/* n8n Official Partner Badge - Behind Chavobot */}
              <motion.img
                src={n8nBadge}
                alt="n8n Official Partner"
                className="absolute z-0 w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-auto"
                style={{
                  top: '-2%',
                  right: '-3%',
                  opacity: 0.8,
                  transform: 'rotate(20deg)',
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              />

              {/* Main image - responsive sizing with fade edges */}
              <img
                src={chavobot}
                alt="חבובוט - הנציג החכם של Focus AI"
                className="relative z-10 w-[85vw] max-w-[400px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] h-auto"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>


      {/* Glitch animation styles */}
      <style>{`
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
      `}</style>
    </section>
  );
};

export default HeroSection;
