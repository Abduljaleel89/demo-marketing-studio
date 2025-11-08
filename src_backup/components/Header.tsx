import React from "react"`r`nimport DarkToggle from "./DarkToggle";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <a
          href="#"
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-brand"
        >
          Demo Marketing Studio
        </a>
        <nav className="space-x-6 hidden sm:block">
          <a href="#hero" className="hover:text-brand">Home</a>
          <a href="#features" className="hover:text-brand">Features</a>
          <a href="#expertise" className="hover:text-brand">Expertise</a>
          <a href="#portfolio" className="hover:text-brand">Portfolio</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

