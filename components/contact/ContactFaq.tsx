"use client";

import { useState } from "react";
import Badge from "../ui/Badge";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does it take to go live?",
    answer:
      "Most setups are live within a few days to two weeks, depending on how much customization your business needs.",
  },
  {
    question: "Is this built specifically for my business, or a template?",
    answer:
      "Everything is custom-built around how your team actually works — your services, your booking flow, your tone of voice.",
  },
  {
    question: "Do I need a long-term contract?",
    answer:
      "No. There's no long-term commitment required — you can start small and scale up as it proves its value.",
  },
  {
    question: "Is the first call really free?",
    answer:
      "Yes, the 15-minute call is completely free with no obligation. We'll map out exactly where you're losing leads.",
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <Badge label="FAQ" />
      <h2 className="font-display mt-4 mb-6 text-[20px] font-semibold tracking-tight">
        Quick questions, answered.
      </h2>

      <div className="border-t border-line">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-[14.5px] font-medium text-ink">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 text-accent transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <p className="max-w-[520px] pb-5 text-[13.5px] leading-relaxed text-muted">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}