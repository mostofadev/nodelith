import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import SampleWorkflowBreakdown from "@/components/case-studies/SampleWorkflowBreakdown";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import CaseStudiesComingSoon from "@/components/case-studies/CaseStudiesComingSoon";
import { Metadata } from "next";

// Real client case studies go here as they come in.
// Just add a new object below — it renders automatically as a card.
const CASE_STUDIES: {
  clientType: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  metric?: { label: string; value: string };
}[] = [
  // Example (uncomment and fill in once you have a real client):
  {
    clientType: "Riverside Dental",
    industry: "Dental Clinic",
    problem: "Front desk missed ~30% of incoming calls during peak hours.",
    solution: "Missed-call auto-text + calendar-synced booking bot.",
    result: "Recovered an estimated 15 leads per month within 30 days.",
    metric: { label: "Leads Recovered", value: "+15/mo" },
  },
];
export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real workflow breakdowns and client results from businesses using Nodelith's automation.",
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
