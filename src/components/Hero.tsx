import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero/hero.jpg";

const Hero: React.FC<{ openArticle: (section: "hero") => void }> = ({
  openArticle,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center bg-gray-900 text-white"
    >
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          Transform Your Brand Presence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200"
        >
          We help businesses connect with their audiences through impactful
          storytelling, and results-driven digital strategies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          <button
            onClick={() => openArticle("hero")}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-medium hover:opacity-90 transition"
          >
            Explore Our Features
          </button>

          <button className="px-8 py-3 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
