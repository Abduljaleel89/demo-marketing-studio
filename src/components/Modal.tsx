import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const typingSpeed = 12;

const Modal = ({ title, children, onClose }: { title: string; children: string; onClose: () => void }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < children.length) {
      const timeout = setTimeout(() => {
        setDisplayText(children.slice(0, index + 3));
        setIndex(index + 3);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, children]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-[90%] max-h-[85vh] overflow-y-auto shadow-2xl relative p-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-indigo-500"
          >
            <X size={22} />
          </button>

          <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">{title}</h2>

          <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed font-light">
            {displayText}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
