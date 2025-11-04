import React from "react";

const features = [
  {
    title: "Creative Design",
    desc: "Designs that captivate attention and inspire action — combining aesthetics with usability.",
  },
  {
    title: "Marketing Strategy",
    desc: "We craft performance-focused campaigns tailored to your goals for maximum impact.",
  },
  {
    title: "Brand Positioning",
    desc: "Helping brands find their voice and dominate their space with clarity and consistency.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What We Do Best</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
