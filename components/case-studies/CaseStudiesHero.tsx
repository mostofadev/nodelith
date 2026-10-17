import Badge from "../ui/Badge";

export default function CaseStudiesHero() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[720px] px-8 text-center animate-rise">
        <Badge label="Proof" />

        <h1 className="font-display mt-4.5 mb-4 text-[30px] font-semibold leading-[1.15] tracking-tight sm:text-[38px]">
          How it works, and where our results will live.
        </h1>

        <p className="mx-auto max-w-[520px] text-[15.5px] leading-relaxed text-muted">
          We are just getting started, so you will not find made-up numbers
          here. Below is an example of the system, and a way to become one of
          our first pilot clients.
        </p>
      </div>
    </section>
  );
}