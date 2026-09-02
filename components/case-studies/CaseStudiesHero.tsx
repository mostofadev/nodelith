import Badge from "../ui/Badge";

export default function CaseStudiesHero() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[720px] px-8 text-center animate-rise">
        <Badge label="Results" />

        <h1 className="font-display mt-4.5 mb-4 text-[30px] font-semibold leading-[1.15] tracking-tight sm:text-[38px]">
          What the automation actually looks like.
        </h1>

        <p className="mx-auto max-w-[480px] text-[15.5px] leading-relaxed text-muted">
          A real walkthrough of the system in action — plus where client
          results will live as they come in.
        </p>
      </div>
    </section>
  );
}