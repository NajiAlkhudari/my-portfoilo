"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems } from "../data/portfolio";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const themeIcon = useMemo(() => {
    if (!mounted) {
      return (
        <span className="block size-5 rounded-full border border-white/10 bg-white/10" />
      );
    }

    return resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />;
  }, [mounted, resolvedTheme]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={[
          "mx-auto max-w-7xl rounded-full border transition-all duration-300",
          isScrolled
            ? "border-white/12 bg-[rgb(var(--surface-strong)/0.82)] shadow-[0_20px_60px_rgba(10,15,30,0.35)] backdrop-blur-xl"
            : "border-white/8 bg-[rgb(var(--surface)/0.52)] backdrop-blur-md",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 py-3 sm:px-6">
          <a href="#home" className="font-heading text-lg font-bold tracking-[0.16em] text-[rgb(var(--text))] sm:text-xl">
            NAJI ALKHUDARI
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <a
                  key={item.sectionId}
                  href={item.href}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-white shadow-[0_0_24px_rgba(14,165,233,0.15)]"
                      : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[rgb(var(--text))] transition hover:border-accent-blue/50 hover:text-accent-blue"
            >
              {themeIcon}
            </button>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[rgb(var(--text))] md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div
          className={[
            "overflow-hidden px-3 transition-all duration-300 md:hidden",
            isOpen ? "max-h-80 pb-4" : "max-h-0",
          ].join(" ")}
        >
          <nav className="grid gap-2 rounded-3xl border border-white/8 bg-black/10 p-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <a
                  key={item.sectionId}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={[
                    "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-white"
                      : "text-[rgb(var(--muted))]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
