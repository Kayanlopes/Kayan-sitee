"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "Webbie RH", link: "/projetos/webbie-rh" },
  { name: "NTX Bank", link: "/projetos/ntx-bank" },
  { name: "SPA AI Assistant", link: "/projetos/spa-ai-assistant" },
  { name: "Prolog App", link: "/projetos/prolog-app" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
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
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="md:hidden fixed top-0 inset-x-0 z-50"
    >
      <div className="flex items-center justify-between px-5 py-3 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]">
        <Image
          src="/contact-photo.jpg"
          alt="Kayan Cassariego"
          width={36}
          height={36}
          quality={100}
          unoptimized
          className="w-9 h-9 rounded-full object-cover"
        />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex items-center justify-center text-[#b9b9b9]"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full inset-x-0 w-full flex flex-col gap-4 bg-[#0a0a0a] p-5 border-b border-[rgba(255,255,255,0.08)]"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={() => setOpen(false)}
                className="font-overused text-[16px] text-[#b9b9b9] hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
