import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={import.meta.env.BASE_URL + "images/team.png"}
            alt="Marketing team collaboration"
            className="w-full h-80 object-cover rounded-2xl shadow-lg object-center"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Meet the BrightWave team</h2>
          <p className="text-slate-600 mb-4">
            We’re a collective of strategists, designers, and growth marketers who merge creativity and data to build
            digital brands that thrive.
          </p>
          <ul className="space-y-2 text-slate-700">
            <li>✅ Experienced across 12+ industries</li>
            <li>✅ 200+ campaigns launched successfully</li>
            <li>✅ Driven by measurable performance and long-term client partnerships</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

