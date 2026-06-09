"use client";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const CARDS = [
  {
    title: "Webbie RH",
    description:
      "Plataforma de recrutamento impulsionada por IA que simplifica o processo de seleção para empresas de todos os tamanhos.",
    tags: ["Product Design", "AI"],
    gradient: "from-[#fa7548]/30 via-[#fa7548]/10 to-[#1a1a1a]",
  },
  {
    title: "NTX Bank",
    description:
      "Experiência de banco digital moderna, focada em acessibilidade e clareza para usuários do dia a dia.",
    tags: ["Product Design", "Design System"],
    gradient: "from-[#7c3aed]/30 via-[#7c3aed]/10 to-[#1a1a1a]",
  },
  {
    title: "SPA AI Assistant",
    description:
      "Assistente de IA para o ecossistema Microsoft, integrado nativamente ao fluxo de trabalho dos usuários.",
    tags: ["UI Design", "AI"],
    gradient: "from-[#0ea5e9]/30 via-[#0ea5e9]/10 to-[#1a1a1a]",
  },
  {
    title: "Prolog App",
    description:
      "Plataforma de checklist operacional que garante conformidade e rastreabilidade em ambientes industriais.",
    tags: ["Product Design", "Design System"],
    gradient: "from-[#22c55e]/30 via-[#22c55e]/10 to-[#1a1a1a]",
  },
];

function CardItem({
  card,
  index,
}: {
  card: (typeof CARDS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <div ref={ref} style={{ height: "100vh" }}>
      <div
        className="flex justify-center px-14 pt-6"
        style={{ position: "sticky", top: 80 + index * 20, zIndex: index + 1 }}
      >
        <motion.div
          className="w-full max-w-[1200px] bg-[#141414] rounded-2xl overflow-hidden"
          style={{
            opacity,
            y,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex h-[400px]">
            {/* Placeholder gradient image area */}
            <div
              className={`w-[45%] shrink-0 bg-[#1a1a1a] bg-gradient-to-br ${card.gradient}`}
            />

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between p-10">
              <div className="flex flex-col gap-5">
                <span className="font-overused text-[13px] text-[#555] tracking-widest">
                  0{index + 1}
                </span>
                <h2 className="font-poppins font-extrabold text-[36px] leading-none text-white">
                  {card.title}
                </h2>
                <p className="font-overused text-[15px] leading-relaxed text-[#b9b9b9] max-w-[400px]">
                  {card.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-overused text-[12px] text-[#878787] rounded-full px-3 py-1"
                      style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="flex items-center gap-2 border border-[#878787] rounded-full px-4 py-2 font-overused text-[13px] text-[#b9b9b9] hover:border-white hover:text-white transition-colors"
                >
                  Ver projeto
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function StackedCards() {
  return (
    <section id="projetos" className="bg-[#0a0a0a]">
      {CARDS.map((card, i) => (
        <CardItem key={i} card={card} index={i} />
      ))}
    </section>
  );
}
