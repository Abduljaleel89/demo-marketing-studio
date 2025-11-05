import React from "react";
import { motion } from "framer-motion";
import articles from "../data/articles";

const Insights = () => {
  return (
    <section id="insights" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Insights & Strategy
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-500">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.summary}
              </p>
              <a
                href={article.link}
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
