import HeroSection from "@/components/sections/HeroSection";
import JetStreak from "@/components/sections/JetStreak";
import PillarsSection from "@/components/sections/PillarsSection";
import WorkPhilosophySection from "@/components/sections/WorkPhilosophySection";
import TeamsPreviewSection from "@/components/sections/TeamsPreviewSection";
import EffortsPreviewSection from "@/components/sections/EffortsPreviewSection";
import JoinCTASection from "@/components/sections/JoinCTASection";
import { SEO } from "@/lib/constants";
import { useSEO } from "@/lib/useSEO";

export default function HomePage() {
  useSEO(SEO.home);

  return (
    <>
      <HeroSection />
      <JetStreak />
      <PillarsSection />
      <WorkPhilosophySection />
      <JetStreak direction="rtl" />
      <TeamsPreviewSection />
      <JetStreak />
      <EffortsPreviewSection />
      <JoinCTASection />
    </>
  );
}
