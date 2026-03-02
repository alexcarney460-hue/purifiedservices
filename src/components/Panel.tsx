import Link from "next/link";

export default function Panel({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const base =
    "rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5";

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} block transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-900/10 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return <div className={`${base} ${className}`}>{children}</div>;
}
