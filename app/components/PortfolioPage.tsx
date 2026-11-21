import type { Locale } from "../data/languages";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export default function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <main id="main-content" className="site-container">
      <HeroSection locale={locale} />
      <ProjectsSection locale={locale} />
      <AboutSection locale={locale} />
      <SkillsSection locale={locale} />
    </main>
  );
}
