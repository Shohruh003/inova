import { Phone } from "lucide-react";
import { SITE } from "@/src/lib/data";
import { TelegramIcon } from "./icons";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://t.me/${SITE.telegram}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-200 hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #229ED9, #2AABEE)",
          boxShadow: "0 4px 24px rgba(42,171,238,0.5)",
        }}
      >
        <TelegramIcon size={24} />
      </a>
      <a
        href={`tel:${SITE.phone}`}
        aria-label="Telefon"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-200 hover:scale-110 pulse-soft"
        style={{ background: "linear-gradient(135deg, #059669, #10b981)" }}
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
