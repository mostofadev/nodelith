import Badge from "../ui/Badge";

type Segment = {
  label: string;
};

const SEGMENTS: Segment[] = [
  { label: "Dental Clinics" },
  { label: "Med Spas" },
  { label: "HVAC Companies" },
  { label: "Plumbing & Electrical" },
];

export default function SocialProofSection() {
  return (
    <section className="border-t border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <div className="mb-10 text-center animate-rise">
          <Badge label="Who It's For" />
          <p className="font-display mt-4 text-[15px] font-medium text-muted">
            Built for local businesses like these. We are currently taking on
            our first pilot clients.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {SEGMENTS.map((item, index) => (
            <div
              key={item.label}
              className="flex h-20 items-center justify-center border border-line bg-panel text-center text-[12.5px] font-semibold uppercase tracking-wider text-muted animate-rise"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}