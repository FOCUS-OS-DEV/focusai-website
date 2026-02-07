"use client";
import React from "react";
import { clients } from "../data/clients";

export const ClientLogos = () => {
  // Duplicate clients for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section className="relative py-10 md:py-16 lg:py-28 bg-[#0a0a0f] overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent" />

      {/* Header - Always visible, no animation conditions */}
      <div className="container relative z-10 mb-6 md:mb-10 lg:mb-16 text-center px-4">
        <p className="text-xs md:text-sm font-mono text-[#b0b0c0] uppercase tracking-wider">
          [TRUSTED_BY] חלק מהלקוחות שסומכים עלינו
        </p>
      </div>

      {/* Infinite Carousel */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
        }}
      >
        <div className="flex gap-3 md:gap-6 client-marquee">
          {allClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-lg md:rounded-xl p-2 md:p-3 flex items-center justify-center shadow-md md:shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] md:hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 sm:max-h-12 md:max-h-20 lg:max-h-24 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" />
    </section>
  );
};

export default ClientLogos;
