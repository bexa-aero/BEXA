import { motion } from "framer-motion";
import ValuePropCard from "@/components/cards/ValuePropCard";
import { JOIN_VALUE_PROPS } from "@/lib/constants";

const viewport = { once: true, margin: "-50px" } as const;

export default function WhyJoinSection() {
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text">
            Why Join BExA?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JOIN_VALUE_PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
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
              <ValuePropCard prop={prop} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
