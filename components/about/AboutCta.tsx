import Button from "../ui/Button";

export default function AboutCta() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[560px] px-8 text-center">
        <h2 className="font-display mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          Let&apos;s see if it fits your business.
        </h2>
        <p className="mx-auto mb-6 max-w-[420px] text-[14.5px] leading-relaxed text-muted">
          Book a free call — no pressure, just a clear look at what&apos;s
          possible.
        </p>
        <Button href="/contact">Book a Call</Button>
      </div>
    </section>
  );
}