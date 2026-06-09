"use client";
import { motion } from "framer-motion";

interface TextGenerateEffectProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

export default function TextGenerateEffect({
  text,
  className = "",
  highlightWords = [],
}: TextGenerateEffectProps) {
  const words = text.split(" ").filter(Boolean);

  const highlightedIndices = new Set<number>();
  highlightWords.forEach(phrase => {
    const phraseWords = phrase.trim().split(/\s+/);
    for (let i = 0; i <= words.length - phraseWords.length; i++) {
      const matches = phraseWords.every((pw, j) => words[i + j] === pw);
      if (matches) {
        for (let j = 0; j < phraseWords.length; j++) {
          highlightedIndices.add(i + j);
        }
      }
    }
  });

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline${highlightedIndices.has(i) ? " font-bold text-[#fa7548]" : ""}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.03 }}
        >
          {word}{i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
