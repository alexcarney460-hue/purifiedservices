import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalOverlays from "@/components/GlobalOverlays";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fresno Pool Care | Commercial & Residential Pool Service",
    template: "%s | Fresno Pool Care",
  },
  description:
    "Commercial and residential pool service across Fresno, Clovis, and the Central Valley. Documented visits, responsive repairs, same-day urgent response (Mon–Sat).",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Fresno Pool Care | Commercial & Residential Pool Service",
    description:
      "Commercial and residential pool service across Fresno, Clovis, and the Central Valley. Documented visits, responsive repairs, same-day urgent response (Mon–Sat).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresno Pool Care | Commercial & Residential Pool Service",
    description:
      "Commercial and residential pool service across Fresno, Clovis, and the Central Valley.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://fresnopoolcare.com/#business",
  name: "Purified Services — Fresno Pool Care",
  url: "https://fresnopoolcare.com",
  telephone: "+15595190335",
  description:
    "Commercial and residential pool service across Fresno, Clovis, and the Central Valley. Documented visits, responsive repairs, same-day urgent response.",
  areaServed: [
    { "@type": "City", name: "Fresno", "@id": "https://www.wikidata.org/wiki/Q48983" },
    { "@type": "City", name: "Clovis" },
    { "@type": "City", name: "Madera" },
    { "@type": "City", name: "Sanger" },
    { "@type": "City", name: "Selma" },
    { "@type": "City", name: "Reedley" },
    { "@type": "City", name: "Kerman" },
    { "@type": "City", name: "Kingsburg" },
    { "@type": "City", name: "Visalia" },
    { "@type": "City", name: "Hanford" },
    { "@type": "City", name: "Tulare" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fresno",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.7378,
    longitude: -119.7871,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  image: "https://fresnopoolcare.com/opengraph-image",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pool Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Pool Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Pool Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pool Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wastewater Services" } },
    ],
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Veteran-owned", value: "Yes" },
    { "@type": "PropertyValue", name: "State Certified Water Treatment", value: "Yes" },
    { "@type": "PropertyValue", name: "Wastewater Insured", value: "Yes" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen pb-24 lg:pb-0">{children}</div>
        <GlobalOverlays />
      </body>
    </html>
  );
}
