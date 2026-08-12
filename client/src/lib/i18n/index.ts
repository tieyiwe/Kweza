import type { Language, Translations } from "./types";
import { fr } from "./fr";
import { en } from "./en";
import { sw } from "./sw";

export type { Language, Translations, Step, FaqItem } from "./types";

export const dictionaries: Record<Language, Translations> = { fr, en, sw };

export const LANGUAGE_OPTIONS: { value: Language; label: string }[] = [
  { value: "fr", label: "FR" },
  { value: "en", label: "EN" },
  { value: "sw", label: "SW" },
];

export const DEFAULT_LANGUAGE: Language = "fr";
