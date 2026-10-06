export default function SectionHeading({ title, intro, light = false }: { title: string; intro?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <h2 className={`h2 ${light ? "!text-ivory" : ""}`}>{title}</h2>
      {intro && <p className={`mt-3 ${light ? "text-ivory/85" : "text-ink/75"}`}>{intro}</p>}
    </div>
  );
}
