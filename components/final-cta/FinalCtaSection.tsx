import Button from "../ui/Button";

export default function FinalCtaSection() {
  return (
    <section className="border-t border-line bg-panel py-20 lg:py-28">
      <div className="mx-auto flex w-full max-w-[720px] flex-col items-center px-8 text-center animate-rise">
        <h2 className="font-display mb-4 text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[36px]">
          Stop losing customers to slow replies.
        </h2>
        <p className="mb-9 max-w-[480px] text-[15.5px] leading-relaxed text-muted">
          Book a free 15-minute call — we&apos;ll show you exactly where leads
          are slipping through and how to fix it.
        </p>
        <Button href="/contact" variant="primary">
          Book a Call
        </Button>
      </div>
    </section>
  );
}