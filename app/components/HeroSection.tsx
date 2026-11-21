import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroPortrait from "@/public/naji.png";
import { socialLinks } from "../data/portfolio";

import { copy, Locale } from "../data/languages";

export default function HeroSection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section id="home" className="hero">
      <div>
        <p className="hero-role">{t.role}</p>
        <h1 className="hero-title">{t.firstName}<br />{t.lastName}</h1>
        <p className="hero-intro">
          {t.intro}
        </p>
        <div className="actions hero-actions">
          <a className="button button-primary" href="#projects">
            {t.explore} <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a className="button" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            {t.getInTouch} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className="portrait">
        <Image
          src={heroPortrait}
          alt={`${t.firstName} ${t.lastName}`}
          fill
          priority
          sizes="(max-width: 700px) 76vw, 350px"
        />
      </figure>
    </section>
  );
}
