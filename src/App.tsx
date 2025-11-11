import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./components/Modal";
import SplashScreen from "./components/SplashScreen";
import { Volume2, VolumeX } from "lucide-react";
import { useAmbientAudio } from "./hooks/useAmbientAudio";
import { assetPath } from "./utils/assets";

const aiText = (topic: string) =>
  Array(8)
    .fill(
      `${topic} — At Demo Marketing Studio we merge cinematic storytelling with strategy and data. Each article explores creative innovation, emotional design, and performance-driven marketing that helps brands connect authentically.`
    )
    .join("\n\n");

const sections = [
  {
    id: "features",
    title: "Our Features",
    img: assetPath("assets/features/feature-design.jpg"),
    topics: [
      {
        name: "Creative Strategy",
        img: assetPath("assets/features/feature-strategy.jpg"),
        content: aiText("Creative Strategy"),
      },
      {
        name: "Marketing Design",
        img: assetPath("assets/features/feature-marketing.jpg"),
        content: aiText("Marketing Design"),
      },
      {
        name: "User Experience",
        img: assetPath("assets/features/feature-design.jpg"),
        content: aiText("User Experience"),
      },
    ],
  },
  {
    id: "expertise",
    title: "Our Expertise",
    img: assetPath("assets/expertise/expertise-content.jpg"),
    topics: [
      {
        name: "Identity Design",
        img: assetPath("assets/expertise/expertise-identity.jpg"),
        content: aiText("Identity Design"),
      },
      {
        name: "Content Creation",
        img: assetPath("assets/expertise/expertise-content.jpg"),
        content: aiText("Content Creation"),
      },
      {
        name: "Data Analytics",
        img: assetPath("assets/expertise/expertise-analytics.jpg"),
        content: aiText("Data Analytics"),
      },
    ],
  },
  {
    id: "portfolio",
    title: "Our Portfolio",
    img: assetPath("assets/portfolio/brandboost.jpg"),
    topics: [
      {
        name: "AdSphere",
        img: assetPath("assets/portfolio/adsphere.jpg"),
        content: aiText("AdSphere"),
      },
      {
        name: "BrandBoost",
        img: assetPath("assets/portfolio/brandboost.jpg"),
        content: aiText("BrandBoost"),
      },
      {
        name: "VisionFlow",
        img: assetPath("assets/portfolio/visionflow.jpg"),
        content: aiText("VisionFlow"),
      },
    ],
  },
  {
    id: "insights",
    title: "Latest Insights",
    img: assetPath("assets/portfolio/visionflow.jpg"),
    topics: [
      {
        name: "The Future of Creative AI",
        img: assetPath("assets/expertise/expertise-analytics.jpg"),
        content: aiText("The Future of Creative AI"),
      },
      {
        name: "Designing for Data",
        img: assetPath("assets/features/feature-marketing.jpg"),
        content: aiText("Designing for Data"),
      },
      {
        name: "Marketing in Motion",
        img: assetPath("assets/portfolio/adsphere.jpg"),
        content: aiText("Marketing in Motion"),
      },
    ],
  },
];

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [modal, setModal] = useState<any>(null);
  const [soundOn, setSoundOn] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("soundOn") !== "false";
  });

  useAmbientAudio(soundOn);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("soundOn", String(soundOn));
  }, [soundOn]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!showMain ? (
          <SplashScreen onGetStarted={() => setShowMain(true)} />
        ) : (
          <motion.div key="main" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Navbar />
            <Hero />

            <main className="pt-24 space-y-32 relative z-10">
              {sections.map((section) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  className="max-w-6xl mx-auto px-6 text-center relative z-20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">{section.title}</h2>

                  <img
                    src={section.img}
                    alt={section.title}
                    className="rounded-2xl shadow-2xl mx-auto mb-10 w-full max-w-3xl object-cover"
                  />

                  <div className="grid md:grid-cols-3 gap-6">
                    {section.topics.map((topic) => (
                      <motion.div
                        key={topic.name}
                        onClick={() => setModal(topic)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition-all z-30 pointer-events-auto"
                      >
                        <img
                          src={topic.img}
                          alt={topic.name}
                          className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                          {topic.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Click to read more</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </main>

            <Footer />
            <FloatingCTA />
            <ScrollToTop />

            <AnimatePresence>
              {modal && (
                <div className="fixed inset-0 z-[9999]">
                  <Modal title={modal.name} onClose={() => setModal(null)}>
                    {modal.content}
                  </Modal>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sound toggle */}
      <motion.button
        onClick={() => setSoundOn(!soundOn)}
        className="fixed bottom-8 left-8 z-[10000] bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
      >
        {soundOn ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
    </div>
  );
}
