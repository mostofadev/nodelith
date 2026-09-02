import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustrySection from "@/components/industries/IndustrySection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Industries",
  description:
    "See how Nodelith's automation fits dental clinics, med spas, and local service businesses like HVAC, plumbing, and electrical.",
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
          "Front desk misses calls during patient hours",
          "No-shows go unnoticed until the chair is empty",
          "New patient inquiries sit unanswered overnight",
        ]}
        scenario="A patient calls at 6 PM asking about availability. No one answers — by morning, they've already booked with another clinic."
      />

      <IndustrySection
        badge="Med Spas"
        title="Med Spa Services"
        industryKey="medspa"
        reverse
        painPoints={[
          "Bookings depend heavily on Instagram DMs and reviews",
          "Manual follow-up after treatments rarely happens",
          "Review requests get forgotten in the daily rush",
        ]}
        scenario="A client loves their treatment but never gets asked for a review. Meanwhile, a competitor's automated request racks up five-star ratings weekly."
      />

      <IndustrySection
        badge="Local Services"
        title="Local Services (HVAC, Plumbing, Electrical)"
        industryKey="local-services"
        painPoints={[
          "Techs are on-site and can't answer every call",
          "Emergency requests need instant response, not voicemail",
          "Scheduling conflicts happen without real-time calendar sync",
        ]}
        scenario="A pipe bursts at 9 PM. The customer calls three companies — the first one to text back wins the job, every time."
      />
    </>
  );
}
