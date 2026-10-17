import Badge from "../ui/Badge";

const PRINCIPLES = [
  {
    title: "Plain and practical",
    detail: "We fix the things that cost you bookings. No hype, no jargon.",
  },
  {
    title: "Done for you",
    detail: "We handle the setup, so your team can keep doing the work they do best.",
  },
  {
    title: "Clear and honest",
    detail: "You see simple reports. If something is not working, we tell you.",
  },
];

export default function Approach() {
  return (
    <section className="border-b border-line bg-panel py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <div className="mx-auto max-w-[560px] text-center">
          <Badge label="The Approach" />
          <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
            How we work.
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