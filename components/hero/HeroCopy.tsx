import Badge from "../ui/Badge";
import Button from "../ui/Button";
import StatsRow, { type Stat } from "./StatsRow";

const STATS: Stat[] = [
  { value: "30 days", label: "result promise" },
  { value: "1 team", label: "profile, website, calls & reviews" },
  { value: "Instant", label: "text-back on missed calls" },
];

export default function HeroCopy() {
  return (
    <div>
      <Badge label="Done-for-you client system for local businesses" />

      <h1 className="font-display mt-4.5 mb-5 text-[32px] font-semibold leading-[1.12] tracking-tight animate-rise [animation-delay:.1s] sm:text-[40px] lg:text-[50px]">
        More booked appointments from{" "}
        <span className="text-accent">people already looking for you.</span>
      </h1>

      <p className="mb-7.5 max-w-[470px] text-[16.5px] leading-relaxed text-muted animate-rise [animation-delay:.2s]">
        For dental clinics, med spas, and local service businesses. We fix your
        Google profile, website, missed calls, and reviews, so your calendar
        fills up without extra staff. Backed by a 30-day result promise.
      </p>

      <div className="flex flex-wrap items-center gap-3.5 animate-rise [animation-delay:.3s]">
        <Button href="/contact" variant="primary">
          Book a Free Audit
        </Button>
        <Button href="/services" variant="ghost">
          See the two offers
        </Button>
      </div>

      <StatsRow stats={STATS} />
    </div>
  );
}