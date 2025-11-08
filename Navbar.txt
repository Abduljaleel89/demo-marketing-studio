import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Expertise", id: "expertise" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full bg-indigo-900/80 backdrop-blur-md shadow-md z-50 flex items-center justify-between px-8 py-4 text-white"
    >
      <h1 className="text-xl font-bold text-indigo-200">Demo Marketing Studio</h1>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`hover:text-indigo-400 transition ${
                activeSection === link.id
                  ? "border-b-2 border-indigo-400 text-indigo-300"
                  : ""
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
