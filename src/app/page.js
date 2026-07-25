import AboutSection from "@/components/common/HomeSections.jsx/AboutSection";
import ContactSection from "@/components/common/HomeSections.jsx/ContactSection";
import EducationSection from "@/components/common/HomeSections.jsx/EducationSection";
import HeroSection from "@/components/common/HomeSections.jsx/HeroSection";
import ProjectsSection from "@/components/common/HomeSections.jsx/ProjectsSection";
import SkillsSection from "@/components/common/HomeSections.jsx/SkillsSection";


export default function Home() {
  return (
    <section>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection/>
      <ContactSection />
    </section>
  );
}
