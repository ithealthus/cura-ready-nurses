export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-muted-foreground">{description}</p>}
    </div>
  );
}
