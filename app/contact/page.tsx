import ContactHero from "@/components/contact/ContactHero";
import CalendlyEmbed from "@/components/contact/CalendlyEmbed";
import AlternativeContact from "@/components/contact/AlternativeContact";
import ContactFaq from "@/components/contact/ContactFaq";
import type { Metadata } from "next";

const INDUSTRY_LABELS: Record<string, string> = {
  dental: "Dental Clinics",
  medspa: "Med Spas",
  "local-services": "Local Services",
};

type ContactPageProps = {
  searchParams: Promise<{ industry?: string }>;
};

export async function generateMetadata({
  searchParams,
}: ContactPageProps): Promise<Metadata> {
  const { industry } = await searchParams;
  const label = industry ? INDUSTRY_LABELS[industry] : undefined;

  return {
    title: "Contact",
    description: label
      ? `Book a free call to see how Nodelith works for ${label}.`
      : "Book a free 15-minute call and see exactly where your business is losing leads.",
  };
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { industry } = await searchParams;
  const industryLabel = industry ? INDUSTRY_LABELS[industry] : undefined;

  return (
    <>
      <ContactHero industryLabel={industryLabel} />

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-10 px-8 lg:grid-cols-[1.4fr_.6fr] lg:gap-14">
          <CalendlyEmbed />
          <AlternativeContact />
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[680px] px-8">
          <ContactFaq />
        </div>
      </section>
    </>
  );
}
