import type { NicheContent } from "./niches";

export default function NicheStatPanel({ content }: { content: NicheContent }) {
  return (
    <div className="animate-rise" style={{ animationDelay: ".1s" }}>
      <div className="border border-line bg-panel p-7">
        <div className="mb-6 text-[10.5px] font-semibold uppercase tracking-wider text-muted">
          {content.eyebrow}
        </div>
        <div className="font-display text-[42px] font-semibold leading-none text-ink">
          {content.stat.value}
        </div>
        <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{content.stat.label}</p>
      </div>
    </div>
  );
}