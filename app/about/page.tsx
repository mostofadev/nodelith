import AboutHero from "@/components/about/AboutHero";
import FounderStory from "@/components/about/FounderStory";
import Approach from "@/components/about/Approach";
import TechStack from "@/components/about/TechStack";
// import FounderPhoto from "@/components/about/FounderPhoto"; // ছবি রেডি হলে uncomment করো
import AboutCta from "@/components/about/AboutCta";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description:
    "Why Nodelith exists, how it approaches automation, and the tools behind the system.",
};
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <Approach />
      <TechStack />
      {/* <FounderPhoto /> */}
      <AboutCta />
    </>
  );
}