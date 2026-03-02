import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-slate-700 hover:text-slate-950"
    >
      {children}
    </Link>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[var(--ps-navy)] text-white hover:bg-slate-950 focus:ring-[var(--ps-aqua)]"
      : "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus:ring-[var(--ps-aqua)]";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative h-8 w-[150px] sm:h-9 sm:w-[180px] md:h-10 md:w-[210px] flex-none -mt-1">
            <Image
              src="/brand/logo-cropped.png"
              alt="Purified Services"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          <NavLink href="/commercial">Commercial</NavLink>
          <NavLink href="/residential">Residential</NavLink>
          <NavLink href="/repair">Repair</NavLink>
          <NavLink href="/service-areas">Service Areas</NavLink>
          <NavLink href="/dashboard">Portal</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <MobileMenu />
          <div className="hidden sm:block">
            <ButtonLink href="/contact" variant="primary">
              Request Service
            </ButtonLink>
          </div>
          <div className="hidden sm:block">
            <ButtonLink href={`sms:+${phoneDigits}`} variant="secondary">
              Text {phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
