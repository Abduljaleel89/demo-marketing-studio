import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-brand text-white relative overflow-hidden"
    >
      {/* Glowing Aura */}
      <motion.div
        className="absolute w-60 h-60 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-pink-400 to-cyan-400"
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{
          scale: [0.8, 1.05, 0.8],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Animated Logo */}
      <motion.img
        src={Logo}
        alt="Demo Marketing Studio Logo"
        className="w-28 h-28 mb-8 relative z-10"
        initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1, 0.9],
          opacity: 1,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl px-6 z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Empowering brands to shine online
        </h2>
        <p className="text-lg mb-8 opacity-90">
          We craft websites and campaigns that elevate your digital presence.
        </p>
        <a
          href="#features"
          className="px-6 py-3 bg-white text-brand font-semibold rounded-full shadow-md hover:opacity-90 transition"
        >
          Learn More
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
