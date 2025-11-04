import React from "react";

const projects = [
  {
    name: "AdSphere",
    summary: "Boosted brand visibility and lead conversions by 45% through data-driven rebranding.",
    image: "/src/assets/portfolio/adsphere.jpg",
  },
  {
    name: "BrandBoost",
    summary: "Launched a high-impact digital campaign reaching over 2M targeted impressions.",
    image: "/src/assets/portfolio/brandboost.jpg",
  },
  {
    name: "VisionFlow",
    summary: "Revitalized customer engagement with a sleek new digital identity and UX redesign.",
    image: "/src/assets/portfolio/visionflow.jpg",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
              <img src={p.image} alt={p.name} className="w-full h-64 object-cover" loading="lazy" />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{p.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
