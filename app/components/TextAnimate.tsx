"use client";
import { motion } from "framer-motion";

interface TextAnimateProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function TextAnimate({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.05,
}: TextAnimateProps) {
  const words = text.split(" ").filter(Boolean);

  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ verticalAlign: "bottom" }}
        >
          <motion.span
            className={`inline-block${className ? ` ${className}` : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
              delay: delay + i * staggerDelay,
            }}
          >
            {word}{i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </>
  );
}
