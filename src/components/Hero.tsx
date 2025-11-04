import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Transform Your Brand with <span className="text-indigo-400">Data-Driven Marketing</span>
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10">
        We craft digital experiences that elevate visibility, engage audiences, and drive measurable growth.
      </p>
      <a
        href="#contact"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition"
      >
        Start Your Project
      </a>
    </section>
  );
};

export default Hero;
