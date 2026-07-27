import MainLayout from "@/components/layout/MainLayout";
import Projects from "@/components/sections/projects/Projects";

export default function ProyectosPage() {
  return (
    <MainLayout>
      <div className="py-12">
        <Projects />
      </div>
    </MainLayout>
  );
}
