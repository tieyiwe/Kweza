import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_BASE } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";

export function WhatsAppFloatingButton() {
  const { t } = useLanguage();

  return (
    <a
      href={WHATSAPP_LINK_BASE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.nav.whatsapp}
      data-testid="button-whatsapp-float"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
