"use client";

import { smoothScrollToTop } from "@/lib/scroll-to-top";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * After client-side navigation, smooth-scroll the viewport to the top so users
 * see the page move up (not an instant jump). Runs in useEffect so the new
 * route can paint first, then animate.
 */
export function ScrollRestoration() {
  const pathname = usePathname();
  const isFirstPath = useRef(true);

  useEffect(() => {
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }
    const id = requestAnimationFrame(() => smoothScrollToTop());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
