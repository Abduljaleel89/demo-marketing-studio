import React, { useState, lazy, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import FloatingCTA from "./components/FloatingCTA";
import ScrollToTop from "./components/ScrollToTop";

// ✅ Lazy load large sections
const Hero = lazy(() => import("./components/Hero"));
const Features = lazy(() => import("./components/Features"));
const Expertise = lazy(() => import("./components/Expertise"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Insights = lazy(() => import("./components/Insights"));
const Footer = lazy(() => import("./components/Footer"));

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
    name="keywords"
    content="marketing, digital agency, creative strategy, data-driven growth, branding, design, analytics"
  />
  <meta name="author" content="Demo Marketing Studio" />

  {/* ✅ OpenGraph Metadata for social sharing */}
  <meta property="og:title" content="Demo Marketing Studio | Where Creativity Meets Data" />
  <meta
    property="og:description"
    content="Empowering brands through creativity, strategy, and measurable results."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://abduljaleel89.github.io/demo-marketing-studio/" />
  <meta property="og:image" content="https://abduljaleel89.github.io/demo-marketing-studio/github-banner.png" />
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="640" />

  {/* ✅ Twitter Card Metadata */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Demo Marketing Studio" />
  <meta
    name="twitter:description"
    content="Where Creativity Meets Data — Demo Marketing Studio delivers data-driven strategy and digital design."
  />
  <meta name="twitter:image" content="https://abduljaleel89.github.io/demo-marketing-studio/github-banner.png" />

  {/* ✅ Favicon & Canonical */}
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="canonical" href="https://abduljaleel89.github.io/demo-marketing-studio/" />
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
              <Navbar />
              <Suspense fallback={<div className="p-12 text-center text-gray-400">Loading content...</div>}>
                <main>
                  <Hero />
                  <Features />
                  <Expertise />
                  <Portfolio />
                  <Insights />
                  <Footer />
                </main>
              </Suspense>
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
