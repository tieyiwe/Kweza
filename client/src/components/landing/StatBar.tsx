import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface StatBarProps {
  value: number;
  className?: string;
  trackClassName?: string;
  fillClassName?: string;
}

export function StatBar({ value, className, trackClassName, fillClassName }: StatBarProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn("h-2.5 w-full overflow-hidden rounded-full bg-terracotta/10", trackClassName, className)}
    >
      <div
        className={cn("h-full rounded-full bg-terracotta transition-[width] duration-[1200ms] ease-out", fillClassName)}
        style={{ width: visible ? `${Math.min(Math.max(value, 0), 100)}%` : "0%" }}
      />
    </div>
  );
}
