import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import heroPortrait from "@/public/naji.png";
import { socialLinks } from "../data/portfolio";

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div>
        <p className="eyebrow hero-role">Full-stack &amp; mobile engineer</p>
        <h1 className="hero-title">Naji<br />Alkhudari<span>.</span></h1>
        <p className="hero-intro">
          I build web and mobile applications, from the interface people use
          to the systems that keep it running.
        </p>
        <div className="actions hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a className="button" href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            Get in touch <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className="portrait">
        <Image
          src={heroPortrait}
          alt="Naji Alkhudari"
          fill
          priority
          sizes="(max-width: 700px) 76vw, 350px"
        />
        <figcaption><MapPin size={15} aria-hidden="true" /> Homs, Syria</figcaption>
      </figure>
    </section>
  );
}
