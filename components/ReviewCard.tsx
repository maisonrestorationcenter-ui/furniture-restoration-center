export default function ReviewCard({ name, text, stars }: { name: string; text: string; stars: number }) {
  return (
    <blockquote className="border border-gold/40 bg-ivory p-6">
      <p aria-label={`${stars} out of 5 stars`} className="text-gold">{"★".repeat(stars)}</p>
      <p className="mt-3">{text}</p>
      <footer className="mt-4 text-sm text-ink/60">{name}</footer>
    </blockquote>
  );
}
