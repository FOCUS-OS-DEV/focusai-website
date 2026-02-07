"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils";

interface SparkleProps {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
  };
}

const generateSparkle = (color: string): SparkleProps => {
  return {
    id: String(Math.random()),
    createdAt: Date.now(),
    color,
    size: Math.random() * 10 + 5,
    style: {
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
    },
  };
};

const Sparkle = ({ color, size, style }: Omit<SparkleProps, "id" | "createdAt">) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      style={{
        position: "absolute",
        pointerEvents: "none",
        ...style,
      }}
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  );
};

export const SparklesCore = ({
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const sparkle = generateSparkle(particleColor || "#a855f7");

      setSparkles((sparkles) => {
        const filtered = sparkles.filter(
          (sp) => now - sp.createdAt < 750
        );
        return [...filtered, sparkle];
      });
    }, speed || 400);

    return () => clearInterval(interval);
  }, [particleColor, speed]);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ background: background || "transparent" }}
    >
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
    </div>
  );
};

export const SparklesText = ({
  children,
  className,
  sparkleColor = "#a855f7",
}: {
  children: React.ReactNode;
  className?: string;
  sparkleColor?: string;
}) => {
  return (
    <span className={cn("relative inline-block", className)}>
      <SparklesCore
        className="absolute inset-0 z-0"
        particleColor={sparkleColor}
        speed={600}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
};
