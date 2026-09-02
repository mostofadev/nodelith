import Badge from "../ui/Badge";

type DemoPoint = {
  label: string;
};

const DEMO_POINTS: DemoPoint[] = [
  { label: "How a missed call gets caught instantly" },
  { label: "How the AI replies and books the appointment" },
  { label: "How your CRM updates without you lifting a finger" },
];

// Swap this with your real Loom/YouTube embed URL when ready.
// Example Loom embed: "https://www.loom.com/embed/xxxxxxxxxxxxxxxxxxxx"
const VIDEO_URL: string | null = null;

export default function DemoVideoSection() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <div className="mb-12 max-w-[620px] animate-rise">
          <Badge label="See It In Action" />
          <h2 className="font-display mt-4.5 mb-4 text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[34px]">
            Watch exactly how your problem gets solved.
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            No slides, no pitch — just a real walkthrough of the automation
            catching a missed call, replying instantly, and booking the
            appointment, start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_.6fr] lg:gap-14">
          {/* Video / placeholder */}
          <div
            className="animate-rise overflow-hidden border border-line bg-panel"
            style={{ animationDelay: ".1s" }}
          >
            {VIDEO_URL ? (
              <div className="aspect-video w-full">
                <iframe
                  src={VIDEO_URL}
                  title="Nodelith Demo"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            ) : (
              <div className="relative flex aspect-video w-full items-center justify-center bg-panel">
                {/* dotted background to match the rest of the site's texture */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, var(--color-line) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <button
                  type="button"
                  aria-label="Play demo video"
                  className="group relative flex h-20 w-20 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
                  </svg>
                </button>

                <span className="absolute bottom-6 text-[12.5px] font-medium uppercase tracking-wider text-muted">
                  Video coming soon
                </span>
              </div>
            )}
          </div>

          {/* Right — what you'll see */}
          <div
            className="animate-rise flex flex-col justify-center gap-6 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0"
            style={{ animationDelay: ".2s" }}
          >
            <div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">
              In This Video
            </div>

            <ul className="flex flex-col gap-4">
              {DEMO_POINTS.map((point) => (
                <li
                  key={point.label}
                  className="flex items-start gap-2.5 text-[14.5px] leading-snug text-ink"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-0.5 shrink-0 text-accent"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {point.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}