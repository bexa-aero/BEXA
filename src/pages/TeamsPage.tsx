import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHero from "@/components/sections/PageHero";
import TeamCardsSection from "@/components/sections/TeamCardsSection";
import PositionsSection from "@/components/sections/PositionsSection";
import JoinCTASection from "@/components/sections/JoinCTASection";
import { SEO } from "@/lib/constants";
import { useSEO } from "@/lib/useSEO";

export default function TeamsPage() {
  const location = useLocation();

  useSEO(SEO.teams);

  // Scroll to hash anchor on load
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location.hash]);

  return (
    <>
      <PageHero
        heading="Our Teams"
        subtext="Seven specialized teams, six engineering and one business, working together to design, build, test, and fly unmanned aircraft."
      />
      <TeamCardsSection />
      <PositionsSection />
      <JoinCTASection />
    </>
  );
}
