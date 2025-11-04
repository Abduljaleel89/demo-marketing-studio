import React from "react";
import { motion } from "framer-motion";
import brandboostImg from "../assets/portfolio/brandboost.jpg";
import visionflowImg from "../assets/portfolio/visionflow.jpg";
import adsphereImg from "../assets/portfolio/adsphere.jpg";

const Portfolio: React.FC<{
  openArticle: (section: "portfolio", key?: string) => void;
}> = ({ openArticle }) => {
  const projects = [
    {
      key: "brandboost",
      title: "BrandBoost",
      description:
        "A bold rebrand and website revamp for a fast-growing startup.",
      image: brandboostImg,
    },
    {
      key: "visionflow",
      title: "VisionFlow",
      description:
        "Interactive dashboard for real-time analytics and user engagement.",
      image: visionflowImg,
    },
    {
      key: "adsphere",
      title: "AdSphere",
      description:
        "A modern advertising analytics platform built for smart insights.",
      image: adsphereImg,
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16"
        >
          Our Portfolio
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-brand mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <button
                onClick={() => openArticle("portfolio", project.key)}
                className="text-indigo-400 hover:underline font-medium"
              >
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
