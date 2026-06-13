"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CELL = 30;
const MAX_DIST = 7;
const STEP_DELAY = 30;
const FADE_DURATION = 300;
const BASE_ALPHA = 0.15;

interface CellState {
  trigger: number;
  delay: number;
  alpha: number;
}

export default function BackgroundRipple() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(0);
  const [cells, setCells] = useState<CellState[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const colsRef = useRef(0);
  const triggerCounter = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || isMobile) return;

    const measure = () => {
      const r = el.getBoundingClientRect();
      const nextCols = Math.floor(r.width / CELL);
      const nextRows = Math.ceil(r.height / CELL);
      colsRef.current = nextCols;
      setCols(nextCols);
      setCells(Array.from({ length: nextCols * nextRows }, () => ({ trigger: 0, delay: 0, alpha: 0 })));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isMobile]);

  const triggerRipple = useCallback((row: number, col: number) => {
    setCells((prev) => {
      const cols = colsRef.current;
      const rows = Math.ceil(prev.length / cols);
      const next = [...prev];

      for (let r = Math.max(0, row - MAX_DIST); r <= Math.min(rows - 1, row + MAX_DIST); r++) {
        for (let c = Math.max(0, col - MAX_DIST); c <= Math.min(cols - 1, col + MAX_DIST); c++) {
          const dist = Math.abs(r - row) + Math.abs(c - col);
          if (dist > MAX_DIST) continue;

          const alpha = BASE_ALPHA * (1 - dist / (MAX_DIST + 1));
          if (alpha <= 0) continue;

          triggerCounter.current += 1;
          next[r * cols + c] = { trigger: triggerCounter.current, delay: dist * STEP_DELAY, alpha };
        }
      }

      return next;
    });
  }, []);

  if (isMobile) {
    return <div className="dots-bg absolute inset-0 z-0 pointer-events-none" />;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-auto"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${CELL}px)`,
        gridAutoRows: `${CELL}px`,
      }}
    >
      {cols > 0 &&
        cells.map((cell, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;

          return (
            <div
              key={cell.trigger ? `${i}-${cell.trigger}` : i}
              onMouseEnter={() => triggerRipple(row, col)}
              onClick={() => triggerRipple(row, col)}
              className="border border-[rgba(255,255,255,0.03)]"
              style={
                cell.trigger
                  ? ({
                      "--ripple-color": `rgba(250,117,72,${cell.alpha})`,
                      "--ripple-delay": `${cell.delay}ms`,
                      animation: `ripple-cell ${FADE_DURATION}ms ease-out var(--ripple-delay) forwards`,
                    } as React.CSSProperties)
                  : undefined
              }
            />
          );
        })}
    </div>
  );
}
