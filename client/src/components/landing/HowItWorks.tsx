import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneMockup } from "./PhoneMockup";
import { CreditFlowAnimation } from "./CreditFlowAnimation";
import {
  FarmerOfferScreen,
  FarmerPaymentScreen,
  FarmerProductsScreen,
  FarmerProfileScreen,
  SellerBalanceScreen,
  SellerCreditApprovedScreen,
  SellerNearbyFarmersScreen,
  SellerProfileScreen,
} from "./MockScreens";
import { Reveal } from "@/hooks/use-reveal";
import { useLanguage } from "@/contexts/language-context";
import { SECTION_IDS } from "@/lib/sections";

export function HowItWorks() {
  const { t } = useLanguage();
  const [farmerStep, setFarmerStep] = useState(0);
  const [sellerStep, setSellerStep] = useState(0);

  const farmerScreens = [FarmerProfileScreen, FarmerProductsScreen, FarmerOfferScreen, FarmerPaymentScreen];
  const sellerScreens = [SellerProfileScreen, SellerCreditApprovedScreen, SellerNearbyFarmersScreen, SellerBalanceScreen];

  const FarmerScreen = farmerScreens[farmerStep];
  const SellerScreen = sellerScreens[sellerStep];

  return (
    <section id={SECTION_IDS.howItWorks} className="scroll-mt-16 bg-muted/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t.howItWorks.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{t.howItWorks.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.howItWorks.subtitle}</p>
        </Reveal>

        <Reveal className="mt-14 flex items-center justify-center gap-4 sm:gap-8">
          <PhoneMockup className="max-w-[150px] sm:max-w-[180px]">
            <FarmerProductsScreen t={t.howItWorks.mock} />
          </PhoneMockup>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <ArrowLeftRight className="h-5 w-5" />
          </span>
          <PhoneMockup className="max-w-[150px] sm:max-w-[180px]">
            <SellerBalanceScreen t={t.howItWorks.mock} />
          </PhoneMockup>
        </Reveal>

        <Reveal className="mt-16" delay={100}>
          <Tabs
            defaultValue="farmer"
            onValueChange={() => {
              setFarmerStep(0);
              setSellerStep(0);
            }}
          >
            <div className="flex justify-center">
              <TabsList data-testid="tabs-how-it-works">
                <TabsTrigger value="farmer" data-testid="tab-farmer">
                  {t.howItWorks.tabFarmer}
                </TabsTrigger>
                <TabsTrigger value="seller" data-testid="tab-seller">
                  {t.howItWorks.tabSeller}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="farmer" className="mt-10">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                <ol className="space-y-3">
                  {t.howItWorks.farmerSteps.map((step, i) => (
                    <li key={step.title}>
                      <button
                        type="button"
                        onClick={() => setFarmerStep(i)}
                        data-testid={`step-farmer-${i}`}
                        className={`w-full rounded-xl border p-4 text-left transition-all ${
                          farmerStep === i
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-border bg-card hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                              farmerStep === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-semibold text-foreground">{step.title}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ol>
                <div>
                  <PhoneMockup>
                    <FarmerScreen t={t.howItWorks.mock} />
                  </PhoneMockup>
                  <p className="mt-4 text-center text-xs text-muted-foreground">{t.howItWorks.mockupCaption}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="seller" className="mt-10">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                <ol className="space-y-3">
                  {t.howItWorks.sellerSteps.map((step, i) => (
                    <li key={step.title}>
                      <button
                        type="button"
                        onClick={() => setSellerStep(i)}
                        data-testid={`step-seller-${i}`}
                        className={`w-full rounded-xl border p-4 text-left transition-all ${
                          sellerStep === i
                            ? "border-terracotta bg-terracotta/5 shadow-sm"
                            : "border-border bg-card hover:border-terracotta/40"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                              sellerStep === i ? "bg-terracotta text-terracotta-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-semibold text-foreground">{step.title}</p>
                            <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ol>
                <div>
                  <PhoneMockup>
                    <SellerScreen t={t.howItWorks.mock} />
                  </PhoneMockup>
                  <p className="mt-4 text-center text-xs text-muted-foreground">{t.howItWorks.mockupCaption}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Reveal>

        <Reveal className="mt-24 rounded-3xl border border-border bg-card p-8 sm:p-12" delay={100}>
          <div className="mx-auto max-w-lg text-center">
            <h3 className="text-2xl font-bold text-foreground">{t.howItWorks.flow.title}</h3>
            <p className="mt-2 text-muted-foreground">{t.howItWorks.flow.subtitle}</p>
          </div>
          <div className="mt-10">
            <CreditFlowAnimation />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
