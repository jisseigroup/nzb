"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
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

function MobileNavLink({
  href,
  label,
  onClose,
}: {
  href: string;
  label: string;
  onClose: () => void;
}) {
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
        onClose();
      }}
      className={`block border-b border-brand/10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors ${
        active ? "text-brand" : "text-ink/80 hover:text-brand"
      }`}
    >
      {label}
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="h-6 w-6"
      aria-hidden
    >
      {open ? (
        <>
          <path d="M18 6L6 18M6 6l12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand/15 bg-cream/95 shadow-sm backdrop-blur-md">
      <div className="brand-stripe" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link
          href="/"
          scroll={false}
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              smoothScrollToTop();
            }
            closeMenu();
          }}
          className="flex min-w-0 shrink-0 items-center gap-2 outline-offset-4 sm:gap-3"
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={52}
            height={52}
            className="h-10 w-10 object-contain sm:h-[52px] sm:w-[52px]"
            priority
            aria-hidden
          />
          <span className="min-w-0 text-left">
            <span className="font-display block truncate text-sm leading-tight tracking-tight text-ink uppercase sm:text-lg">
              Bigg Burger
            </span>
            <span className="font-logo-sub mt-0.5 block text-[0.55rem] tracking-[0.28em] sm:mt-1 sm:text-[0.625rem]">
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

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href={`tel:${restaurant.phoneTel}`}
            className="hidden rounded-sm border-2 border-brand px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-white xl:inline-block"
          >
            Call
          </a>
          <DeliveryOrderLinks variant="header" />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand/25 text-ink transition hover:border-brand hover:bg-brand/5 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={closeMenu}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-[min(100%,20rem)] flex-col border-l border-brand/15 bg-cream shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-brand/10 px-4 py-3">
              <span className="font-display text-xs uppercase tracking-wide text-ink">
                Menu
              </span>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-brand/10"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <MenuIcon open />
              </button>
            </div>
            <nav
              className="flex flex-1 flex-col overflow-y-auto px-4 pb-8 pt-2"
              aria-label="Mobile navigation"
            >
              {nav.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClose={closeMenu}
                />
              ))}
              <a
                href={`tel:${restaurant.phoneTel}`}
                className="mt-4 block rounded-sm border-2 border-brand py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-brand transition hover:bg-brand hover:text-white"
                onClick={closeMenu}
              >
                Call us
              </a>
              <div className="mt-8 border-t border-brand/10 pt-6">
                <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand">
                  Order online
                </p>
                <DeliveryOrderLinks variant="inline" />
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
