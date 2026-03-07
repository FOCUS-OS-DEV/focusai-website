"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
interface ToolItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  label: string;
  href: string;
  iconColor: string;
  titleColor: string;
}

const LayersIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22.54 12.43-1.96-.89-7.75 3.53a2 2 0 0 1-1.66 0l-7.75-3.53-1.96.89a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z" />
    <path d="m22.54 16.43-1.96-.89-7.75 3.53a2 2 0 0 1-1.66 0l-7.75-3.53-1.96.89a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z" />
  </svg>
);

const BotIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
  </svg>
);

const tools: ToolItem[] = [
  {
    icon: <LayersIcon />,
    title: "מרכז כלי AI",
    description: "כלי ה-AI המומלצים שלנו. סיננו, חיפשנו ובחרנו את הכלי המתאים לכם",
    label: "כלי AI",
    href: "/tools",
    iconColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    titleColor: "text-white",
  },
  {
    icon: <BotIcon />,
    title: "Prompt Master V3",
    description: "סוכן AI חכם מבית Focus AI, הנדסת פרומפטים מקצועית",
    label: "ChatGPT",
    href: "https://chatgpt.com/g/g-68c7d685d6e081918de17b06b52e8a5e-focus-ai-prompt-master-v3",
    iconColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    titleColor: "text-white",
  },
  {
    icon: <SparklesIcon />,
    title: "Prompt Master",
    description: "סוכן AI חכם מבית Focus AI, גרסת Gemini",
    label: "Gemini",
    href: "https://gemini.google.com/gem/c9c0363a0699?usp=sharing",
    iconColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
    titleColor: "text-white",
  },
];

export default function GlowingToolsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {tools.map((tool, i) => {
        const isExternal = tool.href.startsWith("http");
        return (
          <a
            key={i}
            href={tool.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
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
            <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-white/[0.06] bg-[#0d0d14] p-6 shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
              <div className="flex flex-col gap-3">
                <div className={`w-fit rounded-lg border-[0.75px] p-2 ${tool.iconColor}`}>
                  {tool.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-[#c084fc] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#b0b0c0]/70">
                    {tool.description}
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-white/30">
                {tool.label}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
