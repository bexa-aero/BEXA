import type { Prototype } from "@/lib/types";

interface ProjectCardProps {
  prototype: Prototype;
}

export default function ProjectCard({ prototype }: ProjectCardProps) {
  return (
    <div className="group h-full p-6 rounded-lg bg-[rgba(22,22,24,0.7)] border border-white/[0.06] backdrop-blur-[12px] glass-blur transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(187,0,0,0.1)] hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium ${
            prototype.badge === "Active"
              ? "bg-success/10 text-success border border-success/20"
              : "bg-neutral/10 text-neutral border border-neutral/20"
          }`}
        >
          {prototype.badge}
        </span>
        <span className="text-xs text-muted">{prototype.timeline}</span>
      </div>
      <h3 className="font-heading text-lg font-semibold text-text mb-2">
        {prototype.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">
        {prototype.description}
      </p>
    </div>
  );
}
