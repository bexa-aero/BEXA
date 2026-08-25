import { motion } from "framer-motion";
import TeamCard from "@/components/cards/TeamCard";
import { TEAMS_DETAIL } from "@/lib/constants";

const viewport = { once: true, margin: "-50px" } as const;

export default function TeamCardsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TEAMS_DETAIL.map((team, i) => (
            <motion.div
              key={team.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.5,
                delay: (i % 2) * 0.08,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <TeamCard team={team} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
