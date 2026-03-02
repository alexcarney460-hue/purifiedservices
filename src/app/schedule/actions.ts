"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const allowedDays = new Set(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

export async function submitScheduleRequest(formData: FormData) {
  const preferredDay = String(formData.get("preferred_day") || "");
  const notes = String(formData.get("notes") || "");

  if (!allowedDays.has(preferredDay)) {
    redirect(`/schedule?error=${encodeURIComponent("Preferred day must be Mon–Sat.")}`);
  }

  const supabase = await createSupabaseServerClient();
  const { data: userRes, error: userErr } = await supabase.auth.getUser();
  if (userErr || !userRes.user) {
    redirect("/login");
  }

  const user = userRes.user;

  // Ensure the user has a default property.
  const { data: existingProps, error: propErr } = await supabase
    .from("properties")
    .select("id")
    .eq("owner_user_id", user.id)
    .limit(1);

  if (propErr) {
    redirect(`/schedule?error=${encodeURIComponent(propErr.message)}`);
  }

  let propertyId = existingProps?.[0]?.id as string | undefined;

  if (!propertyId) {
    const { data: newProp, error: newPropErr } = await supabase
      .from("properties")
      .insert({
        owner_user_id: user.id,
        name: "Primary Property",
        type: "residential",
      })
      .select("id")
      .single();

    if (newPropErr) {
      redirect(`/schedule?error=${encodeURIComponent(newPropErr.message)}`);
    }
    propertyId = newProp.id;
  }

  const { error: reqErr } = await supabase.from("schedule_requests").insert({
    property_id: propertyId,
    requester_user_id: user.id,
    preferred_day: preferredDay,
    notes,
    status: "pending",
  });

  if (reqErr) {
    redirect(`/schedule?error=${encodeURIComponent(reqErr.message)}`);
  }

  redirect("/dashboard");
}
