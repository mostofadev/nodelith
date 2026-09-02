import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ServicesPricingTeaser() {
  return (
    <section className="border-b border-line bg-panel py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[560px] px-8 text-center">
        <Badge label="Pricing" />
        <h2 className="font-display mt-4 mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          Plans built around your business size.
        </h2>
        <p className="mx-auto max-w-[440px] text-[14.5px] leading-relaxed text-muted">
          Every setup is different, so pricing is too. Book a free call and
          we&apos;ll walk you through exactly what fits your business.
        </p>

        <div className="mt-6">
          <Button href="/contact">Get Custom Pricing</Button>
        </div>
      </div>
    </section>
  );
}