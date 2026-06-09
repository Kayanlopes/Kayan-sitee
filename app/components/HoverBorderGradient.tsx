"use client";
import React from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue } from "framer-motion";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  duration?: number;
  [key: string]: unknown;
}

export default function HoverBorderGradient({
  children,
  containerClassName = "",
  className = "",
  as: Tag = "button",
  duration = 2,
  ...props
}: HoverBorderGradientProps) {
  const rotate = useMotionValue(0);

  useAnimationFrame((t) => {
    rotate.set((t / (duration * 1000)) * 360);
  });

  const background = useMotionTemplate`conic-gradient(from ${rotate}deg, #fa7548 0%, #0a0a0a 35%, rgba(255,255,255,0.06) 50%, #0a0a0a 65%, #fa7548 100%)`;

  const Comp = Tag as React.ElementType;

  return (
    <Comp
      className={`relative inline-flex p-px rounded-full ${containerClassName}`}
      {...props}
    >
      <motion.div
        style={{ background }}
        className="absolute inset-0 rounded-full"
      />
      <div className={`relative z-10 flex items-center w-full rounded-full bg-[#0a0a0a] ${className}`}>
        {children}
      </div>
    </Comp>
  );
}
