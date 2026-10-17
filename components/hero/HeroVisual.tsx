import FlowCard, { type FlowStep } from "./FlowCard";

const WORKFLOW_STEPS: FlowStep[] = [
  { label: "Customer calls or searches", tag: "Trigger" },
  { label: "Instant reply, even if you miss it", tag: "Agent" },
  { label: "Appointment booked", tag: "Action" },
  { label: "Review request sent", tag: "Follow-up" },
];
export default function HeroVisual() {
  return (
    <div className="flex justify-center animate-rise [animation-delay:.25s]">
      <FlowCard
        title="How the system works"
        statusLabel="Example"
        footerLabel="Goal"
        runtime="A full calendar"
        steps={WORKFLOW_STEPS}
      />
    </div>
  );
}