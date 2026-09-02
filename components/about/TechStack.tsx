import Badge from "../ui/Badge";

const STACK = [
  "Next.js",
  "Laravel",
  "n8n",
  "GoHighLevel",
  "Calendly",
  "OpenAI",
  "Claude",
];

export default function TechStack() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[680px] px-8 text-center">
        <Badge label="Under The Hood" />
        <h2 className="font-display mt-4 mb-6 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          Tools that power the automation.
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {STACK.map((tool) => (
            <span
              key={tool}
              className="border border-line bg-panel px-4 py-2 text-[13px] font-medium text-ink"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}