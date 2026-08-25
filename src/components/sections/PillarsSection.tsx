import { motion } from "framer-motion";
import PillarCard from "@/components/cards/PillarCard";
import { PILLARS } from "@/lib/constants";

const viewport = { once: true, margin: "-50px" } as const;

export default function PillarsSection() {
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
            Our Engineering Pillars
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Four disciplines. One mission. Pushing the limits of unmanned
            flight.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.08,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <PillarCard pillar={pillar} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
