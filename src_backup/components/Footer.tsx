import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold">BrightWave</div>
          <div className="text-slate-400 text-sm mt-2">We drive measurable growth through strategy, design and AI-powered creative.</div>
        </div>
        <div>
          <div className="font-semibold">Services</div>
          <ul className="mt-2 text-sm text-slate-400">
            <li>Branding</li>
            <li>Performance Ads</li>
            <li>Content</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="mt-2 text-sm text-slate-400">hello@brightwave.agency</div>
        </div>
      </div>
    </footer>
  );
}
