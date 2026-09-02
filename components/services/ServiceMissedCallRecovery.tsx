import Badge from "../ui/Badge";

const FLOW_STEPS = [
  { label: "Missed Call", detail: "Customer calls, no one picks up" },
  { label: "Instant Text", detail: "Auto-reply sent within seconds" },
  { label: "Lead Captured", detail: "Number logged, follow-up triggered" },
];

export default function ServiceMissedCallRecovery() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <Badge label="Service 01" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            Missed-Call Recovery
          </h2>
          <p className="max-w-[440px] text-[14.5px] leading-relaxed text-muted">
            Every missed call is a lost customer walking straight to your
            competitor. We set up an instant auto-text the moment a call goes
            unanswered — so no lead ever slips through silently.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FLOW_STEPS.map((step, index) => (
            <div
              key={step.label}
              className="flex items-center gap-4 border border-line bg-panel px-5 py-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white text-[13px] font-semibold text-accent">
                {index + 1}
              </span>
              <div>
                <p className="text-[14px] font-medium text-ink">{step.label}</p>
                <p className="text-[12.5px] text-muted">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}