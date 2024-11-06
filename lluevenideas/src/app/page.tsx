import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import ConocenosSection from "@/components/ConocenosSection/ConocenosSection";
import HeroPrueba from "@/components/HeroSection/hero-prueba";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
export default function Home() {
  return (
    <div>
      {/* <HeroSection/> */}
      <HeroPrueba/>
     
      <AboutUsSection></AboutUsSection>
      <ProjectsSection></ProjectsSection>
      <ConocenosSection></ConocenosSection>
    </div>
  );
}
