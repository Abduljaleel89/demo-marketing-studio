import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-10 bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-brand">
          Demo Marketing Studio
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Empowering brands through design, strategy, and digital innovation.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="#"
            className="hover:text-brand transition"
            aria-label="Twitter"
          >
            🐦
          </a>
          <a
            href="#"
            className="hover:text-brand transition"
            aria-label="LinkedIn"
          >
            💼
          </a>
          <a
            href="#"
            className="hover:text-brand transition"
            aria-label="Instagram"
          >
            📸
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-600">
          © {new Date().getFullYear()} Demo Marketing Studio. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
