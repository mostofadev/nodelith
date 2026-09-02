import Badge from "../ui/Badge";
import AutomationVisual from "./AutomationVisual";

type Step = {
  number: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "We Learn Your Business",
    description: "A quick call to understand your specific workflow, tools, and where leads are slipping through.",
  },
  {
    number: "02",
    title: "We Build Your System",
    description: "A custom AI chatbot and automation, tailored to how your team actually works.",
  },
  {
    number: "03",
    title: "You Go Live",
    description: "Instant replies, 24/7 — connected to your website, WhatsApp, and social channels.",
  },
  {
    number: "04",
    title: "We Support You",
    description: "Ongoing monitoring, tweaks, and improvements as your business grows.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-14 px-8 lg:grid-cols-[1fr_.85fr] lg:gap-16">
        {/* Left — content */}
        <div className="animate-rise">
          <Badge label="How It Works" />
          <h2 className="font-display mt-4.5 mb-10 text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[34px]">
            From first call to live in days — not months.
          </h2>

          <div className="border-t border-line">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-line py-6"
              >
                <span className="pt-0.5 text-[13px] font-bold text-accent">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display mb-1.5 text-[17px] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="max-w-[420px] text-[14.5px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — automation animation */}
        <div
          className="flex items-start justify-center animate-rise lg:justify-end"
          style={{ animationDelay: ".15s" }}
        >
          <AutomationVisual />
        </div>
      </div>
    </section>
  );
}