import AboutSection from "@/components/common/HomeSections.jsx/AboutSection";
import EducationSection from "@/components/common/HomeSections.jsx/EducationSection";
import HeroSection from "@/components/common/HomeSections.jsx/HeroSection";
import SkillsSection from "@/components/common/HomeSections.jsx/SkillsSection";


export default function Home() {
  return (
    <section>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection/>
    </section>
  );
}
