import Badge from "../ui/Badge";

// Replace with your real Loom demo link once recorded.
const DEMO_VIDEO_URL: string | null = null;

const SAMPLE_STATS = [
  { label: "Response Time", value: "< 30 sec" },
  { label: "Leads Recovered (est.)", value: "12-18 / month" },
  { label: "Setup Time", value: "5-7 days" },
];

export default function SampleWorkflowBreakdown() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[900px] px-8">
        <Badge label="Sample Workflow" />
        <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          A missed-call recovery flow, start to finish.
        </h2>
        <p className="max-w-[560px] text-[14.5px] leading-relaxed text-muted">
          This is a demo build showing exactly how the system responds —
          from missed call to booked appointment — using realistic,
          hypothetical numbers until real client data is in.
        </p>

        <div className="mt-8 border border-line bg-panel">
          {DEMO_VIDEO_URL ? (
            <div className="aspect-video w-full">
              <iframe
                src={DEMO_VIDEO_URL}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex aspect-video w-full items-center justify-center">
              <p className="text-[13px] text-muted">
                Demo video coming soon
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SAMPLE_STATS.map((stat) => (
            <div key={stat.label} className="border border-line bg-white p-5 text-center">
              <p className="font-display text-[20px] font-semibold text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-[12px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[11.5px] text-muted">
          *Hypothetical figures for illustration — real client results will
          replace these as they come in.
        </p>
      </div>
    </section>
  );
}