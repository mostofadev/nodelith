import Button from "../ui/Button";

export default function ServicesCta() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[560px] px-8 text-center">
        <h2 className="font-display mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          Ready for a fuller calendar?
        </h2>
        <p className="mx-auto mb-6 max-w-[420px] text-[14.5px] leading-relaxed text-muted">
          Book a free audit. We look at your Google profile, website, phone, and
          reviews, and tell you what to fix first.
        </p>
        <Button href="/contact" variant="primary">
          Book a Free Audit
        </Button>
      </div>
    </section>
  );
}