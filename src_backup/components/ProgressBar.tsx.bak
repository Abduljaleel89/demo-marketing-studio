import React, { useEffect, useRef } from "react";

export default function ProgressBar() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let running = true;
    const el = ref.current;
    if (!el) return;
    function update() {
      if (!running) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const winH = window.innerHeight || document.documentElement.clientHeight;
      const progress = docHeight - winH <= 0 ? 0 : (scrollTop / (docHeight - winH)) * 100;
      el.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      requestAnimationFrame(update);
    }
    const raf = requestAnimationFrame(update);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed left-0 top-0 w-full z-[9999] pointer-events-none">
      <div className="h-1 bg-transparent">
        <div ref={ref} className="h-1 bg-gradient-to-r from-brand-400 to-cyan-400" style={{ width: "0%" }} />
      </div>
    </div>
  );
}
