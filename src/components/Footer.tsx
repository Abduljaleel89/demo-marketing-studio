import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-32 py-12 bg-gradient-to-br from-indigo-950 to-gray-950 text-gray-300 text-center"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-indigo-400">
          Let’s Collaborate
        </h2>
        <p className="text-gray-400 mb-6">
          We create campaigns that combine emotion, storytelling, and analytics
          for measurable impact.
        </p>
        <a
          href="mailto:hello@demomarketing.com"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-indigo-400/50 transition-all hover:scale-105"
        >
          hello@demomarketing.com
        </a>

        <div className="mt-10 text-sm text-gray-500">
          {"\u00A9"} {new Date().getFullYear()} Demo Marketing Studio. All rights
          reserved.
        </div>
      </motion.div>
    </footer>
  );
}
