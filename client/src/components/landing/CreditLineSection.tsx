import { useMemo, useState } from "react";
import { CalendarClock, ShieldCheck, Users } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/contexts/language-context";
import { useRegistrationIntent } from "@/contexts/registration-intent-context";
import { SECTION_IDS } from "@/lib/sections";
import { BUSINESS_TYPE_VALUES, CREDIT_RANGES } from "@/lib/constants";

const ICONS = [Users, CalendarClock, ShieldCheck];

function estimateRange(volume: number): (typeof CREDIT_RANGES)[number] {
  if (volume < 2) return CREDIT_RANGES[0];
  if (volume < 5) return CREDIT_RANGES[1];
  if (volume < 15) return CREDIT_RANGES[2];
  if (volume < 30) return CREDIT_RANGES[3];
  return CREDIT_RANGES[4];
}

export function CreditLineSection() {
  const { t } = useLanguage();
  const { requestRole } = useRegistrationIntent();
  const [businessType, setBusinessType] = useState<string>(BUSINESS_TYPE_VALUES[1]);
  const [volume, setVolume] = useState(5);

  const estimate = useMemo(() => estimateRange(volume), [volume]);

  return (
    <section id={SECTION_IDS.creditLine} className="scroll-mt-16 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">{t.creditLine.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{t.creditLine.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.creditLine.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {t.creditLine.points.map((point, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={point.title} delay={i * 80}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-5" data-testid={`card-credit-point-${i}`}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{point.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{point.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="lg:col-span-3" delay={120}>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground">{t.creditLine.estimator.title}</h3>

              <div className="mt-6 space-y-6">
                <div>
                  <label className="text-sm font-medium text-foreground">{t.creditLine.estimator.businessTypeLabel}</label>
                  <Select value={businessType} onValueChange={setBusinessType}>
                    <SelectTrigger className="mt-2" data-testid="select-estimator-business-type">
                      <SelectValue placeholder={t.creditLine.estimator.businessTypePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {BUSINESS_TYPE_VALUES.map((value) => (
                        <SelectItem key={value} value={value}>
                          {t.businessTypes[value]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">{t.creditLine.estimator.volumeLabel}</label>
                    <span className="text-sm font-semibold text-primary" data-testid="text-estimator-volume">
                      {volume} {t.creditLine.estimator.volumeUnit}
                    </span>
                  </div>
                  <Slider
                    className="mt-4"
                    min={0.5}
                    max={40}
                    step={0.5}
                    value={[volume]}
                    onValueChange={([v]) => setVolume(v)}
                    data-testid="slider-estimator-volume"
                  />
                </div>

                <div className="rounded-2xl bg-primary/5 p-5 text-center">
                  <p className="text-sm text-muted-foreground">{t.creditLine.estimator.resultLabel}</p>
                  <p className="mt-1 text-3xl font-bold text-primary" data-testid="text-estimator-result">
                    {estimate.label}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">{t.creditLine.estimator.resultHint}</p>
                </div>

                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                  onClick={() => requestRole("seller")}
                  data-testid="button-estimator-cta"
                >
                  {t.creditLine.estimator.ctaLabel}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
