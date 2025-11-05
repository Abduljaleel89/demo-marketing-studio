import React from "react";
import { motion } from "framer-motion";

// ✅ Import images directly
import novatech from "/assets/portfolio/novatech.jpg";
import brandboost from "/assets/portfolio/brandboost.jpg";
import visionflow from "/assets/portfolio/visionflow.jpg";
import adsphere from "/assets/portfolio/adsphere.jpg";

const projects = [
  { name: "NovaTech", img: novatech },
  { name: "BrandBoost", img: brandboost },
  { name: "VisionFlow", img: visionflow },
  { name: "AdSphere", img: adsphere },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Work
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white dark:bg-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold mt-4 mb-2">{p.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
