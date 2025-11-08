import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function SplashScreen({
  onGetStarted,
}: {
  onGetStarted: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  // init particles
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  // loading bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setLoaded(true);
          return 100;
        }
        return p + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // countdown
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleStart = () => {
    if (fadeOut) return;
    setFadeOut(true);
    setTimeout(() => onGetStarted(), 1000);
  };

  // auto-start after 15 s
  useEffect(() => {
    const timer = setTimeout(handleStart, 15000);
    return () => clearTimeout(timer);
  }, []);

  const circleProgress = ((15 - timeLeft) / 15) * 360;

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 1 }}
          className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-800 to-indigo-900 text-white overflow-hidden"
        >
          {/* particles */}
          <div className="absolute inset-0 pointer-events-none">
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={{
                background: { color: "transparent" },
                fpsLimit: 60,
                particles: {
                  number: { value: 45 },
                  color: { value: ["#ffffff", "#a5b4fc", "#c084fc"] },
                  links: {
                    enable: true,
                    color: "#ffffff",
                    distance: 120,
                    opacity: 0.25,
                  },
                  move: { enable: true, speed: 1 },
                  size: { value: { min: 1, max: 3 } },
                  opacity: { value: 0.6 },
                },
              }}
            />
          </div>

          {/* logo + circular timer */}
          <div className="relative mb-6">
            <motion.img
              src="/assets/hero/hero.jpg"
              alt="Logo"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.svg
              className="absolute inset-0 w-32 h-32 -top-2 -left-2 z-0"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <defs>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="6"
                fill="none"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                stroke="url(#glowGradient)"
                strokeWidth="6"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - (circleProgress / 360) * 283}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white/80 z-20">
              {timeLeft}s
            </div>
          </div>

          {/* text */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-3 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Demo Marketing Studio
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 mb-10 text-center max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Where cinematic storytelling meets data-driven strategy.
          </motion.p>

          {/* progress / start button */}
          {!loaded ? (
            <div className="relative z-10 w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-6 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
              />
            </div>
          ) : (
            <motion.button
              onClick={handleStart}
              className="relative z-20 bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-indigo-400/50 transition-all duration-300 hover:scale-110 animate-pulse"
              whileHover={{ scale: 1.1 }}
            >
              Get Started
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
