import { redirect } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Container, H1, Lead, Section } from "@/components/ui";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/authz";

export const metadata = { title: "Admin Requests" };

export default async function AdminRequestsPage() {
  const supabase = createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const email = data.user?.email;

  if (!data.user) redirect("/login");
  if (!isAdminEmail(email)) redirect("/dashboard");

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <Section className="bg-[linear-gradient(180deg,var(--ps-mist),white)]">
        <Container>
          <div className="max-w-3xl">
            <H1>Requests</H1>
            <div className="mt-5">
              <Lead>
                Scheduling approvals queue (pending → approved/denied) + service requests.
              </Lead>
            </div>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-[var(--ps-teal)]">Scheduling v1</div>
              <p className="mt-2 text-sm text-slate-600">
                Backend storage is next. For now, customers can submit a preferred day request.
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Next: persist requests in Supabase + approve/deny + assign day/window.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <SiteFooter />
    </div>
  );
}
