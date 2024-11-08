import ConocenosSection from "@/components/ConocenosSection/ConocenosSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import OurServicesSection from "@/components/OurServices/AboutUsSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurServicesSection />
      <ProjectsSection />
      <ConocenosSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
