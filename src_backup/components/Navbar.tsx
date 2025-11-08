import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  // ðŸ§­ Track scroll position for section highlight
  useEffect(() => {
    const sections = ["hero", "features", "expertise", "portfolio", "footer"];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      let currentSection = "hero";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ðŸŒˆ Scroll progress bar animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Expertise", href: "#expertise", id: "expertise" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Contact", href: "#footer", id: "footer" },
  ];

  return (
    <>
      {/* ðŸŒˆ Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 z-[10000]"
        style={{ scaleX }}
      />

      {/* ðŸ§­ Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[9999] backdrop-blur-2xl border-b transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-950/80 border-indigo-500/20 shadow-lg"
            : "bg-gradient-to-r from-indigo-900/70 via-purple-800/70 to-blue-900/70 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl md:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500 hover:opacity-90 transition"
          >
            Demo Marketing Studio
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                className={`relative font-semibold text-sm tracking-wide transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-800 dark:text-gray-100"
                    : "text-gray-100"
                } ${
                  activeSection === item.id
                    ? "text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                    : ""
                }`}
                whileHover={{ scale: 1.08 }}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-indigo-400 to-blue-400 transition-all duration-500 ${
                    activeSection === item.id ? "w-full" : "w-0 hover:w-full"
                  }`}
                ></span>
              </motion.a>
            ))}

            {/* Theme Toggle (from context) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-100" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:scale-105 transition-transform"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-100" />
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white hover:text-indigo-400 transition-all duration-300"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ðŸ“± Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-xl z-[9998] flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]"
                    : "text-gray-100"
                } hover:text-indigo-400`}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}

            <div className="w-2/3 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-60"></div>

            <button
              onClick={() => setMenuOpen(false)}
              className="mt-6 text-gray-300 hover:text-indigo-400 transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
