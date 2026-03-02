import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-sm font-extrabold tracking-wide text-slate-950">
            Purified Services
          </div>
          <p className="text-sm text-slate-600">
            Premium water systems service for the Central Valley: pools, water
            treatment, wastewater, and repair.
          </p>
          <p className="text-xs text-slate-500">
            Same-day response for urgent issues (Mon–Sat). Response time depends on
            workload and access.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-slate-900">Quick links</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="text-slate-600 hover:text-slate-950" href="/commercial">
                Commercial
              </Link>
            </li>
            <li>
              <Link className="text-slate-600 hover:text-slate-950" href="/residential">
                Residential
              </Link>
            </li>
            <li>
              <Link className="text-slate-600 hover:text-slate-950" href="/repair">
                Repair
              </Link>
            </li>
            <li>
              <Link className="text-slate-600 hover:text-slate-950" href="/service-areas">
                Service Areas
              </Link>
            </li>
            <li>
              <Link className="text-slate-600 hover:text-slate-950" href="/dashboard">
                Portal
              </Link>
            </li>
            <li>
              <Link className="text-slate-600 hover:text-slate-950" href="/contact">
                Request Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-slate-900">Coverage</div>
          <p className="text-sm text-slate-600">Fresno • Clovis • Central Valley</p>
          <p className="text-sm text-slate-600">Text: 559-519-0335</p>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Purified Services</div>
          <div>Veteran-owned • State certified in water treatment • Wastewater insured</div>
        </div>
      </div>
    </footer>
  );
}
