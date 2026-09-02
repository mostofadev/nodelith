import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold transition-colors duration-200";

  const variants = {
    primary: "bg-ink text-white hover:bg-accent",
    ghost: "bg-transparent text-ink border border-line hover:border-ink",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
