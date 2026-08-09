import { FileCheck, Lock, Smartphone } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/contexts/language-context";
import { SECTION_IDS } from "@/lib/sections";

const ICONS = [Lock, Smartphone, FileCheck];

// Drop real partner/backer logo images into this array (label + optional
// logoSrc) once available; empty slots render as placeholders.
const PARTNER_SLOTS: { label: string; logoSrc?: string }[] = [];

export function TrustSection() {
  const { t } = useLanguage();

  return (
    <section id={SECTION_IDS.trust} className="scroll-mt-16 bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t.trust.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{t.trust.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.trust.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.trust.points.map((point, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={point.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-border bg-card p-6" data-testid={`card-trust-${i}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl border border-dashed border-border p-6 text-center">
            <p className="text-sm font-medium text-muted-foreground">{t.trust.partnersNote}</p>
            {PARTNER_SLOTS.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
                {PARTNER_SLOTS.map((partner) =>
                  partner.logoSrc ? (
                    <img key={partner.label} src={partner.logoSrc} alt={partner.label} className="h-8 opacity-70" />
                  ) : (
                    <span key={partner.label} className="text-sm text-muted-foreground">
                      {partner.label}
                    </span>
                  ),
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
