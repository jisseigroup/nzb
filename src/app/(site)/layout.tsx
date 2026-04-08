import { ScrollRestoration } from "@/components/ScrollRestoration";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
