import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import ProjectCard from "@/components/cards/ProjectCard";
import { PROTOTYPES } from "@/lib/constants";

const viewport = { once: true, margin: "-50px" } as const;

export default function EffortsPreviewSection() {
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
            Current Efforts
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            A three-phase prototype roadmap toward record-breaking unmanned
            flight.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PROTOTYPES.map((proto, i) => (
            <motion.div
              key={proto.title}
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
              <ProjectCard prototype={proto} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-center"
        >
          <Link
            to="/efforts"
            className="inline-flex items-center gap-2 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all efforts
            <ArrowRight size={16} weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
