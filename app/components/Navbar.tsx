"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { navItems } from "../data/portfolio";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a href="#home" className="wordmark">
          <span aria-hidden="true">NA</span>
          Naji Alkhudari
        </a>
        <nav id="site-nav" className="site-nav" data-open={isOpen} aria-label="Main navigation">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="header-controls">
          <button
            type="button"
            className="icon-button"
            aria-label={mounted && isDark ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="icon-button menu-button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
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
