"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

interface NavItem {
  name: string;
  link: string;
  icon: ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", link: "/", icon: <Home className="w-4 h-4" /> },
  { name: "Webbie RH", link: "/projetos/webbie-rh", icon: <Layers className="w-4 h-4" /> },
  { name: "NTX Bank", link: "/projetos/ntx-bank", icon: <Layers className="w-4 h-4" /> },
  { name: "SPA AI Assistant", link: "/projetos/spa-ai-assistant", icon: <Layers className="w-4 h-4" /> },
  { name: "Prolog App", link: "/projetos/prolog-app", icon: <Layers className="w-4 h-4" /> },
];

export default function ProjectFloatingNav() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    const previous = scrollYProgress.getPrevious() ?? 0;
    const direction = current - previous;

    if (current < 0.05) {
      setVisible(true);
    } else {
      setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-4 md:top-6 inset-x-0 mx-auto z-50 flex max-w-fit items-center gap-0.5 md:gap-1 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(20,20,20,0.8)] px-1.5 md:px-2 py-1.5 md:py-2 backdrop-blur-md"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.link;

          return (
            <Link
              key={item.link}
              href={item.link}
              className={`flex items-center gap-2 rounded-full px-2 md:px-3 py-1.5 md:py-2 font-overused text-[13px] transition-colors ${
                isActive ? "text-[#fa7548]" : "text-[#b9b9b9] hover:text-white"
              }`}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
