import React from "react";
import { motion } from "framer-motion";

const expertiseAreas = [
  {
    title: "Brand Identity",
    description:
      "We shape memorable brands with consistent tone, color, and visuals that build trust and recognition.",
  },
  {
    title: "Content Creation",
    description:
      "Our creative storytellers design digital assets that engage audiences and convert interest into action.",
  },
  {
    title: "SEO & Analytics",
    description:
      "We enhance your visibility and measure your growth through optimized, data-driven strategies.",
  },
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          Our Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg bg-gray-50 dark:bg-gray-900 transition"
            >
              <h3 className="text-xl font-semibold text-brand mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
