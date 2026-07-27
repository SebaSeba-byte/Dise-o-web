import Container from "@/components/ui/Container/Container";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          subtitle="Nuestros Servicios"
          title="Diseñamos espacios únicos"
          description="Soluciones integrales en arquitectura, mobiliario e infraestructura Montessori."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
