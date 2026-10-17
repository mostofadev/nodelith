import Badge from "../ui/Badge";

const FOLLOWUP_STEPS = [
  { label: "Visit or Job Finished", detail: "Your team marks it done, or we connect it to your booking tool" },
  { label: "Thank-You Message", detail: "A short, friendly message to every customer" },
  { label: "Review Request", detail: "A link to leave a Google review, if they want to" },
];

export default function ServiceFollowUpReview() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <Badge label="Part of Offer 1" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            Fair, Automatic Review Requests
          </h2>
          <p className="max-w-[440px] text-[14.5px] leading-relaxed text-muted">
            Most customers never think to leave a review unless someone asks. We
            set up a polite request after every visit or job, so asking happens
            every time, not only when you remember.
          </p>

          <ul className="mt-5 flex max-w-[440px] flex-col gap-2 text-[13px] leading-snug text-muted">
            <li>Every customer gets the same request, with no filtering by satisfaction.</li>
            <li>No gifts, discounts, or rewards for reviews.</li>
            <li>No fake or purchased reviews, ever.</li>
          </ul>
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