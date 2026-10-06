type Brand = { name: string };

function Tile({ name }: Brand) {
  return <li className="flex h-20 w-44 shrink-0 items-center justify-center border border-gold/40 bg-ivory px-3 text-center font-serif text-forest/70">{name}</li>;
}

/** Auto-scrolls on md+ (pauses on hover/focus); swipeable and static-width on mobile. */
export default function BrandCarousel({ brands }: { brands: Brand[] }) {
  return (
    <div role="region" aria-label="Materials and brands" tabIndex={0} className="marquee-box overflow-x-auto md:overflow-hidden">
      <div className="marquee flex w-max gap-6">
        <ul className="flex gap-6">{brands.map((b) => <Tile key={b.name} {...b} />)}</ul>
        <ul aria-hidden="true" className="flex gap-6 max-md:hidden">{brands.map((b) => <Tile key={`dup-${b.name}`} {...b} />)}</ul>
      </div>
    </div>
  );
}
