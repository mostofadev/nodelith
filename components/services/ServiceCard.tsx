type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  featured?: boolean;
};

export default function ServiceCard({ number, title, description, featured }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col border border-line bg-panel p-6">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[13px] font-bold text-accent">{number}</span>
        {featured && (
          <span className="border border-accent/30 bg-accent/[0.07] px-2 py-1 text-[9.5px] font-semibold uppercase tracking-wider text-accent">
            Core Service
          </span>
        )}
      </div>
      <h3 className="font-display mb-2.5 text-[18px] font-semibold leading-snug text-ink">
        {title}
      </h3>
      <p className="text-[14px] leading-relaxed text-muted">{description}</p>
    </div>
  );
}