"use client";
import React from "react";
import { clients } from "../data/clients";

export const ClientLogos = () => {
  // Duplicate clients for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0f] overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/30 to-transparent" />

      {/* Header - Always visible, no animation conditions */}
      <div className="container relative z-10 mb-16 text-center">
        <p className="text-sm font-mono text-[#b0b0c0] uppercase tracking-wider">
          [TRUSTED_BY] חלק מהלקוחות שסומכים עלינו
        </p>
      </div>

      {/* Infinite Carousel */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex gap-6 client-marquee">
          {allClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl p-3 flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 md:max-h-24 max-w-full object-contain"
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
