"use client";
import { useMemo, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { usePageTransition } from "./PageTransition";

const CARDS = [
  {
    title: "Webbie RH",
    slug: "webbie-rh",
    description:
      "Plataforma de recrutamento impulsionada por IA que simplifica o processo de seleção para empresas de todos os tamanhos.",
    tags: ["Product Design", "AI"],
    gradient: "from-[#fa7548]/30 via-[#fa7548]/10 to-[#1a1a1a]",
  },
  {
    title: "NTX Bank",
    slug: "ntx-bank",
    description:
      "Experiência de banco digital moderna, focada em acessibilidade e clareza para usuários do dia a dia.",
    tags: ["Product Design", "Design System"],
    gradient: "from-[#7c3aed]/30 via-[#7c3aed]/10 to-[#1a1a1a]",
  },
  {
    title: "SPA AI Assistant",
    slug: "spa-ai-assistant",
    description:
      "Assistente de IA para o ecossistema Microsoft, integrado nativamente ao fluxo de trabalho dos usuários.",
    tags: ["UI Design", "AI"],
    gradient: "from-[#0ea5e9]/30 via-[#0ea5e9]/10 to-[#1a1a1a]",
  },
  {
    title: "Prolog App",
    slug: "prolog-app",
    description:
      "Plataforma de checklist operacional que garante conformidade e rastreabilidade em ambientes industriais.",
    tags: ["Product Design", "Design System"],
    gradient: "from-[#22c55e]/30 via-[#22c55e]/10 to-[#1a1a1a]",
  },
];

const N = CARDS.length;
const CARD_HEIGHT = 400;
const STICKY_TOP = `calc(50vh - ${CARD_HEIGHT / 2}px)`;
const SCALE_STEP = 0.03;
const Y_STEP = 15;
const OPACITY_STEP = 0.15;

function CardItem({
  card,
  index,
  scrollYProgress,
}: {
  card: (typeof CARDS)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { triggerTransition } = usePageTransition();

  const handleViewProject = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) triggerTransition(card.slug, rect);
  };

  // Build keyframe ranges once per card (index never changes)
  const { ranges, scales, ys, opacities } = useMemo(() => {
    const ranges: number[] = [];
    const scales: number[] = [];
    const ys: number[] = [];
    const opacities: number[] = [];

    const push = (t: number, s: number, y: number, o: number) => {
      ranges.push(t); scales.push(s); ys.push(y); opacities.push(o);
    };

    if (index === 0) {
      // Active from scroll start
      push(0, 1, 0, 1);
    } else {
      // Slide in from below when it's this card's turn
      const enterStart = Math.max(0, (index - 0.5) / N);
      const enterEnd = index / N;
      push(0, 1, 80, 0);
      push(enterStart, 1, 80, 0);
      push(enterEnd, 1, 0, 1);
    }

    // Get compressed into the stack as later cards enter
    for (let depth = 1; depth <= N - index; depth++) {
      const t = Math.min(1, (index + depth) / N);
      push(
        t,
        Math.max(0.85, 1 - depth * SCALE_STEP),
        -(depth * Y_STEP),
        Math.max(0.5, 1 - depth * OPACITY_STEP),
      );
    }

    return { ranges, scales, ys, opacities };
  }, [index]);

  const scale = useTransform(scrollYProgress, ranges, scales);
  const y = useTransform(scrollYProgress, ranges, ys);
  const opacity = useTransform(scrollYProgress, ranges, opacities);

  return (
    <div
      className="flex justify-center px-14 pt-6"
      style={{ position: "sticky", top: STICKY_TOP, zIndex: index + 1 }}
    >
      <motion.div
        ref={cardRef}
        className="w-full max-w-[1200px] bg-[#141414] rounded-2xl overflow-hidden"
        style={{
          scale,
          y,
          opacity,
          transformOrigin: "top center",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
        }}
      >
        <div className="flex h-[400px]">
          {/* Gradient placeholder */}
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
              <Link
                href={`/projetos/${card.slug}`}
                onClick={handleViewProject}
                className="flex items-center gap-2 border border-[#878787] rounded-full px-4 py-2 font-overused text-[13px] text-[#b9b9b9] hover:border-white hover:text-white transition-colors"
              >
                Ver projeto
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StackedCards() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      id="projetos"
      className="relative bg-[#0a0a0a] mt-[100px]"
      style={{ height: `${N * 100}vh` }}
    >
      <div className="dots-bg absolute inset-0 pointer-events-none" />

      {CARDS.map((card, i) => (
        <CardItem key={i} card={card} index={i} scrollYProgress={scrollYProgress} />
      ))}
    </section>
  );
}
