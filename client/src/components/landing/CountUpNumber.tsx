import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface CountUpNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUpNumber({ value, suffix = "", duration = 1200, className }: CountUpNumberProps) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
