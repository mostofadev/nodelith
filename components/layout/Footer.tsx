import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "instagram" | "facebook";
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
];

function SocialIcon({ type }: { type: SocialLink["icon"] }) {
  const common = { width: 17, height: 17, viewBox: "0 0 24 24", fill: "none" as const };
  switch (type) {
    case "linkedin":
      return (
        <svg {...common}>
          <path
            d="M4.5 8.5h3.2V19H4.5V8.5zM6.1 4C7.2 4 8 4.8 8 5.9c0 1-.8 1.9-2 1.9-1.1 0-1.9-.8-1.9-1.9C4.2 4.8 5 4 6.1 4zM10.2 8.5h3.1v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V19h-3.2v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19h-3.2V8.5z"
            fill="currentColor"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="7" r="1" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path
            d="M14.5 8.5h2V5.5h-2c-2.2 0-4 1.8-4 4v2H8.5v3h2V21h3v-6.5h2.2l.8-3h-3V9.5c0-.6.4-1 1-1z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[1180px] px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display inline-block text-[19px] font-semibold tracking-tight text-ink">
              Nodelith
            </Link>
            <p className="mt-3.5 max-w-[280px] text-[13.5px] leading-relaxed text-muted">
              AI automation for dental clinics, med spas, and local service
              businesses — never miss a lead again.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="mb-4 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
              Quick Links
            </div>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <div className="mb-4 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
              Get In Touch
            </div>
            <a
              href="mailto:hello@nodelith.com"
              className="text-[13.5px] text-muted transition-colors duration-200 hover:text-ink"
            >
              hello@nodelith.com
            </a>

            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-white"
                >
                  <SocialIcon type={social.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 sm:flex-row">
          <p className="text-[12.5px] text-muted">
            © {new Date().getFullYear()} Nodelith. All rights reserved.
          </p>
          <p className="text-[12.5px] text-muted">Built with care, powered by automation.</p>
        </div>
      </div>
    </footer>
  );
}