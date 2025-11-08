import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export default function Modal({ title, content, onClose }: ModalProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentChar < content.length) {
      const timer = setTimeout(() => {
        setDisplayedText(content.substring(0, currentChar + 1));
        setCurrentChar((prev) => prev + 1);
      }, 10); // typing speed
      return () => clearTimeout(timer);
    }
  }, [currentChar]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[20000] p-6"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.4 }}
        className="relative bg-gray-900/90 border border-indigo-500/30 rounded-2xl p-8 max-w-3xl w-full shadow-2xl modal-animate overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-800/60 hover:bg-gray-700 p-2 rounded-full transition"
        >
          <X size={18} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-indigo-400 pr-8 text-center">
          {title}
        </h2>

        {/* Scrollable Typing Text */}
        <div className="relative max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {displayedText}
          </p>

          {/* AI Cursor */}
          {currentChar < content.length && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="text-indigo-400 font-bold ml-1"
            >
              ●
            </motion.span>
          )}

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
        </div>

        {/* Close Button (Footer) */}
        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
          >
            Close Article
          </button>
        </div>
      </motion.div>
    </div>
  );
}
