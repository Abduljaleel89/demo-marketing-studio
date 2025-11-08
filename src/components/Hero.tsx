import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-white text-center"
    >
      {/* Background Image (Fades from blur → crisp) */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/assets/hero/hero.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, filter: "blur(12px) brightness(0.7)" }}
          animate={{ opacity: 1, filter: "blur(0px) brightness(1)" }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* Gradient Overlay placed BELOW text */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/50 to-indigo-900/70 z-10 pointer-events-none"></div>

      {/* Hero Text Layer */}
      <motion.div
        className="relative z-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl">
          Demo Marketing Studio
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed">
          Where cinematic storytelling meets data-driven creativity.
        </p>

        <motion.a
          href="#features"
          className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-indigo-500/50 hover:scale-110 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Explore
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-20 text-gray-300 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        ↓
      </motion.div>
    </section>
  );
}
