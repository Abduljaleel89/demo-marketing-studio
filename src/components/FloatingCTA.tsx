import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.a
      href="#contact-info"
      className="fixed bottom-10 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-indigo-500/40 hover:scale-110 transition-all z-[999]"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={22} />
    </motion.a>
  );
}
