import Badge from "../ui/Badge";

export default function ServicesHero() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[720px] px-8 text-center animate-rise">
        <Badge label="What We Build" />

        <h1 className="font-display mt-4.5 mb-4 text-[30px] font-semibold leading-[1.15] tracking-tight sm:text-[38px]">
          Systems that catch every lead — automatically.
        </h1>

        <p className="mx-auto max-w-[480px] text-[15.5px] leading-relaxed text-muted">
          From missed calls to booked appointments, we build the automation
          layer your business is currently missing.
        </p>
      </div>
    </section>
  );
}