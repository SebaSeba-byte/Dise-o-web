import { Product } from "../../types/product";

interface Props {
  product: Product;
}

export default function Specifications({ product }: Props) {
  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">
        Especificaciones
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">

        <div>
          <p className="text-sm text-gray-500">Material</p>
          <p className="font-medium">{product.material}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Color</p>
          <p className="font-medium">{product.color}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Dimensiones</p>
          <p className="font-medium">{product.dimensions}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Edad recomendada</p>
          <p className="font-medium">{product.recommendedAge}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Garantía</p>
          <p className="font-medium">{product.warranty}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Disponibilidad</p>
          <p className="font-medium">
            {product.stock > 0 ? "En stock" : "Agotado"}
          </p>
        </div>

      </div>
    </section>
  );
}

