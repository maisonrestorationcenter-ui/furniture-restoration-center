import Link from "next/link";

// Temporary wordmark. Replace the body with the approved logo asset when supplied.
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Furniture Restoration Center, home" className={`block leading-none ${light ? "text-ivory" : "text-forest"}`}>
      <span className="block font-serif text-xl font-semibold md:text-2xl">Furniture Restoration Center</span>
      <span className="mt-1 block h-px w-12 bg-gold" />
    </Link>
  );
}
