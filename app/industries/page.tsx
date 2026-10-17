import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustrySection from "@/components/industries/IndustrySection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Nodelith helps dental clinics, med spas, and local service businesses like HVAC, plumbing, and electrical get more booked appointments from calls, searches, and reviews.",
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />

      <IndustrySection
        badge="Dental Clinics"
        title="Dental Clinics"
        industryKey="dental"
        painPoints={[
          "The front desk is busy with patients, and calls go unanswered",
          "New patients check your Google profile and reviews before they call",
          "Inquiries that arrive after hours wait until the next day",
        ]}
        solutions={[
          "A complete Google profile and a website that books",
          "Instant text-back when the front desk cannot pick up",
          "The same polite review request after every visit",
        ]}
        scenario="A patient calls at 6 PM to ask about availability. No one is there to answer, so they try the next clinic on their list."
      />

      <IndustrySection
        badge="Med Spas"
        title="Med Spa Services"
        industryKey="medspa"
        reverse
        painPoints={[
          "New clients compare profiles, photos, and reviews before they book",
          "Inquiries come in by phone, text, and social messages, and some wait too long",
          "Asking for a review is easy to forget on a busy day",
        ]}
        solutions={[
          "A professional Google profile and social presence",
          "Instant replies to inquiries, even after hours",
          "Review requests sent to every client, with no filtering or incentives",
        ]}
        scenario="A client has a great visit but is never asked for a review. Over time, the profile looks thin next to competitors with more recent reviews."
      />

      <IndustrySection
        badge="Local Services"
        title="Local Services (HVAC, Plumbing, Electrical)"
        industryKey="local-services"
        painPoints={[
          "Techs are on a job and cannot answer every call",
          "Urgent requests need a quick reply, not voicemail",
          "Customers often call a few companies and go with the one that answers first",
        ]}
        solutions={[
          "Instant text-back when you miss a call mid-job",
          "A simple way for customers to book without phone tag",
          "A Google profile and website that win the first look",
        ]}
        scenario="A pipe bursts at 9 PM. The customer calls a few companies, and the one that replies first has the best chance at the job."
      />
    </>
  );
}