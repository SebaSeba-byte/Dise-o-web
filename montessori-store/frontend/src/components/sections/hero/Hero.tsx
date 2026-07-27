"use client";

import HeroBadge from "./Components/HeroBadge";
import HeroButtons from "./Components/HeroButtons";
import HeroImage from "./Components/HeroImage";
import HeroServices from "./Components/HeroServices";
import HeroStats from "./Components/HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-100">
      {/* Fondo elegante con iluminación ambiental */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#B08A45]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-green-100 blur-[150px]" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-between gap-16 px-8">

        <div className="max-w-xl py-12">

          <HeroBadge />

          <h1 className="mt-8 text-6xl font-black leading-tight">

            Diseñamos

            <span className="block text-[#B08A45]">

              espacios

            </span>

            extraordinarios.

          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">

            Especialistas en diseño interior,
            infraestructura Montessori,
            mobiliario personalizado
            y proyectos integrales.

          </p>

          <HeroButtons />

          <HeroServices />

          <HeroStats />

        </div>

        <HeroImage />

      </div>

    </section>
  );
}
