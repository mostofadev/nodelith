export default function AmbientBackground() {
  // horizontal rows: only some animate, each with its own timing, direction and range
  const rows = [
    {
      top: 56,
      animate: true,
      duration: "6s",
      delay: "0s",
      anim: "row-drift-a",
    },
    { top: 112, animate: false },
    {
      top: 168,
      animate: true,
      duration: "8.5s",
      delay: "1.4s",
      anim: "row-drift-b",
    },
    { top: 224, animate: false },
    {
      top: 280,
      animate: true,
      duration: "5.5s",
      delay: "0.6s",
      anim: "row-drift-c",
    },
    {
      top: 336,
      animate: true,
      duration: "9s",
      delay: "2.8s",
      anim: "row-drift-a",
    },
    { top: 392, animate: false },
    {
      top: 448,
      animate: true,
      duration: "7s",
      delay: "0.2s",
      anim: "row-drift-b",
    },
    { top: 504, animate: false },
    {
      top: 560,
      animate: true,
      duration: "6.5s",
      delay: "1.8s",
      anim: "row-drift-c",
    },
    {
      top: 616,
      animate: true,
      duration: "10s",
      delay: "0.9s",
      anim: "row-drift-a",
    },
     {
      top: 636,
      animate: true,
      duration: "10s",
      delay: "0.9s",
      anim: "row-drift-a",
    },
     {
      top: 666,
      animate: true,
      duration: "10s",
      delay: "0.9s",
      anim: "row-drift-a",
    },
     {
      top: 696,
      animate: true,
      duration: "10s",
      delay: "0.9s",
      anim: "row-drift-a",
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 25%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 25%, black 25%, transparent 80%)",
        }}
      >
        {/* static vertical columns — never move */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #E7E7EC 1px, transparent 1px)",
            backgroundSize: "56px 100%",
          }}
        />

        {/* horizontal rows — each line moves its own way */}
        {rows.map((row, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-[#E7E7EC] opacity-[0.55]"
            style={{
              top: row.top,
              animationName: row.animate ? row.anim : undefined,
              animationDuration: row.animate ? row.duration : undefined,
              animationDelay: row.animate ? row.delay : undefined,
              animationTimingFunction: row.animate ? "ease-in-out" : undefined,
              animationIterationCount: row.animate ? "infinite" : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}
