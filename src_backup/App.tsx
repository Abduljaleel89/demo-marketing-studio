import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Insights from "./components/Insights";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import FloatingCTA from "./components/FloatingCTA";

const App = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet>
          {/* âœ… Page Title & Description */}
          <title>Demo Marketing Studio | Where Creativity Meets Data</title>
          <meta
            name="description"
            content="Demo Marketing Studio helps brands grow with data-driven creativity, cinematic storytelling, and measurable impact."
          />
          <meta
            name="keywords"
            content="marketing, creative studio, data-driven, advertising, branding, growth, web design, content strategy"
          />
          <meta name="author" content="Demo Marketing Studio" />

          {/* âœ… Favicon and App Icons */}
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-startup-image" href="/splashscreen.png" />

          {/* âœ… Theme + PWA Colors */}
          <meta name="theme-color" content="#0a0f1f" />
          <meta name="background-color" content="#0a0f1f" />

          {/* âœ… Open Graph / Facebook / LinkedIn */}
          <meta
            property="og:title"
            content="Demo Marketing Studio | Where Creativity Meets Data"
          />
          <meta
            property="og:description"
            content="Experience cinematic design and data-driven growth. Crafted by Demo Marketing Studio."
          />
          <meta property="og:image" content="/github-banner.png" />
          <meta
            property="og:url"
            content="https://abduljaleel89.github.io/demo-marketing-studio/"
          />
          <meta property="og:type" content="website" />

          {/* âœ… Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Demo Marketing Studio" />
          <meta
            name="twitter:description"
            content="Where creativity meets data â€” your brandâ€™s next cinematic evolution."
          />
          <meta name="twitter:image" content="/github-banner.png" />

          {/* âœ… Canonical URL */}
          <link
            rel="canonical"
            href="https://abduljaleel89.github.io/demo-marketing-studio/"
          />
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
              <main>
                <Hero />
                <Features />
                <Expertise />
                <Portfolio />
                <Insights />
                <Footer />
              </main>
            </motion.div>
          )}
        </AnimatePresence>
        <FloatingCTA />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;

