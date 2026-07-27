"use client";

import Image from "next/image";

interface Props {
  images: string[];
}

export default function ProductGallery({
  images,
}: Props) {

  return (

    <div>

      <div className="relative aspect-square overflow-hidden rounded-3xl bg-stone-100 shadow-md">

        <Image
          src={images[0] || "/images/products/cama-montessori.jpg"}
          alt="Producto"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />

      </div>

    </div>

  );

}
