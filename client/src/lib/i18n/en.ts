import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    htmlLang: "en",
    title: "Kuwezaa — Connecting Farmers and Sellers in the DRC",
    description:
      "Kuwezaa connects Congolese farmers with qualified sellers through a simple credit line, for a more stable market and better-sold harvests.",
  },
  nav: {
    linkHowItWorks: "How it works",
    linkCredit: "The credit line",
    linkCoverage: "Coverage",
    linkFaq: "FAQ",
    ctaRegister: "Sign up",
    whatsapp: "WhatsApp",
  },
  hero: {
    eyebrow: "Kuwezaa — Farmers & Sellers",
    title: "Sell more. Buy better. Pay at your own pace.",
    subtitle:
      "Kuwezaa connects Congolese farmers with serious sellers, and gives qualified sellers a credit line to buy directly from producers. A more reliable market, fairer prices.",
    ctaFarmer: "I'm a farmer",
    ctaSeller: "I'm a seller",
    ctaWhatsapp: "Chat on WhatsApp",
    scrollHint: "See how it works",
  },
  problem: {
    eyebrow: "The reality on the ground",
    title: "Buying and selling still feels too uncertain",
    subtitle:
      "Farmers and sellers have faced the same obstacles for years. Kuwezaa tackles these three blockers directly.",
    points: [
      {
        title: "Unreliable buyers",
        body: "Farmers lose harvests when no buyer shows up in time, or sell in a rush at a loss.",
      },
      {
        title: "No access to credit",
        body: "Sellers who could buy in bulk don't have the cash on hand, and banks stay out of reach.",
      },
      {
        title: "Unpredictable prices",
        body: "Without a direct link between producers and buyers, prices swing day to day and no one can plan ahead.",
      },
    ],
  },
  financingGap: {
    eyebrow: "The economic reality",
    title: "The lack of financing is holding back the whole Congolese economy",
    subtitle:
      "This isn't just one farmer's or seller's problem at a time — it's a structural drag weighing on the entire Congolese agricultural sector.",
    stats: [
      {
        value: 53,
        suffix: "%",
        label: "of Congolese small and medium businesses can't get the credit they need to grow.",
      },
      {
        value: 26,
        suffix: "% of GDP",
        label: "is the estimated size of the unmet MSME financing gap in the DRC.",
      },
      {
        value: 64,
        suffix: "%",
        label: "of jobs in the DRC depend on agriculture — a sector with almost no access to formal credit.",
      },
    ],
    sourceNote: "Sources: World Bank Group / IFC — DRC MSME finance gap; World Bank — DRC agricultural employment (2019).",
    bridgeTitle: "Kuwezaa was built to close that gap",
    bridgeBody:
      "By connecting farmers directly with sellers, and giving qualified sellers a credit line to buy without paying everything upfront, Kuwezaa puts credit and market access where the traditional financial system doesn't reach.",
    bridgeCta: "See how it works",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "How it works",
    subtitle:
      "Two simple paths, one goal: move agricultural produce faster and more fairly.",
    tabFarmer: "Farmer",
    tabSeller: "Seller",
    farmerSteps: [
      {
        title: "Register your farm",
        body: "Share your crops, average harvest and region in a few minutes.",
      },
      {
        title: "Get seen by sellers",
        body: "Sellers in your area see what you have available and reach out to you directly.",
      },
      {
        title: "Sell at an agreed price",
        body: "You set the quantity and price with the seller, no hidden middleman.",
      },
      {
        title: "Get paid",
        body: "Payment is confirmed as soon as delivery happens, by mobile money or cash, your choice.",
      },
    ],
    sellerSteps: [
      {
        title: "Register your business",
        body: "Tell us about your business and your usual buying volume so we can review it.",
      },
      {
        title: "Get your credit line",
        body: "Once qualified, you receive a credit line to buy directly from farmers.",
      },
      {
        title: "Buy from producers",
        body: "Find farmers near you and buy at a fair price without fronting all the cash.",
      },
      {
        title: "Repay after you sell",
        body: "You repay the credit line on a clear schedule, once your produce is sold.",
      },
    ],
    mockupCaption: "Illustrative preview — feature coming soon",
    farmerMockupLabel: "Farmer view",
    sellerMockupLabel: "Seller view",
    flow: {
      title: "The Kuwezaa credit cycle",
      subtitle: "A virtuous circle, from credit to repayment.",
      requestCredit: "Request credit",
      buyFromFarmer: "Buy from farmer",
      sellProduce: "Sell produce",
      repay: "Repay",
    },
    mock: {
      profileTitle: "My profile",
      cropLabel: "Crop",
      regionLabel: "Region",
      saveButton: "Save",
      myProductsTitle: "My products",
      availableBadge: "Available",
      offerTitle: "Offer received",
      acceptButton: "Accept",
      declineButton: "Decline",
      paymentReceivedTitle: "Payment received",
      viaLabel: "Via",
      businessProfileTitle: "My business",
      companyLabel: "Business",
      volumeLabel: "Monthly volume",
      creditApprovedTitle: "Credit approved",
      approvedBadge: "Approved",
      nearbyFarmersTitle: "Farmers near you",
      buyButton: "Buy",
      balanceTitle: "My balance",
      usedLabel: "Used",
      nextRepaymentLabel: "Next repayment",
    },
  },
  creditLine: {
    eyebrow: "The credit line, explained simply",
    title: "No catch, no surprises",
    subtitle:
      "The Kuwezaa credit line lets qualified sellers buy from farmers without paying everything upfront. Here's exactly how it works.",
    points: [
      {
        title: "Who can qualify?",
        body: "Any active seller who regularly buys agricultural produce can apply. Qualification is based on your business activity, not complicated collateral.",
      },
      {
        title: "How does repayment work?",
        body: "You repay after selling your produce, on a schedule set in advance and shared clearly before any purchase.",
      },
      {
        title: "Any hidden fees?",
        body: "None. Terms are disclosed before you accept the credit line — what you see is what you pay.",
      },
    ],
    estimator: {
      title: "Estimate your credit line",
      businessTypeLabel: "Business type",
      businessTypePlaceholder: "Choose your business type",
      volumeLabel: "Estimated monthly buying volume",
      volumeUnit: "tons / month",
      resultLabel: "Estimated credit line",
      resultHint: "Indicative estimate — the final amount is confirmed after reviewing your application.",
      ctaLabel: "Sign up to access it",
    },
  },
  impact: {
    eyebrow: "Our mission",
    title: "Impact beyond the transaction",
    subtitle:
      "Kuwezaa is building a stronger local supply chain, so every player — from field to market stall — benefits.",
    pillars: [
      {
        title: "Stronger supply chains",
        body: "By linking farmers and sellers directly, we cut post-harvest losses and unnecessary middlemen.",
      },
      {
        title: "Higher farmer income",
        body: "Guaranteed market access and fairer prices let farmers earn a better living from their work.",
      },
      {
        title: "Better access to local food",
        body: "Markets better stocked with fresh, local produce, in cities and rural areas alike.",
      },
    ],
  },
  coverage: {
    eyebrow: "Where we operate",
    title: "Coverage",
    subtitle:
      "Kuwezaa is starting with a pilot program and expanding gradually across the DRC. Here's where we stand today.",
    liveLabel: "Live now",
    soonLabel: "Coming soon",
    note: "Don't see your province? Sign up anyway — we'll reach out as soon as Kuwezaa launches near you.",
  },
  trust: {
    eyebrow: "Trust & security",
    title: "Your data and your money are protected",
    subtitle: "We know trust is earned. Here's the foundation of our commitment to you.",
    points: [
      {
        title: "Your data stays private",
        body: "Your personal information is never sold and is only used to manage your registration and credit line.",
      },
      {
        title: "Payments via mobile money",
        body: "Transactions run through recognized mobile money operators, with instant confirmation at every step.",
      },
      {
        title: "Clear terms from the start",
        body: "No hidden clauses: you know exactly what you owe and when, before you commit to anything.",
      },
    ],
    partnersNote: "Partners and backers: coming soon.",
  },
  socialProof: {
    eyebrow: "Trusted by our community",
    title: "Our community is growing",
    subtitle: "Farmers and sellers like you are already testing Kuwezaa on the ground.",
    emptyTitle: "Our pilot program is just getting started",
    emptyBody:
      "We're welcoming our first farmers and sellers. Real testimonials and numbers will be published here once our first sales cycle wraps up.",
    emptyCta: "Be one of the first to sign up",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Got questions? We've got answers.",
    subtitle: "Can't find what you're looking for? Reach out to us directly on WhatsApp.",
    items: [
      {
        question: "Is this a predatory loan?",
        answer:
          "No. The Kuwezaa credit line is not a high-interest loan. Terms are set in advance, explained clearly before you accept, and never change midway through.",
      },
      {
        question: "What happens if I can't repay on time?",
        answer:
          "Reach out to us as soon as possible. We work with each seller to find a reasonable arrangement instead of applying automatic penalties.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. Your personal and business information is only used to review your application and manage your credit line. It is never resold to third parties.",
      },
      {
        question: "How much does it cost to sign up on Kuwezaa?",
        answer: "Signing up is completely free, for farmers and sellers alike.",
      },
      {
        question: "I'm a farmer — do I also have to repay a credit line?",
        answer:
          "No. The credit line applies to sellers only. As a farmer, you're paid directly for what you sell.",
      },
      {
        question: "How do I get paid as a farmer?",
        answer:
          "You agree on price and quantity with the seller, then receive payment by mobile money or cash on delivery.",
      },
      {
        question: "Is Kuwezaa available in my province?",
        answer:
          "Check the \"Coverage\" section above. If your province isn't live yet, sign up anyway — we'll notify you as soon as it opens.",
      },
    ],
  },
  form: {
    eyebrow: "Ready to get started?",
    title: "Sign up for Kuwezaa",
    subtitle: "Fill out the form below to join the Kuwezaa community. It takes less than five minutes.",
    role: {
      sectionTitle: "Choose your profile",
      farmerTitle: "Farmer",
      farmerBody: "I grow and sell agricultural products",
      sellerTitle: "Seller",
      sellerBody: "I buy and resell agricultural products",
      requiredError: "Please choose a profile to continue",
    },
    personal: {
      sectionTitle: "Personal information",
      fullName: "Full name",
      fullNamePlaceholder: "Enter your full name",
      phone: "Phone number",
      email: "Email address",
      region: "Province in the DRC",
      regionPlaceholder: "Choose your province",
      address: "Specific location / address",
      addressPlaceholder: "Street, neighborhood, or landmark",
    },
    farmer: {
      sectionTitle: "Farm information",
      farmSize: "Farm size (hectares)",
      farmSizePlaceholder: "e.g. 5.5",
      crops: "Crops / produce grown",
      cropsHint: "Select all that apply",
      cropsError: "Please select at least one crop",
      experience: "Years of farming experience",
      experiencePlaceholder: "e.g. 10",
      yield: "Average annual yield (tons)",
      yieldPlaceholder: "e.g. 20",
    },
    seller: {
      sectionTitle: "Business information",
      businessName: "Business name",
      businessNamePlaceholder: "Enter your business name",
      businessType: "Business type",
      businessTypePlaceholder: "Choose your business type",
      products: "Products you sell",
      productsHint: "Select all that apply",
      productsError: "Please select at least one product",
      monthlyVolume: "Estimated monthly purchase volume (tons)",
      monthlyVolumePlaceholder: "e.g. 50",
      yearsInBusiness: "Years in business",
      yearsInBusinessPlaceholder: "e.g. 5",
    },
    additional: {
      sectionTitle: "Additional information",
      creditNeeds: "Estimated credit line needed (USD)",
      creditNeedsPlaceholder: "Choose a range",
      comments: "Comments or questions",
      commentsPlaceholder: "Tell us more about your needs or ask any questions...",
      terms: "I agree to the",
      termsLinkText: "terms and conditions",
      termsError: "You must accept the terms and conditions",
    },
    submit: {
      button: "Submit my registration",
      submitting: "Submitting...",
    },
    errors: {
      fullName: "Full name is required",
      phone: "Phone number is required",
      email: "A valid email address is required",
      region: "Province is required",
      generic: "There was an error submitting your registration. Please try again.",
    },
    success: {
      title: "Registration successful!",
      body: "Thank you for registering with Kuwezaa. We've received your information and will contact you shortly about next steps.",
      close: "Close",
    },
  },
  footer: {
    tagline: "Connecting farmers and sellers across the Congo.",
    contactTitle: "Contact us",
    whatsapp: "Chat on WhatsApp",
    email: "contact@kuwezaa.cd",
    linksTitle: "Useful links",
    privacy: "Privacy policy",
    terms: "Terms and conditions",
    contact: "Contact us",
    admin: "Admin area",
    rights: "Kuwezaa. Strengthening agriculture in the DRC.",
  },
  products: {
    cassava: "Cassava",
    maize: "Maize",
    plantains: "Plantains",
    rice: "Rice",
    "palm-oil": "Palm oil",
    coffee: "Coffee",
    cocoa: "Cocoa",
    beans: "Beans",
    peanuts: "Peanuts",
    "sweet-potato": "Sweet potato",
    vegetables: "Vegetables",
    fruits: "Fruits",
  },
  businessTypes: {
    individual: "Individual trader",
    "small-business": "Small business (1-10 employees)",
    "medium-business": "Medium business (11-50 employees)",
    "large-business": "Large business (50+ employees)",
    cooperative: "Cooperative",
  },
};
