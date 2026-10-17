import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import SampleWorkflowBreakdown from "@/components/case-studies/SampleWorkflowBreakdown";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import CaseStudiesComingSoon from "@/components/case-studies/CaseStudiesComingSoon";
import { Metadata } from "next";


const CASE_STUDIES: {
  clientType: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  metric?: { label: string; value: string };
}[] = [];

export const metadata: Metadata = {
  title: "How It Works & Results",
  description:
    "See how Nodelith's client system works for dental clinics, med spas, and local service businesses. Real client results will be shared here as they come in.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <SampleWorkflowBreakdown />

      {CASE_STUDIES.length > 0 ? (
        <CaseStudiesGrid studies={CASE_STUDIES} />
      ) : (
        <CaseStudiesComingSoon />
      )}
    </>
  );
}