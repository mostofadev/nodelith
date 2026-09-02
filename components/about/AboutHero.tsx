import Badge from "../ui/Badge";

export default function AboutHero() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[720px] px-8 text-center animate-rise">
        <Badge label="Why Nodelith" />

        <h1 className="font-display mt-4.5 mb-4 text-[30px] font-semibold leading-[1.15] tracking-tight sm:text-[38px]">
          Built by someone who noticed the gap.
        </h1>

        <p className="mx-auto max-w-[480px] text-[15.5px] leading-relaxed text-muted">
          Nodelith started with one simple observation — small businesses
          lose customers not from bad service, but from slow response.
        </p>
      </div>
    </section>
  );
}