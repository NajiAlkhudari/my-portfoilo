import SectionHeading from "./SectionHeading";

const highlights = [
  {
    label: "Core Focus",
    value: "Frontend, backend, and mobile",
  },
  {
    label: "Approach",
    value: "Reusable UI, strong architecture, practical UX decisions",
  },
  {
    label: "Background",
    value: "B.S. in Information Technology Engineering, 2023",
     
  },
];

export default function AboutSection() {
  return (
    <section id="about" data-section className="section-shell offscreen-section">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="About"
            title="Engineering with clarity, structure, and product awareness."
            description="I design and build applications that balance visual quality with maintainable implementation. My work spans frontend interfaces, backend APIs, and mobile experiences, with an emphasis on reusable systems rather than one-off screens."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[rgb(var(--surface)/0.64)] p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300/75">
                Based In
              </p>
              <p className="mt-3 font-heading text-2xl text-[rgb(var(--text))]">
                Homs, Syria
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[rgb(var(--surface)/0.64)] p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300/75">
                Open To
              </p>
              <p className="mt-3 font-heading text-2xl text-[rgb(var(--text))]">
                Full-time and freelance opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 self-end">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_18px_55px_rgba(10,15,30,0.18)] backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[rgb(var(--muted))]">
                {item.label}
              </p>
              <p className="mt-3 text-lg leading-7 text-[rgb(var(--text))]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
