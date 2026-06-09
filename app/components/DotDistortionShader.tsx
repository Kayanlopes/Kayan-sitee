"use client";
import { useEffect, useRef } from "react";

const GAP = 12;
const DOT_RADIUS = 1.5;
const INFLUENCE_RADIUS = 80;
const RETURN_SPEED = 0.03;
const PUSH_STRENGTH = 18000;
const BREATHE_CHANCE = 0.004;

interface Dot {
  ox: number; oy: number;
  x: number; y: number;
  vx: number; vy: number;
  brightness: number;
  glow: number;
  breathPhase: number;
  breathSpeed: number;
}

export default function DotDistortionShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let mouse = { x: -9999, y: -9999 };
    let rafId: number;
    let maskGradient: CanvasGradient | null = null;

    function buildDots(w: number, h: number) {
      dots = [];
      for (let x = GAP; x < w; x += GAP) {
        for (let y = GAP; y < h; y += GAP) {
          dots.push({
            ox: x, oy: y,
            x, y,
            vx: 0, vy: 0,
            brightness: 0.5,
            glow: 0,
            breathPhase: Math.random() * Math.PI * 2,
            breathSpeed: 0.008 + Math.random() * 0.012,
          });
        }
      }
    }

    function buildMask(w: number, h: number) {
      maskGradient = ctx!.createLinearGradient(0, 0, 0, h);
      maskGradient.addColorStop(0, "rgba(0,0,0,0)");
      maskGradient.addColorStop(0.18, "rgba(0,0,0,0.55)");
      maskGradient.addColorStop(0.4, "rgba(0,0,0,0.75)");
      maskGradient.addColorStop(0.6, "rgba(0,0,0,0.75)");
      maskGradient.addColorStop(0.82, "rgba(0,0,0,0.55)");
      maskGradient.addColorStop(1, "rgba(0,0,0,0)");
    }

    function resize() {
      const { offsetWidth: w, offsetHeight: h } = canvas!;
      canvas!.width = w;
      canvas!.height = h;
      buildDots(w, h);
      buildMask(w, h);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function onMouseLeave() {
      mouse = { x: -9999, y: -9999 };
    }

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);

      // offscreen for mask compositing
      const offscreen = document.createElement("canvas");
      offscreen.width = w;
      offscreen.height = h;
      const off = offscreen.getContext("2d")!;

      for (const d of dots) {
        // breathing
        d.breathPhase += d.breathSpeed;
        const breathe = (Math.sin(d.breathPhase) * 0.5 + 0.5);

        // random glow burst
        if (Math.random() < BREATHE_CHANCE) d.glow = 1;
        if (d.glow > 0) d.glow -= 0.015;
        const glow = Math.max(0, d.glow) * breathe;

        // mouse push
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        const dist = Math.sqrt(dist2);

        if (dist < INFLUENCE_RADIUS && dist > 0) {
          const force = PUSH_STRENGTH / (dist2 + 1);
          d.vx += (dx / dist) * force * 0.016;
          d.vy += (dy / dist) * force * 0.016;
        }

        // spring return
        d.vx += (d.ox - d.x) * RETURN_SPEED;
        d.vy += (d.oy - d.y) * RETURN_SPEED;

        // damping
        d.vx *= 0.82;
        d.vy *= 0.82;

        d.x += d.vx;
        d.y += d.vy;

        const isNear = dist < INFLUENCE_RADIUS;
        const nearRatio = isNear ? 1 - dist / INFLUENCE_RADIUS : 0;

        // draw glow halo
        if (glow > 0.05 || nearRatio > 0.05) {
          const glowIntensity = Math.max(glow, nearRatio * 0.6);
          const grad = off.createRadialGradient(d.x, d.y, 0, d.x, d.y, DOT_RADIUS * 5);
          grad.addColorStop(0, `rgba(250,117,72,${glowIntensity * 0.55})`);
          grad.addColorStop(1, "rgba(250,117,72,0)");
          off.beginPath();
          off.arc(d.x, d.y, DOT_RADIUS * 5, 0, Math.PI * 2);
          off.fillStyle = grad;
          off.fill();
        }

        // draw dot
        const alpha = 0.35 + breathe * 0.2 + nearRatio * 0.45;
        off.beginPath();
        off.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        if (nearRatio > 0.1) {
          const r = Math.round(141 + nearRatio * 109);
          const g = Math.round(141 - nearRatio * 24);
          const b = Math.round(141 - nearRatio * 69);
          off.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        } else {
          off.fillStyle = `rgba(141,141,141,${alpha})`;
        }
        off.fill();
      }

      // apply vertical mask via destination-in
      off.globalCompositeOperation = "destination-in";
      off.fillStyle = maskGradient!;
      off.fillRect(0, 0, w, h);

      ctx!.drawImage(offscreen, 0, 0);

      rafId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "auto" }}
    />
  );
}
