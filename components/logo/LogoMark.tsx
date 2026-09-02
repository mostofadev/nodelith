type LogoMarkProps = {
  size?: number;
  accentColor?: string;
  inkColor?: string;
  className?: string;
};

export default function LogoMark({
  size = 26,
  accentColor = "#6D4CE0",
  inkColor = "#1A1A22",
  className = "",
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke={accentColor}
        strokeWidth="15"
        strokeLinecap="round"
        d="M 30 16 H 20 A 12 12 0 0 0 8 28 V 38"
      />
      <path
        fill="none"
        stroke={accentColor}
        strokeWidth="15"
        strokeLinecap="round"
        d="M 78 44 V 34 A 26 26 0 0 0 52 8 H 42"
      />
      <path
        fill="none"
        stroke={inkColor}
        strokeWidth="15"
        strokeLinecap="round"
        d="M 66 80 H 76 A 12 12 0 0 0 88 68 V 58"
      />
      <path
        fill="none"
        stroke={inkColor}
        strokeWidth="15"
        strokeLinecap="round"
        d="M 18 52 V 62 A 26 26 0 0 0 44 88 H 54"
      />
      <circle fill={inkColor} cx="38" cy="44" r="6.5" />
      <circle fill={accentColor} cx="54" cy="52" r="6.5" />
    </svg>
  );
}
