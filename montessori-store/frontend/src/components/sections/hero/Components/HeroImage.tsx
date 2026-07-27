import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">

      <Image
        src="/images/hero.jpg"
        alt="Proyecto Montessori"
        width={700}
        height={700}
        priority
        className="rounded-[30px] shadow-2xl"
      />

    </div>
  );
}
