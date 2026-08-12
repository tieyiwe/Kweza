import { cn } from "@/lib/utils";

interface FigureIllustrationProps {
  className?: string;
  variant?: "carrying" | "standing";
}

// Flat-design duotone silhouette placeholder — used until real photography
// from DRC markets/farms is available. Deliberately monochrome + accent
// colors rather than a specific skin tone rendering.
export function FigureIllustration({ className, variant = "carrying" }: FigureIllustrationProps) {
  return (
    <svg
      viewBox="0 0 300 360"
      className={cn("aspect-[5/6]", className)}
      role="img"
      aria-label="Illustration d'un agriculteur ou vendeur congolais"
    >
      <ellipse cx="150" cy="330" rx="95" ry="16" className="fill-terracotta/15" />

      {variant === "carrying" && (
        <>
          <path
            d="M118,118 Q86,96 96,58"
            className="stroke-background"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M182,118 Q214,96 204,58"
            className="stroke-background"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          <polygon points="96,58 204,58 188,88 112,88" className="fill-accent" />
          <ellipse cx="150" cy="58" rx="54" ry="15" className="fill-accent" />
          <circle cx="122" cy="55" r="7" className="fill-terracotta" />
          <circle cx="150" cy="50" r="8" className="fill-primary" />
          <circle cx="178" cy="55" r="7" className="fill-terracotta" />
        </>
      )}

      <circle cx="150" cy="96" r="30" className="fill-background" />
      <rect x="140" y="120" width="20" height="18" className="fill-background" />

      <path
        d="M108,138 C90,180 76,250 66,326 L234,326 C224,250 210,180 192,138 Z"
        className="fill-background"
      />
      <rect x="76" y="246" width="148" height="20" rx="4" className="fill-terracotta" />

      {variant === "standing" && (
        <>
          <path
            d="M112,150 Q80,175 84,215"
            className="stroke-background"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M188,150 Q220,175 216,215"
            className="stroke-background"
            strokeWidth="15"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="84" cy="222" r="10" className="fill-primary" />
          <circle cx="216" cy="222" r="10" className="fill-accent" />
        </>
      )}
    </svg>
  );
}
