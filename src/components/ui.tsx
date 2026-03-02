import Link from "next/link";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">{children}</div>;
}

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`py-12 sm:py-16 md:py-20 ${className}`}>{children}</section>;
}

export function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-6xl">
      {children}
    </h1>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-balance text-2xl font-bold tracking-[-0.02em] text-slate-950 md:text-3xl">
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return <p className="text-pretty text-base text-slate-600 sm:text-lg md:text-xl">{children}</p>;
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 active:translate-y-px";
  const styles =
    variant === "primary"
      ? "bg-[var(--ps-navy)] text-white shadow-sm shadow-slate-900/10 hover:-translate-y-0.5 hover:bg-slate-950 hover:shadow-md hover:shadow-slate-900/10 focus:ring-[var(--ps-aqua)]"
      : "border border-slate-200 bg-white text-slate-900 shadow-sm shadow-slate-900/5 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus:ring-[var(--ps-aqua)]";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export function Card({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/10"
    >
      <div className="text-base font-bold tracking-tight text-slate-950">{title}</div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <div className="mt-5 text-sm font-semibold text-[var(--ps-teal)]">
        Learn more →
      </div>
    </Link>
  );
}
