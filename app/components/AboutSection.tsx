import SectionHeading from "./SectionHeading";

import { copy, Locale } from "../data/languages";

export default function AboutSection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section id="about" className="section-shell about-layout">
      <div>
        <SectionHeading title={t.about.title} />
        <p className="about-copy">
          {t.about.intro}
        </p>
      </div>

      <dl className="about-facts">
        <div><dt>{t.about.location}</dt><dd>{t.location}</dd></div>
        <div><dt>{t.about.education}</dt><dd>{t.about.degree}</dd></div>
        <div><dt>{t.about.availability}</dt><dd>{t.about.opportunities}</dd></div>
      </dl>
    </section>
  );
}
