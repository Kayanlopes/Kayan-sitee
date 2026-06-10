"use client";

import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { Home } from "lucide-react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ICON_SIZE = 40;
const SPACING = 48; // icon width (40px) + gap (8px)

interface DockItemData {
  label: string;
  href: string;
  target?: string;
  rel?: string;
  icon: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const ITEMS: DockItemData[] = [
  {
    label: "Início",
    href: "#",
    icon: <Home className="w-5 h-5" />,
    onClick: (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kayan-cassariego-ux-ui-product-designer/",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/554898674784?text=Ol%C3%A1%20Kayan,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
    target: "_blank",
    rel: "noopener noreferrer",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

function DockIcon({ item, mouseX }: { item: DockItemData; mouseX: MotionValue<number> }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return 0;
    return val - (rect.left + rect.width / 2);
  });

  const scaleSync = useTransform(
    distance,
    [-SPACING * 2, -SPACING, 0, SPACING, SPACING * 2],
    [1, 1.15, 1.4, 1.15, 1],
  );
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 200, damping: 15 });

  return (
    <a
      ref={ref}
      href={item.href}
      target={item.target}
      rel={item.rel}
      onClick={item.onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center w-10 h-10 rounded-full text-[#b9b9b9] hover:text-[#fa7548] transition-colors"
    >
      <motion.div style={{ scale }} className="flex items-center justify-center w-full h-full rounded-full">
        {item.icon}
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 whitespace-nowrap rounded-md border border-[rgba(255,255,255,0.1)] bg-[rgba(20,20,20,0.9)] px-2 py-1 text-xs text-white"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </a>
  );
}

export default function FloatingDock() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      initial={{ opacity: 0, y: 20, x: "-50%" }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20, x: "-50%" }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(20,20,20,0.8)] px-4 py-2 backdrop-blur-md ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {ITEMS.map((item) => (
        <DockIcon key={item.label} item={item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
}
