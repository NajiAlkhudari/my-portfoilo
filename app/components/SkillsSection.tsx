import { Database, Monitor, Smartphone, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/portfolio";

const iconMap = {
  monitor: Monitor,
  smartphone: Smartphone,
  database: Database,
  wrench: Wrench,
} as const;

import { copy, displayTechnology, Locale } from "../data/languages";

export default function SkillsSection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section id="skills" className="section-shell">
      <SectionHeading title={t.skills.title} />
      <div className="skills-grid">
        {skillCategories.map(({ title, icon, skills }) => {
          const Icon = iconMap[icon];

          return (
            <article className="skill-group" key={title}>
              <Icon size={20} className="skill-icon" aria-hidden="true" />
              <h3>{t.skills.categories[icon]}</h3>
              <ul className="tag-list">
                {skills.map((skill) => <li key={skill}><bdi>{displayTechnology(skill, locale)}</bdi></li>)}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
