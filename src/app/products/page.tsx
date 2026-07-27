import type { Metadata } from "next";
import CatalogView from "@/src/app/components/CatalogView";

export const metadata: Metadata = {
  title: "Mahsulot katalogi — INOVA Rom va Eshik Tizimlari",
  description:
    "INOVA to'liq katalogi: plastik va alyumin romlar, eshiklar, surilma va fasad tizimlari, import yechimlar va aksessuarlar. O'lchov va konsultatsiya xizmatlari mavjud.",
};

export default function ProductsPage() {
  return <CatalogView />;
}
