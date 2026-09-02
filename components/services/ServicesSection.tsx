import Badge from "../ui/Badge";
import Button from "../ui/Button";
import ServiceIcon from "./ServiceIcon";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: "missed-call" | "chatbot" | "automation" | "crm" | "support" | "website";
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Missed Call & Lead Recovery",
    description: "Every missed call or unanswered form instantly triggers a text-back — so a busy phone line never costs you a booking.",
    icon: "missed-call",
  },
  {
    number: "02",
    title: "AI Chatbot Integration",
    description: "Instant 24/7 replies on your website and social channels — questions answered and leads captured the moment they arrive.",
    icon: "chatbot",
  },
  {
    number: "03",
    title: "Business Process Automation",
    description: "Booking confirmations, follow-ups, and reminders sent automatically — no more manual, repetitive replies.",
    icon: "automation",
  },
  {
    number: "04",
    title: "CRM & Lead Routing",
    description: "Every lead qualified and routed to the right person automatically, with your CRM updated in real time.",
    icon: "crm",
  },
  {
    number: "05",
    title: "Ongoing Support & Maintenance",
    description: "We don't disappear after launch — continuous monitoring and improvements as your business grows.",
    icon: "support",
  },
  {
    number: "06",
    title: "Custom Website Development",
    description: "Fast, mobile-friendly websites built with modern tech — the foundation everything above runs on.",
    icon: "website",
  },
];

const INCLUDED = [
  "Custom-built for your business, not templated",
  "Live in days, not months",
  "One team for setup, automation & support",
  "No long-term contract required",
];

export default function ServicesSection() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-14 px-8 lg:grid-cols-[1.3fr_.7fr] lg:gap-16">
        {/* Left — services list */}
        <div>
          <div className="mb-14 animate-rise">
            <Badge label="Services" />
            <h2 className="font-display mt-4.5 text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[34px]">
              Everything you need, end to end.
            </h2>
          </div>

          <div className="border-t border-line">
            {SERVICES.map((service, index) => (
              <div
                key={service.number}
                className="group grid grid-cols-[auto_auto_1fr] items-start gap-5 border-b border-line py-7 sm:gap-7 animate-rise"
                style={{ animationDelay: `${0.06 + index * 0.05}s` }}
              >
                <span className="pt-3 text-[13px] font-bold text-accent">{service.number}</span>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-panel text-muted transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <ServiceIcon type={service.icon} />
                </div>

                <div className="pt-2.5">
                  <h3 className="font-display mb-1.5 text-[17px] font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="max-w-[520px] text-[14.5px] leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — sticky summary panel */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <div className="animate-rise border border-line bg-panel p-6" style={{ animationDelay: ".15s" }}>
            <div className="mb-5 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
              What&apos;s Included
            </div>

            <ul className="mb-7 flex flex-col gap-3.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 shrink-0 text-accent"
                  >
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-6 border-t border-line pt-6">
              <div className="font-display text-[15px] font-semibold leading-snug text-ink">
                Not sure which one fits?
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                Book a free 15-minute call and we&apos;ll map out exactly what your business needs.
              </p>
            </div>

            <Button href="/contact" variant="primary" className="!w-full !justify-center">
              Book a Free Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}