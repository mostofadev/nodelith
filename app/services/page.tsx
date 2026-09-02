import ServiceAppointmentBooking from "@/components/services/ServiceAppointmentBooking";
import ServiceCrmIntegration from "@/components/services/ServiceCrmIntegration";
import ServiceFollowUpReview from "@/components/services/ServiceFollowUpReview";
import ServiceMissedCallRecovery from "@/components/services/ServiceMissedCallRecovery";
import ServicesCta from "@/components/services/ServicesCta";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesPricingTeaser from "@/components/services/ServicesPricingTeaser";
import ServicesProcess from "@/components/services/ServicesProcess";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Missed-call recovery, automated appointment booking, follow-up automation, and CRM integration — built for local service businesses.",
};
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceMissedCallRecovery />
      <ServiceAppointmentBooking />
      <ServiceFollowUpReview />
      <ServiceCrmIntegration />
      <ServicesProcess />
      <ServicesPricingTeaser />
      <ServicesCta />
    </>
  );
}
