import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold text-white mb-2"
        >
          Demo Marketing Studio
        </motion.h3>
        <p className="text-sm text-gray-400 mb-4">
          Elevating brands through creative innovation & digital strategy.
        </p>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Demo Marketing Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
