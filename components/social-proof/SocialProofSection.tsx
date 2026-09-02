import Badge from "../ui/Badge";

type Placeholder = {
  label: string;
};

// Replace these with real client names/logos once available.
const PLACEHOLDERS: Placeholder[] = [
  { label: "Dental Clinic" },
  { label: "Med Spa" },
  { label: "HVAC Company" },
  { label: "Plumbing Service" },
];

export default function SocialProofSection() {
  return (
    <section className="border-t border-line py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <div className="mb-10 text-center animate-rise">
          <Badge label="Trusted By" />
          <p className="font-display mt-4 text-[15px] font-medium text-muted">
            Built for businesses like these — real client results coming soon.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {PLACEHOLDERS.map((item, index) => (
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