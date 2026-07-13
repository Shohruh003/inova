import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { SITE } from "@/src/lib/data";
import logo from "@/public/logo.png";

// Ichki sahifalar (katalog, mahsulot detali) uchun yengil yopishqoq header.
export default function SubpageHeader({
  backHref,
  backLabel,
}: {
  backHref: string;
  backLabel: string;
}) {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        boxShadow: "0 4px 24px rgba(15,23,42,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Bosh sahifa">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white shadow-md">
              <Image src={logo} alt="INOVA logo" width={44} height={44} className="object-contain" />
            </div>
            <span className="text-xl tracking-tight" style={{ fontWeight: 800, color: "#012F33" }}>
              {SITE.brand}
            </span>
          </Link>

          <Link
            href={backHref}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-teal-50/80"
            style={{ color: "#374151", fontWeight: 500, fontSize: 15 }}
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>

          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #013B41, #0F766E)",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{SITE.phoneShort}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
