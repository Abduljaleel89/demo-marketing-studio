import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "./components/Modal";
import SplashScreen from "./components/SplashScreen";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Volume2, VolumeX } from "lucide-react";

const aiText = (topic: string) =>
  Array(15)
    .fill(
      `${topic} — At Demo Marketing Studio, creativity meets precision. Each concept begins with an insight, evolves through design, and ends with measurable impact. Our approach integrates emotion, aesthetics, and strategy into one cohesive brand experience. We merge creative storytelling with analytical intelligence to craft campaigns that are both beautiful and effective.`
    )
    .join("\n\n");

const sections = [
  { id: "home", title: "Home", img: "/assets/hero/hero.jpg" },
  {
    id: "features",
    title: "Our Features",
    bg: "/assets/features/feature-design.jpg",
    topics: [
      {
        name: "Creative Strategy",
        img: "/assets/features/feature-strategy.jpg",
        content: aiText("Creative Strategy"),
      },
      {
        name: "Marketing Design",
        img: "/assets/features/feature-marketing.jpg",
        content: aiText("Marketing Design"),
      },
      {
        name: "User Experience",
        img: "/assets/features/feature-design.jpg",
        content: aiText("User Experience"),
      },
    ],
  },
  {
    id: "expertise",
    title: "Our Expertise",
    bg: "/assets/expertise/expertise-content.jpg",
    topics: [
      {
        name: "Identity Design",
        img: "/assets/expertise/expertise-identity.jpg",
        content: aiText("Identity Design"),
      },
      {
        name: "Content Creation",
        img: "/assets/expertise/expertise-content.jpg",
        content: aiText("Content Creation"),
      },
      {
        name: "Data Analytics",
        img: "/assets/expertise/expertise-analytics.jpg",
        content: aiText("Data Analytics"),
      },
    ],
  },
  {
    id: "portfolio",
    title: "Our Portfolio",
    bg: "/assets/portfolio/brandboost.jpg",
    topics: [
      {
        name: "AdSphere",
        img: "/assets/portfolio/adsphere.jpg",
        content: aiText("AdSphere"),
      },
      {
        name: "BrandBoost",
        img: "/assets/portfolio/brandboost.jpg",
        content: aiText("BrandBoost"),
      },
      {
        name: "VisionFlow",
        img: "/assets/portfolio/visionflow.jpg",
        content: aiText("VisionFlow"),
      },
      {
        name: "NovaTech",
        img: "/assets/portfolio/novatech.jpg",
        content: aiText("NovaTech"),
      },
    ],
  },
  { id: "contact", title: "Contact", bg: "/assets/hero/hero.jpg" },
];

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [modal, setModal] = useState<any>(null);
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  // Always show splash on reload
  useEffect(() => {
    setShowMain(false);
  }, []);

  const handleGetStarted = () => setShowMain(true);

  // 🎧 Audio initialization
  useEffect(() => {
    const audio = new Audio("/assets/sounds/ambient-hum.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    if (soundOn) {
      audio.play().then(() => {
        // smooth fade-in
        const fadeIn = setInterval(() => {
          if (audio.volume < 0.2) audio.volume += 0.02;
          else clearInterval(fadeIn);
        }, 100);
      }).catch(() => console.warn("Autoplay blocked until interaction."));
    }

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  // 🔇 Toggle mute/unmute (completely stops playback)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (soundOn) {
      audio.currentTime = 0;
      audio.play().then(() => {
        const fadeIn = setInterval(() => {
          if (audio.volume < 0.2) audio.volume += 0.02;
          else clearInterval(fadeIn);
        }, 100);
      }).catch(() => console.warn("User interaction required."));
    } else {
      const fadeOut = setInterval(() => {
        if (audio.volume > 0.02) audio.volume -= 0.02;
        else {
          clearInterval(fadeOut);
          audio.pause();
          audio.currentTime = 0; // fully stop
        }
      }, 100);
    }
  }, [soundOn]);

  return (
    <AnimatePresence mode="wait">
      {!showMain ? (
        <SplashScreen onGetStarted={handleGetStarted} />
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-700 relative overflow-hidden"
        >
          {/* 🌌 Background Particles */}
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: { color: "transparent" },
              fpsLimit: 60,
              particles: {
                color: { value: ["#6366f1", "#9333ea"] },
                move: { enable: true, speed: 1 },
                number: { value: 40, density: { enable: true, area: 800 } },
                opacity: { value: 0.4 },
                size: { value: { min: 1, max: 4 } },
                links: {
                  enable: true,
                  distance: 150,
                  color: "#6366f1",
                  opacity: 0.2,
                  width: 1,
                },
              },
            }}
          />

          {/* 🧭 Navbar */}
          <Navbar />

          {/* 🦄 Hero Section */}
          <section
            id="home"
            className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden"
          >
            <motion.img
              src="/assets/hero/hero.jpg"
              alt="Hero"
              className="absolute w-full h-full object-cover brightness-100 contrast-110 saturate-125"
              style={{ y }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>

            <div className="relative z-10 px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
                Where Creativity Meets Data
              </h1>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
                Empowering brands with cinematic storytelling and measurable impact.
              </p>
              <a
                href="#features"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
              >
                Discover More
              </a>
            </div>
          </section>

          {/* 🧱 Sections */}
          <main className="space-y-32 mt-24 relative z-10">
            {sections.slice(1, -1).map((section) => (
              <motion.section
                key={section.id}
                id={section.id}
                className="max-w-6xl mx-auto px-6 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-indigo-500 dark:text-indigo-400">
                  {section.title}
                </h2>
                <img
                  src={section.bg}
                  alt={section.title}
                  className="rounded-2xl shadow-2xl mx-auto mb-10 w-full max-w-3xl object-cover"
                />
                <div className="grid md:grid-cols-3 gap-6">
                  {section.topics?.map((topic) => (
                    <motion.div
                      key={topic.name}
                      onClick={() => setModal(topic)}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer bg-gradient-to-br from-gray-100 dark:from-gray-800 to-gray-200 dark:to-gray-900 p-6 rounded-xl border border-gray-300 dark:border-white/10 hover:border-indigo-400 shadow-sm hover:shadow-lg transition-all"
                    >
                      <img
                        src={topic.img}
                        alt={topic.name}
                        className="rounded-lg w-full h-40 object-cover mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
                        {topic.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Click to open article
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}
          </main>

          <section id="contact">
            <Footer />
          </section>

          <FloatingCTA />
          <ScrollToTop />

          {/* 🎵 Sound Toggle Button */}
          <motion.button
            onClick={() => setSoundOn(!soundOn)}
            className={`fixed bottom-6 left-6 z-[9999] p-4 rounded-full text-white shadow-2xl transition-all duration-500 ${
              soundOn
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 animate-pulse"
                : "bg-gray-700 hover:bg-gray-800"
            }`}
            whileHover={{
              scale: 1.15,
              boxShadow: soundOn
                ? "0 0 25px rgba(147, 51, 234, 0.6)"
                : "0 0 15px rgba(100, 116, 139, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            title={soundOn ? "Mute Music" : "Play Music"}
          >
            {soundOn ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </motion.button>

          <AnimatePresence>
            {modal && (
              <Modal
                title={modal.name}
                content={modal.content}
                onClose={() => setModal(null)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
