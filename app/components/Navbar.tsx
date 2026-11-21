"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems } from "../data/portfolio";

import { copy, Locale } from "../data/languages";

export default function Navbar({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [fragment, setFragment] = useState("");

  useEffect(() => {
    setMounted(true);
    const syncFragment = () => setFragment(window.location.hash);
    syncFragment();
    window.addEventListener("hashchange", syncFragment);
    return () => window.removeEventListener("hashchange", syncFragment);
  }, []);

  const alternate = locale === "ar" ? "en" : "ar";

  const isDark = resolvedTheme === "dark";

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a href="#home" className="wordmark">
          {`${t.firstName} ${t.lastName}`}
        </a>
        <nav id="site-nav" className="site-nav" data-open={isOpen} aria-label={t.navigation}>
          {navItems.map(({ key, href }) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)}>{t.nav[key]}</a>
          ))}
        </nav>
        <div className="header-controls">
          <a
            className="button language-link"
            href={`${alternate === "ar" ? "/ar" : "/"}${fragment}`}
            hrefLang={alternate}
            lang={alternate}
            dir={alternate === "ar" ? "rtl" : "ltr"}
          >
            {alternate === "ar" ? "العربية" : "English"}
          </a>
          <button
            type="button"
            className="icon-button"
            aria-label={mounted && isDark ? t.themeLight : t.themeDark}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="icon-button menu-button"
            aria-label={isOpen ? t.menuClose : t.menuOpen}
            aria-controls="site-nav"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
