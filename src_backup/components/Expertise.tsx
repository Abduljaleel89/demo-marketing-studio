import React from "react";
import { motion } from "framer-motion";

// âœ… Import images directly
import expertiseIdentity from "/assets/expertise/expertise-identity.jpg";
import expertiseContent from "/assets/expertise/expertise-content.jpg";
import expertiseAnalytics from "/assets/expertise/expertise-analytics.jpg";

const expertise = [
  {
    title: "Brand Identity",
    img: expertiseIdentity,
    desc: "Building cohesive, recognizable identities that define your brand voice and presence.",
  },
  {
    title: "Content Creation",
    img: expertiseContent,
    desc: "Crafting compelling content tailored to your audience and optimized for every platform.",
  },
  {
    title: "Analytics & Insights",
    img: expertiseAnalytics,
    desc: "Leveraging data analytics to measure, optimize, and enhance performance outcomes.",
  },
];


const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Areas of Expertise
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
