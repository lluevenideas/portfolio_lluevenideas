import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import ConocenosSection from "@/components/ConocenosSection/ConocenosSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import ContactSection from "@/components/ContactSection/ContactSection";
export default function Home() {
  return (
    <div>
      <AboutUsSection></AboutUsSection>
      <ProjectsSection></ProjectsSection>
      <ConocenosSection></ConocenosSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
    </div>
  );
}
