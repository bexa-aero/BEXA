import { motion } from "framer-motion";
import TimelineNode from "@/components/cards/TimelineNode";
import { PROTOTYPES } from "@/lib/constants";

const viewport = { once: true, margin: "-50px" } as const;

export default function RoadmapTimeline() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-heading text-2xl md:text-3xl font-bold text-text mb-10 md:mb-14 text-center"
        >
          Prototype Roadmap
        </motion.h2>

        <div>
          {PROTOTYPES.map((proto, i) => (
            <motion.div
              key={proto.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            >
              <TimelineNode
                prototype={proto}
                index={i}
                isLast={i === PROTOTYPES.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
