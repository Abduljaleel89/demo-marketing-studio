import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full p-8 text-gray-800 dark:text-gray-100 relative overflow-y-auto max-h-[80vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-cyan-400">
              {title}
            </h2>

            {/* Article Content */}
            <div className="text-sm leading-relaxed space-y-4 whitespace-pre-line">
              {content}
            </div>

            {/* Footer Button */}
            <div className="mt-8 text-center">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArticleModal;
