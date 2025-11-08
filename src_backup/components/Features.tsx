import React from "react";

const services = [
  {
    key: "brand",
    title: "Brand & Visual Identity",
    img: "/images/portfolio2.png",
    blurb:
      "We design memorable brand systems that cut through noise. From logo & color systems to full visual toolkits, we create assets that build trust and scale across channels.",
    article:
      "A cohesive identity makes every campaign more effective. We audit your market positioning, craft an ownable visual voice, and deliver ready-to-use brand assets so your ads, landing pages and socials all convert better."
  },
  {
    key: "ads",
    title: "Performance Ads",
    img: "/images/portfolio1.png",
    blurb:
      "ROI-first ad programs across Meta, Google and TikTok. We optimize creative, audience, and funnels to lower CPA and scale what works.",
    article:
      "High-performing ads are a mix of creative testing and data-driven optimization. We run rapid creative experiments, measure real-world LTV, and scale winners — so your ad spend buys predictable, repeatable growth."
  },
  {
    key: "ai",
    title: "AI Content Studio",
    img: "/images/portfolio3.png",
    blurb:
      "Automate creative production without losing craft. We combine AI speed with human polish to deliver content at scale.",
    article:
      "Create more content with the same team: AI drafts, human edits. We produce headline-tested ad variants, long-form pieces and platform-specific creative that maintain brand tone while saving production time and budget."
  }
];

export default function Features() {
  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">What We Do</h2>
          <p className="mt-2 text-slate-600 max-w-xl">
            From brand systems to paid performance, we deliver measurable growth — with clarity, creativity, and speed.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.key}
              className="relative rounded-2xl overflow-hidden bg-white shadow-md transform transition hover:-translate-y-2"
              aria-labelledby={`srv-${s.key}-title`}
            >
              <div className="h-44 w-full overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 id={`srv-${s.key}-title`} className="font-semibold text-lg">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">{s.blurb}</p>

                <div className="mt-4 text-sm text-slate-700 leading-snug">
                  {s.article}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg bg-gradient-to-r from-brand-400 to-cyan-400 shadow-sm"
                  >
                    Start a project
                  </a>
                  <a href="#portfolio" className="text-sm text-slate-500 hover:underline">
                    View examples →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
