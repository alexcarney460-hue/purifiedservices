import Link from "next/link";

const phoneDigits = "15595190335";
const phoneDisplay = "559-519-0335";

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/90 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl gap-2 px-3 py-3">
        <Link
          href="/contact"
          className="flex-1 rounded-xl bg-[var(--ps-navy)] px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Request Service
        </Link>
        <Link
          href={`sms:+${phoneDigits}`}
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900"
        >
          Text {phoneDisplay}
        </Link>
      </div>
    </div>
  );
}
