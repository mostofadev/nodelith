type FlowNodeProps = {
  label: string;
  tag: string;
  step: number;
  totalSteps: number;
  loopDuration?: number;
};

export default function FlowNode({
  label,
  tag,
  step,
  totalSteps,
  loopDuration = 6,
}: FlowNodeProps) {
  const delay = (loopDuration / totalSteps) * step;

  return (
    <div
      className="flex items-center justify-between border border-line bg-white px-3.5 py-3 text-[13px] font-medium transition-transform animate-flow-step"
      style={{
        animationDuration: `${loopDuration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <span>{label}</span>
      <span
        className="border border-line bg-panel px-1.5 py-1 text-[9px] font-bold uppercase tracking-wider text-muted animate-flow-tag"
        style={{
          animationDuration: `${loopDuration}s`,
          animationDelay: `${delay}s`,
        }}
      >
        {tag}
      </span>
    </div>
  );
}