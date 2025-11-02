import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

// Theme toggle button
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-2 rounded-full shadow-lg border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 z-50"
      title="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

// Landing page main sections
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

// Hero intro view (first screen)
const IntroScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <motion.section
    className="min-h-screen flex flex-col items-center justify-center text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-brand">
      Demo Marketing Studio
    </h1>
    <p className="text-lg opacity-80 mb-8">
      Crafting digital experiences that captivate and convert.
    </p>
    <button
      onClick={onStart}
      className="px-6 py-3 bg-gradient-brand text-white rounded-full shadow-lg hover:opacity-90 transition"
    >
      Get Started
    </button>
  </motion.section>
);

const MainLandingPage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Header />
    <main>
      <Hero />
      <Features />
      <Expertise />
      <Portfolio />
    </main>
    <Footer />
  </motion.div>
);

// App content wrapper
const AppContent: React.FC = () => {
  const [started, setStarted] = useState(false);
  const { theme } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen"
      >
        <ThemeToggle />
        <AnimatePresence mode="wait">
          {!started ? (
            <IntroScreen key="intro" onStart={() => setStarted(true)} />
          ) : (
            <MainLandingPage key="landing" />
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

// Wrap with theme provider
const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
