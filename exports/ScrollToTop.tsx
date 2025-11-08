import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          key="scrollTop"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-10 right-8 z-[9999] flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full p-3 shadow-xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              boxShadow: [
                "0 0 0px rgba(99,102,241,0.4)",
                "0 0 25px rgba(99,102,241,0.8)",
                "0 0 0px rgba(99,102,241,0.4)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 35px rgba(147,51,234,0.8)",
            }}
            className="rounded-full"
          >
            <ArrowUpCircle
              size={36}
              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
