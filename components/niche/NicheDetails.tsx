import Button from "../ui/Button";
import type { NicheContent } from "./niches";

export default function NicheDetails({ content }: { content: NicheContent }) {
  return (
    <div className="animate-rise">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
        {content.eyebrow}
      </span>
      <h3 className="font-display mt-3 mb-4 text-[24px] font-semibold leading-[1.2] tracking-tight sm:text-[28px]">
        {content.headline}
      </h3>
      <p className="mb-8 max-w-[480px] text-[15px] leading-relaxed text-muted">
        {content.description}
      </p>

      <ul className="flex flex-col gap-3.5">
        {content.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-[14px] leading-snug text-ink">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button href="/contact" variant="ghost">
          Talk to us about {content.label}
        </Button>
      </div>
    </div>
  );
}