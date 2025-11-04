import React from "react";
import { motion } from "framer-motion";
import strategyImg from "../assets/features/feature-strategy.jpg";
import designImg from "../assets/features/feature-design.jpg";
import marketingImg from "../assets/features/feature-marketing.jpg";

const Features: React.FC<{
  openArticle: (section: "features", key?: string) => void;
}> = ({ openArticle }) => {
  const features = [
    {
      key: "strategy",
      title: "Brand Strategy",
      description:
        "We build data-driven marketing strategies that align with your business goals and strengthen your digital presence.",
      image: strategyImg,
    },
    {
      key: "design",
      title: "Creative Design",
      description:
        "Our creative team blends innovation with design excellence to create visually stunning experiences that inspire trust.",
      image: designImg,
    },
    {
      key: "marketing",
      title: "Digital Marketing",
      description:
        "From social media to paid campaigns, we deliver measurable results through targeted, performance-driven marketing solutions.",
      image: marketingImg,
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16"
        >
          Our Key Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-brand mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <button
  onClick={() => openArticle("features", item.key)}
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

export default Features;
