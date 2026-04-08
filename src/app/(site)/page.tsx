import Image from "next/image";
import Link from "next/link";
import { DeliveryOrderLinks } from "@/components/DeliveryOrderLinks";
import { heroImage } from "@/data/gallery";
import { restaurant } from "@/data/restaurant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Bigg Burger New Zealand — premium burgers, generous portions, and delivery from Crossing Republik, Ghaziabad.",
};

export default function HomePage() {
  return (
    <main className="bg-cream">
      <section className="relative min-h-[78vh]">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/58 to-black/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/55 via-black/25 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 sm:pb-24 [&_h1]:drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)] [&_p]:drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
          <p className="text-xs font-extrabold uppercase tracking-[0.4em] text-gold">
            {restaurant.tagline}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Crafted burgers,{" "}
            <span className="text-gold">made to impress.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Known for flavour-forward recipes, careful packaging, and generous
            portions—open daily from {restaurant.opensAt}.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/menu"
              scroll={false}
              className="inline-flex items-center justify-center rounded-sm bg-brand px-8 py-3.5 text-xs font-extrabold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-gold hover:text-ink"
            >
              View menu
            </Link>
            <Link
              href="/visit"
              scroll={false}
              className="inline-flex items-center justify-center rounded-sm border-2 border-gold bg-white/10 px-8 py-3.5 text-xs font-extrabold uppercase tracking-[0.2em] text-gold backdrop-blur-sm transition hover:bg-gold hover:text-ink"
            >
              Plan your visit
            </Link>
            <DeliveryOrderLinks variant="hero" className="pl-1" />
          </div>
        </div>
      </section>

      <section className="border-b border-brand/10 bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:grid-cols-3 sm:px-6">
          <div>
            <p className="font-display text-4xl text-ink md:text-5xl">
              {restaurant.diningRating}
              <span className="text-gold">★</span>
            </p>
            <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand">
              Dining · {restaurant.diningCount} ratings
            </p>
          </div>
          <div>
            <p className="font-display text-4xl text-ink md:text-5xl">
              {restaurant.avgOrder}
            </p>
            <p className="mt-2 text-sm text-muted">{restaurant.avgOrderNote}</p>
          </div>
          <div>
            <p className="font-display text-4xl text-ink md:text-5xl">
              {restaurant.opensAt}
            </p>
            <p className="mt-2 text-sm text-muted">
              Takeaway &amp; delivery · {restaurant.cuisine}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand">
                Signatures
              </p>
              <h2 className="font-display mt-2 text-4xl text-ink md:text-5xl">
                The plates everyone talks about
              </h2>
            </div>
            <Link
              href="/menu"
              scroll={false}
              className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink underline-offset-4 hover:text-brand hover:underline"
            >
              Full menu
            </Link>
          </div>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restaurant.topDishes.map((dish) => (
              <li
                key={dish}
                className="border-2 border-brand/15 bg-cream px-8 py-10 shadow-sm transition hover:border-gold/50 hover:shadow-md"
              >
                <p className="font-display text-xl text-ink md:text-2xl">
                  {dish}
                </p>
                <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-brand to-gold" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-brand/15 bg-gold/[0.08] py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand">
                Experience
              </p>
              <h2 className="font-display mt-3 text-3xl leading-snug md:text-4xl">
                Tamper-proof packaging, contactless delivery, and portions that
                satisfy.
              </h2>
            </div>
            <ul className="space-y-4 text-muted">
              {restaurant.knownFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-brand/15 pb-4 text-sm leading-relaxed last:border-0"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              href="/gallery"
              scroll={false}
              className="rounded-sm border-2 border-brand bg-cream px-6 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand transition hover:bg-brand hover:text-white"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              scroll={false}
              className="rounded-sm border-2 border-brand bg-cream px-6 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand transition hover:bg-brand hover:text-white"
            >
              Our story
            </Link>
            <DeliveryOrderLinks variant="inline" />
          </div>
        </div>
      </section>
    </main>
  );
}
