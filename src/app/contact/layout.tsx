import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Request Pool Service in Fresno & Clovis",
  description:
    "Request commercial or residential pool service in Fresno, Clovis, and the Central Valley. Same-day urgent response Mon–Sat. Text 559-519-0335 or submit a request online.",
  openGraph: {
    title: "Contact Us | Request Pool Service in Fresno & Clovis",
    description:
      "Request commercial or residential pool service in Fresno, Clovis, and the Central Valley. Same-day urgent response Mon–Sat.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
