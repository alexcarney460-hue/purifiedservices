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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen pb-24 lg:pb-0">{children}</div>
        <GlobalOverlays />
      </body>
    </html>
  );
}
