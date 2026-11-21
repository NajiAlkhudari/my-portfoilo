"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { FaAppStoreIos } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { Project, ProjectKind, ProjectSlide, projects } from "../data/portfolio";

const projectLabels: Record<ProjectKind, string> = {
  fullstack: "Full stack",
  mobile: "Mobile app",
  web: "Web project",
};

const filters = [
  { value: "all", label: "All projects" },
  { value: "fullstack", label: "Full stack" },
  { value: "mobile", label: "Mobile" },
  { value: "web", label: "Web" },
] as const;

const taskLogWebImages = new Set([
  "1754397845835.jpeg",
  "1754397858330.jpeg",
  "1754397859586.jpeg",
]);

function ProjectGallery({
  label,
  slides,
  mobile = false,
}: {
  label: string;
  slides: ProjectSlide[];
  mobile?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <figure className={mobile ? "gallery gallery-mobile" : "gallery"}>
      <div className="gallery-image">
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          sizes={mobile ? "(max-width: 430px) 36vw, 190px" : "(max-width: 760px) 92vw, 510px"}
          style={{ objectPosition: slide.objectPosition }}
        />
      </div>
      {(label || slides.length > 1) && (
        <figcaption className="gallery-caption">
          {label && <span className="gallery-label">{label}</span>}
          {slides.length > 1 && (
            <div className="gallery-controls" role="group" aria-label={label ? `${label} screenshots` : "Screenshots"}>
              <button
                type="button"
                className="icon-button"
                aria-label={`Previous screenshot${label ? ` for ${label}` : ""}`}
                onClick={() => setIndex((current) => (current + slides.length - 1) % slides.length)}
              >
                <ArrowLeft size={16} aria-hidden="true" />
              </button>
              <span aria-live="polite" aria-atomic="true">{index + 1} / {slides.length}</span>
              <button
                type="button"
                className="icon-button"
                aria-label={`Next screenshot${label ? ` for ${label}` : ""}`}
                onClick={() => setIndex((current) => (current + 1) % slides.length)}
              >
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          )}
        </figcaption>
      )}
    </figure>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.galleries) {
    return (
      <div className="project-media media-pair">
        {project.galleries.map(({ label, slides }) => (
          <ProjectGallery key={label} label={label} slides={slides} mobile />
        ))}
      </div>
    );
  }

  const slides = project.slides ?? project.images?.map((src, index) => ({
    src,
    alt: `${project.name} screen ${index + 1}`,
  })) ?? [];

  if (project.name === "Task Log") {
    const isWeb = (slide: ProjectSlide) => taskLogWebImages.has(slide.src.split("/").pop() ?? "");
    return (
      <div className="project-media media-combined">
        <ProjectGallery label="Dashboard" slides={slides.filter(isWeb)} />
        <ProjectGallery label="Mobile app" slides={slides.filter((slide) => !isWeb(slide))} mobile />
      </div>
    );
  }

  if (!slides.length) return null;

  return (
    <div className="project-media">
      <ProjectGallery label="" slides={slides} mobile={project.kind === "mobile"} />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card${project.featured ? " project-featured" : ""}`}>
      <div className="project-info">
        <p className="eyebrow">{project.featured ? "Featured project" : projectLabels[project.kind]}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        {project.techStack.length > 0 && (
          <ul className="tag-list">
            {project.techStack.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        )}
        {(project.demo || project.appStore || project.github) && (
          <div className="actions project-links">
            {project.demo && (
              <a className="button" href={project.demo} target="_blank" rel="noreferrer">
                {project.demoLabel ?? (project.demo.startsWith("/") ? "View screenshot" : "Website")}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {project.appStore && (
              <a className="button" href={project.appStore} target="_blank" rel="noreferrer" aria-label={`${project.name} on the App Store`}>
                <FaAppStoreIos size={17} aria-hidden="true" /> App Store
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
      <ProjectMedia project={project} />
    </article>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const visibleProjects = filter === "all" ? projects : projects.filter((project) => project.kind === filter);

  return (
    <section id="projects" className="section-shell work-section">
      <div className="work-header">
        <SectionHeading title="Selected work" description="Web apps, mobile apps, and the systems behind them." />
        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map(({ value, label }) => (
            <button type="button" key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status">{visibleProjects.length} projects shown</p>
      <div className="project-grid">
        {visibleProjects.map((project) => <ProjectCard key={project.name} project={project} />)}
      </div>
    </section>
  );
}
