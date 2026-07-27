import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import Projects from "@/components/sections/projects/Projects";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Projects />
    </MainLayout>
  );
}
