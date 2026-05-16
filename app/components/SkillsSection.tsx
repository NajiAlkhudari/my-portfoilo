"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" data-section className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="My technical stack across web, mobile, and backend."
        description="The stack below reflects how I group tools in real projects: interface systems, mobile delivery, backend architecture, and deployment-ready tooling."
        centered
      />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 grid gap-6 md:grid-cols-2"
      >
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon];

          return (
            <motion.article
              key={category.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[2rem] border border-white/10 bg-[rgb(var(--surface)/0.68)] p-6 shadow-[0_20px_60px_rgba(10,15,30,0.2)] backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300/75">
                    Category
                  </p>
                  <h3 className="mt-3 font-heading text-2xl text-[rgb(var(--text))]">
                    {category.title}
                  </h3>
                </div>
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-white/12 bg-gradient-to-br from-accent-blue/15 to-accent-purple/20 text-sky-200">
                  <Icon size={22} />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-[rgb(var(--text))]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
