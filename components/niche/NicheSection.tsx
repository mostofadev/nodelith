"use client";

import { useState } from "react";
import Badge from "../ui/Badge";
import NicheTabs from "./NicheTabs";
import NicheDetails from "./NicheDetails";
import NicheStatPanel from "./NicheStatPanel";
import { NICHES, type NicheKey } from "./niches";

export default function NicheSection() {
  const [active, setActive] = useState<NicheKey>("local-services");
  const content = NICHES[active];
  return (
    <section className="border-t border-line py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-8">
        <div className="mb-10 max-w-[560px] animate-rise">
          <Badge label="Built For Your Industry" />
          <h2 className="font-display mt-4.5 text-[28px] font-semibold leading-[1.15] tracking-tight sm:text-[34px]">
            Not a generic solution.
          </h2>
        </div>

        <NicheTabs active={active} onChange={setActive} />

        <div key={active} className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <NicheDetails content={content} />
          <NicheStatPanel content={content} />
        </div>
      </div>
    </section>
  );
}