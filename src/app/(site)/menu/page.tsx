import Link from "next/link";
import { DeliveryOrderLinks } from "@/components/DeliveryOrderLinks";
import { menuCategories, restaurant } from "@/data/restaurant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Signatures, sides, and sweets at Bigg Burger New Zealand — order on Zomato or Swiggy.",
};

export default function MenuPage() {
  return (
    <main className="bg-cream">
      <header className="border-b border-brand/15 bg-cream px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-[10rem]" aria-hidden>
            <div className="brand-stripe rounded-full" />
          </div>
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-brand">
            Menu
          </p>
          <h1 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
            A curated selection
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            {restaurant.menuNote} Approx. {restaurant.avgOrder} per order (
            {restaurant.avgOrderNote.toLowerCase()}).
          </p>
          <p className="mt-10 text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
            Order &amp; full menus
          </p>
          <div className="mt-3">
            <DeliveryOrderLinks variant="inline" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="space-y-20">
          {menuCategories.map((cat) => (
            <section key={cat.title}>
              <div className="flex flex-col gap-2 border-b-2 border-brand/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="font-display text-3xl text-ink md:text-4xl">
                  {cat.title}
                </h2>
                <p className="text-sm font-semibold tracking-wide text-gold-dim">
                  {cat.subtitle}
                </p>
              </div>
              <ul className="mt-10 divide-y divide-brand/10">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-1 py-8 first:pt-4 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="font-display text-xl text-ink md:text-2xl">
                      {item.name}
                    </span>
                    <span className="text-sm text-muted">{item.note}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-20 border-t border-brand/15 pt-10 text-center text-sm text-muted">
          Have dietary questions?{" "}
          <Link
            href="/visit"
            scroll={false}
            className="font-bold text-brand hover:text-gold-dim"
          >
            Contact the outlet
          </Link>{" "}
          or message us on Zomato / Swiggy.
        </p>
      </div>
    </main>
  );
}
