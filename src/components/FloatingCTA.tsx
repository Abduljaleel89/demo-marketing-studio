import React from "react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.a
      href="#footer"
      className="fixed bottom-8 right-8 z-50 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      ✉ Contact Us
    </motion.a>
  );
};

export default FloatingCTA;
