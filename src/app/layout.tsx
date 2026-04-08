import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bigg Burger New Zealand | Crossing Republik, Ghaziabad",
    template: "%s | Bigg Burger New Zealand",
  },
  description:
    "Premium burgers at Paramount Spectrum, Crossing Republik. Delivery & takeaway from 12 noon. Order on Zomato, Swiggy, or call +91 88033 39339.",
  icons: {
    icon: [{ url: "/brand/logo.png", type: "image/png" }],
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: "Bigg Burger New Zealand",
    description:
      "Burgers, combos & sides at Crossing Republik. Delivery, takeaway & vegetarian options.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  );
}
