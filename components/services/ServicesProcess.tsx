import Badge from "../ui/Badge";

const PROCESS_STEPS = [
  { label: "Discovery", detail: "We map your current lead flow and gaps" },
  { label: "Build", detail: "Custom automation set up around your business" },
  { label: "Test", detail: "Real scenarios run before anything goes live" },
  { label: "Launch", detail: "System goes live, you start capturing leads" },
];

export default function ServicesProcess() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <div className="mx-auto max-w-[560px] text-center">
          <Badge label="How We Work" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            From first call to live system.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.label}
              className="border border-line bg-panel p-6 text-center"
            >
              <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-[14px] font-semibold text-accent">
                {index + 1}
              </span>
              <p className="mt-4 text-[14.5px] font-medium text-ink">
                {step.label}
              </p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}