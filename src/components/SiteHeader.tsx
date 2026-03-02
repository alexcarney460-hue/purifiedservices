import Link from "next/link";

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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--ps-mist)] text-[var(--ps-teal)]">
            <span className="text-sm font-extrabold">PS</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-wide text-slate-950">
              Purified Services
            </div>
            <div className="text-xs text-slate-600">Water systems • Central Valley</div>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/commercial">Commercial</NavLink>
          <NavLink href="/residential">Residential</NavLink>
          <NavLink href="/repair">Repair</NavLink>
          <NavLink href="/service-areas">Service Areas</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/contact" variant="primary">
            Request Service
          </ButtonLink>
          <ButtonLink href={`sms:+${phoneDigits}`} variant="secondary">
            Text {phoneDisplay}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
