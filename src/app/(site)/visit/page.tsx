import { DeliveryOrderLinks } from "@/components/DeliveryOrderLinks";
import { restaurant } from "@/data/restaurant";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit",
  description: `Visit ${restaurant.name} — ${restaurant.address}.`,
};

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`;

export default function VisitPage() {
  return (
    <main className="bg-cream">
      <header className="border-b border-brand/15 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.35em] text-brand">
            Visit
          </p>
          <h1 className="font-display mt-4 text-4xl text-ink md:text-5xl lg:text-6xl">
            Find us
          </h1>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 sm:py-24">
        <div className="border-2 border-brand/20 bg-cream p-8 shadow-sm sm:p-10">
          <h2 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand">
            Address
          </h2>
          <p className="font-display mt-4 text-2xl leading-snug text-ink md:text-3xl">
            {restaurant.address}
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex text-xs font-extrabold uppercase tracking-[0.2em] text-brand hover:text-gold-dim"
          >
            Open in Google Maps →
          </a>
        </div>

        <div className="flex flex-col border-2 border-brand/25 bg-gold/10 p-8 sm:p-10">
          <h2 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand">
            Contact
          </h2>
          <a
            href={`tel:${restaurant.phoneTel}`}
            className="font-display mt-4 text-3xl text-brand hover:text-gold-dim"
          >
            {restaurant.phoneDisplay}
          </a>
          <div className="mt-10 space-y-3 text-sm text-muted">
            <p>
              <span className="font-bold text-ink">Hours:</span> Opens at{" "}
              {restaurant.opensAt} (check Zomato or Swiggy for holidays).
            </p>
            <p>
              <span className="font-bold text-ink">Service:</span>{" "}
              Delivery &amp; takeaway · No on-site seating.
            </p>
          </div>
          <div className="mt-10">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand">
              Order online
            </p>
            <DeliveryOrderLinks variant="inline" />
          </div>
        </div>
      </div>

      <div className="border-t border-brand/15 bg-brand py-6 text-center">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-extrabold uppercase tracking-[0.2em] text-white hover:text-gold"
        >
          Get directions
        </a>
      </div>
    </main>
  );
}
