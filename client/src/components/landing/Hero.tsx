import { ChevronDown, MessageCircle, Sprout, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FigureIllustration } from "./illustrations/FigureIllustration";
import { useLanguage } from "@/contexts/language-context";
import { useRegistrationIntent } from "@/contexts/registration-intent-context";
import { SECTION_IDS } from "@/lib/sections";
import { WHATSAPP_LINK_BASE } from "@/lib/constants";

export function Hero() {
  const { t } = useLanguage();
  const { requestRole } = useRegistrationIntent();

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative overflow-hidden bg-forest text-forest-foreground scroll-mt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-blob-drift motion-reduce:animate-none"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-terracotta/20 blur-3xl animate-blob-drift-slow motion-reduce:animate-none"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/15 blur-3xl animate-blob-drift motion-reduce:animate-none"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            <Sprout className="h-4 w-4 text-primary" />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/80">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              onClick={() => requestRole("farmer")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-hero-farmer"
            >
              <Sprout className="mr-2 h-5 w-5" />
              {t.hero.ctaFarmer}
            </Button>
            <Button
              size="lg"
              onClick={() => requestRole("seller")}
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              data-testid="button-hero-seller"
            >
              <Store className="mr-2 h-5 w-5" />
              {t.hero.ctaSeller}
            </Button>
          </div>

          <a
            href={WHATSAPP_LINK_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            data-testid="link-hero-whatsapp"
          >
            <MessageCircle className="h-4 w-4 text-primary" />
            {t.hero.ctaWhatsapp}
          </a>
        </div>

        <div className="mx-auto w-full max-w-xs lg:max-w-sm">
          <FigureIllustration variant="carrying" className="w-full" />
        </div>
      </div>

      <button
        type="button"
        onClick={() => document.getElementById(SECTION_IDS.problem)?.scrollIntoView({ behavior: "smooth" })}
        className="relative mx-auto mb-6 flex flex-col items-center gap-1 text-xs font-medium text-white/60 transition-colors hover:text-white/90"
        data-testid="button-scroll-hint"
      >
        {t.hero.scrollHint}
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}
