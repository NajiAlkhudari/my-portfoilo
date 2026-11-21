import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell about-layout">
      <div>
        <SectionHeading title="About me" />
        <p className="about-copy">
          I’m a software engineer based in Homs, Syria. I work across frontend
          development, backend APIs, and mobile apps. I focus on building
          interfaces people can use easily and code teams can maintain.
        </p>
      </div>

      <dl className="about-facts">
        <div><dt>Based in</dt><dd>Homs, Syria</dd></div>
        <div><dt>Education</dt><dd>B.S. in Information Technology Engineering, 2023</dd></div>
        <div><dt>Open to</dt><dd>Full-time and freelance opportunities</dd></div>
      </dl>
    </section>
  );
}
