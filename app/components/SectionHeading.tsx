type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300/85">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[rgb(var(--text))] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      ) : null}
      <div className={centered ? "mx-auto" : ""}>
        <span className="mt-5 block h-1.5 w-28 rounded-full bg-gradient-to-r from-accent-blue via-sky-300 to-accent-purple" />
      </div>
      {description ? (
        <p className="mt-6 text-base leading-7 text-[rgb(var(--muted))] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
