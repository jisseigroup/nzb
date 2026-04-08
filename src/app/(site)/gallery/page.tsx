import { GalleryMasonry } from "@/components/GalleryMasonry";
import { restaurant } from "@/data/restaurant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photos from ${restaurant.name} — Crossing Republik, Ghaziabad.`,
};

export default function GalleryPage() {
  return (
    <main>
      <header className="border-b border-brand/15 bg-cream px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-brand">
            Gallery
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl text-ink md:text-5xl lg:text-6xl">
            From our kitchen &amp; outlet
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            Food, ambience, and our Crossing Republik location.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <GalleryMasonry />
      </div>
    </main>
  );
}
