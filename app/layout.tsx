import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FavoritesProvider } from "@/lib/favorites";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Pride Rock Inc. | Buy, Rent & Sell Property in Ghana",
    template: "%s | Pride Rock Inc.",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Pride Rock Inc. | Buy, Rent & Sell Property in Ghana",
    description: siteConfig.description,
    type: "website",
    locale: "en_GH",
    siteName: siteConfig.name,
    images: [{ url: images.hero, width: 1200, height: 630, alt: "Family home presented by Pride Rock Inc." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pride Rock Inc. | Buy, Rent & Sell Property in Ghana",
    description: siteConfig.description,
  },
};

export const viewport = {
  themeColor: "#2C1D14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dansoman",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    areaServed: "Ghana",
    url: siteConfig.url,
  };

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <FavoritesProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </FavoritesProvider>
      </body>
    </html>
  );
}
