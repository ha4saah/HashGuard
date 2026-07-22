import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl

        shadow-[0_8px_40px_rgba(0,0,0,0.35)]

        transition-all
        duration-300

        hover:border-indigo-400/40
        hover:bg-white/[0.05]
        hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(79,70,229,0.20)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
}