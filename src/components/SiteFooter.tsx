import Image from "next/image";
import Link from "next/link";
import { DeliveryOrderLinks } from "@/components/DeliveryOrderLinks";
import { restaurant } from "@/data/restaurant";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand/15 bg-cream text-muted">
      <div className="brand-stripe" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4">
            <Image
              src="/brand/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              aria-hidden
            />
            <div>
              <p className="font-display text-lg uppercase tracking-tight text-ink">
                Bigg Burger
              </p>
              <p className="font-logo-sub mt-1 !text-muted">New Zealand</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed">
                {restaurant.address}
              </p>
              <a
                href={`tel:${restaurant.phoneTel}`}
                className="mt-4 inline-block text-sm font-bold text-brand hover:text-gold-dim"
              >
                {restaurant.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  scroll={false}
                  className="text-sm font-medium text-ink/80 transition hover:text-brand"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand">
            Order online
          </p>
          <div className="mt-4">
            <DeliveryOrderLinks variant="footer" />
          </div>
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand">
            Hours
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Opens at {restaurant.opensAt}
            <br />
            <span className="text-muted">
              Check Zomato or Swiggy for holiday hours.
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-brand/10 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted sm:px-6">
          <p>
            © {new Date().getFullYear()} {restaurant.name}. Menu and timings may
            vary.
          </p>
        </div>
      </div>
    </footer>
  );
}
