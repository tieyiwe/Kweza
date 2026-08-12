import { Link } from "wouter";
import { Facebook, MessageCircle, Sprout } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { SECTION_IDS } from "@/lib/sections";
import { WHATSAPP_LINK_BASE } from "@/lib/constants";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-forest py-12 text-forest-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sprout className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">Kuwezaa</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/70">{t.footer.tagline}</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={WHATSAPP_LINK_BASE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.whatsapp}
                data-testid="link-footer-whatsapp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                data-testid="link-footer-facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">{t.footer.contactTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a href={WHATSAPP_LINK_BASE} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {t.footer.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${t.footer.email}`} className="hover:text-white">
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">{t.footer.linksTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <button
                  type="button"
                  onClick={() => document.getElementById(SECTION_IDS.faq)?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-white"
                >
                  {t.nav.linkFaq}
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <Link href="/admin" data-testid="link-admin" className="hover:text-white">
                  {t.footer.admin}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
