import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Insights from "./components/Insights";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import FloatingCTA from "./components/FloatingCTA";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          <title>Demo Marketing Studio | Where Creativity Meets Data</title>
          <meta
            name="description"
            content="Demo Marketing Studio — where creativity meets data to accelerate your brand’s growth."
          />
          <meta
            property="og:title"
            content="Demo Marketing Studio | Where Creativity Meets Data"
          />
          <meta
            property="og:description"
            content="We combine strategy, design, and data to build brands that grow."
          />
          <meta property="og:image" content="/social-preview.png" />
          <meta
            property="og:url"
            content="https://abduljaleel89.github.io/demo-marketing-studio/"
          />
          <meta property="og:type" content="website" />
        </Helmet>

        <AnimatePresence mode="wait">
          {!showMain ? (
            <motion.div
              key="splash"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <SplashScreen onGetStarted={() => setShowMain(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500"
            >
              {/* Navbar */}
              <Navbar />

              {/* Main Content */}
              <main>
                <Hero />
                <Features />
                <Expertise />
                <Portfolio />
                <Insights />
                <Footer />
              </main>

              {/* Floating CTA and Scroll to Top */}
              <FloatingCTA />
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
