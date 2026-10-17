import Badge from "../ui/Badge";

export default function ServicesHero() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[720px] px-8 text-center animate-rise">
        <Badge label="Our Two Offers" />

        <h1 className="font-display mt-4.5 mb-4 text-[30px] font-semibold leading-[1.15] tracking-tight sm:text-[38px]">
          Two ways to fill your calendar.
        </h1>

        <p className="mx-auto max-w-[520px] text-[15.5px] leading-relaxed text-muted">
          Start small with missed-call recovery, or let us set up your whole
          online client system. Both come with a 30-day result promise.
        </p>
      </div>
    </section>
  );
}