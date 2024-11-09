import ConocenosSection from "@/components/AboutUsSection/AboutUsSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import OurServicesSection from "@/components/OurServices/OurServices";
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
