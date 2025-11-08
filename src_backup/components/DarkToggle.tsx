import React, { useEffect, useState } from "react";

export default function DarkToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const v = localStorage.getItem("bw-dark");
      if (v !== null) return v === "1";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("bw-dark", "1");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("bw-dark", "0");
    }
  }, [dark]);

  return (
    <button
      aria-pressed={dark}
      onClick={() => setDark((s) => !s)}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 p-2 rounded-md border bg-white/80 dark:bg-slate-800/80 dark:border-slate-700 text-sm"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
