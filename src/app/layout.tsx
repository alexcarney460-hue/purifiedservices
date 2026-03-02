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
  title: {
    default: "Purified Services | Water Systems Service (Central Valley)",
    template: "%s | Purified Services",
  },
  description:
    "Premium water systems service for the Central Valley: pools, water treatment, wastewater, and repair. Fresno • Clovis • Central Valley.",
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
