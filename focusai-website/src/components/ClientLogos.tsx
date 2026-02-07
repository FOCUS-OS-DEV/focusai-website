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
      className="relative py-28 lg:py-36 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Elegant top border with glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a855f7]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent blur-sm" />
      </div>

      {/* Header */}
      <motion.div
        className="container relative z-10 mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-mono text-[#a855f7] uppercase tracking-[0.5em] mb-5">
          Trusted By
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          חלק מהלקוחות שסומכים עלינו
        </h3>
      </motion.div>

      {/* Logos Grid - Static premium display */}
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clients.slice(0, 8).map((client, index) => (
            <motion.div
              key={client.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Logo container with premium styling */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 flex items-center justify-center p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-[#a855f7]/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Tooltip on hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="text-xs text-[#a855f7]/80 font-medium">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row - smaller logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-12">
          {clients.slice(8).map((client, index) => (
            <motion.div
              key={client.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center p-3 md:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-[#a855f7]/20">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elegant bottom border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent" />
      </div>
    </section>
  );
};

export default ClientLogos;
