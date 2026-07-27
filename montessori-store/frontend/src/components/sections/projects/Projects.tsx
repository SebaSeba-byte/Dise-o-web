import Container from "@/components/ui/Container/Container";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section className="bg-stone-100 py-24">
      <Container>
        <SectionTitle
          subtitle="PORTAFOLIO"
          title="Nuestros Proyectos"
          description="Cada proyecto representa nuestro compromiso con el diseño, la funcionalidad y la calidad."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              location={project.location}
              image={project.image}
              category={project.category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
