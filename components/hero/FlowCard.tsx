import FlowNode from "./FlowNode";

export type FlowStep = {
  label: string;
  tag: string;
};

type FlowCardProps = {
  title: string;
  runtime: string;
  steps: FlowStep[];
  className?: string;
};

export default function FlowCard({ title, runtime, steps, className = "" }: FlowCardProps) {
  return (
    <div className={`w-full max-w-[330px] border border-line bg-panel p-5.5 ${className}`}>
      <div className="mb-4.5 flex items-center justify-between text-[10.5px] font-semibold uppercase tracking-wider text-muted">
        <span>{title}</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 bg-accent" />
          Live
        </span>
      </div>

      {steps.map((step, index) => (
        <div key={step.label}>
          <FlowNode
            label={step.label}
            tag={step.tag}
            step={index}
            totalSteps={steps.length}
          />
          {index < steps.length - 1 && (
            <div className="ml-5.5 h-4.5 w-px bg-line" />
          )}
        </div>
      ))}

      <div className="mt-4.5 flex justify-between border-t border-line pt-4 text-xs text-muted">
        <span>Runtime</span>
        <strong className="font-semibold text-ink">{runtime}</strong>
      </div>
    </div>
  );
}
