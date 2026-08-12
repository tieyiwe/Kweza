// Structural data only — display labels for products, business types and
// languages live in the translation dictionaries (client/src/lib/i18n).
// Province names are proper nouns and stay identical across languages.

export const CONGO_PROVINCES = [
  { value: "kinshasa", label: "Kinshasa" },
  { value: "kongo-central", label: "Kongo Central" },
  { value: "kwilu", label: "Kwilu" },
  { value: "kwango", label: "Kwango" },
  { value: "mai-ndombe", label: "Mai-Ndombe" },
  { value: "kasai", label: "Kasaï" },
  { value: "kasai-central", label: "Kasaï-Central" },
  { value: "kasai-oriental", label: "Kasaï-Oriental" },
  { value: "sankuru", label: "Sankuru" },
  { value: "maniema", label: "Maniema" },
  { value: "south-kivu", label: "Sud-Kivu" },
  { value: "north-kivu", label: "Nord-Kivu" },
  { value: "ituri", label: "Ituri" },
  { value: "haut-uele", label: "Haut-Uélé" },
  { value: "bas-uele", label: "Bas-Uélé" },
  { value: "tshopo", label: "Tshopo" },
  { value: "equateur", label: "Équateur" },
  { value: "mongala", label: "Mongala" },
  { value: "nord-ubangi", label: "Nord-Ubangi" },
  { value: "sud-ubangi", label: "Sud-Ubangi" },
  { value: "tshuapa", label: "Tshuapa" },
  { value: "tanganyika", label: "Tanganyika" },
  { value: "haut-lomami", label: "Haut-Lomami" },
  { value: "lualaba", label: "Lualaba" },
  { value: "haut-katanga", label: "Haut-Katanga" },
  { value: "lomami", label: "Lomami" },
] as const;

export const PRODUCT_VALUES = [
  "cassava", "maize", "plantains", "rice", "palm-oil", "coffee",
  "cocoa", "beans", "peanuts", "sweet-potato", "vegetables", "fruits",
] as const;

export const BUSINESS_TYPE_VALUES = [
  "individual", "small-business", "medium-business", "large-business", "cooperative",
] as const;

export const CREDIT_RANGES = [
  { value: "500-1000", label: "500 $ - 1 000 $" },
  { value: "1000-5000", label: "1 000 $ - 5 000 $" },
  { value: "5000-10000", label: "5 000 $ - 10 000 $" },
  { value: "10000-25000", label: "10 000 $ - 25 000 $" },
  { value: "25000+", label: "25 000 $ et plus" },
] as const;

export const WHATSAPP_NUMBER = "243900000000";
export const WHATSAPP_LINK_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export type CoverageStatus = "live" | "soon";

export interface CoverageRegion {
  province: string;
  status: CoverageStatus;
}

export const COVERAGE_REGIONS: CoverageRegion[] = [
  { province: "Kinshasa", status: "live" },
  { province: "Kongo Central", status: "live" },
  { province: "Kwilu", status: "live" },
  { province: "Kwango", status: "soon" },
  { province: "Mai-Ndombe", status: "soon" },
  { province: "Kasaï", status: "soon" },
  { province: "Kasaï-Central", status: "soon" },
  { province: "Kasaï-Oriental", status: "soon" },
  { province: "Nord-Kivu", status: "soon" },
  { province: "Sud-Kivu", status: "soon" },
  { province: "Haut-Katanga", status: "soon" },
  { province: "Tshopo", status: "soon" },
  { province: "Équateur", status: "soon" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

// Populate with real figures once available; the Social Proof section
// falls back to a pilot-program message while these stay empty.
export const TESTIMONIALS: Testimonial[] = [];
export const STATS: StatItem[] = [];
