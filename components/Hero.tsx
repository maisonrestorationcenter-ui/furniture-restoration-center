"use client";
import { useEffect, useState } from "react";
import type { ImageAsset } from "@/lib/images";
import SiteImage from "./SiteImage";
import WhatsAppLink from "./WhatsAppLink";

type Slide = { label: string; title: string; text: string; image: ImageAsset; position: string };

export default function Hero({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true); // assume reduced until checked
  const playing = !userPaused && !interacting && !reducedMotion;

  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, [playing, slides.length]);

  const go = (n: number) => setIndex((n + slides.length) % slides.length);
  const slide = slides[index];
  const ctrl = "btn-line !min-h-[44px] !px-3 !text-ivory";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Our core values"
      className="relative overflow-hidden bg-forest-deep text-ivory"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={() => setInteracting(false)}
      onTouchStart={() => setUserPaused(true)}
    >
      <div className="absolute inset-0">
        <SiteImage key={index} image={slide.image} sizes="100vw" priority={index === 0} className={slide.position} />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/60 to-forest-deep/20" />
      </div>
      <div className="wrap relative flex min-h-[78vh] flex-col justify-center py-16">
        <div aria-live={playing ? "off" : "polite"} aria-atomic="true" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`}>
          <p className="text-sm tracking-wide text-gold-light">{slide.label}</p>
          {index === 0 ? <h1 className="hero-title">{slide.title}</h1> : <p className="hero-title">{slide.title}</p>}
          <p className="mt-5 max-w-xl text-lg text-ivory/90">{slide.text}</p>
        </div>
        <div className="mt-8"><WhatsAppLink cta="hero" icon className="btn-gold">Get a Free Quotation →</WhatsAppLink></div>
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <button aria-label="Previous slide" onClick={() => go(index - 1)} className={`${ctrl} w-11`}>‹</button>
          <button aria-label="Next slide" onClick={() => go(index + 1)} className={`${ctrl} w-11`}>›</button>
          <button onClick={() => setUserPaused((p) => !p)} aria-pressed={!playing} className={ctrl}>{playing ? "Pause" : "Play"}</button>
          <div className="ml-2 flex">
            {slides.map((s, n) => (
              <button key={s.label} aria-label={`Go to slide ${n + 1}`} aria-current={n === index} onClick={() => setIndex(n)} className="flex h-11 w-5 items-center justify-center">
                <span className={`h-2 rounded-full transition-all ${n === index ? "w-4 bg-gold" : "w-2 bg-ivory/40"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
