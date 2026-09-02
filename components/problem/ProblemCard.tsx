type ProblemCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function ProblemCard({ number, title, description }: ProblemCardProps) {
  return (
    <div className="border border-line bg-panel p-5.5">
      <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
        {number}
      </span>
      <h3 className="font-display mt-3 mb-2.5 text-[18px] font-semibold leading-snug text-ink">
        {title}
      </h3>
      <p className="text-[14.5px] leading-relaxed text-muted">{description}</p>
    </div>
  );
}