import { Activity, Landmark, UserX } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/contexts/language-context";
import { SECTION_IDS } from "@/lib/sections";

const ICONS = [UserX, Landmark, Activity];

export function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section id={SECTION_IDS.problem} className="scroll-mt-16 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">{t.problem.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{t.problem.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.problem.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.problem.points.map((point, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={point.title} delay={i * 100}>
                <div
                  className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm"
                  data-testid={`card-problem-${i}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-terracotta/10">
                    <Icon className="h-6 w-6 text-terracotta" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
