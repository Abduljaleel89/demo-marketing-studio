import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-hidden={!visible}
      style={{ display: visible ? "block" : "none" }}
      className="back-to-top bg-white dark:bg-slate-800 border rounded-full p-3 shadow-lg hover:-translate-y-1 transition-transform"
      title="Back to top"
    >
      ⤴
    </button>
  );
}
