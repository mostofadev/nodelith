import DemoVideoSection from "@/components/demo/DemoVideoSection";
import FinalCtaSection from "@/components/final-cta/FinalCtaSection";
import Hero from "@/components/hero/Hero";
import HowItWorksSection from "@/components/how-it-works/HowItWorksSection";
import NicheSection from "@/components/niche/NicheSection";
import ProblemSection from "@/components/problem/ProblemSection";
import ServicesSection from "@/components/services/ServicesSection";
import SocialProofSection from "@/components/social-proof/SocialProofSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nodelith — Automated Lead Capture for Local Businesses",
  description:
    "Stop losing leads to missed calls and slow follow-ups. Nodelith automates booking, follow-up, and reviews for dental, med spa, and local service businesses.",
  openGraph: {
    title: "Nodelith — Automated Lead Capture for Local Businesses",
    description:
      "Stop losing leads to missed calls and slow follow-ups. Automated booking, follow-up, and reviews for local businesses.",
  },
};
export default function Home() {
  return (
    <>
      <Hero />
      <DemoVideoSection />

      <ProblemSection />
      <HowItWorksSection />
      <ServicesSection />
      <NicheSection />
      <SocialProofSection />
      <FinalCtaSection />
    </>
  );
}
