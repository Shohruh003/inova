"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { SITE } from "@/src/lib/data";
import { InstagramIcon, TelegramIcon, YoutubeIcon } from "./icons";
import logo from "@/public/logo.png";
import { useI18n } from "@/src/lib/i18n";

const FOOTER_PRODUCTS = [
  "cat.plastikovye-okna",
  "cat.alyuminievye-okna",
  "cat.razdvizhnye-sistemy",
  "cat.fasadnye-sistemy",
  "cat.aksessuary",
];
const FOOTER_SERVICES = [
  "services.s1t",
  "services.s2t",
  "services.s3t",
  "services.s4t",
  "footer.fServiceWarranty",
];

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer style={{ background: "#011F22", color: "#94a3b8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div
          className="grid md:grid-cols-4 gap-8 pb-10"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-md">
                <Image
                  src={logo}
                  alt="INOVA logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem" }}>
                {SITE.brand}
              </span>
            </div>
            <p style={{ lineHeight: 1.8, fontSize: 14, maxWidth: 320 }}>
              {SITE.address}. {SITE.experienceYears} {t("footer.desc1")}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={`https://t.me/${SITE.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.07)", color: "#5EEAD4" }}
              >
                <TelegramIcon />
              </a>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.07)", color: "#e1306c" }}
              >
                <InstagramIcon size={20} color="#e1306c" />
              </a>
              <a
                href={`https://youtube.com/@${SITE.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.07)", color: "#ff0000" }}
              >
                <YoutubeIcon size={20} color="#ff0000" />
              </a>
              <a
                href={`tel:${SITE.phone}`}
                aria-label={t("contact.phone")}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.07)", color: "#4ade80" }}
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: 16 }}>
              {t("footer.products")}
            </h4>
            <div className="flex flex-col gap-2">
              {FOOTER_PRODUCTS.map((item) => (
                <span key={item} style={{ fontSize: 14 }}>
                  {t(item)}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: 16 }}>{t("footer.services")}</h4>
            <div className="flex flex-col gap-2">
              {FOOTER_SERVICES.map((item) => (
                <span key={item} style={{ fontSize: 14 }}>
                  {t(item)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span style={{ fontSize: 13 }}>
            © {new Date().getFullYear()} {SITE.brand}. {t("footer.rights")}
          </span>
          <span style={{ fontSize: 13 }}>{SITE.address}</span>
        </div>
      </div>
    </footer>
  );
}
