import AboutSection from "@/components/common/HomeSections.jsx/AboutSection";
import ContactSection from "@/components/common/HomeSections.jsx/ContactSection";
import EducationSection from "@/components/common/HomeSections.jsx/EducationSection";
import HeroSection from "@/components/common/HomeSections.jsx/HeroSection";
import ProjectsSection from "@/components/common/HomeSections.jsx/ProjectsSection";
import SkillsSection from "@/components/common/HomeSections.jsx/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="education">
        <EducationSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}