import { motion } from "framer-motion";
import type { Prototype } from "@/lib/types";

interface TimelineNodeProps {
  prototype: Prototype;
  index: number;
  isLast: boolean;
}

export default function TimelineNode({
  prototype,
  index,
  isLast,
}: TimelineNodeProps) {
  const isActive = prototype.badge === "Active";

  return (
    <div className="flex gap-5">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.3,
            delay: index * 0.15 + 0.1,
            ease: "easeOut",
          }}
          className={`w-4 h-4 rounded-full border-2 shrink-0 ${
            isActive
              ? "border-primary bg-primary shadow-[0_0_12px_rgba(187,0,0,0.4)]"
              : "border-neutral bg-bg"
          }`}
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.15 + 0.25,
              ease: "easeOut",
            }}
            className="w-px flex-1 bg-border min-h-[60px] origin-top"
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <h3 className="font-heading text-lg font-semibold text-text">
            {prototype.title}
          </h3>
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium ${
              isActive
                ? "bg-success/10 text-success border border-success/20"
                : "bg-neutral/10 text-neutral border border-neutral/20"
            }`}
          >
            {prototype.badge}
          </span>
        </div>
        <p className="text-xs text-muted mb-2">{prototype.timeline}</p>
        <p className="text-sm text-muted leading-relaxed">
          {prototype.description}
        </p>
      </div>
    </div>
  );
}
