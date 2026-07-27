import ProductCard from "./ProductCard";
import { Product } from "../types/product";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {

  if (products.length === 0) {

    return (

      <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-20 text-center">

        <h2 className="text-2xl font-bold">
          No encontramos productos
        </h2>

        <p className="mt-4 text-gray-500">
          Prueba con otra búsqueda o categoría.
        </p>

      </div>

    );

  }

  return (

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>

  );

}
