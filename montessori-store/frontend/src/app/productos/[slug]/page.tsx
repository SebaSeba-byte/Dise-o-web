import { Metadata } from "next";
import { notFound } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container/Container";
import { getProduct } from "@/features/products/utils/getProduct";
import { products } from "@/features/products/data/products";
import ProductGallery from "@/features/products/components/gallery/ProductGallery";
import ProductInfo from "@/features/products/components/info/ProductInfo";
import ProductGrid from "@/features/products/components/ProductGrid";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  return {
    title: product?.name ? `${product.name} | GABLIAM STUDIO SAC` : "Producto",
    description: product?.description,
  };
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  let relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  if (relatedProducts.length === 0) {
    relatedProducts = products.filter((p) => p.id !== product.id);
  }

  return (
    <MainLayout>
      <Container>
        <div className="py-16">
          <div className="grid max-w-7xl gap-16 lg:grid-cols-2">
            <ProductGallery
              images={product.gallery}
            />
            <ProductInfo
              product={product}
            />
          </div>

          <section className="mt-24 border-t border-stone-200 pt-16">
            <h2 className="mb-10 text-3xl font-bold text-[#111111]">
              Productos relacionados
            </h2>
            <ProductGrid products={relatedProducts} />
          </section>
        </div>
      </Container>
    </MainLayout>
  );
}

