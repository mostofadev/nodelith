import Badge from "../ui/Badge";

type Problem = {
  number: string;
  title: string;
  description: string;
};

type Leak = {
  number: string;
  label: string;
};

const PROBLEMS: Problem[] = [
  {
    number: "01",
    title: "Calls and Messages Go Unanswered",
    description:
      "You are busy with a patient or a job. The customer does not wait. They try the next business on the list.",
  },
  {
    number: "02",
    title: "A Weak Google Profile",
    description:
      "Old photos, missing hours, no description. People see it first, and it does not make them call.",
  },
  {
    number: "03",
    title: "Few or Old Reviews",
    description:
      "New customers check reviews before they book. A thin or outdated list sends them elsewhere.",
  },
  {
    number: "04",
    title: "A Website That Does Not Book",
    description:
      "Visitors look around and leave. There is no clear next step, and no one replies when they do reach out.",
  },
];

const LEAKS: Leak[] = [
  { number: "01", label: "A customer searches for your service" },
  { number: "02", label: "Your profile or website looks thin" },
  { number: "03", label: "They call, and no one picks up" },
  { number: "04", label: "They book the business that answered" },
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

        {/* Right — where customers slip away */}
        <div
          className="h-fit animate-rise border border-line bg-panel p-6"
          style={{ animationDelay: ".15s" }}
        >
          <div className="mb-1 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
            Where Customers Slip Away
          </div>

          {LEAKS.map((leak, index) => (
            <div
              key={leak.number}
              className={`flex items-start gap-4 py-5 ${
                index < LEAKS.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="font-display text-[22px] font-semibold leading-none text-accent">
                {leak.number}
              </span>
              <p className="text-[14.5px] leading-snug text-ink">{leak.label}</p>
            </div>
          ))}

          <p className="mt-1 border-t border-line pt-4 text-[13px] leading-snug text-muted">
            We fix each step, so the customer ends up on your calendar.
          </p>
        </div>
      </div>
    </section>
  );
}