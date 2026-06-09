"use client";
import { useEffect, useRef, useState } from "react";

const CELL = 40;

export default function InteractiveGridPattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [lit, setLit] = useState<Set<number>>(new Set());
  const timers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());
  const prevKey = useRef(-1);
  // Keep a ref so the window listener always reads fresh values
  const layout = useRef({ cols: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const r = el.getBoundingClientRect();
      const w = r.width;
      const h = r.height;
      layout.current.cols = Math.ceil(w / CELL) + 2;
      setSize({ w, h });
    };

    // Read dimensions immediately after first paint
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const onMouseMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      if (x < 0 || x > r.width || y < 0 || y > r.height) {
        prevKey.current = -1;
        return;
      }

      const cols = layout.current.cols;
      const key = Math.floor(y / CELL) * cols + Math.floor(x / CELL);

      if (key === prevKey.current) return;
      prevKey.current = key;

      clearTimeout(timers.current.get(key));
      setLit(p => new Set(p).add(key));

      timers.current.set(
        key,
        setTimeout(() => {
          setLit(p => { const n = new Set(p); n.delete(key); return n; });
          timers.current.delete(key);
        }, 700),
      );
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      timers.current.forEach(clearTimeout);
    };
  }, []);

  const cols = layout.current.cols || Math.ceil(size.w / CELL) + 2;
  const rows = Math.ceil(size.h / CELL) + 2;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 0,
        maskImage:
          "radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)",
      }}
    >
      <svg width={size.w || "100%"} height={size.h || "100%"}>
        {size.w > 0 &&
          Array.from({ length: rows * cols }, (_, i) => (
            <rect
              key={i}
              x={(i % cols) * CELL}
              y={Math.floor(i / cols) * CELL}
              width={CELL}
              height={CELL}
              style={{
                fill: lit.has(i) ? "rgba(250,117,72,0.13)" : "rgba(0,0,0,0)",
                transition: "fill 0.5s ease",
                stroke: "rgba(255,255,255,0.06)",
                strokeWidth: 1,
              }}
            />
          ))}
      </svg>
    </div>
  );
}
