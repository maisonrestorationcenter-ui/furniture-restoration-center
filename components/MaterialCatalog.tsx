"use client";
import { useState } from "react";
import SiteImage from "./SiteImage";
import type { ImageAsset } from "@/lib/images";
import { materialCategories, type MaterialCategory, type MaterialEntry } from "@/lib/materials";

export type CatalogItem = Omit<MaterialEntry, "files" | "alt"> & { image: ImageAsset };

export default function MaterialCatalog({ items }: { items: CatalogItem[] }) {
  const [active, setActive] = useState<MaterialCategory>("All");
  const visible = active === "All" ? items : items.filter((m) => m.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter materials by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {materialCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={`btn shrink-0 border !px-5 ${active === cat ? "border-forest bg-forest text-ivory" : "border-gold text-forest hover:bg-cream"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-4 text-sm text-ink/70">
        Showing {visible.length} {visible.length === 1 ? "material" : "materials"}{active !== "All" ? ` in ${active}` : ""}
      </p>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((m) => (
          <li key={m.name}>
            <article className="h-full border border-gold/40 bg-ivory">
              {m.image.src && (
                <div className="relative aspect-[4/3]">
                  <SiteImage image={m.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className={m.position ?? "object-center"} />
                </div>
              )}
              <div className="border-t-2 border-gold p-5">
                <h3 className="font-serif text-xl md:text-2xl">{m.name}</h3>
                <p className="mt-1 text-sm text-leather">{m.category}{m.status ? " · Illustrative example" : ""}</p>
                <p className="mt-2 text-ink/80">{m.text}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
