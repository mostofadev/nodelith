import Badge from "../ui/Badge";


const DEMO_VIDEO_URL: string | null = null;

const EXAMPLE_STEPS = [
  { label: "A call goes unanswered", detail: "The front desk or the tech is busy" },
  { label: "The customer gets a text", detail: "A short message with a simple way to book" },
  { label: "They pick a time", detail: "The appointment lands on your schedule" },
  { label: "After the visit", detail: "Every customer gets the same review request" },
];

export default function SampleWorkflowBreakdown() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[900px] px-8">
        <Badge label="Example Flow" />
        <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          From a missed call to a booked appointment.
        </h2>
        <p className="max-w-[560px] text-[14.5px] leading-relaxed text-muted">
          This is an illustration of how the system is designed to work. It is
          not a real client result, and it contains no performance numbers.
        </p>

        {DEMO_VIDEO_URL && (
          <div className="mt-8 border border-line bg-panel">
            <div className="aspect-video w-full">
              <iframe
                src={DEMO_VIDEO_URL}
                title="Nodelith example walkthrough"
                className="h-full w-full"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {EXAMPLE_STEPS.map((step, index) => (
            <div
              key={step.label}
              className="flex items-start gap-4 border border-line bg-white p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-[13px] font-semibold text-accent">
                {index + 1}
              </span>
              <div>
                <p className="text-[14px] font-medium text-ink">{step.label}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}