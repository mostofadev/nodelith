"use client";

import { useEffect } from "react";

const CALENDLY_URL: string | null = "https://calendly.com/mostofakamalr2002/30min";

const CONTACT_EMAIL: string | null = "contact@nodelith.cloud";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

export default function CalendlyEmbed() {
  useEffect(() => {
    if (!CALENDLY_URL) return;
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!CALENDLY_URL) {
    return (
      <div className="border border-line bg-panel p-8 text-center">
        <p className="font-display text-[17px] font-semibold text-ink">
          Request your free audit
        </p>
        <p className="mx-auto mt-2 max-w-[360px] text-[14px] leading-relaxed text-muted">
          Fill in the form and we will reply with a time that works for you.
          {CONTACT_EMAIL ? ` You can also email ${CONTACT_EMAIL}.` : ""}
        </p>
      </div>
    );
  }

  return (
    <div className="border border-line bg-panel">
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <p className="border-t border-line px-4 py-3 text-[11.5px] leading-snug text-muted">
        Scheduling is provided by Calendly, a third-party service. Please do not
        enter private health details when you book.
      </p>
    </div>
  );
}