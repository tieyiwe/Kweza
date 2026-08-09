import type { Translations } from "./types";

export const fr: Translations = {
  meta: {
    htmlLang: "fr",
    title: "Kweza — Connecter agriculteurs et vendeurs en RDC",
    description:
      "Kweza relie les agriculteurs congolais aux vendeurs qualifiés grâce à une ligne de crédit simple, pour un marché plus stable et des récoltes mieux vendues.",
  },
  nav: {
    linkHowItWorks: "Comment ça marche",
    linkCredit: "La ligne de crédit",
    linkCoverage: "Zones couvertes",
    linkFaq: "Questions fréquentes",
    ctaRegister: "S'inscrire",
    whatsapp: "WhatsApp",
  },
  hero: {
    eyebrow: "Kweza — Agriculteurs & Vendeurs",
    title: "Vendez plus. Achetez mieux. Payez à votre rythme.",
    subtitle:
      "Kweza connecte les agriculteurs congolais à des vendeurs sérieux et donne aux vendeurs qualifiés une ligne de crédit pour acheter directement chez les producteurs. Un marché plus fiable, des prix plus justes.",
    ctaFarmer: "Je suis agriculteur",
    ctaSeller: "Je suis vendeur",
    ctaWhatsapp: "Discuter sur WhatsApp",
    scrollHint: "Découvrir comment ça marche",
  },
  problem: {
    eyebrow: "La réalité du terrain",
    title: "Vendre et acheter reste trop incertain",
    subtitle:
      "Agriculteurs comme vendeurs font face aux mêmes obstacles depuis des années. Kweza s'attaque directement à ces trois blocages.",
    points: [
      {
        title: "Des acheteurs peu fiables",
        body: "Les agriculteurs perdent des récoltes faute d'acheteur au bon moment, ou vendent en urgence à perte.",
      },
      {
        title: "Pas d'accès au crédit",
        body: "Les vendeurs qui pourraient acheter en gros n'ont pas la trésorerie nécessaire, et les banques restent hors de portée.",
      },
      {
        title: "Des prix imprévisibles",
        body: "Sans lien direct entre producteurs et acheteurs, les prix varient d'un jour à l'autre et personne ne peut planifier.",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Le fonctionnement",
    title: "Comment ça marche",
    subtitle:
      "Deux parcours simples, un seul objectif : faire circuler les produits agricoles plus vite et plus équitablement.",
    tabFarmer: "Agriculteur",
    tabSeller: "Vendeur",
    farmerSteps: [
      {
        title: "Inscrivez votre exploitation",
        body: "Indiquez vos cultures, votre récolte moyenne et votre région en quelques minutes.",
      },
      {
        title: "Soyez visible auprès des vendeurs",
        body: "Les vendeurs de votre zone voient vos produits disponibles et vous contactent directement.",
      },
      {
        title: "Vendez à un prix convenu",
        body: "Vous fixez la quantité et le prix avec le vendeur, sans intermédiaire caché.",
      },
      {
        title: "Recevez votre paiement",
        body: "Le paiement est confirmé dès la livraison, par mobile money ou en espèces selon votre préférence.",
      },
    ],
    sellerSteps: [
      {
        title: "Inscrivez votre activité",
        body: "Présentez votre entreprise et votre volume d'achat habituel pour être évalué.",
      },
      {
        title: "Obtenez votre ligne de crédit",
        body: "Une fois qualifié, vous recevez une ligne de crédit pour acheter directement chez les agriculteurs.",
      },
      {
        title: "Achetez chez les producteurs",
        body: "Trouvez des agriculteurs près de chez vous et achetez au prix juste, sans avancer tout le cash.",
      },
      {
        title: "Remboursez après la vente",
        body: "Vous remboursez la ligne de crédit selon un calendrier clair, une fois vos produits vendus.",
      },
    ],
    mockupCaption: "Aperçu illustratif — fonctionnalité à venir",
    farmerMockupLabel: "Espace agriculteur",
    sellerMockupLabel: "Espace vendeur",
    flow: {
      title: "Le cycle du crédit Kweza",
      subtitle: "Un cercle vertueux, du crédit jusqu'au remboursement.",
      requestCredit: "Demande de crédit",
      buyFromFarmer: "Achat chez l'agriculteur",
      sellProduce: "Vente des produits",
      repay: "Remboursement",
    },
    mock: {
      profileTitle: "Mon profil",
      cropLabel: "Culture",
      regionLabel: "Région",
      saveButton: "Enregistrer",
      myProductsTitle: "Mes produits",
      availableBadge: "Disponible",
      offerTitle: "Offre reçue",
      acceptButton: "Accepter",
      declineButton: "Refuser",
      paymentReceivedTitle: "Paiement reçu",
      viaLabel: "Via",
      businessProfileTitle: "Mon activité",
      companyLabel: "Entreprise",
      volumeLabel: "Volume mensuel",
      creditApprovedTitle: "Crédit approuvé",
      approvedBadge: "Approuvé",
      nearbyFarmersTitle: "Agriculteurs près de vous",
      buyButton: "Acheter",
      balanceTitle: "Mon solde",
      usedLabel: "Utilisé",
      nextRepaymentLabel: "Prochain remboursement",
    },
  },
  creditLine: {
    eyebrow: "La ligne de crédit, expliquée simplement",
    title: "Pas de piège, pas de surprise",
    subtitle:
      "La ligne de crédit Kweza permet aux vendeurs qualifiés d'acheter chez les agriculteurs sans payer tout d'avance. Voici comment ça fonctionne, en toute transparence.",
    points: [
      {
        title: "Qui peut en bénéficier ?",
        body: "Tout vendeur actif qui achète régulièrement des produits agricoles peut s'inscrire. La qualification dépend de votre activité, pas de garanties compliquées.",
      },
      {
        title: "Comment fonctionne le remboursement ?",
        body: "Vous remboursez après avoir vendu vos produits, selon un échéancier fixé à l'avance et communiqué clairement avant tout achat.",
      },
      {
        title: "Des frais cachés ?",
        body: "Aucun. Les conditions sont annoncées avant que vous n'acceptiez la ligne de crédit — ce que vous voyez est ce que vous payez.",
      },
    ],
    estimator: {
      title: "Estimez votre ligne de crédit",
      businessTypeLabel: "Type d'activité",
      businessTypePlaceholder: "Choisissez votre type d'activité",
      volumeLabel: "Volume d'achat mensuel estimé",
      volumeUnit: "tonnes / mois",
      resultLabel: "Ligne de crédit estimée",
      resultHint: "Estimation indicative — le montant final est confirmé après étude de votre dossier.",
      ctaLabel: "Je m'inscris pour en profiter",
    },
  },
  impact: {
    eyebrow: "Notre mission",
    title: "Un impact au-delà de la transaction",
    subtitle:
      "Kweza construit une chaîne d'approvisionnement locale plus solide, pour que chaque acteur — du champ à l'étal — en profite.",
    pillars: [
      {
        title: "Des chaînes d'approvisionnement renforcées",
        body: "En reliant directement agriculteurs et vendeurs, nous réduisons les pertes post-récolte et les intermédiaires inutiles.",
      },
      {
        title: "Des revenus agricoles en hausse",
        body: "Un accès garanti au marché et des prix plus justes permettent aux agriculteurs de mieux vivre de leur travail.",
      },
      {
        title: "Un meilleur accès à une nourriture locale",
        body: "Des marchés mieux approvisionnés en produits frais et locaux, dans les villes comme dans les zones rurales.",
      },
    ],
  },
  coverage: {
    eyebrow: "Où sommes-nous présents",
    title: "Zones couvertes",
    subtitle:
      "Kweza démarre avec un programme pilote et s'étend progressivement à travers la RDC. Voici où nous en sommes aujourd'hui.",
    liveLabel: "Actif maintenant",
    soonLabel: "Bientôt disponible",
    note: "Vous ne voyez pas votre province ? Inscrivez-vous quand même — nous vous contacterons dès que Kweza arrive près de chez vous.",
  },
  trust: {
    eyebrow: "Confiance & sécurité",
    title: "Vos données et votre argent sont protégés",
    subtitle:
      "Nous savons que la confiance se gagne. Voici les bases de notre engagement envers vous.",
    points: [
      {
        title: "Vos données restent privées",
        body: "Vos informations personnelles ne sont jamais vendues et ne servent qu'à gérer votre inscription et votre ligne de crédit.",
      },
      {
        title: "Paiements via mobile money",
        body: "Les transactions passent par des opérateurs de mobile money reconnus, avec confirmation immédiate à chaque étape.",
      },
      {
        title: "Conditions claires, dès le départ",
        body: "Aucune clause cachée : vous savez exactement ce que vous devez et quand, avant de vous engager.",
      },
    ],
    partnersNote: "Partenaires et soutiens : à venir prochainement.",
  },
  socialProof: {
    eyebrow: "Ils nous font confiance",
    title: "Notre communauté grandit",
    subtitle: "Des agriculteurs et vendeurs comme vous testent déjà Kweza sur le terrain.",
    emptyTitle: "Le programme pilote démarre",
    emptyBody:
      "Nous accueillons nos premiers agriculteurs et vendeurs. Les témoignages et chiffres réels seront publiés ici dès que notre premier cycle de vente sera terminé.",
    emptyCta: "Faire partie des premiers inscrits",
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Vous vous posez des questions ? On y répond.",
    subtitle: "Si vous ne trouvez pas votre réponse ici, contactez-nous directement sur WhatsApp.",
    items: [
      {
        question: "Est-ce que c'est un prêt usurier ?",
        answer:
          "Non. La ligne de crédit Kweza n'est pas un prêt à taux abusif. Les conditions sont fixées à l'avance, expliquées clairement avant que vous acceptiez, et ne changent pas en cours de route.",
      },
      {
        question: "Que se passe-t-il si je ne peux pas rembourser à temps ?",
        answer:
          "Contactez-nous dès que possible. Nous travaillons avec chaque vendeur pour trouver un arrangement raisonnable plutôt que d'appliquer des pénalités automatiques.",
      },
      {
        question: "Mes données sont-elles en sécurité ?",
        answer:
          "Oui. Vos informations personnelles et professionnelles ne sont utilisées que pour évaluer votre inscription et gérer votre ligne de crédit. Elles ne sont jamais revendues à des tiers.",
      },
      {
        question: "Combien coûte l'inscription sur Kweza ?",
        answer:
          "L'inscription est entièrement gratuite, pour les agriculteurs comme pour les vendeurs.",
      },
      {
        question: "Je suis agriculteur, dois-je aussi rembourser un crédit ?",
        answer:
          "Non. La ligne de crédit concerne uniquement les vendeurs. En tant qu'agriculteur, vous êtes payé directement pour ce que vous vendez.",
      },
      {
        question: "Comment suis-je payé en tant qu'agriculteur ?",
        answer:
          "Vous convenez du prix et de la quantité avec le vendeur, puis recevez votre paiement par mobile money ou en espèces à la livraison.",
      },
      {
        question: "Kweza est-il disponible dans ma province ?",
        answer:
          "Consultez la section « Zones couvertes » ci-dessus. Si votre province n'est pas encore active, inscrivez-vous quand même : nous vous préviendrons dès l'ouverture.",
      },
    ],
  },
  form: {
    eyebrow: "Prêt à commencer ?",
    title: "Inscrivez-vous sur Kweza",
    subtitle:
      "Remplissez le formulaire ci-dessous pour rejoindre la communauté Kweza. Cela prend moins de cinq minutes.",
    role: {
      sectionTitle: "Choisissez votre profil",
      farmerTitle: "Agriculteur",
      farmerBody: "Je cultive et je vends des produits agricoles",
      sellerTitle: "Vendeur",
      sellerBody: "J'achète et je revends des produits agricoles",
      requiredError: "Veuillez choisir un profil pour continuer",
    },
    personal: {
      sectionTitle: "Informations personnelles",
      fullName: "Nom complet",
      fullNamePlaceholder: "Entrez votre nom complet",
      phone: "Numéro de téléphone",
      email: "Adresse e-mail",
      region: "Province en RDC",
      regionPlaceholder: "Choisissez votre province",
      address: "Localisation précise / adresse",
      addressPlaceholder: "Rue, quartier ou point de repère",
    },
    farmer: {
      sectionTitle: "Informations sur l'exploitation",
      farmSize: "Superficie de l'exploitation (hectares)",
      farmSizePlaceholder: "ex : 5.5",
      crops: "Cultures / produits récoltés",
      cropsHint: "Sélectionnez tout ce qui s'applique",
      cropsError: "Veuillez sélectionner au moins une culture",
      experience: "Années d'expérience agricole",
      experiencePlaceholder: "ex : 10",
      yield: "Rendement annuel moyen (tonnes)",
      yieldPlaceholder: "ex : 20",
    },
    seller: {
      sectionTitle: "Informations sur l'activité",
      businessName: "Nom de l'entreprise",
      businessNamePlaceholder: "Entrez le nom de votre entreprise",
      businessType: "Type d'activité",
      businessTypePlaceholder: "Choisissez le type d'activité",
      products: "Produits que vous vendez",
      productsHint: "Sélectionnez tout ce qui s'applique",
      productsError: "Veuillez sélectionner au moins un produit",
      monthlyVolume: "Volume d'achat mensuel estimé (tonnes)",
      monthlyVolumePlaceholder: "ex : 50",
      yearsInBusiness: "Années d'activité",
      yearsInBusinessPlaceholder: "ex : 5",
    },
    additional: {
      sectionTitle: "Informations complémentaires",
      creditNeeds: "Ligne de crédit estimée nécessaire (USD)",
      creditNeedsPlaceholder: "Choisissez une fourchette",
      comments: "Commentaires ou questions",
      commentsPlaceholder: "Parlez-nous de vos besoins ou posez vos questions...",
      terms: "J'accepte les",
      termsLinkText: "conditions générales",
      termsError: "Vous devez accepter les conditions générales",
    },
    submit: {
      button: "Envoyer mon inscription",
      submitting: "Envoi en cours...",
    },
    errors: {
      fullName: "Le nom complet est requis",
      phone: "Le numéro de téléphone est requis",
      email: "Une adresse e-mail valide est requise",
      region: "La province est requise",
      generic: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
    },
    success: {
      title: "Inscription réussie !",
      body: "Merci de vous être inscrit sur Kweza. Nous avons bien reçu vos informations et vous contacterons prochainement pour les prochaines étapes.",
      close: "Fermer",
    },
  },
  footer: {
    tagline: "Connecter les agriculteurs et les vendeurs à travers le Congo.",
    contactTitle: "Contactez-nous",
    whatsapp: "Discuter sur WhatsApp",
    email: "contact@kweza.cd",
    linksTitle: "Liens utiles",
    privacy: "Politique de confidentialité",
    terms: "Conditions générales",
    contact: "Nous contacter",
    admin: "Espace administrateur",
    rights: "Kweza. Renforcer l'agriculture en RDC.",
  },
  products: {
    cassava: "Manioc",
    maize: "Maïs",
    plantains: "Plantains",
    rice: "Riz",
    "palm-oil": "Huile de palme",
    coffee: "Café",
    cocoa: "Cacao",
    beans: "Haricots",
    peanuts: "Arachides",
    "sweet-potato": "Patate douce",
    vegetables: "Légumes",
    fruits: "Fruits",
  },
  businessTypes: {
    individual: "Commerçant indépendant",
    "small-business": "Petite entreprise (1-10 employés)",
    "medium-business": "Moyenne entreprise (11-50 employés)",
    "large-business": "Grande entreprise (50+ employés)",
    cooperative: "Coopérative",
  },
};
