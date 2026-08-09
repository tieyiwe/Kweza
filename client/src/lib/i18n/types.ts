export type Language = "fr" | "en" | "sw";

export interface Step {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Translations {
  meta: {
    htmlLang: string;
    title: string;
    description: string;
  };
  nav: {
    linkHowItWorks: string;
    linkCredit: string;
    linkCoverage: string;
    linkFaq: string;
    ctaRegister: string;
    whatsapp: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaFarmer: string;
    ctaSeller: string;
    ctaWhatsapp: string;
    scrollHint: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: Step[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabFarmer: string;
    tabSeller: string;
    farmerSteps: Step[];
    sellerSteps: Step[];
    mockupCaption: string;
    farmerMockupLabel: string;
    sellerMockupLabel: string;
    flow: {
      title: string;
      subtitle: string;
      requestCredit: string;
      buyFromFarmer: string;
      sellProduce: string;
      repay: string;
    };
    mock: {
      profileTitle: string;
      cropLabel: string;
      regionLabel: string;
      saveButton: string;
      myProductsTitle: string;
      availableBadge: string;
      offerTitle: string;
      acceptButton: string;
      declineButton: string;
      paymentReceivedTitle: string;
      viaLabel: string;
      businessProfileTitle: string;
      companyLabel: string;
      volumeLabel: string;
      creditApprovedTitle: string;
      approvedBadge: string;
      nearbyFarmersTitle: string;
      buyButton: string;
      balanceTitle: string;
      usedLabel: string;
      nextRepaymentLabel: string;
    };
  };
  creditLine: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: Step[];
    estimator: {
      title: string;
      businessTypeLabel: string;
      businessTypePlaceholder: string;
      volumeLabel: string;
      volumeUnit: string;
      resultLabel: string;
      resultHint: string;
      ctaLabel: string;
    };
  };
  impact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: Step[];
  };
  coverage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    liveLabel: string;
    soonLabel: string;
    note: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: Step[];
    partnersNote: string;
  };
  socialProof: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyBody: string;
    emptyCta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  form: {
    eyebrow: string;
    title: string;
    subtitle: string;
    role: {
      sectionTitle: string;
      farmerTitle: string;
      farmerBody: string;
      sellerTitle: string;
      sellerBody: string;
      requiredError: string;
    };
    personal: {
      sectionTitle: string;
      fullName: string;
      fullNamePlaceholder: string;
      phone: string;
      email: string;
      region: string;
      regionPlaceholder: string;
      address: string;
      addressPlaceholder: string;
    };
    farmer: {
      sectionTitle: string;
      farmSize: string;
      farmSizePlaceholder: string;
      crops: string;
      cropsHint: string;
      cropsError: string;
      experience: string;
      experiencePlaceholder: string;
      yield: string;
      yieldPlaceholder: string;
    };
    seller: {
      sectionTitle: string;
      businessName: string;
      businessNamePlaceholder: string;
      businessType: string;
      businessTypePlaceholder: string;
      products: string;
      productsHint: string;
      productsError: string;
      monthlyVolume: string;
      monthlyVolumePlaceholder: string;
      yearsInBusiness: string;
      yearsInBusinessPlaceholder: string;
    };
    additional: {
      sectionTitle: string;
      creditNeeds: string;
      creditNeedsPlaceholder: string;
      comments: string;
      commentsPlaceholder: string;
      terms: string;
      termsLinkText: string;
      termsError: string;
    };
    submit: {
      button: string;
      submitting: string;
    };
    errors: {
      fullName: string;
      phone: string;
      email: string;
      region: string;
      generic: string;
    };
    success: {
      title: string;
      body: string;
      close: string;
    };
  };
  footer: {
    tagline: string;
    contactTitle: string;
    whatsapp: string;
    email: string;
    linksTitle: string;
    privacy: string;
    terms: string;
    contact: string;
    admin: string;
    rights: string;
  };
  products: Record<string, string>;
  businessTypes: Record<string, string>;
}
