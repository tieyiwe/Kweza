import { useEffect, useState } from "react";
import { Sprout, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/language-context";
import { SECTION_IDS } from "@/lib/sections";
import { WHATSAPP_LINK_BASE } from "@/lib/constants";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function SiteHeader() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: SECTION_IDS.howItWorks, label: t.nav.linkHowItWorks },
    { id: SECTION_IDS.creditLine, label: t.nav.linkCredit },
    { id: SECTION_IDS.coverage, label: t.nav.linkCoverage },
    { id: SECTION_IDS.faq, label: t.nav.linkFaq },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-forest text-forest-foreground transition-shadow ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href={`#${SECTION_IDS.hero}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(SECTION_IDS.hero);
          }}
          className="flex items-center gap-2.5"
          data-testid="link-home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sprout className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">Kweza</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              data-testid={`nav-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher variant="dark" />
          <a
            href={WHATSAPP_LINK_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
            data-testid="link-whatsapp-nav"
          >
            <MessageCircle className="h-4 w-4" />
            {t.nav.whatsapp}
          </a>
          <Button
            onClick={() => scrollToSection(SECTION_IDS.registration)}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="button-nav-register"
          >
            {t.nav.ctaRegister}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher variant="dark" />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
                data-testid="button-menu-toggle"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-forest text-forest-foreground border-white/10">
              <SheetTitle className="sr-only">Kweza</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className="rounded-md px-3 py-3 text-left text-base font-medium text-white/90 transition-colors hover:bg-white/10"
                      data-testid={`nav-link-mobile-${link.id}`}
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
                <a
                  href={WHATSAPP_LINK_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.nav.whatsapp}
                </a>
                <SheetClose asChild>
                  <Button
                    onClick={() => scrollToSection(SECTION_IDS.registration)}
                    className="mt-3 bg-primary text-primary-foreground hover:bg-primary/90"
                    data-testid="button-nav-register-mobile"
                  >
                    {t.nav.ctaRegister}
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
