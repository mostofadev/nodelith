import Badge from "../ui/Badge";

export default function IndustriesHero() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[720px] px-8 text-center animate-rise">
        <Badge label="Who We Work With" />

        <h1 className="font-display mt-4.5 mb-4 text-[30px] font-semibold leading-[1.15] tracking-tight sm:text-[38px]">
          Built for businesses like yours.
        </h1>

        <p className="mx-auto max-w-[480px] text-[15.5px] leading-relaxed text-muted">
          Every industry loses leads differently. Here&apos;s how we fix it
          for yours.
        </p>
      </div>
    </section>
  );
}