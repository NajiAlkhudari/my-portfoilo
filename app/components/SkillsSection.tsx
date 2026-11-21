import { Database, Monitor, Smartphone, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/portfolio";

const iconMap = {
  monitor: Monitor,
  smartphone: Smartphone,
  database: Database,
  wrench: Wrench,
} as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading title="Technical skills" />
      <div className="skills-grid">
        {skillCategories.map(({ title, icon, skills }) => {
          const Icon = iconMap[icon];

          return (
            <article className="skill-group" key={title}>
              <Icon size={20} className="skill-icon" aria-hidden="true" />
              <h3>{title}</h3>
              <ul className="tag-list">
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
