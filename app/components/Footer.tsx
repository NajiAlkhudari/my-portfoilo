import { ArrowUp, ArrowUpRight } from "lucide-react";
import { socialLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="site-container site-footer">
      <div className="footer-callout">
        <div>
          <h2>Let’s work together.</h2>
          <p>Open to full-time roles and freelance projects.</p>
        </div>
        <div className="actions">
          <a className="button button-primary" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a className="button" href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-meta">
        <small>© {new Date().getFullYear()} Naji Alkhudari</small>
        <a href="#home">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
