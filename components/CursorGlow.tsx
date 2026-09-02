"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("custom-cursor-active");

    function handleMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY };
    }

    function handleOver(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest("a, button");
      ringRef.current?.classList.toggle("cursor-ring--active", !!el);
    }

    function handleDown() {
      ringRef.current?.classList.add("cursor-ring--down");
    }
    function handleUp() {
      ringRef.current?.classList.remove("cursor-ring--down");
    }

    let raf: number;
    function animate() {
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.35;

      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.14;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    raf = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[999] hidden -translate-x-1/2 -translate-y-1/2 rounded-full sm:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[998] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border sm:block"
      />
    </>
  );
}