type CaseStudyTemplateProps = {
  clientType: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  metric?: { label: string; value: string };
};

export default function CaseStudyTemplate({
  clientType,
  industry,
  problem,
  solution,
  result,
  metric,
}: CaseStudyTemplateProps) {
  return (
    <div className="flex flex-col border border-line bg-panel p-7 transition-colors duration-200 hover:border-accent">
      <div className="flex items-center justify-between">
        <p className="text-[12.5px] font-semibold uppercase tracking-wide text-accent">
          {industry}
        </p>
        {metric && (
          <div className="text-right">
            <p className="font-display text-[18px] font-semibold text-ink">
              {metric.value}
            </p>
            <p className="text-[11px] text-muted">{metric.label}</p>
          </div>
        )}
      </div>

      <h3 className="font-display mt-3 mb-5 text-[17px] font-semibold tracking-tight text-ink">
        {clientType}
      </h3>

      <div className="flex flex-1 flex-col gap-4 text-[13.5px] leading-relaxed">
        <div>
          <p className="text-[11.5px] font-semibold uppercase tracking-wide text-muted">
            Problem
          </p>
          <p className="mt-1.5 text-ink">{problem}</p>
        </div>
        <div>
          <p className="text-[11.5px] font-semibold uppercase tracking-wide text-muted">
            Solution
          </p>
          <p className="mt-1.5 text-ink">{solution}</p>
        </div>
        <div className="mt-auto border-t border-line pt-4">
          <p className="text-[11.5px] font-semibold uppercase tracking-wide text-muted">
            Result
          </p>
          <p className="mt-1.5 font-medium text-ink">{result}</p>
        </div>
      </div>
    </div>
  );
}