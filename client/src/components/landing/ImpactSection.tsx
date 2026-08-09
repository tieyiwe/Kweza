import { Link2, TrendingUp, Utensils } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/contexts/language-context";
import { SECTION_IDS } from "@/lib/sections";

const ICONS = [Link2, TrendingUp, Utensils];

export function ImpactSection() {
  const { t } = useLanguage();

  return (
    <section id={SECTION_IDS.impact} className="scroll-mt-16 bg-forest py-16 text-forest-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t.impact.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t.impact.title}</h2>
          <p className="mt-4 text-lg text-white/75">{t.impact.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.impact.pillars.map((pillar, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6" data-testid={`card-impact-${i}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{pillar.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
