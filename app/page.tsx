import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
