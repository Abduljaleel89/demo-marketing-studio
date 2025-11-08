import React from "react";
import { motion } from "framer-motion";

const items = [
  { title: "SaaS Launch Campaign", img: "/images/portfolio1.png" },
  { title: "Brand Evolution — Fintech", img: "/images/portfolio2.png" },
  { title: "Creative Growth Sprint", img: "/images/portfolio3.png" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const card = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6">Our Work</h3>
        <motion.div variants={container} initial="hidden" animate="show" className="grid md:grid-cols-3 gap-6">
          {items.map((w, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-lg overflow-hidden card-glow bg-white transition-shadow"
            >
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                onError={(e: any) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/hero.png";
                }}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-4">
                <div className="font-semibold">{w.title}</div>
                <div className="text-sm text-slate-500 mt-1">Case study + performance results</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
