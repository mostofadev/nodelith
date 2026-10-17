import Badge from "../ui/Badge";
import Button from "../ui/Button";

type AuditPoint = {
  label: string;
};

const AUDIT_POINTS: AuditPoint[] = [
  { label: "Your Google Business Profile: what is missing or out of date" },
  { label: "Your website: does it turn visitors into bookings?" },
  { label: "Your phone: how many calls go unanswered, and what happens next" },
  { label: "Your reviews: how new customers are asked, and how often" },
];

const VIDEO_URL: string | null = null;

export default function DemoVideoSection() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <div className="mb-12 max-w-[620px] animate-rise">
          <Badge label={VIDEO_URL ? "See It In Action" : "Free Audit"} />
          <h2 className="font-display mt-4.5 mb-4 text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[34px]">
            {VIDEO_URL
              ? "See how the system works."
              : "See where your calendar is leaking."}
          </h2>
          <p className="text-[15px] leading-relaxed text-muted">
            {VIDEO_URL
              ? "A short walkthrough of how a call, a search, or a visit turns into a booked appointment."
              : "Book a free audit. We check the four places local businesses lose the most bookings, then show you what to fix first."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_.6fr] lg:gap-14">
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
              <div className="relative flex aspect-video w-full items-center justify-center bg-panel p-8">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, var(--color-line) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative max-w-[380px] border border-line bg-white p-6 text-center">
                  <div className="mb-2 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
                    Free 15-minute audit
                  </div>
                  <p className="mb-5 text-[15px] font-medium leading-snug text-ink">
                    We look at your business and tell you, in plain English,
                    where bookings are slipping away.
                  </p>
                  <Button href="/contact" variant="primary">
                    Book a Free Audit
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div
            className="animate-rise flex flex-col justify-center gap-6 border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0"
            style={{ animationDelay: ".2s" }}
          >
            <div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">
              What We Check
            </div>

            <ul className="flex flex-col gap-4">
              {AUDIT_POINTS.map((point) => (
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