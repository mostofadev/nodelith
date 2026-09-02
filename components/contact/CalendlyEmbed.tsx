"use client";

import { useEffect, useRef } from "react";

// Replace with your real Calendly event link, e.g. "https://calendly.com/nodelith/intro-call"
const CALENDLY_URL = "https://calendly.com/your-username/intro-call";

export default function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="border border-line bg-panel">
      <div
        ref={containerRef}
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}