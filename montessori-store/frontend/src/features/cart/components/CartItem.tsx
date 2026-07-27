"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartItem({
  id,
  name,
  price,
  image,
  quantity,
}: Props) {

  const {
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useCartStore();

  return (

    <div className="flex gap-4 border-b py-5">

      <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-stone-100">

        <Image
          src={image}
          alt={name}
          fill
          sizes="96px"
          className="object-cover"
        />

      </div>

      <div className="flex flex-1 flex-col">

        <h3 className="font-semibold">
          {name}
        </h3>

        <p className="mt-1 font-bold text-[#B08A45]">
          S/ {price}
        </p>

        <div className="mt-4 flex items-center gap-2">

          <button
            onClick={() => decreaseQuantity(id)}
            className="rounded-lg border p-2 hover:bg-stone-100"
          >
            <Minus size={16} />
          </button>

          <span className="w-6 text-center font-medium">
            {quantity}
          </span>

          <button
            onClick={() => increaseQuantity(id)}
            className="rounded-lg border p-2 hover:bg-stone-100"
          >
            <Plus size={16} />
          </button>

        </div>

      </div>

      <button
        onClick={() => removeProduct(id)}
        className="p-1 hover:opacity-80"
        title="Eliminar producto"
      >
        <Trash2 className="text-red-500" size={20} />
      </button>

    </div>

  );

}
