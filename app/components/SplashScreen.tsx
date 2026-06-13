"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DISPLAY_DURATION = 1200;
const EXIT_DURATION = 0.6;

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => setVisible(false), DISPLAY_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#fa7548]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: EXIT_DURATION, ease: "easeInOut" }}
        >
          <span className="font-poppins font-extrabold text-6xl text-[#0a0a0a]">KC</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
