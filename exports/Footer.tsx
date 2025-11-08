import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-gray-900/80 text-gray-300 border-t border-gray-800 mt-32 backdrop-blur-xl overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-center space-y-6">
        {/* Title */}
        <h3 className="text-2xl font-bold gradient-text">
          Demo Marketing Studio
        </h3>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mx-auto">
          We merge creativity with data, crafting stories that inspire, connect, and convert.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-6">
          <a
            href="#"
            target="_blank"
            className="hover:text-indigo-400 transition-all duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            target="_blank"
            className="hover:text-indigo-400 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            className="hover:text-indigo-400 transition-all duration-300"
          >
            Instagram
          </a>
        </div>

        {/* Divider */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto my-6 opacity-60"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Demo Marketing Studio — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
