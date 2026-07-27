"use client";

import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container/Container";
import ProductGrid from "@/features/products/components/ProductGrid";
import ProductSearch from "@/features/products/components/ProductSearch";
import ProductFilters from "@/features/products/components/ProductFilters";
import ProductSort from "@/features/products/components/ProductSort";
import useProducts from "@/features/products/hooks/useProducts";

export default function ProductosPage() {

  const {
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
    filteredProducts,
  } = useProducts();

  return (

    <MainLayout>

      <Container>

        <section className="py-16">

          <h1 className="mb-10 text-5xl font-bold">
            Catálogo
          </h1>

          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex-1 lg:max-w-md">
              <ProductSearch
                value={search}
                onChange={setSearch}
              />
            </div>

            <ProductFilters
              value={category}
              onChange={setCategory}
            />

            <ProductSort
              value={sort}
              onChange={setSort}
            />

          </div>

          <ProductGrid
            products={filteredProducts}
          />

        </section>

      </Container>

    </MainLayout>

  );

}
