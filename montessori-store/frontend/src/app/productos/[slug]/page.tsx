import { Metadata } from "next";
import { notFound } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container/Container";
import { getProduct } from "@/features/products/utils/getProduct";
import ProductGallery from "@/features/products/components/gallery/ProductGallery";
import ProductInfo from "@/features/products/components/info/ProductInfo";

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

  return (
    <MainLayout>
      <Container>
        <div className="grid max-w-7xl gap-16 py-16 lg:grid-cols-2">
          <ProductGallery
            images={product.gallery}
          />
          <ProductInfo
            product={product}
          />
        </div>
      </Container>
    </MainLayout>
  );
}
