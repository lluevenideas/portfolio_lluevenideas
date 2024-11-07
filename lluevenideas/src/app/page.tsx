import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import ConocenosSection from "@/components/ConocenosSection/ConocenosSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ContactSection from "@/components/ContactSection/ContactSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ProjectsSection />
      <ConocenosSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
