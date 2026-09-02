import Badge from "../ui/Badge";

// Replace these placeholders with your real contact details.
const EMAIL = "hello@nodelith.com";
const WHATSAPP_NUMBER = "+8801XXXXXXXXX"; // e.g. "+8801712345678"
const WHATSAPP_MESSAGE = "Hi, I'd like to know more about Nodelith's services.";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.8c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.6 1.5.7 1.6.1.1.1.3 0 .5-.1.2-.2.3-.3.4-.2.2-.3.3-.1.6.4.6.9 1.1 1.4 1.5.5.4.9.6 1.1.7.2.1.3.1.5-.1.1-.2.6-.7.8-.9.2-.2.4-.2.6-.1.2.1 1.4.6 1.6.7.2.1.3.2.4.3 0 .2 0 .8-.3 1.2-.3.5-1.2.9-1.7.9-.5 0-1 .1-3.3-1.4-2.3-1.5-3.1-3.7-3.2-3.9-.1-.2-.9-1.3-.9-2.4 0-1.1.6-1.6.8-1.9z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 6.5L12 12.5l7.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AlternativeContact() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="border border-line bg-panel p-6">
      <Badge label="Prefer To Message?" />

      <div className="mt-5 flex flex-col gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-3 border border-line bg-white px-4 py-3.5 text-[13.5px] font-medium text-ink transition-colors duration-200 hover:border-accent"
        >
          <EmailIcon />
          {EMAIL}
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-line bg-white px-4 py-3.5 text-[13.5px] font-medium text-ink transition-colors duration-200 hover:border-accent"
        >
          <WhatsAppIcon />
          Message on WhatsApp
        </a>
      </div>

      <p className="mt-5 text-[12.5px] leading-relaxed text-muted">
        We typically reply within a few hours during business days.
      </p>
    </div>
  );
}