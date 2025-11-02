import React from "react";
import { motion } from "framer-motion";

import BrandBoost from "../assets/portfolio/brandboost.jpg";
import NovaTech from "../assets/portfolio/novatech.jpg";
import VisionFlow from "../assets/portfolio/visionflow.jpg";

const projects = [
  {
    name: "BrandBoost",
    description:
      "A bold rebrand and website revamp for a fast-growing startup.",
    image: BrandBoost,
    link: "#",
  },
  {
    name: "NovaTech Launch",
    description:
      "Conversion-focused landing page for an innovative product launch.",
    image: NovaTech,
    link: "#",
  },
  {
    name: "VisionFlow",
    description:
      "Interactive dashboard for real-time analytics and user engagement.",
    image: VisionFlow,
    link: "#",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12"
        >
          Our Portfolio
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image Wrapper with hover motion */}
              <motion.div
                className="overflow-hidden relative"
                whileHover={{
                  scale: 1.08,
                  rotateZ: 1,
                }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition"
                  whileHover={{
                    scale: 1.15,
                    rotateZ: 1.5,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Text Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-brand mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-brand hover:underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
