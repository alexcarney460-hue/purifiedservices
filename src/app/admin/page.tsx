import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/authz";

export const metadata = { title: "Admin - Fresno Pool Care" };

export default async function AdminPage() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email;

  if (!data.user) redirect("/login");
  if (!isAdminEmail(email)) redirect("/dashboard");

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-sm text-slate-400 mt-1">Manage your pool care business</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href="/admin/crm"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-sky-500/30 hover:bg-slate-900/80 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-sky-500/10 rounded-xl text-sky-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">CRM</h2>
          </div>
          <p className="text-sm text-slate-400">Contacts, companies, deals, and pipeline management.</p>
        </Link>

        <Link
          href="/admin/requests"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-sky-500/30 hover:bg-slate-900/80 transition-colors group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Requests</h2>
          </div>
          <p className="text-sm text-slate-400">Approve scheduling and service requests.</p>
        </Link>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-white">Analytics</h2>
          </div>
          <p className="text-sm text-slate-500">Coming soon: visit logs, performance metrics.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-400">
        Signed in as <span className="font-semibold text-white">{email}</span>
      </div>
    </div>
  );
}
