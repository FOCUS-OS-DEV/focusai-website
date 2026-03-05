"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Layers, Bot, Sparkles } from "lucide-react";

interface ToolItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  label: string;
  href: string;
  iconColor: string;
  titleColor: string;
}

const tools: ToolItem[] = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: "מרכז כלי AI",
    description: "כלי ה-AI המומלצים שלנו. סיננו, חיפשנו ובחרנו את הכלי המתאים לכם",
    label: "כלי AI",
    href: "/tools",
    iconColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
    titleColor: "text-white",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "Prompt Master V3",
    description: "סוכן AI חכם מבית Focus AI, הנדסת פרומפטים מקצועית",
    label: "ChatGPT",
    href: "https://chatgpt.com/g/g-68c7d685d6e081918de17b06b52e8a5e-focus-ai-prompt-master-v3",
    iconColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    titleColor: "text-white",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
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
