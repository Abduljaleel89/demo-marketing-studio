import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-top"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 right-8 z-[9999] flex flex-col items-center"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="mb-2 px-3 py-1 text-xs font-medium bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-black rounded-md shadow-lg"
              >
                Back to top
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={scrollToTop}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:scale-110 transition-all duration-300 dark:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            title="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
