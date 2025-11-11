import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const links = [
  { id: "features", label: "Features" },
  { id: "expertise", label: "Expertise" },
  { id: "portfolio", label: "Portfolio" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });
  const [navWidth, setNavWidth] = useState<number | null>(null);
  const [navOffset, setNavOffset] = useState<number>(0);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) {
      const rect = nav.getBoundingClientRect();
      setNavWidth(rect.width);
      setNavOffset(rect.left);
    }

    const handleResize = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        const rect = nav.getBoundingClientRect();
        setNavWidth(rect.width);
        setNavOffset(rect.left);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const sections = links.map((l) => l.id);
      let current = "";
      for (const id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop - 120 <= scrollTop &&
          section.offsetTop + section.offsetHeight - 120 > scrollTop
        ) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // compute exact pixel-based dot position relative to navbar
  const dotPosition =
    navWidth && navOffset !== null ? (navWidth * scrollProgress) / 100 + navOffset : 0;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[60] backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm border-b border-white/10 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-6 relative overflow-visible">
          <motion.h1
            className="font-bold text-lg md:text-xl text-indigo-700 dark:text-indigo-400 tracking-wide cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Demo Marketing Studio
          </motion.h1>

          <ul className="flex space-x-6 text-gray-800 dark:text-gray-200 font-medium">
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`cursor-pointer hover:text-indigo-500 transition-colors ${
                  activeSection === link.id
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-6 p-2 rounded-full bg-indigo-600 text-white shadow hover:scale-110 transition-transform"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Progress Line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-indigo-500 rounded-full"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </nav>

      {/* Perfectly aligned dot — above navbar */}
      <motion.div
        className="fixed top-[6px] z-[70]"
        style={{
          left: `${dotPosition}px`,
          transform: "translateX(-50%)",
        }}
      >
        <motion.div
          className="w-3.5 h-3.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shadow-lg ring-2 ring-indigo-300/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
}
