import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ArticleModal from "./components/ArticleModal";
import { articles } from "./data/articles";

// âœ¨ Intro screen with cinematic zoom-out
const IntroScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <motion.section
    className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white relative overflow-hidden"
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    {/* Subtle animated gradient background */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900 to-cyan-900/30 blur-3xl"
      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
    />
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-bold mb-4 z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
    >
      Demo Marketing Studio
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="text-lg opacity-80 mb-8 z-10"
    >
      Crafting digital experiences that captivate and convert.
    </motion.p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onStart}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:opacity-90 transition z-10"
    >
      Get Started
    </motion.button>
  </motion.section>
);

// âœ¨ Main landing page with zoom-in effect
const MainLandingPage: React.FC<{
  openArticle: (section: keyof typeof articles, key?: string) => void;
}> = ({ openArticle }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <Header />
    <main>
      <Hero openArticle={openArticle} />
      <Features openArticle={openArticle} />
      <Expertise openArticle={openArticle} />
      <Portfolio openArticle={openArticle} />
    </main>
    <Footer />
  </motion.div>
);

// âœ¨ AppContent Controller
const AppContent: React.FC = () => {
  const [started, setStarted] = useState(false);
  const { theme } = useTheme();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openArticle = (section: keyof typeof articles, key?: string) => {
    const sectionData = articles[section];
    const content =
      key && sectionData && typeof sectionData === "object"
        ? sectionData[key]
        : typeof sectionData === "string"
        ? sectionData
        : "No content found.";

    setModalTitle(
      key
        ? `${section.charAt(0).toUpperCase() + section.slice(1)} â€” ${key}`
        : section.charAt(0).toUpperCase() + section.slice(1)
    );
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-gray-900 text-white overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {!started ? (
            <IntroScreen key="intro" onStart={() => setStarted(true)} />
          ) : (
            <MainLandingPage key="landing" openArticle={openArticle} />
          )}
        </AnimatePresence>

        <ArticleModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalTitle}
          content={modalContent}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default AppContent;
