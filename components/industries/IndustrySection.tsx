import Badge from "../ui/Badge";
import Button from "../ui/Button";

type IndustrySectionProps = {
  badge: string;
  title: string;
  painPoints: string[];
  solutions: string[];
  scenario: string;
  industryKey: string;
  reverse?: boolean;
};

export default function IndustrySection({
  badge,
  title,
  painPoints,
  solutions,
  scenario,
  industryKey,
  reverse = false,
}: IndustrySectionProps) {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className={reverse ? "order-2 lg:order-1" : ""}>
          <div className="border border-line bg-panel p-6">
            <p className="text-[12.5px] font-medium text-muted">
              Example scenario
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink">
              {scenario}
            </p>
            <p className="mt-3 text-[11.5px] text-muted">
              An illustration, not a real client story.
            </p>
          </div>

          <div className="mt-6 border border-line bg-white p-6">
            <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
              What we set up
            </p>
            <ul className="flex flex-col gap-2.5">
              {solutions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13.5px] leading-snug text-ink"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={reverse ? "order-1 lg:order-2" : ""}>
          <Badge label={badge} />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            {title}
          </h2>

          <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
            Where bookings slip away
          </p>
          <ul className="mb-6 flex flex-col gap-2">
            {painPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>

          <Button href={`/contact?industry=${industryKey}`} variant="primary">
            Book a Free Audit
          </Button>
        </div>
      </div>
    </section>
  );
}