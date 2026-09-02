"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../logo/Logo";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/75 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-5">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            href="/contact"
            variant="primary"
            className="!px-4.5 !py-2.5 text-[13.5px]"
          >
            Book a Call
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-ink transition-all duration-300 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-ink transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-ink transition-all duration-300 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-line bg-white/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-8 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-lg bg-[#6D4CE0] px-4.5 py-2.5 text-center text-[13.5px] font-medium text-white transition-colors hover:bg-[#5A3DC7]"
            >
              Book a Call
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
