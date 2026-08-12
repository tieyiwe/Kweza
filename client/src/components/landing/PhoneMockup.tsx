import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[240px]", className)}>
      <div className="relative rounded-[2.25rem] border-[6px] border-forest bg-forest p-1.5 shadow-xl">
        <div className="absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-b-lg bg-forest" />
        <div className="aspect-[9/19] overflow-hidden rounded-[1.65rem] bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}
