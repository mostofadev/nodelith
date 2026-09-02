type BadgeProps = {
  label: string;
  pulse?: boolean;
  className?: string;
};

export default function Badge({ label, pulse = false, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-wider text-muted animate-rise ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 bg-accent ${pulse ? "animate-pulse-dot" : ""}`}
      />
      {label}
    </span>
  );
}
