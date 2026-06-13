"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projects";

interface OverlayState {
  slug: string;
  top: number;
  left: number;
  width: number;
  height: number;
  viewportWidth: number;
  viewportHeight: number;
  phase: "expand" | "reveal";
}

interface PageTransitionContextValue {
  triggerTransition: (slug: string, rect: DOMRect) => void;
}

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error("usePageTransition deve ser usado dentro de PageTransitionProvider");
  }
  return ctx;
}

const CARD_RADIUS = 16;
const EXPAND_DURATION = 0.6;
const REVEAL_DURATION = 0.4;
const FADE_DURATION = 0.2;
const EASE = [0.76, 0, 0.24, 1] as const;

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [overlay, setOverlay] = useState<OverlayState | null>(null);

  const triggerTransition = useCallback((slug: string, rect: DOMRect) => {
    setOverlay({
      slug,
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      phase: "expand",
    });
  }, []);

  const project = overlay ? projects.find((p) => p.slug === overlay.slug) : undefined;

  return (
    <PageTransitionContext.Provider value={{ triggerTransition }}>
      {children}

      {overlay && (
        <motion.div
          className="fixed z-[9998] overflow-hidden bg-[#141414] pointer-events-none"
          initial={{
            top: overlay.top,
            left: overlay.left,
            width: overlay.width,
            height: overlay.height,
            borderRadius: CARD_RADIUS,
            opacity: 1,
          }}
          animate={
            overlay.phase === "expand"
              ? {
                  top: 0,
                  left: 0,
                  width: overlay.viewportWidth,
                  height: overlay.viewportHeight,
                  borderRadius: 0,
                  opacity: 1,
                }
              : {
                  top: 0,
                  left: 0,
                  width: overlay.viewportWidth,
                  height: overlay.viewportHeight,
                  borderRadius: 0,
                  opacity: 0,
                }
          }
          transition={
            overlay.phase === "expand"
              ? { duration: EXPAND_DURATION, ease: EASE }
              : { duration: REVEAL_DURATION, ease: "easeInOut" }
          }
          onAnimationComplete={() => {
            if (overlay.phase === "expand") {
              router.push(`/projetos/${overlay.slug}`);
              setOverlay({ ...overlay, phase: "reveal" });
            } else {
              setOverlay(null);
            }
          }}
        >
          {/* Conteúdo do card (fade out) */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: EXPAND_DURATION - FADE_DURATION, duration: FADE_DURATION }}
          >
            <h2 className="font-poppins font-extrabold text-[36px] leading-none text-white">
              {project?.project}
            </h2>
          </motion.div>

          {/* Loading (fade in) */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: EXPAND_DURATION - FADE_DURATION, duration: FADE_DURATION }}
          >
            <div className="w-10 h-10 rounded-full border-2 border-[#fa7548] border-t-transparent animate-spin" />
          </motion.div>
        </motion.div>
      )}
    </PageTransitionContext.Provider>
  );
}
