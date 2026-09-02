import Badge from "../ui/Badge";

const PRINCIPLES = [
  {
    title: "Practical over flashy",
    detail: "Every system is built to solve one real problem — not to look impressive in a demo.",
  },
  {
    title: "Fast to launch",
    detail: "No months-long builds. Most setups go live within days, not quarters.",
  },
  {
    title: "Built around your workflow",
    detail: "The automation adapts to how your business already runs — not the other way around.",
  },
];

export default function Approach() {
  return (
    <section className="border-b border-line bg-panel py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <div className="mx-auto max-w-[560px] text-center">
          <Badge label="The Approach" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            How I think about this work.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PRINCIPLES.map((item) => (
            <div key={item.title} className="border border-line bg-white p-6">
              <p className="text-[14.5px] font-medium text-ink">
                {item.title}
              </p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}