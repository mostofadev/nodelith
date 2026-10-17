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
    title: "Google Profile & Social Setup",
    description:
      "We set up and clean up your Google Business Profile and your business social accounts, so people who search for you find a complete, professional listing.",
    icon: "support",
  },
  {
    number: "02",
    title: "A Website That Books",
    description:
      "A fast, mobile-friendly website with a clear next step on every page, so visitors call or book instead of leaving.",
    icon: "website",
  },
  {
    number: "03",
    title: "Missed-Call Text-Back",
    description:
      "When a call goes unanswered, the customer gets an instant text and a simple way to book. A busy phone line stops costing you appointments.",
    icon: "missed-call",
  },
  {
    number: "04",
    title: "Chat on Your Website & Messages",
    description:
      "A chatbot answers common questions and helps people book, even when your team is busy or closed.",
    icon: "chatbot",
  },
  {
    number: "05",
    title: "Automatic Review Requests",
    description:
      "After each visit or job, every customer gets the same polite request to share their experience on Google. No gifts, no filtering by satisfaction.",
    icon: "automation",
  },
  {
    number: "06",
    title: "Google Ads, If You Need Them",
    description:
      "If your business needs more customers faster, we set up and manage your ads. Ad spend is paid by you directly to Google.",
    icon: "crm",
  },
];


const INCLUDED = [
  "Done for you, so your team keeps working",
  "One team for profile, website, calls, and reviews",
  "30-day result promise (terms apply)",
  "Simple reports so you can see the results",
];

export default function ServicesSection() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-14 px-8 lg:grid-cols-[1.3fr_.7fr] lg:gap-16">
     
        <div>
          <div className="mb-14 animate-rise">
            <Badge label="What We Set Up" />
            <h2 className="font-display mt-4.5 text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[34px]">
              Everything it takes to fill your calendar.
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
                Not sure where to start?
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                Book a free audit. We look at your profile, website, phone, and reviews, and tell you what to fix first.
              </p>
            </div>

            <Button href="/contact" variant="primary" className="!w-full !justify-center">
              Book a Free Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}