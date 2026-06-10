"use client";

import { motion } from "framer-motion";

const SIZES = [200, 400, 600, 800, 1000, 1200, 1400, 1600];

const BORDER_COLORS = ["rgba(250,117,72,0.08)", "rgba(255,255,255,0.04)"];

export default function RippleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {SIZES.map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            border: "1px solid rgba(250,117,72,0.12)",
          }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.35, 0.8, 0.35],
            borderColor: [
              BORDER_COLORS[i % 2],
              BORDER_COLORS[(i + 1) % 2],
              BORDER_COLORS[i % 2],
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
