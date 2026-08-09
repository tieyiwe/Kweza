import { Check, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/contexts/language-context";
import { SECTION_IDS } from "@/lib/sections";
import { COVERAGE_REGIONS } from "@/lib/constants";

export function CoverageMap() {
  const { t } = useLanguage();
  const live = COVERAGE_REGIONS.filter((r) => r.status === "live");
  const soon = COVERAGE_REGIONS.filter((r) => r.status === "soon");

  return (
    <section id={SECTION_IDS.coverage} className="scroll-mt-16 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t.coverage.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{t.coverage.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.coverage.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" />
                </span>
                <h3 className="font-semibold text-foreground">{t.coverage.liveLabel}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {live.map((region) => (
                  <li
                    key={region.province}
                    data-testid={`coverage-live-${region.province}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-sm font-medium"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {region.province}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Clock className="h-4 w-4" />
                </span>
                <h3 className="font-semibold text-foreground">{t.coverage.soonLabel}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {soon.map((region) => (
                  <li
                    key={region.province}
                    data-testid={`coverage-soon-${region.province}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {region.province}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <p className="mt-8 text-center text-sm text-muted-foreground">{t.coverage.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
