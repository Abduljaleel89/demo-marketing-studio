import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";

// ✅ Lazy-load the heavy tsparticles dependency
const Particles = lazy(() => import("react-tsparticles"));
import { loadFull } from "tsparticles";

const SplashScreen = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [showParticles, setShowParticles] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [hovered, setHovered] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const controls = useAnimation();

  const taglines = useMemo(
    () => [
      "Where Creativity Meets Data to Accelerate Your Brand’s Growth.",
      "Turning Insights into Actionable Results.",
      "Crafting Brands that Connect and Convert.",
      "Innovation. Design. Growth. Simplified.",
    ],
    []
  );

  // Simulate loading delay & defer particles
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowParticles(true), 600);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Gradient background motion
  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 18, ease: "easeInOut", repeat: Infinity },
    });
  }, [controls]);

  // Rotate taglines every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  // Mouse tilt
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    const rotateX = (y / window.innerHeight) * 15;
    const rotateY = -(x / window.innerWidth) * 15;
    setTilt({ rotateX, rotateY });
  };

  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden cursor-default relative"
      style={{
        backgroundImage:
          "linear-gradient(120deg, #0f172a, #1e3a8a, #312e81, #1e1b4b)",
        backgroundSize: "400% 400%",
        perspective: "1000px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onMouseMove={handleMouseMove}
    >
      {/* ✅ Lazy-loaded particle background */}
      {showParticles && (
        <Suspense fallback={null}>
          <Particles
            id="tsparticles"
            init={async (main) => await loadFull(main)}
            options={{
              fullScreen: { enable: false },
              background: { color: "transparent" },
              particles: {
                number: { value: 30, density: { enable: true, area: 800 } },
                color: { value: "#818cf8" },
                opacity: { value: 0.3 },
                size: { value: { min: 1, max: 3 } },
                move: { enable: true, speed: 0.8 },
                links: {
                  enable: true,
                  color: "#6366f1",
                  opacity: 0.25,
                  distance: 130,
                },
              },
              interactivity: {
                events: { onHover: { enable: true, mode: "repulse" } },
                modes: { repulse: { distance: 60, duration: 0.3 } },
              },
              detectRetina: true,
            }}
            className="absolute inset-0 -z-10"
          />
        </Suspense>
      )}

      {/* Animated gradient layer */}
      <motion.div
        animate={controls}
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #0f172a, #1e3a8a, #312e81, #1e1b4b)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 select-none relative z-10"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale: hovered ? 1.04 : 1,
          textShadow: hovered
            ? ["0px 0px 30px #818cf8", "0px 0px 50px #6366f1"]
            : ["0px 0px 10px #818cf8"],
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Demo Marketing Studio
      </motion.h1>

      {/* Tagline */}
      <motion.p
        key={taglineIndex}
        className="text-lg md:text-xl text-gray-300 mb-10 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {taglines[taglineIndex]}
      </motion.p>

      {/* Spinner / Get Started */}
      {loading ? (
        <motion.div
          className="flex flex-col items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-10 h-10 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-300 animate-pulse">Loading...</p>
        </motion.div>
      ) : (
        <motion.button
          onClick={onGetStarted}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-10 rounded-full text-lg transition mt-6 shadow-lg hover:shadow-indigo-700/40 relative z-10"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Get Started
        </motion.button>
      )}
    </motion.section>
  );
};

export default SplashScreen;
