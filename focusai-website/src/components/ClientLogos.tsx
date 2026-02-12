"use client";
import React from "react";
import { clients } from "../data/clients";

export const ClientLogos = () => {
  // Triple clients for seamless infinite loop
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="relative py-12 md:py-16 bg-[#0a0a0f] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#a855f7]/5 rounded-full blur-[150px]" />
      </div>

      {/* Terminal-style Header */}
      <div className="container relative z-10 mb-8 md:mb-12 px-4">
        <div className="text-center">
          {/* Glass badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
            <span className="text-xs text-[#a855f7] tracking-wider uppercase">סומכים עלינו</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            חלק מהלקוחות <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#d946ef]">שסומכים עלינו</span>
          </h2>
          <p className="text-[#9090a8] font-mono text-sm">
            // מוסדות אקדמיים, ארגונים ועסקים מובילים
          </p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
        }}
      >
        <div className="flex gap-4 md:gap-6 client-marquee-infinite">
          {allClients.map((client, index) => (
            <div
              key={index}
              className="group flex-shrink-0"
            >
              {/* Hexagonal-inspired card */}
              <div
                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 transition-all duration-500 hover:scale-105"
              >
                {/* Outer glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#a855f7]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Main card */}
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden border border-[#2a2a3a] group-hover:border-[#a855f7]/50 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(145deg, #15151f 0%, #0d0d14 100%)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
                  }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a855f7]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Inner white container for logo */}
                  <div className="absolute inset-2 md:inset-3 rounded-xl bg-white/95 flex items-center justify-center p-2 overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-10 sm:max-h-12 md:max-h-16 lg:max-h-20 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Corner brackets */}
                  <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#a855f7]/0 group-hover:border-[#a855f7]/60 transition-all duration-300 rounded-tl" />
                  <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#a855f7]/0 group-hover:border-[#a855f7]/60 transition-all duration-300 rounded-tr" />
                  <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#a855f7]/0 group-hover:border-[#a855f7]/60 transition-all duration-300 rounded-bl" />
                  <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#a855f7]/0 group-hover:border-[#a855f7]/60 transition-all duration-300 rounded-br" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom terminal line */}
      <div className="container px-4 mt-8 md:mt-12">
        <div className="flex justify-center">
          <div className="font-mono text-xs text-[#a855f7]/40 flex items-center gap-2">
            <span className="text-[#9090a8]">&gt;</span>
            <span>loading_more_success_stories...</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
