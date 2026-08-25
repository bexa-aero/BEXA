import { motion } from "framer-motion";
import EffortDetailCard from "@/components/cards/EffortDetailCard";
import { PROTOTYPES_DETAIL } from "@/lib/constants";

const viewport = { once: true, margin: "-50px" } as const;

export default function EffortDetailSection() {
  return (
    <section className="py-16 md:py-24 bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-heading text-2xl md:text-3xl font-bold text-text mb-10 md:mb-14 text-center"
        >
          Effort Details
        </motion.h2>

        <div className="space-y-6">
          {PROTOTYPES_DETAIL.map((effort) => (
            <motion.div
              key={effort.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <EffortDetailCard effort={effort} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
