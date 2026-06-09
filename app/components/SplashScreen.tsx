"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#fa7548]"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span className="font-poppins font-extrabold text-6xl text-[#0a0a0a]">KC</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
