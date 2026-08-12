import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/contexts/language-context";
import { SECTION_IDS } from "@/lib/sections";

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id={SECTION_IDS.faq} className="scroll-mt-16 bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t.faq.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{t.faq.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.faq.subtitle}</p>
        </Reveal>

        <Reveal delay={80}>
          <Accordion type="single" collapsible className="mt-10 rounded-2xl border border-border bg-card px-6">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger data-testid={`faq-question-${i}`} className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${i}`}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
