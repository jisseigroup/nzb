import Link from "next/link";
import { DeliveryOrderLinks } from "@/components/DeliveryOrderLinks";
import { restaurant } from "@/data/restaurant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our story",
  description: `About ${restaurant.name} — Crossing Republik, Ghaziabad.`,
};

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <header className="border-b border-brand/15 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-brand">
            Our story
          </p>
          <h1 className="font-display mt-4 text-4xl text-ink md:text-5xl lg:text-6xl">
            {restaurant.name}
          </h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-muted">
            A neighbourhood burger kitchen in Paramount Spectrum—built on
            bold flavours, honest portions, and reliable delivery.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              What guests remember
            </h2>
            <ul className="mt-8 space-y-4">
              {restaurant.knownFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-l-2 border-brand/40 pl-6 text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              How we serve you
            </h2>
            <ul className="mt-8 space-y-3 text-muted">
              {restaurant.services.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm leading-relaxed text-muted">
              We do not offer dine-in seating at this location—order for
              delivery or swing by for takeaway. Vegetarian options are available
              across the menu; please confirm allergens on Zomato, Swiggy, or
              with our team.
            </p>
          </div>
        </div>

        <div className="mt-20 border-2 border-brand/20 bg-gold/[0.06] p-10 text-center sm:p-14">
          <p className="font-display text-2xl text-ink md:text-3xl">
            Ready when you are.
          </p>
          <p className="mt-4 text-sm text-muted">
            Opens at {restaurant.opensAt} · {restaurant.phoneDisplay}
          </p>
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="/visit"
              scroll={false}
              className="rounded-sm bg-brand px-8 py-3.5 text-xs font-extrabold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-gold hover:text-ink"
            >
              Visit &amp; contact
            </Link>
            <DeliveryOrderLinks variant="inline" />
          </div>
        </div>
      </div>
    </main>
  );
}
