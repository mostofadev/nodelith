import FlowCard, { type FlowStep } from "./FlowCard";

const WORKFLOW_STEPS: FlowStep[] = [
  { label: "Missed call detected", tag: "Trigger" },
  { label: "AI text-back sent", tag: "Agent" },
  { label: "Appointment booked", tag: "Action" },
  { label: "CRM updated", tag: "Data" },
];

export default function HeroVisual() {
  return (
    <div className="flex justify-center animate-rise [animation-delay:.25s]">
      <FlowCard
        title="Workflow · Missed-Call Recovery"
        runtime="12 sec"
        steps={WORKFLOW_STEPS}
      />
    </div>
  );
}