import { motion } from "framer-motion";
import TeamPreviewCard from "@/components/cards/TeamPreviewCard";
import { TEAMS_PREVIEW } from "@/lib/constants";

const viewport = { once: true, margin: "-50px" } as const;

export default function TeamsPreviewSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mb-4">
            Our Teams
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Seven specialized teams working together to design, build, test, and
            fly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAMS_PREVIEW.map((team, i) => (
            <motion.div
              key={team.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <TeamPreviewCard team={team} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
