import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowTop(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ðŸ”¹ Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-indigo-600 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
      />

      {/* ðŸ”¹ Floating Buttons Container */}
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
        {/* Back to Top Button */}
        {showTop && (
          <motion.button
            onClick={scrollToTop}
            className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            aria-label="Back to top"
          >
            â†‘
          </motion.button>
        )}

        {/* Contact Button */}
        <motion.a
          href="#footer"
          className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          âœ‰ Contact Us
        </motion.a>
      </div>
    </>
  );
};

export default FloatingCTA;
