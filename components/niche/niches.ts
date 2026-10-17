export type NicheKey = "dental" | "medspa" | "local-services";

export type NicheContent = {
  label: string;
  eyebrow: string;
  headline: string;
  description: string;
  points: string[];
  stat: { value: string; label: string };
};

export const NICHES: Record<NicheKey, NicheContent> = {
  dental: {
    label: "Dental Clinics",
    eyebrow: "For Dental Clinics",
    headline: "A full schedule, without adding front-desk staff.",
    description:
      "Patients search, call, and check reviews before they book. We set up your Google profile, website, missed-call text-back, and review requests, so more of them end up on your calendar.",
    points: [
      "A complete Google profile and a website that books",
      "Instant text-back when the front desk is busy",
      "The same polite review request after every visit",
    ],
    stat: {
      value: "Full schedule",
      label: "is the goal: fewer empty slots, without extra front-desk staff",
    },
  },
  medspa: {
    label: "Med Spas",
    eyebrow: "For Med Spas",
    headline: "Be the first choice when someone searches for treatments.",
    description:
      "New clients compare profiles, photos, and reviews before they book. We set up the full online presence and follow up after every visit, so your calendar keeps filling.",
    points: [
      "A professional Google profile and social presence",
      "Instant replies to inquiries, even after hours",
      "Review requests sent to every client, with no filtering or incentives",
    ],
    stat: {
      value: "Every client",
      label: "gets the same review request, with no filtering",
    },
  },
  "local-services": {
    label: "Local Services",
    eyebrow: "For HVAC, Plumbing & Electrical",
    headline: "Every unanswered call is a job for your competitor.",
    description:
      "When you are on a job, the phone keeps ringing. We make sure missed calls get an instant text and a way to book, and we set up the rest of your online presence so more jobs find you first.",
    points: [
      "Instant text-back when you miss a call mid-job",
      "Booking without back-and-forth phone tag",
      "A Google profile and website that win the first look",
    ],
    stat: {
      value: "Instant",
      label: "text-back when you miss a call",
    },
  },
};