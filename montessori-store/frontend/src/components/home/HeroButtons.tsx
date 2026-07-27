"use client";

import { MessageCircle } from "lucide-react";

export default function HeroButtons() {

  const whatsapp =
    "https://wa.me/51981506693?text=Hola%20GABLIAM%20STUDIO,%20quisiera%20solicitar%20una%20cotización.";

  return (

    <div className="mt-12 flex flex-wrap gap-5">

      <button
        className="
        rounded-xl
        bg-[#B08A45]
        px-9
        py-4
        text-white
        font-semibold
        shadow-lg
        hover:scale-105
        transition
        duration-300
        "
      >

        Ver Catálogo

      </button>

      <a

        href={whatsapp}

        target="_blank"

        rel="noopener noreferrer"

        className="
        rounded-xl
        border-2
        border-[#25D366]
        px-9
        py-4
        font-semibold
        text-[#25D366]
        hover:bg-[#25D366]
        hover:text-white
        transition
        duration-300
        flex
        items-center
        gap-3
        "

      >

        <MessageCircle size={22}/>

        Solicitar Cotización

      </a>

    </div>

  );

}
