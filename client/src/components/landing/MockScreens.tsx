import { Check, CheckCircle2, Leaf, MapPin, Smartphone, Wallet } from "lucide-react";
import type { Translations } from "@/lib/i18n";

type Mock = Translations["howItWorks"]["mock"];

function ScreenShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex items-center justify-between bg-forest px-4 py-3">
        <span className="text-xs font-semibold text-white">Kweza</span>
        <span className="h-2 w-2 rounded-full bg-primary" />
      </div>
      <div className="border-b border-border px-4 py-3">
        <p className="text-sm font-semibold text-foreground">{title}</p>
      </div>
      <div className="flex-1 space-y-2.5 overflow-hidden p-4">{children}</div>
    </div>
  );
}

export function FarmerProfileScreen({ t }: { t: Mock }) {
  return (
    <ScreenShell title={t.profileTitle}>
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-[11px] text-muted-foreground">{t.cropLabel}</p>
        <p className="text-sm font-medium text-foreground">Manioc</p>
      </div>
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-[11px] text-muted-foreground">{t.regionLabel}</p>
        <p className="text-sm font-medium text-foreground">Kwilu</p>
      </div>
      <div className="mt-2 rounded-lg bg-primary py-2 text-center text-xs font-semibold text-primary-foreground">
        {t.saveButton}
      </div>
    </ScreenShell>
  );
}

export function FarmerProductsScreen({ t }: { t: Mock }) {
  const items = [
    { name: "Manioc — 2T", icon: Leaf },
    { name: "Maïs — 1,5T", icon: Leaf },
  ];
  return (
    <ScreenShell title={t.myProductsTitle}>
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
          <div className="flex items-center gap-2">
            <item.icon className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-foreground">{item.name}</span>
          </div>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
            {t.availableBadge}
          </span>
        </div>
      ))}
    </ScreenShell>
  );
}

export function FarmerOfferScreen({ t }: { t: Mock }) {
  return (
    <ScreenShell title={t.offerTitle}>
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-xs font-semibold text-foreground">Jean K.</p>
        <p className="mt-1 text-[11px] text-muted-foreground">500 kg — 0,40 $/kg</p>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-primary py-2 text-center text-[11px] font-semibold text-primary-foreground">
          {t.acceptButton}
        </div>
        <div className="rounded-lg border border-border py-2 text-center text-[11px] font-semibold text-muted-foreground">
          {t.declineButton}
        </div>
      </div>
    </ScreenShell>
  );
}

export function FarmerPaymentScreen({ t }: { t: Mock }) {
  return (
    <ScreenShell title={t.paymentReceivedTitle}>
      <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card p-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </span>
        <p className="text-lg font-bold text-foreground">150 $</p>
        <p className="text-[11px] text-muted-foreground">
          {t.viaLabel} Mobile Money
        </p>
      </div>
    </ScreenShell>
  );
}

export function SellerProfileScreen({ t }: { t: Mock }) {
  return (
    <ScreenShell title={t.businessProfileTitle}>
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-[11px] text-muted-foreground">{t.companyLabel}</p>
        <p className="text-sm font-medium text-foreground">Kin Marché</p>
      </div>
      <div className="rounded-lg border border-border bg-card p-3">
        <p className="text-[11px] text-muted-foreground">{t.volumeLabel}</p>
        <p className="text-sm font-medium text-foreground">8 T</p>
      </div>
    </ScreenShell>
  );
}

export function SellerCreditApprovedScreen({ t }: { t: Mock }) {
  return (
    <ScreenShell title={t.creditApprovedTitle}>
      <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card p-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
          <Check className="h-7 w-7 text-accent" />
        </span>
        <p className="text-lg font-bold text-foreground">5 000 $</p>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent-foreground">
          {t.approvedBadge}
        </span>
      </div>
    </ScreenShell>
  );
}

export function SellerNearbyFarmersScreen({ t }: { t: Mock }) {
  const farmers = ["Alphonse M. — Manioc", "Bibiche N. — Maïs"];
  return (
    <ScreenShell title={t.nearbyFarmersTitle}>
      {farmers.map((farmer) => (
        <div key={farmer} className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-terracotta" />
            <span className="text-[11px] font-medium text-foreground">{farmer}</span>
          </div>
          <span className="rounded-full bg-terracotta px-2 py-0.5 text-[10px] font-semibold text-terracotta-foreground">
            {t.buyButton}
          </span>
        </div>
      ))}
    </ScreenShell>
  );
}

export function SellerBalanceScreen({ t }: { t: Mock }) {
  return (
    <ScreenShell title={t.balanceTitle}>
      <div className="rounded-lg border border-border bg-card p-3">
        <div className="flex items-center gap-2">
          <Wallet className="h-4 w-4 text-primary" />
          <p className="text-[11px] text-muted-foreground">{t.usedLabel}: 1 200 $ / 5 000 $</p>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[24%] rounded-full bg-primary" />
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-3">
        <Smartphone className="h-4 w-4 text-terracotta" />
        <p className="text-[11px] text-muted-foreground">{t.nextRepaymentLabel}: 15/09</p>
      </div>
    </ScreenShell>
  );
}
