"use client";

import { X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  open,
  onClose,
}: Props) {

  const cart = useCartStore((state) => state.cart);

  return (

    <>

      <div
        onClick={onClose}
        className={`
        fixed inset-0 z-40 bg-black/40 transition

        ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }
        `}
      />

      <aside
        className={`
        fixed right-0 top-0 z-50 flex h-screen w-[450px] max-w-full flex-col bg-white shadow-2xl transition-all duration-300

        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }
        `}
      >

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Mi carrito
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-stone-100 hover:text-black"
          >
            <X size={24} />
          </button>

        </div>

        <div className="flex-1 overflow-y-auto p-6">

          {
            cart.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
                <p className="text-lg font-medium">Tu carrito está vacío.</p>
                <p className="mt-2 text-sm">Agrega productos del catálogo para comenzar.</p>
              </div>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  {...item}
                />
              ))
            )
          }

        </div>

        <div className="border-t p-6">
          <CartSummary />
        </div>

      </aside>

    </>

  );

}
