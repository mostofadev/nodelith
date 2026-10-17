import Badge from "../ui/Badge";

type ContactHeroProps = {
  industryLabel?: string;
};

export default function ContactHero({ industryLabel }: ContactHeroProps) {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[720px] px-8 text-center animate-rise">
        <Badge label="Free Audit" />

        <h1 className="font-display mt-4.5 mb-4 text-[30px] font-semibold leading-[1.15] tracking-tight sm:text-[38px]">
          Let&apos;s look at where your calendar is leaking.
        </h1>

        <p className="mx-auto max-w-[520px] text-[15.5px] leading-relaxed text-muted">
          Tell us about your business. We review your Google profile, website,
          phone, and reviews, then tell you what to fix first. No pressure, and
          no commitment.
        </p>

        {industryLabel && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-[12.5px] font-medium text-muted">
            You&apos;re inquiring about:
            <span className="font-semibold text-ink">{industryLabel}</span>
          </div>
        )}
      </div>
    </section>
  );
}