"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductActions({
  id,
  name,
  price,
  image,
}: Props) {

  const addProduct = useCartStore(
    (state) => state.addProduct
  );

  const whatsapp =
    `https://wa.me/51983064817?text=Hola,%20quisiera%20cotizar:%20${encodeURIComponent(name)}`;

  return (

    <div className="mt-6 flex gap-3">

      <button

        onClick={() =>
          addProduct({
            id,
            name,
            price,
            image,
            quantity: 1,
          })
        }

        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#B08A45] py-3 font-semibold text-white transition hover:bg-[#9A763B]"

      >

        <ShoppingCart size={18}/>

        Agregar

      </button>

      <a

        href={whatsapp}

        target="_blank"

        rel="noopener noreferrer"

        className="rounded-xl border border-[#25D366] px-4 py-3 font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"

      >

        Cotizar

      </a>

    </div>

  );

}
