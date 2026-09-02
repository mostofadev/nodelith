import Badge from "../ui/Badge";

export default function FounderStory() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[680px] px-8">
        <Badge label="The Story" />
        <h2 className="font-display mt-4 mb-6 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          Why this exists.
        </h2>

        <div className="flex flex-col gap-4 text-[14.5px] leading-relaxed text-muted">
          <p>
            Nodelith didn&apos;t start as a company — it started as a pattern
            I kept noticing. Small, service-based businesses were doing
            everything right — great service, loyal customers — but still
            losing leads to something completely avoidable: a missed call, a
            forgotten follow-up, a booking that never got confirmed.
          </p>
          <p>
            The tools to fix this already existed. What was missing was
            someone who could actually wire them together for businesses
            that don&apos;t have an in-house tech team. That&apos;s the gap
            Nodelith fills — practical automation, built for how these
            businesses actually operate.
          </p>
        </div>
      </div>
    </section>
  );
}