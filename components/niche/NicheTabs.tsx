import { NICHES, type NicheKey } from "./niches";

type NicheTabsProps = {
  active: NicheKey;
  onChange: (key: NicheKey) => void;
};

export default function NicheTabs({ active, onChange }: NicheTabsProps) {
  return (
    <div className="mb-12 inline-flex border border-line animate-rise" style={{ animationDelay: ".08s" }}>
      {(Object.keys(NICHES) as NicheKey[]).map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-5 py-2.5 text-[13.5px] font-medium transition-colors duration-300 ${
            active === key ? "bg-ink text-white" : "bg-transparent text-muted hover:text-ink"
          }`}
        >
          {NICHES[key].label}
        </button>
      ))}
    </div>
  );
}