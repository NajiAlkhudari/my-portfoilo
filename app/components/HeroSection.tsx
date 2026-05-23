"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { socialLinks } from "../data/portfolio";
import { useTypingText } from "../hooks/useTypingText";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Mobile App Builder",
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const typedRole = useTypingText(roles);

  return (
    <section
      id="home"
      data-section
      className="relative isolate overflow-hidden px-0 pb-12 pt-28 sm:pt-32"
    >
      <div className="aurora-blur absolute left-[-12%] top-10 h-56 w-56 rounded-full bg-accent-purple/30" />
      <div className="aurora-blur absolute right-[-8%] top-24 h-72 w-72 rounded-full bg-accent-blue/25" />
      <div className="aurora-blur absolute inset-x-[18%] top-[10%] h-72 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-purple/20" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <m.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[rgb(var(--muted))] backdrop-blur">
            <span className="size-2 rounded-full bg-accent-blue shadow-[0_0_14px_rgba(14,165,233,0.9)]" />
            Building polished web and mobile products
          </div>

          <h1 className="mt-8 font-heading text-5xl font-bold leading-[0.96] tracking-tight text-[rgb(var(--text))] sm:text-6xl lg:text-7xl">
            Naji Alkhudari
          </h1>

          <div className="mt-6 h-12 text-xl font-semibold text-sky-200 sm:h-14 sm:text-2xl">
            {typedRole}
            <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse rounded-full bg-accent-blue align-middle" />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[rgb(var(--muted))] sm:text-lg">
            Full-stack and mobile engineer based in Homs, Syria, focused on
            usable interfaces, maintainable systems, and shipping software that
            feels intentional from first impression to final interaction.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(14,165,233,0.28)] transition hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDownRight size={16} />
            </a>
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[rgb(var(--text))] transition hover:-translate-y-0.5 hover:border-accent-blue/50 hover:text-accent-blue"
              >
                <Github size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[rgb(var(--text))] transition hover:-translate-y-0.5 hover:border-accent-purple/50 hover:text-accent-purple"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </m.div>

        <m.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40, scale: 0.96 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent-blue/25 via-transparent to-accent-purple/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgb(var(--surface-strong)/0.72)] p-4 shadow-[0_24px_80px_rgba(10,15,30,0.35)]">
              <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.02] p-4">
                <Image
                  src="/naji.png"
                  alt="Portrait of Naji Alkhudari"
                  width={1205}
                  height={1795}
                  priority
                  quality={82}
                  sizes="(max-width: 768px) 88vw, (max-width: 1200px) 46vw, 34vw"
                  className="h-auto w-full rounded-[1.3rem] object-cover"
                />
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
