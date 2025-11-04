import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Let’s Build Something Great</h3>
        <p className="mb-6 text-gray-400">
          Ready to elevate your brand? Contact us today and start your growth journey.
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-full transition"
        >
          Get in Touch
        </a>
        <p className="text-gray-500 mt-8 text-sm">
          © {new Date().getFullYear()} Demo Marketing Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
