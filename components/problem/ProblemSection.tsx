import Badge from "../ui/Badge";

type Problem = {
  number: string;
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

const PROBLEMS: Problem[] = [
  {
    number: "01",
    title: "Missed After-Hours Inquiries",
    description:
      "Customers message at night or on weekends — and by the time you reply, they've already booked elsewhere.",
  },
  {
    number: "02",
    title: "Manual, Repetitive Replies",
    description:
      "Your team spends hours answering the same questions over and over.",
  },
  {
    number: "03",
    title: "Slow Lead Response",
    description:
      "Every hour of delay in responding to a lead lowers your chance of converting them.",
  },
];

const STATS: Stat[] = [
  { value: "78%", label: "of customers won't wait more than 5 minutes for a reply" },
  { value: "24hr", label: "average response time without automation" },
  { value: "3x", label: "more likely to convert with an instant reply" },
];

export default function ProblemSection() {
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-14 px-8 lg:grid-cols-[1fr_.85fr] lg:gap-16">
        {/* Left — problem list */}
        <div className="animate-rise">
          <Badge label="The Problem" />
          <h2 className="font-display mt-4.5 mb-10 text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[34px]">
            Sound familiar?
          </h2>

          <div className="border-t border-line">
            {PROBLEMS.map((problem) => (
              <div
                key={problem.number}
                className="grid grid-cols-[auto_1fr] gap-5 border-b border-line py-6"
              >
                <span className="pt-0.5 text-[13px] font-bold text-accent">
                  {problem.number}
                </span>
                <div>
                  <h3 className="font-display mb-1.5 text-[17px] font-semibold text-ink">
                    {problem.title}
                  </h3>
                  <p className="max-w-[440px] text-[14.5px] leading-relaxed text-muted">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — impact stat panel */}
        <div
          className="h-fit animate-rise border border-line bg-panel p-6"
          style={{ animationDelay: ".15s" }}
        >
          <div className="mb-1 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
            The Cost of Delay
          </div>

          {STATS.map((stat, index) => (
            <div
              key={stat.value}
              className={`py-5 ${index < STATS.length - 1 ? "border-b border-line" : ""}`}
            >
              <div className="font-display text-[34px] font-semibold leading-none text-ink">
                {stat.value}
              </div>
              <p className="mt-2 text-[13px] leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}