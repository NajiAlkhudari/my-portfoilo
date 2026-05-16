import { Github, Linkedin } from "lucide-react";
import { socialLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-[rgb(var(--surface)/0.52)] px-6 py-6 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-heading text-xl font-bold text-[rgb(var(--text))]">
            Naji Alkhudari
          </p>
          <p className="mt-1 text-sm text-[rgb(var(--muted))]">
            © {new Date().getFullYear()} Portfolio. Built with Next.js.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[rgb(var(--text))] transition hover:-translate-y-0.5 hover:border-accent-blue/50 hover:text-accent-blue"
          >
            <Github size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[rgb(var(--text))] transition hover:-translate-y-0.5 hover:border-accent-purple/50 hover:text-accent-purple"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
