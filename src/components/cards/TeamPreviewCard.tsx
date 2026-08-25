import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { getIcon } from "@/lib/icons";
import type { TeamPreview } from "@/lib/types";

interface TeamPreviewCardProps {
  team: TeamPreview;
}

export default function TeamPreviewCard({ team }: TeamPreviewCardProps) {
  const Icon = getIcon(team.icon);

  return (
    <div className="group h-full flex flex-col p-6 rounded-lg bg-[rgba(22,22,24,0.7)] border border-white/[0.06] backdrop-blur-[12px] glass-blur transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(187,0,0,0.1)] hover:-translate-y-1">
      <div className="mb-3">
        <Icon size={32} weight="duotone" className="text-primary" />
      </div>
      <h3 className="font-heading text-base font-semibold text-text mb-1">
        {team.name}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
        {team.description}
      </p>
      <Link
        to={`/teams#${team.slug}`}
        className="inline-flex items-center gap-1 py-1 self-start text-xs font-medium text-primary hover:text-primary/80 transition-all group-hover:gap-2"
      >
        Learn more
        <ArrowRight size={14} weight="bold" />
      </Link>
    </div>
  );
}
