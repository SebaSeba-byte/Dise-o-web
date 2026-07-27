"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";

import { Product } from "../types/product";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/utils/formatPrice";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

  const addProduct = useCartStore((state) => state.addProduct);

  return (

    <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <Link href={`/productos/${product.slug}`}>

        <div className="relative h-72 overflow-hidden bg-stone-50">

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />

        </div>

      </Link>

      <div className="p-6">

        <div className="mb-2 flex items-center gap-1">

          <Star className="fill-yellow-400 text-yellow-400" size={18} />

          <span className="text-sm font-semibold">{product.rating}</span>

        </div>

        <h3 className="text-xl font-bold">
          {product.name}
        </h3>

        <p className="mt-2 text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <p className="mt-5 text-2xl font-bold text-[#B08A45]">
          {formatPrice(product.price)}
        </p>

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
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#B08A45] py-4 font-semibold text-white transition hover:bg-[#987239]"
        >
          <ShoppingCart size={18} />
          Agregar al carrito
        </button>

      </div>

    </div>

  );

}
