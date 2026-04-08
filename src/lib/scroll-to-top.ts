/** Instant jump to y=0 (handles html vs body scroll roots). */
export function hardScrollToTop(): void {
  if (typeof window === "undefined") return;
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.documentElement.scrollLeft = 0;
  document.body.scrollTop = 0;
  document.body.scrollLeft = 0;
}

/** Animated scroll to top (e.g. after in-app navigation while user was scrolled down). */
export function smoothScrollToTop(): void {
  if (typeof window === "undefined") return;
  const y = window.scrollY || document.documentElement.scrollTop;
  if (y < 2) {
    hardScrollToTop();
    return;
  }
  try {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  } catch {
    hardScrollToTop();
  }
}
