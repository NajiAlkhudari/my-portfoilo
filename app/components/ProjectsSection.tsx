"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { FaAppStoreIos } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { Project, ProjectSlide, projects } from "../data/portfolio";

import { copy, displayTechnology, Locale } from "../data/languages";

const filters = ["all", "fullstack", "mobile", "web"] as const;

const taskLogWebImages = new Set([
  "1754397845835.jpeg",
  "1754397858330.jpeg",
  "1754397859586.jpeg",
]);

function ProjectGallery({
  locale,
  label,
  slides,
  mobile = false,
}: {
  locale: Locale;
  label: string;
  slides: ProjectSlide[];
  mobile?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const t = copy[locale].work;
  const PreviousArrow = locale === "ar" ? ArrowRight : ArrowLeft;
  const NextArrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <figure className={mobile ? "gallery gallery-mobile" : "gallery"}>
      <div className="gallery-image">
        <Image
          src={slide.src}
          alt={locale === "ar" ? slide.altAr ?? slide.alt : slide.alt}
          fill
          sizes={mobile ? "(max-width: 430px) 36vw, 190px" : "(max-width: 760px) 92vw, 510px"}
          style={{ objectPosition: slide.objectPosition }}
        />
      </div>
      {(label || slides.length > 1) && (
        <figcaption className="gallery-caption">
          {label && <span className="gallery-label">{label}</span>}
          {slides.length > 1 && (
            <div className="gallery-controls" role="group" aria-label={t.screenshots(label)}>
              <button
                type="button"
                className="icon-button"
                aria-label={t.previous(label)}
                onClick={() => setIndex((current) => (current + slides.length - 1) % slides.length)}
              >
                <PreviousArrow size={16} aria-hidden="true" />
              </button>
              <bdi dir="ltr" aria-live="polite" aria-atomic="true">
                {(index + 1).toLocaleString(locale)} / {slides.length.toLocaleString(locale)}
              </bdi>
              <button
                type="button"
                className="icon-button"
                aria-label={t.next(label)}
                onClick={() => setIndex((current) => (current + 1) % slides.length)}
              >
                <NextArrow size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </figcaption>
      )}
    </figure>
  );
}

function projectName(project: Project, locale: Locale) {
  return locale === "ar" ? project.nameAr ?? project.name : project.name;
}

function ProjectMedia({ project, locale }: { project: Project; locale: Locale }) {
  const t = copy[locale].work;
  if (project.galleries) {
    return (
      <div className="project-media media-pair">
        {project.galleries.map(({ label, slides }) => (
          <ProjectGallery key={label} locale={locale} label={t[label]} slides={slides} mobile />
        ))}
      </div>
    );
  }

  const slides = project.slides ?? project.images?.map((src, index) => ({
    src,
    alt: t.screen(projectName(project, locale), index + 1),
  })) ?? [];

  if (project.name === "Task Log") {
    const isWeb = (slide: ProjectSlide) => taskLogWebImages.has(slide.src.split("/").pop() ?? "");
    return (
      <div className="project-media media-combined">
        <ProjectGallery locale={locale} label={t.dashboard} slides={slides.filter(isWeb)} />
        <ProjectGallery locale={locale} label={t.labels.mobile} slides={slides.filter((slide) => !isWeb(slide))} mobile />
      </div>
    );
  }

  if (!slides.length) return null;

  return (
    <div className="project-media">
      <ProjectGallery locale={locale} label="" slides={slides} mobile={project.kind === "mobile"} />
    </div>
  );
}

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const t = copy[locale].work;
  const name = projectName(project, locale);
  return (
    <article className={`project-card${project.featured ? " project-featured" : ""}`}>
      <div className="project-info">
        <p className="project-type">{t.labels[project.kind]}</p>
        <h3><bdi>{name}</bdi></h3>
        <p className="project-description">{locale === "ar" ? project.descriptionAr : project.description}</p>
        {project.techStack.length > 0 && (
          <ul className="tag-list">
            {project.techStack.map((tech) => <li key={tech}><bdi>{displayTechnology(tech, locale)}</bdi></li>)}
          </ul>
        )}
        {(project.demo || project.appStore || project.github) && (
          <div className="actions project-links">
            {project.demo && (
              <a className="button" href={project.demo} target="_blank" rel="noreferrer">
                {project.demo.startsWith("/") ? t.viewScreenshot : t.website}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {project.appStore && (
              <a className="button" href={project.appStore} target="_blank" rel="noreferrer" aria-label={t.onAppStore(name)}>
                <FaAppStoreIos size={17} aria-hidden="true" /> {t.appStore}
              </a>
            )}
            {project.github && (
              <a className="button" href={project.github} target="_blank" rel="noreferrer">
                <Github size={16} aria-hidden="true" /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
      <ProjectMedia project={project} locale={locale} />
    </article>
  );
}

export default function ProjectsSection({ locale }: { locale: Locale }) {
  const t = copy[locale].work;
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.kind === filter);

  return (
    <section id="projects" className="section-shell work-section">
      <div className="work-header">
        <SectionHeading title={t.title} />
        <div className="project-filters" role="group" aria-label={t.filter}>
          {filters.map((value) => (
            <button type="button" key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>
              {t.filters[value]}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status">{t.shown(visibleProjects.length)}</p>
      <div className="project-grid">
        {visibleProjects.map((project) => <ProjectCard key={project.name} project={project} locale={locale} />)}
      </div>
    </section>
  );
}
