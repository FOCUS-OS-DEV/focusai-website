"use client";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const AnimatedBeam = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute h-[2px] w-[500px] bg-gradient-to-r from-transparent via-purple-primary to-transparent"
        animate={{
          x: ["-500px", "100vw"],
          rotate: -45,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          top: "30%",
        }}
      />
      <motion.div
        className="absolute h-[2px] w-[300px] bg-gradient-to-r from-transparent via-pink-accent to-transparent"
        animate={{
          x: ["-300px", "100vw"],
          rotate: -45,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        style={{
          top: "60%",
        }}
      />
      <motion.div
        className="absolute h-[1px] w-[400px] bg-gradient-to-r from-transparent via-purple-light/50 to-transparent"
        animate={{
          x: ["-400px", "100vw"],
          rotate: -45,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
        style={{
          top: "80%",
        }}
      />
    </div>
  );
};

export const GridBackground = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[linear-gradient(to_right,#f3e8ff_1px,transparent_1px),linear-gradient(to_bottom,#f3e8ff_1px,transparent_1px)] bg-[size:4rem_4rem]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-bg-cream via-transparent to-transparent" />
    </div>
  );
};

export const DotBackground = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-[radial-gradient(#d4b8ff_1px,transparent_1px)] [background-size:20px_20px]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-bg-cream via-transparent to-transparent" />
    </div>
  );
};
