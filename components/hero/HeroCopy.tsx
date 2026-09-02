import Badge from "../ui/Badge";
import Button from "../ui/Button";
import StatsRow, { type Stat } from "./StatsRow";

const STATS: Stat[] = [
  { value: "24/7", label: "missed calls recovered" },
  { value: "< 60s", label: "customer callback time" },
  { value: "0", label: "manual follow-ups" },
];

export default function HeroCopy() {
  return (
    <div>
      <Badge label="AI Automation for Service Businesses" />

      <h1 className="font-display mt-4.5 mb-5 text-[32px] font-semibold leading-[1.12] tracking-tight animate-rise [animation-delay:.1s] sm:text-[40px] lg:text-[50px]">
        Never lose another customer <span className="text-accent">to a missed call.</span>
      </h1>

      <p className="mb-7.5 max-w-[470px] text-[16.5px] leading-relaxed text-muted animate-rise [animation-delay:.2s]">
        Nodelith builds AI automation for dental clinics, med spas, and local
        service businesses — instant call-backs, automated booking, and
        follow-up systems that keep your calendar full, 24/7.
      </p>

      <div className="flex flex-wrap items-center gap-3.5 animate-rise [animation-delay:.3s]">
        <Button href="/contact" variant="primary">
          Book a Call
        </Button>
        <Button href="/case-studies" variant="ghost">
          See how it works
        </Button>
      </div>

      <StatsRow stats={STATS} />
    </div>
  );
}