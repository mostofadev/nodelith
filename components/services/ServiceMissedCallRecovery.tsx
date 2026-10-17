import Badge from "../ui/Badge";

const FLOW_STEPS = [
  { label: "Missed Call", detail: "A customer calls and no one can pick up" },
  { label: "Instant Text", detail: "They get a text back with a simple way to book" },
  { label: "Booking Path", detail: "They pick a time, or you get their details to follow up" },
];


const RESPONSE_TIME: string | null = null;


const PROMISE: string | null = null;

export default function ServiceMissedCallRecovery() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <Badge label="Offer 2" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            Missed-Call Recovery
          </h2>
          <p className="max-w-[440px] text-[14.5px] leading-relaxed text-muted">
            When you are busy with a patient or a job, calls go unanswered, and
            many customers try the next business. We set up an instant text-back
            for every missed call, so they have an easy way to book with you
            instead.
            {RESPONSE_TIME ? ` Replies go out in ${RESPONSE_TIME}.` : ""}
          </p>

          {PROMISE && (
            <p className="mt-5 max-w-[440px] border-l-2 border-accent pl-4 text-[14px] font-medium leading-snug text-ink">
              {PROMISE}
            </p>
          )}

          <p className="mt-5 max-w-[440px] text-[12.5px] leading-relaxed text-muted">
            Text-back messages include clear opt-out wording. We help you set up
            the consent language for your business.
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