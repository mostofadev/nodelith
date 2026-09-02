
type WorkflowNode = {
  leftPct: number;
  topPct: number;
  label: string;
  tag: string;
  delay: number;
  icon: "trigger" | "logic" | "data";
};

const NODES: WorkflowNode[] = [
  { leftPct: 20, topPct: 13, label: "Missed call detected", tag: "Trigger", delay: 0, icon: "trigger" },
  { leftPct: 80, topPct: 38, label: "AI text-back sent", tag: "Agent", delay: 3, icon: "logic" },
  { leftPct: 20, topPct: 63, label: "CRM updated", tag: "Data", delay: 6, icon: "data" },
];
// same 0–100 coordinate space as the node leftPct/topPct above — this is what keeps them aligned
const PATH_D = "M20,13 C58,13 58,38 80,38 C42,38 42,63 20,63 C58,63 58,88 80,88";

function NodeIcon({ type }: { type: WorkflowNode["icon"] }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none" as const };
  switch (type) {
    case "trigger":
      return (
        <svg {...common}>
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      );
    case "logic":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9.5 3.5V7M14.5 3.5V7M9.5 17V20.5M14.5 17V20.5M3.5 9.5H7M3.5 14.5H7M17 9.5H20.5M17 14.5H20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6.5" rx="7" ry="2.6" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 6.5v5.5c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 12v5.5c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V12" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

export default function AutomationVisual() {
  return (
    <div className="w-full max-w-[540px] border border-line bg-panel">
      <div className="flex items-center justify-between border-b border-line px-6 py-5 text-[11.5px] font-semibold uppercase tracking-wider text-muted">
        <span>Workflow · Lead Intake</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Live
        </span>
      </div>

      <div className="relative h-[600px] w-full overflow-hidden">
        {/* dotted canvas */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* connector path — same 0-100 coordinate space as the nodes below, so it always lines up */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path d={PATH_D} fill="none" stroke="var(--color-line)" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />

          <circle r="1.6" fill="var(--color-accent)" opacity="0.16">
            <animateMotion
              dur="12s" repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.42;1"
              keyPoints="0;1;1"
              keySplines="0.65 0 0.35 1;0 0 1 1"
              path={PATH_D}
            />
            <animate attributeName="opacity" values="0;0.16;0.16;0;0" keyTimes="0;0.06;0.42;0.5;1" dur="12s" repeatCount="indefinite" />
          </circle>

          <circle r="0.8" fill="var(--color-accent)">
            <animateMotion
              dur="12s" repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.42;1"
              keyPoints="0;1;1"
              keySplines="0.65 0 0.35 1;0 0 1 1"
              path={PATH_D}
            />
            <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.04;0.42;0.48;1" dur="12s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* workflow nodes */}
        {NODES.map((node) => (
          <div
            key={node.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ left: `${node.leftPct}%`, top: `${node.topPct}%` }}
          >
            <div className="relative">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-white text-muted animate-node-glow"
                style={{ animationDelay: `${node.delay}s` }}
              >
                <NodeIcon type={node.icon} />
              </div>
              <div
                className="absolute -right-1.5 -top-1.5 flex h-5.5 w-5.5 items-center justify-center rounded-full bg-accent text-white animate-node-check"
                style={{ animationDelay: `${node.delay}s` }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="mt-3 whitespace-nowrap text-center">
              <div className="text-[13px] font-medium text-ink">{node.label}</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">{node.tag}</div>
            </div>
          </div>
        ))}

        {/* client — message delivered moment */}
        <div className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center" style={{ left: "80%", top: "88%" }}>
          <div className="relative">
            <div
              className="absolute right-16 bottom-1/2 w-[190px] translate-y-1/2 rounded-xl rounded-br-sm border border-line bg-white px-3.5 py-2.5 text-left shadow-sm animate-bubble-pop"
              style={{ animationDelay: "9s" }}
            >
              <p className="text-[12px] leading-snug text-ink">
                Hi! Thanks for reaching out — here&apos;s your available package options 👋
              </p>
              <div className="mt-1.5 flex items-center justify-end gap-1">
                <span className="text-[9px] text-muted">Delivered</span>
                <svg width="13" height="9" viewBox="0 0 16 11" fill="none">
                  <path d="M1 5.5l3 3 6-7" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.5 5.5l3 3 6-7" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute -bottom-1.5 right-4 h-3 w-3 rotate-45 border-b border-r border-line bg-white" />
            </div>

            <div
              className="flex h-16 w-16 items-center justify-center rounded-full border border-line bg-white text-muted animate-node-glow"
              style={{ animationDelay: "9s" }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4.5 20c1.2-4 4-6 7.5-6s6.3 2 7.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="mt-3 whitespace-nowrap text-center">
            <div className="text-[13px] font-medium text-ink">Reply sent</div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">Client</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-line px-6 py-5 text-xs text-muted">
        <span>Runtime</span>
        <strong className="font-semibold text-ink">14 sec</strong>
      </div>
    </div>
  );
}