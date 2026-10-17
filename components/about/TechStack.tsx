import Badge from "../ui/Badge";


const TOOLS: string[] = [
  // "Google Business Profile",
  // "Google Calendar",
  // "SMS & Email",
];

export default function TechStack() {
  if (TOOLS.length === 0) return null;

  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[680px] px-8 text-center">
        <Badge label="Tools We Work With" />
        <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          We work with what you already use.
        </h2>
        <p className="mx-auto mb-6 max-w-[460px] text-[14px] leading-relaxed text-muted">
          We pick simple, well-known tools, and we tell you what we use before
          we start. Ask us how your customers&apos; information is handled.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="border border-line bg-panel px-4 py-2 text-[13px] font-medium text-ink"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}