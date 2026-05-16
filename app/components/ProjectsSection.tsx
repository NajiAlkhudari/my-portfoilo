"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Project, projects } from "../data/portfolio";

type SliderProps = {
  projectName: string;
  slides: {
    src: string;
    alt: string;
    objectPosition?: string;
  }[];
  frameKind: "web" | "mobile";
};

const hiddenBrowserProjectLabels = new Set([
  "a-class-transportation.project",
  "m.b.k.project",
]);

const containBrowserProjects = new Set(["Wiket"]);

function ProjectSlider({ projectName, slides, frameKind }: SliderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;
  const browserProjectLabel = `${projectName
    .toLowerCase()
    .replace(/\s+/g, "-")}.project`;
  const shouldContainImage =
    frameKind === "mobile" || containBrowserProjects.has(projectName);

  useEffect(() => {
    if (shouldReduceMotion || slideCount < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      startTransition(() => {
        setActiveIndex((current) => (current + 1) % slideCount);
      });
    }, 3600);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion, slideCount]);

  const goToSlide = (nextIndex: number) => {
    startTransition(() => {
      setActiveIndex((nextIndex + slideCount) % slideCount);
    });
  };

  const activeSlide = slides[activeIndex];

  return (
    <div className={frameKind === "mobile" ? "phone-frame" : "browser-frame"}>
      {frameKind === "web" ? (
        <div className="browser-toolbar">
          <div className="flex items-center gap-2">
            <span className="browser-dot bg-rose-400" />
            <span className="browser-dot bg-amber-300" />
            <span className="browser-dot bg-emerald-400" />
          </div>
          <div className="browser-address">
            {hiddenBrowserProjectLabels.has(browserProjectLabel)
              ? ""
              : browserProjectLabel}
          </div>
        </div>
      ) : (
        <div className="phone-shell">
          <span className="phone-notch" />
        </div>
      )}

      <div className={frameKind === "mobile" ? "phone-screen" : "browser-screen"}>
        <div className="relative h-full overflow-hidden">
          <Image
            src={activeSlide.src}
            alt={activeSlide.alt}
            fill
            sizes={frameKind === "mobile" ? "(max-width: 768px) 70vw, 24vw" : "(max-width: 1024px) 92vw, 42vw"}
            className={
              shouldContainImage
                ? "object-contain transition-opacity duration-500"
                : "object-cover transition-opacity duration-500"
            }
            style={{ objectPosition: activeSlide.objectPosition ?? "center" }}
          />

          {slideCount > 1 ? (
            <>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(10,15,30,0.42)] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(10,15,30,0.42)] to-transparent" />
              <button
                type="button"
                aria-label={`Previous ${projectName} slide`}
                onClick={() => goToSlide(activeIndex - 1)}
                className="slider-button left-3"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label={`Next ${projectName} slide`}
                onClick={() => goToSlide(activeIndex + 1)}
                className="slider-button right-3"
              >
                <ChevronRight size={16} />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function getProjectSlides(project: Project) {
  if (project.slides?.length) {
    return project.slides;
  }

  if (project.images?.length) {
    return project.images.map((src, index) => ({
      src,
      alt: `${project.name} screen ${index + 1}`,
      objectPosition: "center",
    }));
  }

  return [];
}

const taskLogWebImages = new Set([
  "1754397845835.jpeg",
  "1754397858330.jpeg",
  "1754397859586.jpeg",
]);

function getFullstackSlides(project: Project, slides: ReturnType<typeof getProjectSlides>) {
  if (project.name === "Task Log") {
    return {
      webSlides: slides.filter((slide) =>
        taskLogWebImages.has(slide.src.split("/").pop() ?? "")
      ),
      mobileSlides: slides.filter(
        (slide) => !taskLogWebImages.has(slide.src.split("/").pop() ?? "")
      ),
    };
  }

  if (project.name === "Wiket") {
    return {
      webSlides: slides,
      mobileSlides: [],
    };
  }

  return {
    webSlides: slides.slice(0, 3),
    mobileSlides: slides.slice(3, 6),
  };
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const slides = getProjectSlides(project);
  const { webSlides, mobileSlides } =
    project.kind === "fullstack"
      ? getFullstackSlides(project, slides)
      : { webSlides: [], mobileSlides: [] };
  const projectTypeLabel =
    project.kind === "mobile"
      ? "Mobile App"
      : project.kind === "fullstack"
      ? "Full-Stack System"
      : "Web Project";

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.7,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        "project-card group rounded-[2rem] border border-white/10 bg-[rgb(var(--surface)/0.72)] shadow-[0_22px_70px_rgba(10,15,30,0.24)] backdrop-blur",
        project.kind === "fullstack"
          ? "p-6 lg:p-7 xl:col-span-2"
          : "p-5",
      ].join(" ")}
    >
      {project.kind === "fullstack" ? (
        <div
          className={
            mobileSlides.length
              ? "grid items-start gap-8 xl:grid-cols-[1.5fr_0.95fr]"
              : "grid gap-8"
          }
        >
          {webSlides.length ? (
            <ProjectSlider
              projectName={project.name}
              slides={webSlides}
              frameKind="web"
            />
          ) : null}
          {mobileSlides.length ? (
            <ProjectSlider
              projectName={project.name}
              slides={mobileSlides}
              frameKind="mobile"
            />
          ) : null}
        </div>
      ) : (
        <ProjectSlider
          projectName={project.name}
          slides={slides}
          frameKind={project.kind}
        />
      )}

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300/70">
            {projectTypeLabel}
          </p>
          <h3 className="mt-2 font-heading text-2xl font-bold text-[rgb(var(--text))]">
            {project.name}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[rgb(var(--text))] transition hover:-translate-y-0.5 hover:border-accent-blue/50 hover:text-accent-blue"
            >
              <Github size={18} />
            </Link>
          ) : null}
          {project.demo ? (
            <Link
              href={project.demo}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--text))] transition hover:-translate-y-0.5 hover:border-accent-purple/50 hover:text-accent-purple"
            >
              Demo
              <ExternalLink size={16} />
            </Link>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-base leading-7 text-[rgb(var(--muted))]">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.techStack.map((item) => (
          <span
            key={`${project.name}-${item}`}
            className="rounded-full border border-white/10 bg-black/15 px-3.5 py-2 text-sm text-[rgb(var(--text))]"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" data-section className="section-shell">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionHeading
          eyebrow="Projects"
          centered
        />
      </motion.div>

      <div className="mt-14 grid gap-8 xl:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
