import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.a
      href="#footer"
      className="group fixed bottom-8 right-8 z-[9000] bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-all flex items-center gap-2 border border-indigo-400/40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.08 }}
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <MessageCircle className="w-5 h-5" />
      </motion.div>
      Contact Us
    </motion.a>
  );
};

export default FloatingCTA;
