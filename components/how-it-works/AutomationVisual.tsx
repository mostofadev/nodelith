type WorkflowNode = {
  leftPct: number;
  topPct: number;
  label: string;
  tag: string;
  delay: number;
  icon: "trigger" | "logic" | "calendar";
};

const NODES: WorkflowNode[] = [
  { leftPct: 20, topPct: 13, label: "Customer calls or searches", tag: "Trigger", delay: 0, icon: "trigger" },
  { leftPct: 80, topPct: 38, label: "Instant text-back", tag: "Reply", delay: 3, icon: "logic" },
  { leftPct: 20, topPct: 63, label: "Appointment booked", tag: "Booking", delay: 6, icon: "calendar" },
];

// নোডের leftPct/topPct এর সাথে একই 0–100 কো-অর্ডিনেট, এটাই সবকিছু সারিতে রাখে
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
    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="5.5" width="16" height="14.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M9.5 15l2 2 3.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function AutomationVisual() {
  return (
    <div className="w-full max-w-[540px] border border-line bg-panel">
      <div className="flex items-center justify-between border-b border-line px-6 py-5 text-[11.5px] font-semibold uppercase tracking-wider text-muted">
        <span>How the system works</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Example
        </span>
      </div>

      <div className="relative h-[600px] w-full overflow-hidden">
        {/* ডটেড ক্যানভাস */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-line) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* কানেক্টর পথ */}
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

        {/* ওয়ার্কফ্লো নোড */}
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

        {/* শেষ ধাপ — রিভিউ রিকোয়েস্ট (প্রতিটা কাস্টমারকে সমানভাবে) */}
        <div className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center" style={{ left: "80%", top: "88%" }}>
          <div className="relative">
            <div
              className="absolute right-16 bottom-1/2 w-[190px] translate-y-1/2 rounded-xl rounded-br-sm border border-line bg-white px-3.5 py-2.5 text-left shadow-sm animate-bubble-pop"
              style={{ animationDelay: "9s" }}
            >
              <p className="text-[12px] leading-snug text-ink">
                Thanks for visiting us today! If you&apos;d like, you can share your experience on Google.
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
                <path
                  d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8-4.3-4.1 5.9-.9L12 3.5z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="mt-3 whitespace-nowrap text-center">
            <div className="text-[13px] font-medium text-ink">Review request sent</div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">Every customer</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between border-t border-line px-6 py-5 text-xs text-muted">
        <span>Goal</span>
        <strong className="font-semibold text-ink">A full calendar</strong>
      </div>
    </div>
  );
}