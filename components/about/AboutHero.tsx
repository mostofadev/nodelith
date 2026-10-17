import Badge from "../ui/Badge";

export default function AboutHero() {
  return (
    <section className="border-b border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[720px] px-8 text-center animate-rise">
        <Badge label="About Nodelith" />

        <h1 className="font-display mt-4.5 mb-4 text-[30px] font-semibold leading-[1.15] tracking-tight sm:text-[38px]">
          A small team that helps local businesses fill their calendar.
        </h1>

        <p className="mx-auto max-w-[520px] text-[15.5px] leading-relaxed text-muted">
          We help dental clinics, med spas, and local service businesses turn
          calls, searches, and reviews into booked appointments.
        </p>
      </div>
    </section>
  );
}