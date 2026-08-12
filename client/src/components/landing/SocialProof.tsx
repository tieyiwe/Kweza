import { Quote, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/hooks/use-reveal";
import { CountUpNumber } from "./CountUpNumber";
import { useLanguage } from "@/contexts/language-context";
import { useRegistrationIntent } from "@/contexts/registration-intent-context";
import { SECTION_IDS } from "@/lib/sections";
import { STATS, TESTIMONIALS, type StatItem } from "@/lib/constants";

function CountUpStat({ stat }: { stat: StatItem }) {
  return (
    <div className="text-center" data-testid={`stat-${stat.label}`}>
      <p className="text-4xl font-bold text-primary">
        <CountUpNumber value={stat.value} suffix={stat.suffix ?? ""} />
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function SocialProof() {
  const { t } = useLanguage();
  const { requestRole } = useRegistrationIntent();
  const hasContent = STATS.length > 0 || TESTIMONIALS.length > 0;

  return (
    <section id={SECTION_IDS.socialProof} className="scroll-mt-16 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">{t.socialProof.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{t.socialProof.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.socialProof.subtitle}</p>
        </Reveal>

        {hasContent ? (
          <div className="mt-12 space-y-12">
            {STATS.length > 0 && (
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <CountUpStat key={stat.label} stat={stat} />
                ))}
              </div>
            )}
            {TESTIMONIALS.length > 0 && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {TESTIMONIALS.map((testimonial) => (
                  <div key={testimonial.name} className="rounded-2xl border border-border bg-card p-6">
                    <Quote className="h-6 w-6 text-primary/40" />
                    <p className="mt-3 text-sm text-foreground">{testimonial.quote}</p>
                    <p className="mt-4 text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} — {testimonial.location}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Reveal delay={80}>
            <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">{t.socialProof.emptyTitle}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.socialProof.emptyBody}</p>
              <Button
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => requestRole("farmer")}
                data-testid="button-social-proof-cta"
              >
                <Sprout className="mr-2 h-4 w-4" />
                {t.socialProof.emptyCta}
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
