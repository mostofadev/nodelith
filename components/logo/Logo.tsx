import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({ className = ""}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Link href="/">
        <Image src="/logo.svg" alt="Nodelith" width={200} height={20} priority />
      </Link>
    </div>
  );
}