import Button from "../ui/Button";

export default function ServicesCta() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[560px] px-8 text-center">
        <h2 className="font-display mb-4 text-[24px] font-semibold tracking-tight sm:text-[28px]">
          Ready to stop losing leads?
        </h2>
        <p className="mx-auto mb-6 max-w-[420px] text-[14.5px] leading-relaxed text-muted">
          Book a free 15-minute call — we&apos;ll show you exactly where
          leads are slipping through.
        </p>
        <Button href="/contact">Book a Call</Button>
      </div>
    </section>
  );
}