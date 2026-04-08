"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DeliveryOrderLinks } from "@/components/DeliveryOrderLinks";
import { smoothScrollToTop } from "@/lib/scroll-to-top";
import { restaurant } from "@/data/restaurant";

const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Our story" },
  { href: "/visit", label: "Visit" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      scroll={false}
      onClick={(e) => {
        if (active) {
          e.preventDefault();
          smoothScrollToTop();
        }
      }}
      className={`relative text-[12px] font-bold uppercase tracking-[0.18em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-sm after:bg-brand after:transition-all after:duration-300 ${
        active
          ? "text-brand after:w-full"
          : "text-ink/55 after:w-0 hover:text-brand hover:after:w-full"
      }`}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand/15 bg-cream/95 shadow-sm backdrop-blur-md">
      <div className="brand-stripe" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          scroll={false}
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              smoothScrollToTop();
            }
          }}
          className="flex min-w-0 shrink-0 items-center gap-3 outline-offset-4"
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={52}
            height={52}
            className="h-11 w-11 object-contain sm:h-[52px] sm:w-[52px]"
            priority
            aria-hidden
          />
          <span className="min-w-0 text-left">
            <span className="font-display block truncate text-base leading-tight tracking-tight text-ink uppercase sm:text-lg">
              Bigg Burger
            </span>
            <span className="font-logo-sub mt-1 block text-[0.6rem] tracking-[0.32em] sm:text-[0.625rem]">
              New Zealand
            </span>
            <span className="sr-only">{restaurant.name}</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${restaurant.phoneTel}`}
            className="hidden rounded-sm border-2 border-brand px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-white xl:inline-block"
          >
            Call
          </a>
          <DeliveryOrderLinks variant="header" />
        </div>
      </div>

      <nav
        className="flex gap-5 overflow-x-auto border-t border-brand/10 bg-cream/80 px-4 py-2.5 lg:hidden"
        aria-label="Page sections"
      >
        {nav.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
        <a
          href={`tel:${restaurant.phoneTel}`}
          className="shrink-0 text-[12px] font-bold uppercase tracking-[0.18em] text-gold-dim"
        >
          Call
        </a>
      </nav>
    </header>
  );
}
