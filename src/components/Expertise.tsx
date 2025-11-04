import React from "react";
import { motion } from "framer-motion";
import identityImg from "../assets/expertise/expertise-identity.jpg";
import contentImg from "../assets/expertise/expertise-content.jpg";
import analyticsImg from "../assets/expertise/expertise-analytics.jpg";

const Expertise: React.FC<{
  openArticle: (section: "expertise", key?: string) => void;
}> = ({ openArticle }) => {
  const expertise = [
    {
      key: "identity",
      title: "Brand Identity",
      description:
        "We shape memorable brands with consistent tone, color, and visuals that build trust and recognition.",
      image: identityImg,
    },
    {
      key: "content",
      title: "Content Creation",
      description:
        "Our creative storytellers design digital assets that engage audiences and convert interest into action.",
      image: contentImg,
    },
    {
      key: "analytics",
      title: "SEO & Analytics",
      description:
        "We enhance your visibility and measure growth through optimized, data-driven strategies.",
      image: analyticsImg,
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16"
        >
          Our Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {expertise.map((item, index) => (
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
                onClick={() => openArticle("expertise", item.key)}
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

export default Expertise;
