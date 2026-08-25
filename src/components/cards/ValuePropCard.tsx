import { getIcon } from "@/lib/icons";
import type { ValueProp } from "@/lib/types";

interface ValuePropCardProps {
  prop: ValueProp;
}

export default function ValuePropCard({ prop }: ValuePropCardProps) {
  const Icon = getIcon(prop.icon);

  return (
    <div className="group h-full p-6 rounded-lg bg-[rgba(22,22,24,0.7)] border border-white/[0.06] backdrop-blur-[12px] glass-blur transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(187,0,0,0.1)] hover:-translate-y-1">
      <div className="mb-4">
        <Icon size={36} weight="duotone" className="text-primary" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-text mb-2">
        {prop.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{prop.body}</p>
    </div>
  );
}
