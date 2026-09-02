import StatItem from "./StatItem";

export type Stat = {
  value: string;
  label: string;
};

type StatsRowProps = {
  stats: Stat[];
  className?: string;
};

export default function StatsRow({ stats, className = "" }: StatsRowProps) {
  return (
    <div
      className={`mt-11 flex gap-9 border-t border-line pt-6 animate-rise [animation-delay:.4s] ${className}`}
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
