import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-md bg-gray-200 dark:bg-gray-800 transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === "dark" ? (
        <motion.div
          key="sun"
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Sun className="w-5 h-5 text-yellow-400" />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -90, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Moon className="w-5 h-5 text-indigo-600" />
        </motion.div>
      )}
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </motion.button>
  );
};

export default ThemeToggle;
