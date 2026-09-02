export type NicheKey ="local-services" | "dental" | "medspa"  ;

export type NicheContent = {
  label: string;
  eyebrow: string;
  headline: string;
  description: string;
  points: string[];
  stat: { value: string; label: string };
};

export const NICHES: Record<NicheKey, NicheContent> = {
   "local-services": {
    label: "Local Services",
    eyebrow: "For HVAC, Plumbing & Electrical",
    headline: "Every unanswered call is a job to a competitor?",
    description:
      "When you're on a job site, calls go unanswered. Our automation instantly responds, captures the issue, and books the appointment — so no lead goes cold.",
    points: [
      "Instant response even when you're mid-job",
      "Appointment booking without back-and-forth calls",
      "Every lead captured, even after hours",
    ],
    stat: { value: "24/7", label: "call coverage, even when your team is on-site" },
  },
  dental: {
    label: "Dental Clinics",
    eyebrow: "For Dental Clinics",
    headline: "Missing calls means missing patients?",
    description:
      "We build automation that instantly texts back missed calls, answers common questions, and books appointments — so a busy front desk never costs you a patient.",
    points: [
      "Instant text-back on every missed call",
      "Automated appointment booking, day or night",
      "Reminders that cut down no-shows",
    ],
    stat: { value: "< 60s", label: "average callback time after a missed call" },
  },
  medspa: {
    label: "Med Spas",
    eyebrow: "For Med Spas",
    headline: "Great results, but not enough reviews?",
    description:
      "Our automation follows up after every visit — answering questions, encouraging rebooking, and turning happy clients into 5-star reviews automatically.",
    points: [
      "Automated post-visit follow-ups",
      "Review requests sent at the right moment",
      "Rebooking reminders that keep your calendar full",
    ],
    stat: { value: "3x", label: "more reviews collected with automated requests" },
  },
 
};