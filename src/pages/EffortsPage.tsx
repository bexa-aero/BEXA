import PageHero from "@/components/sections/PageHero";
import RoadmapTimeline from "@/components/sections/RoadmapTimeline";
import EffortDetailSection from "@/components/sections/EffortDetailSection";
import VisionBlock from "@/components/sections/VisionBlock";
import { SEO } from "@/lib/constants";
import { useSEO } from "@/lib/useSEO";

export default function EffortsPage() {
  useSEO(SEO.efforts);

  return (
    <>
      <PageHero
        heading="Our Efforts"
        subtext="From electric ducted fans to jet-powered transonic flight. Follow our prototype roadmap toward a Guinness World Record."
      />
      <RoadmapTimeline />
      <EffortDetailSection />
      <VisionBlock />
    </>
  );
}
