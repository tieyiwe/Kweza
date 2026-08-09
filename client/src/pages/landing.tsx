import { useEffect } from "react";
import { RegistrationIntentProvider } from "@/contexts/registration-intent-context";
import { useLanguage } from "@/contexts/language-context";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { WhatsAppFloatingButton } from "@/components/landing/WhatsAppFloatingButton";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CreditLineSection } from "@/components/landing/CreditLineSection";
import { ImpactSection } from "@/components/landing/ImpactSection";
import { CoverageMap } from "@/components/landing/CoverageMap";
import { TrustSection } from "@/components/landing/TrustSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { FaqSection } from "@/components/landing/FaqSection";
import { RegistrationSection } from "@/components/landing/RegistrationSection";
import { SiteFooter } from "@/components/landing/SiteFooter";

function DocumentMeta() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", t.meta.description);
  }, [t]);

  return null;
}

export default function Landing() {
  return (
    <RegistrationIntentProvider>
      <DocumentMeta />
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main>
          <Hero />
          <ProblemSection />
          <HowItWorks />
          <CreditLineSection />
          <ImpactSection />
          <CoverageMap />
          <TrustSection />
          <SocialProof />
          <FaqSection />
          <RegistrationSection />
        </main>
        <SiteFooter />
        <WhatsAppFloatingButton />
      </div>
    </RegistrationIntentProvider>
  );
}
