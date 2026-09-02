type StatItemProps = {
  value: string;
  label: string;
};

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div>
      <strong className="font-display block text-xl font-semibold text-ink">
        {value}
      </strong>
      <span className="text-xs text-muted">{label}</span>
    </div>
  );
}
