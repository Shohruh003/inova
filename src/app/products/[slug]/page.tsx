import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/src/lib/data";
import ProductDetail from "@/src/app/components/ProductDetail";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Mahsulot topilmadi — INOVA" };
  return {
    title: `${product.name} — ${product.profile} | INOVA`,
    description: product.description,
    openGraph: {
      title: `${product.name} — INOVA`,
      description: product.description,
      images: [product.img],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
