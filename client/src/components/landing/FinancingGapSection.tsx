import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUpNumber } from "./CountUpNumber";
import { StatBar } from "./StatBar";
import { Reveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/contexts/language-context";
import { SECTION_IDS } from "@/lib/sections";

function scrollToHowItWorks() {
  document.getElementById(SECTION_IDS.howItWorks)?.scrollIntoView({ behavior: "smooth" });
}

export function FinancingGapSection() {
  const { t } = useLanguage();

  return (
    <section id={SECTION_IDS.financingGap} className="scroll-mt-16 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">{t.financingGap.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{t.financingGap.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.financingGap.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.financingGap.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div
                className="flex h-full flex-col rounded-2xl border border-terracotta/20 bg-terracotta/5 p-6"
                data-testid={`card-financing-stat-${i}`}
              >
                <p className="text-5xl font-extrabold tracking-tight text-terracotta">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <StatBar value={stat.value} className="mt-4" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <p className="mt-6 text-center text-xs text-muted-foreground">{t.financingGap.sourceNote}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center sm:flex-row sm:text-left">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <Sprout className="h-6 w-6 text-primary" />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground">{t.financingGap.bridgeTitle}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.financingGap.bridgeBody}</p>
            </div>
            <Button
              onClick={scrollToHowItWorks}
              className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-financing-gap-bridge-cta"
            >
              {t.financingGap.bridgeCta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
