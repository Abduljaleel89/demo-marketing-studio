import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.svg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-brand text-white relative overflow-hidden"
    >
      {/* Animated Logo */}
      <motion.img
        src={Logo}
        alt="Demo Marketing Studio Logo"
        className="w-28 h-28 mb-8"
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
        className="max-w-2xl px-6"
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
