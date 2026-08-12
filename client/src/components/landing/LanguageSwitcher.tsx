import { useLanguage } from "@/contexts/language-context";
import { LANGUAGE_OPTIONS } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
}

export function LanguageSwitcher({ variant = "dark" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5 text-xs font-semibold",
        variant === "dark"
          ? "border-white/20 bg-white/5"
          : "border-border bg-card",
      )}
      role="group"
      aria-label="Choisir la langue / Choose language / Chagua lugha"
    >
      {LANGUAGE_OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          data-testid={`button-lang-${option.value}`}
          onClick={() => setLanguage(option.value)}
          aria-pressed={language === option.value}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            language === option.value
              ? variant === "dark"
                ? "bg-primary text-primary-foreground"
                : "bg-primary text-primary-foreground"
              : variant === "dark"
                ? "text-white/70 hover:text-white"
                : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
