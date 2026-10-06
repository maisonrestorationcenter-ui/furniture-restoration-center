"use client";
import { useId, useState } from "react";
import type { ImageAsset } from "@/lib/images";
import SiteImage from "./SiteImage";

type Props = { title: string; before: ImageAsset; after: ImageAsset };

export default function BeforeAfter({ title, before, after }: Props) {
  const [position, setPosition] = useState(50);
  const id = useId();
  return (
    <figure>
      <div className="relative aspect-[4/3] touch-pan-y select-none overflow-hidden bg-cream">
        <SiteImage image={after} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <SiteImage image={before} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <span className="absolute left-2 top-2 bg-ink/75 px-2 py-1 text-xs text-ivory">Before</span>
        <span className="absolute right-2 top-2 bg-forest px-2 py-1 text-xs text-ivory">After</span>
        <input
          id={id} type="range" min={0} max={100} step={2} value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Drag to compare before and after: ${title}`}
          aria-valuetext={`${position}% before`}
          className="peer absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 bg-gold" style={{ left: `${position}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold bg-ivory text-forest shadow">↔</span>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden ring-2 ring-inset ring-gold peer-focus-visible:block" />
      </div>
      <figcaption className="mt-3 font-serif text-lg text-forest">{title}</figcaption>
    </figure>
  );
}
