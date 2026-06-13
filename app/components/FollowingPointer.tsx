"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

function ArrowIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.65 3.15 L17.5 8.5 L12 10.5 L9.5 16.5 Z" fill={color} />
    </svg>
  );
}

function SparkleIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2 L11.5 8.5 L18 10 L11.5 11.5 L10 18 L8.5 11.5 L2 10 L8.5 8.5 Z"
        fill={color}
      />
    </svg>
  );
}

export default function FollowingPointer() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button']"));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onDown = () => {
      setClicking(true);
      if (clickTimer.current) clearTimeout(clickTimer.current);
      clickTimer.current = setTimeout(() => setClicking(false), 200);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      if (clickTimer.current) clearTimeout(clickTimer.current);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  const accentColor = "#fa7548";
  const iconColor = clicking ? "#ffffff" : accentColor;
  const badgeBg = hovering ? "#ffffff" : accentColor;
  const badgeText = hovering ? "#0a0a0a" : "#ffffff";
  const badgeLabel = hovering ? "Clique" : "Você está aqui";

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Icon — arrow or sparkle on click */}
      <AnimatePresence mode="wait" initial={false}>
        {clicking ? (
          <motion.span
            key="sparkle"
            initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.12 }}
          >
            <SparkleIcon color={iconColor} />
          </motion.span>
        ) : (
          <motion.span
            key="arrow"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <ArrowIcon color={iconColor} />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Badge */}
      <motion.div
        className="absolute top-5 left-4 font-overused font-medium text-[12px] leading-none rounded-full px-3 py-1 whitespace-nowrap"
        style={{ backgroundColor: badgeBg, color: badgeText }}
        animate={{ scale: clicking ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {badgeLabel}
      </motion.div>
    </motion.div>
  );
}
