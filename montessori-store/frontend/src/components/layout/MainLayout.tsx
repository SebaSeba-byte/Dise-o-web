"use client";

import { ReactNode } from "react";
import TopBar from "../navigation/TopBar";
import Navbar from "../navigation/Navbar";
import CartDrawer from "@/features/cart/components/CartDrawer";
import { useUIStore } from "@/store/uiStore";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const cartOpen = useUIStore((state) => state.cartOpen);
  const closeCart = useUIStore((state) => state.closeCart);

  return (
    <>
      <TopBar />
      <Navbar />

      <main>{children}</main>

      <CartDrawer open={cartOpen} onClose={closeCart} />
    </>
  );
}
