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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fresnopoolcare.com"),
  title: {
    default: "Purified Services | Fresno Pool Care",
    template: "%s | Purified Services",
  },
  description:
    "Commercial and residential pool service across Fresno, Clovis, and the Central Valley. Documented visits, responsive repairs, same-day urgent response (Mon–Sat).",
  openGraph: {
    type: "website",
    url: "https://www.fresnopoolcare.com",
    title: "Commercial & Residential Pool Service | Purified Services",
    description:
      "Commercial and residential pool service across Fresno, Clovis, and the Central Valley. Documented visits, responsive repairs, same-day urgent response (Mon–Sat).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial & Residential Pool Service | Purified Services",
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
        {children}
        <GlobalOverlays />
      </body>
    </html>
  );
}
