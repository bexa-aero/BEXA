import { motion } from "framer-motion";
import { Clock, Student, UsersThree } from "@phosphor-icons/react";

const details = [
  {
    icon: Clock,
    text: "5-10 hours/week during active build phases", // TODO: Confirm with client
  },
  {
    icon: Student,
    text: "No prior experience required. We train on all tools and methods",
  },
  {
    icon: UsersThree,
    text: "Open to all majors and years within the College of Engineering",
  },
];

export default function WhatToExpectSection() {
  return (
    <section className="py-16 md:py-24 bg-surface border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 md:items-center"
        >
          {/* Left: Text */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-text mb-4">
              What to Expect
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              BExA members work on real aerospace engineering challenges
              alongside coursework. You'll contribute to a prototype from
              concept through flight test, gaining skills that translate
              directly to careers in aerospace, defense, and advanced
              manufacturing.
            </p>
          </div>

          {/* Right: Details */}
          <div className="space-y-4">
            {details.map((detail, i) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-start gap-3"
                >
                  <Icon
                    size={20}
                    weight="duotone"
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-text/90">{detail.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
