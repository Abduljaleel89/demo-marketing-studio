import React from "react";
import { motion } from "framer-motion";
import heroImg from "/assets/hero/hero.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gray-950 text-center overflow-hidden"
    >
      {/* Background Image with Soft Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Marketing team working together"
          className="w-full h-full object-cover brightness-75"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
      </div>

      {/* Content Section */}
      <motion.div
        className="relative z-10 px-6 max-w-3xl mx-auto text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]">
            Transform Your Brand Presence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          We help businesses connect with their audiences through impactful
          storytelling, data-driven insights, and creative digital strategies.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary Button - Glowing Blue */}
          <motion.a
            href="#features"
            className="relative px-8 py-3 rounded-full font-semibold text-white bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300 ease-in-out"
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 30px rgba(59,130,246,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Features
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 blur-lg transition-opacity duration-500 hover:opacity-30"></span>
          </motion.a>

          {/* Secondary Button - Glowing Outline */}
          <motion.a
            href="#contact"
            className="relative px-8 py-3 rounded-full font-semibold border-2 border-indigo-400 text-indigo-400 hover:text-white hover:bg-indigo-500 transition-all duration-300 ease-in-out shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 30px rgba(99,102,241,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 blur-lg transition-opacity duration-500 hover:opacity-30"></span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
