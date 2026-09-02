import Badge from "../ui/Badge";
import Button from "../ui/Button";

type IndustrySectionProps = {
  badge: string;
  title: string;
  painPoints: string[];
  scenario: string;
  industryKey: string;
  reverse?: boolean;
};

export default function IndustrySection({
  badge,
  title,
  painPoints,
  scenario,
  industryKey,
  reverse = false,
}: IndustrySectionProps) {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div
        className={`mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-2 lg:gap-16 lg:items-center`}
      >
        <div className={reverse ? "order-2 lg:order-1" : ""}>
          <div className="border border-line bg-panel p-6">
            <p className="text-[12.5px] font-medium text-muted">
              Mini-Scenario
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink">
              {scenario}
            </p>
          </div>
        </div>

        <div className={reverse ? "order-1 lg:order-2" : ""}>
          <Badge label={badge} />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            {title}
          </h2>

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

          <Button href={`/contact?industry=${industryKey}`}>
            See how it works for {title.split(" ")[0]}
          </Button>
        </div>
      </div>
    </section>
  );
}