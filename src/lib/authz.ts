export function isAdminEmail(email?: string | null) {
  if (!email) return false;
  const admin = process.env.ADMIN_EMAIL;
  if (!admin) return false;
  return email.toLowerCase() === admin.toLowerCase();
}
