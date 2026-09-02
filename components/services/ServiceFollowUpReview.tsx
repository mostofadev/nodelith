import Badge from "../ui/Badge";

const FOLLOWUP_STEPS = [
  { label: "Appointment Completed", detail: "Visit marked as done" },
  { label: "Auto Follow-Up Sent", detail: "Thank-you message, same day" },
  { label: "Review Request Triggered", detail: "Direct link to Google/FB review" },
];

export default function ServiceFollowUpReview() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <Badge label="Service 03" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            Follow-Up &amp; Review Automation
          </h2>
          <p className="max-w-[440px] text-[14.5px] leading-relaxed text-muted">
            Happy customers rarely leave reviews on their own — they need a
            nudge at the right moment. We automate that nudge, right after
            every completed visit, so your review count grows on autopilot.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FOLLOWUP_STEPS.map((step, index) => (
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