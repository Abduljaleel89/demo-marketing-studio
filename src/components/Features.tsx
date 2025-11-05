import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Strategy & Planning",
    description:
      "Crafting smart, data-backed strategies to elevate your brand presence and ROI.",
    icon: "🧭",
  },
  {
    title: "Creative Design",
    description:
      "Designing visuals that not only attract but convert — creative storytelling at its finest.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description:
      "End-to-end digital campaigns built to drive measurable growth and engagement.",
    icon: "📈",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Core Features
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
