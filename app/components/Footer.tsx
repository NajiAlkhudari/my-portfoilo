import { ArrowUp, ArrowUpRight } from "lucide-react";
import { socialLinks } from "../data/portfolio";

import { copy, Locale } from "../data/languages";

export default function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer id="contact" className="site-container site-footer">
      <div className="footer-callout">
        <div>
          <h2>{t.footer.title}</h2>
          <p>{t.footer.intro}</p>
        </div>
        <div className="actions">
          <a className="button button-primary" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <bdi>LinkedIn</bdi> <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="button" href={socialLinks.github} target="_blank" rel="noreferrer">
            <bdi>GitHub</bdi> <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-meta">
        <small>© {new Date().getFullYear().toLocaleString(locale, { useGrouping: false })} {t.firstName} {t.lastName}</small>
        <a href="#home">{t.footer.top} <ArrowUp size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
