"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const CELL = 40;

export default function InteractiveGridPattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [lit, setLit] = useState<Set<number>>(new Set());
  const timers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());
  const prevKey = useRef(-1);
  const colCount = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) =>
      setSize({ w: e.contentRect.width, h: e.contentRect.height })
    );
    ro.observe(el);
    return () => {
      ro.disconnect();
      timers.current.forEach(clearTimeout);
    };
  }, []);

  const cols = Math.ceil(size.w / CELL) + 1;
  const rows = Math.ceil(size.h / CELL) + 1;
  colCount.current = cols;

  const onMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const key =
      Math.floor((e.clientY - top) / CELL) * colCount.current +
      Math.floor((e.clientX - left) / CELL);

    if (key === prevKey.current) return;
    prevKey.current = key;

    clearTimeout(timers.current.get(key));
    setLit(p => new Set(p).add(key));

    timers.current.set(
      key,
      setTimeout(() => {
        setLit(p => { const n = new Set(p); n.delete(key); return n; });
        timers.current.delete(key);
      }, 700)
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 0,
        maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 15%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 15%, transparent 75%)",
      }}
    >
      {size.w > 0 && (
        <svg
          width={size.w}
          height={size.h}
          className="pointer-events-auto"
          onMouseMove={onMove}
          onMouseLeave={() => { prevKey.current = -1; }}
        >
          {Array.from({ length: rows * cols }, (_, i) => (
            <rect
              key={i}
              x={(i % cols) * CELL}
              y={Math.floor(i / cols) * CELL}
              width={CELL}
              height={CELL}
              style={{
                fill: lit.has(i) ? "rgba(250,117,72,0.13)" : "rgba(0,0,0,0)",
                transition: "fill 0.5s ease",
                stroke: "rgba(255,255,255,0.05)",
                strokeWidth: 1,
              }}
            />
          ))}
        </svg>
      )}
    </div>
  );
}
