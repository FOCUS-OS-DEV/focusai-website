"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clients } from "../data/clients";

export const ClientLogos = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Duplicate for seamless infinite loop
  const allLogos = [...clients, ...clients];

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f] overflow-hidden"
    >
      {/* Subtle decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" />

      {/* Header */}
      <motion.div
        className="container relative z-10 mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono text-[#a855f7]/70 uppercase tracking-[0.4em] mb-4">
          Trusted By
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold text-[#f5f5fa]/90">
          חלק מהלקוחות שסומכים עלינו
        </h3>
      </motion.div>

      {/* Infinite scroll marquee with CSS mask for edge fade */}
      <div
        className="relative logo-marquee"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <motion.div
          className="flex items-center gap-20 lg:gap-28 logo-track"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 logo-item"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-500 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Styles for logo treatment - using mix-blend-mode to hide white backgrounds */}
      <style>{`
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
      `}</style>
    </section>
  );
};

export default ClientLogos;
