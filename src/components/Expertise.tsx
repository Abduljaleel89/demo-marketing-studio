import React from "react";

const expertise = [
  {
    title: "Analytics & Insights",
    desc: "Turning data into decisions with advanced reporting and performance analysis.",
  },
  {
    title: "Content Strategy",
    desc: "Crafting compelling narratives that align with your audience’s journey.",
  },
  {
    title: "Brand Identity",
    desc: "Building memorable brands through cohesive visuals, tone, and experience.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {expertise.map((e, i) => (
            <div key={i} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">{e.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
