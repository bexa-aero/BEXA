import { motion } from "framer-motion";

export default function VisionBlock() {
  return (
    <section className="py-16 md:py-24 bg-surface border-t border-b border-border relative overflow-hidden">
      {/* Scarlet ambient glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[280px] max-w-full rounded-full bg-primary/10 blur-[110px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative max-w-3xl mx-auto px-4 text-center"
      >
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-text mb-4">
          The Long-Term Goal
        </h3>
        <p className="text-muted leading-relaxed">
          BExA exists to push the boundaries of what student engineers can
          achieve. Our ultimate objective is a Guinness World Record for the
          fastest unmanned aircraft, but the real mission is developing
          engineers who are ready to lead in aerospace, defense, and beyond.
        </p>
      </motion.div>
    </section>
  );
}
