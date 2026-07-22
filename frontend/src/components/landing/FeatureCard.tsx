import GlassCard from "@/components/ui/GlassCard";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <GlassCard className="p-6 h-full">
      <div className="space-y-5">

        <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>

        <div>

          <h3 className="text-xl font-semibold">
            {title}
          </h3>

          <p className="mt-3 text-zinc-400 leading-7">
            {description}
          </p>

        </div>

      </div>
    </GlassCard>
  );
}