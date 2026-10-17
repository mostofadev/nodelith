import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function CaseStudiesComingSoon() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[560px] px-8 text-center">
        <Badge label="Pilot Program" />
        <h2 className="font-display mt-4 mb-4 text-[22px] font-semibold tracking-tight sm:text-[26px]">
          We are taking on our first pilot clients.
        </h2>
        <p className="mx-auto mb-7 max-w-[440px] text-[14.5px] leading-relaxed text-muted">
          We do not have client case studies yet, and we will not invent any.
          If you join as a pilot client, we set up your system carefully, and
          measure the results together. With your permission, we will share
          them here.
        </p>
        <Button href="/contact" variant="primary">
          Book a Free Audit
        </Button>
      </div>
    </section>
  );
}