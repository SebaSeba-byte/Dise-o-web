"use client";

import { useCartStore } from "@/store/cartStore";
import { generateWhatsapp } from "@/utils/generateWhatsapp";

export default function CartSummary() {

  const cart = useCartStore((state) => state.cart);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const whatsapp = generateWhatsapp(cart);

  return (

    <div className="border-t pt-6">

      <div className="flex justify-between text-lg">

        <span className="text-gray-600">
          Subtotal
        </span>

        <strong className="text-xl font-bold text-[#111111]">
          S/ {subtotal.toFixed(2)}
        </strong>

      </div>

      <button
        className="mt-6 w-full rounded-xl bg-[#B08A45] py-4 font-semibold text-white transition hover:bg-[#99763a]"
      >
        Continuar compra
      </button>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block rounded-xl border-2 border-[#25D366] py-4 text-center font-semibold text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
      >
        Finalizar por WhatsApp
      </a>

    </div>

  );

}
