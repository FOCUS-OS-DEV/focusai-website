"use client";

import { cn } from "@/lib/utils";
import { Layers, Bot, Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  href?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-purple-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "bg-purple-500/20",
  titleClassName = "text-purple-400",
  href,
}: DisplayCardProps) {
  const content = (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-[#0a0a0f] after:to-transparent after:content-[''] hover:border-purple-500/30 hover:bg-white/[0.06] [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className={cn("relative inline-block rounded-full p-1", iconClassName)}>
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-white/90">{description}</p>
      <p className="text-white/40 text-sm">{date}</p>
    </div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="no-underline"
      >
        {content}
      </a>
    );
  }

  return content;
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    {
      icon: <Layers className="size-4 text-purple-300" />,
      title: "מרכז כלי AI",
      description: "כלים מומלצים, מסוננים ומוכנים לעבודה",
      date: "כלי AI",
      iconClassName: "bg-purple-500/20",
      titleClassName: "text-purple-400",
      href: "/tools",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/[0.06] before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#0a0a0f]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Bot className="size-4 text-emerald-300" />,
      title: "Prompt Master V3",
      description: "סוכן AI חכם מבית Focus AI",
      date: "ChatGPT",
      iconClassName: "bg-emerald-500/20",
      titleClassName: "text-emerald-400",
      href: "https://chatgpt.com/g/g-68c7d685d6e081918de17b06b52e8a5e-focus-ai-prompt-master-v3",
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/[0.06] before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#0a0a0f]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Prompt Master",
      description: "סוכן AI חכם מבית Focus AI",
      date: "Gemini",
      iconClassName: "bg-blue-500/20",
      titleClassName: "text-blue-400",
      href: "https://gemini.google.com/gem/c9c0363a0699?usp=sharing",
      className:
        "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
