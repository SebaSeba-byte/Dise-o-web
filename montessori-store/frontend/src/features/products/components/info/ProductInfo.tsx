"use client";

import { Product } from "../../types/product";
import { formatPrice } from "@/utils/formatPrice";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, Star } from "lucide-react";
import Specifications from "./Specifications";

interface Props {
  product: Product;
}

export default function ProductInfo({
  product,
}: Props) {

  const addProduct = useCartStore((state) => state.addProduct);

  return (

    <div>

      <div className="mb-4 flex items-center gap-2">

        <div className="flex items-center gap-1">
          <Star className="fill-yellow-400 text-yellow-400" size={20} />
          <span className="font-bold text-gray-800">{product.rating}</span>
        </div>

        <span className="text-gray-400">•</span>

        <span className="text-sm font-medium text-emerald-600">
          En Stock ({product.stock} disponibles)
        </span>

      </div>

      <h1 className="text-5xl font-bold text-[#111111]">
        {product.name}
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-gray-600">
        {product.description}
      </p>

      <p className="mt-8 text-4xl font-bold text-[#B08A45]">
        {formatPrice(product.price)}
      </p>

      <Specifications
        material="Madera de pino seleccionada"
        color="Acabado natural mate"
        edad="1 a 6 años"
      />

      <button
        onClick={() =>
          addProduct({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          })
        }
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#B08A45] py-4 font-semibold text-white shadow-lg transition hover:bg-[#987239]"
      >
        <ShoppingCart size={22} />
        Agregar al carrito
      </button>

    </div>

  );

}
