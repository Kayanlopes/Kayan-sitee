"use client";
import React, { useId } from "react";
import { motion } from "framer-motion";

interface NoiseBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  gradientColors?: string[];
  noiseIntensity?: number;
}

export default function NoiseBackground({
  children,
  className = "",
  containerClassName = "",
  gradientColors = ["#fa7548", "#7c3aed", "#1e1e1e"],
  noiseIntensity = 0.15,
}: NoiseBackgroundProps) {
  const rawId = useId();
  const filterId = `noise-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const [c1 = "#fa7548", c2 = "#7c3aed", c3 = "#1e1e1e"] = gradientColors;

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#1a1a1a] ${containerClassName}`}>

      {/* Blob 1 — orange accent, top-left drift */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${c1}55 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 — purple, bottom-right drift */}
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${c2}66 0%, transparent 70%)`,
          filter: "blur(50px)",
        }}
        animate={{ x: [0, -50, 20, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 3 — dark, center drift */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-1/2 h-1/2 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${c3}99 0%, transparent 70%)`,
          filter: "blur(30px)",
        }}
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 30, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise texture */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2, opacity: noiseIntensity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>

      {/* Content */}
      <div className={`relative z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
}
