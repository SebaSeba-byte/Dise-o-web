"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Search,
  Menu,
  MessageCircle,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";

export default function Navbar() {

  const cart = useCartStore((state) => state.cart);
  const openCart = useUIStore((state) => state.openCart);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const whatsapp =
    "https://wa.me/51983064817?text=Hola%20GABLIAM%20STUDIO,%20quisiera%20solicitar%20una%20cotización.";

  return (

    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-stone-200">

      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-5 transition hover:opacity-90"
        >

          <div className="relative h-16 w-56">

            <Image
              src="/logos/logo.png"
              alt="GABLIAM STUDIO SAC"
              fill
              sizes="(max-width: 768px) 100vw, 224px"
              priority
              className="object-contain object-left"
            />

          </div>

        </Link>

        {/* MENÚ */}

        <div className="hidden items-center gap-10 text-[16px] font-medium lg:flex">

          <Link href="/" className="hover:text-[#B08A45] transition">
            Inicio
          </Link>

          <Link href="/products" className="hover:text-[#B08A45] transition">
            Productos
          </Link>

          <Link href="/projects" className="hover:text-[#B08A45] transition">
            Proyectos
          </Link>

          <Link href="/about" className="hover:text-[#B08A45] transition">
            Nosotros
          </Link>

          <Link href="/contact" className="hover:text-[#B08A45] transition">
            Contacto
          </Link>

        </div>

        {/* DERECHA */}

        <div className="flex items-center gap-6">

          <button>

            <Search
              size={22}
              className="hover:text-[#B08A45] transition"
            />

          </button>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Solicitar Cotización"
          >

            <MessageCircle
              size={24}
              className="text-[#25D366] hover:scale-110 transition"
            />

          </a>

          <button onClick={openCart} className="relative">

            <ShoppingCart
              size={24}
              className="hover:text-[#B08A45] transition"
            />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#B08A45] text-[11px] font-bold text-white">

              {totalItems}

            </span>

          </button>

          <button className="lg:hidden">

            <Menu size={30}/>

          </button>

        </div>

      </nav>

    </header>

  );

}
