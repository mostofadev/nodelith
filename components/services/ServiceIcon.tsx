type IconType = "missed-call" | "chatbot" | "automation" | "crm" | "support" | "website";

export default function ServiceIcon({ type }: { type: IconType }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" as const };

  switch (type) {
    case "missed-call":
      return (
        <svg {...common}>
          <path d="M15 8a4 4 0 014 4M15 4a8 8 0 018 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4.5 4.5l15 15M9.2 5.8L7.6 4.2a1.5 1.5 0 00-2.1 0L4 5.7a1.5 1.5 0 000 2c1.6 3.6 4.1 7 7.3 9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chatbot":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 10.5v1M15 10.5v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9.5 14.5c.8.7 1.8 1 2.5 1s1.7-.3 2.5-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "automation":
      return (
        <svg {...common}>
          <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "crm":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6.5" rx="7" ry="2.6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 6.5v5.5c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 12v5.5c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V12" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "website":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3.5 9h17" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="6.2" cy="7" r="0.6" fill="currentColor" />
          <circle cx="8" cy="7" r="0.6" fill="currentColor" />
        </svg>
      );
  }
}