import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/ui/Container/Container";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { COMPANY } from "@/constants/company";
import Image from "next/image";

export default function NosotrosPage() {
  return (
    <MainLayout>
      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            subtitle="NOSOTROS"
            title={`Sobre ${COMPANY.name}`}
            description="Somos un estudio especializado en diseño, arquitectura de interiores y fabricación de infraestructura y mobiliario Montessori de alta gama."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                En <strong>{COMPANY.name}</strong> transformamos espacios educativos, residenciales e institucionales en ambientes seguros, funcionales y estéticamente inspiradores.
              </p>
              <p>
                Cada uno de nuestros proyectos y muebles se concibe bajo la filosofía Montessori, fomentando la autonomía, la exploración natural y el desarrollo integral de los niños.
              </p>
              <div className="pt-4">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=Hola%20${encodeURIComponent(COMPANY.name)},%20quisiera%20más%20información.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl bg-[#B08A45] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#98763a]"
                >
                  Contactar con un Especialista
                </a>
              </div>
            </div>

            <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero/hero-1.webp"
                alt={COMPANY.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
