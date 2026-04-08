import { SiSwiggy, SiZomato } from "react-icons/si";
import { restaurant } from "@/data/restaurant";

const zomato = "#E23744";
const swiggy = "#FC8019";

type Variant = "header" | "footer" | "hero" | "inline";

const wrap: Record<
  Variant,
  string
> = {
  header:
    "flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-ink/10 transition hover:scale-105 hover:ring-2 hover:ring-brand sm:h-11 sm:w-11",
  footer:
    "flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-ink/10 transition hover:ring-2 hover:ring-brand",
  hero: "flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg ring-1 ring-white/40 backdrop-blur-sm transition hover:scale-105 hover:bg-white",
  inline:
    "flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-brand/15 transition hover:ring-2 hover:ring-brand",
};

const iconSize: Record<Variant, string> = {
  header: "h-6 w-6 sm:h-7 sm:w-7",
  footer: "h-7 w-7",
  hero: "h-7 w-7",
  inline: "h-7 w-7",
};

export function DeliveryOrderLinks({
  variant = "inline",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}
      role="group"
      aria-label="Order on delivery apps"
    >
      <a
        href={restaurant.zomatoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={wrap[variant]}
        aria-label="Order on Zomato"
      >
        <SiZomato className={iconSize[variant]} style={{ color: zomato }} />
      </a>
      <a
        href={restaurant.swiggyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={wrap[variant]}
        aria-label="Order on Swiggy"
      >
        <SiSwiggy className={iconSize[variant]} style={{ color: swiggy }} />
      </a>
    </div>
  );
}
