"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

interface CardItem {
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  tag: string;
  tagColor?: "emerald" | "neutral";
}

interface GlowingCardsGridProps {
  items: CardItem[];
}

export default function GlowingCardsGrid({ items }: GlowingCardsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="group relative list-none rounded-[1.25rem] border-[0.75px] border-white/[0.06] p-1.5 md:rounded-[1.5rem] md:p-2 block no-underline"
        >
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] border-white/[0.06] bg-[#0d0d14] shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
            <div className="relative h-44 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/40 to-transparent" />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-2.5 py-1 rounded-full backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider border ${
                    item.tagColor === "neutral"
                      ? "bg-black/60 text-white/70 border-white/10"
                      : "bg-emerald-500/20 text-emerald-400 border-emerald-500/20"
                  }`}
                >
                  {item.tag}
                </span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#c084fc] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#b0b0c0]/80 leading-relaxed mb-4 flex-1">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#a855f7] group-hover:gap-3 transition-all">
                {item.cta}
                <svg
                  className="w-4 h-4 transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
