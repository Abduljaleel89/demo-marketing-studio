import React from "react";
import { motion } from "framer-motion";

const heroContainer = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, when: "beforeChildren" } }
};
const fadeUp = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="show"
          variants={heroContainer}
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 mb-4">
              ✨ AI + Creativity
            </div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Marketing that converts.{" "}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-cyan-400">
                Fueled by intelligence & design.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg text-slate-600">
              We craft high-performance campaigns, brands, and digital experiences powered by creativity, data, and AI.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex gap-3 items-center">
              <a
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-400 to-cyan-400 text-white px-5 py-3 rounded-lg shadow-lg"
                href="#contact"
              >
                Start a project
              </a>
              <a className="text-sm px-4 py-3 rounded-lg border" href="#portfolio">
                View work
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <motion.img
              src={import.meta.env.BASE_URL + "images/hero.png"}
              alt="Creative marketing studio"
              className="w-full h-80 object-cover rounded-2xl shadow-xl object-center relative z-10"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl pointer-events-none z-0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

