'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'CRM', href: '/admin/crm' },
  { label: 'Requests', href: '/admin/requests' },
  { label: 'Marketing', href: '/admin/marketing' },
  { label: 'Settings', href: '/admin/settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Admin top nav */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center h-14 gap-6 overflow-x-auto">
          <Link
            href="/admin"
            className="font-black text-lg whitespace-nowrap shrink-0 text-sky-400"
          >
            Fresno Pool Care
          </Link>

          <div className="flex items-center gap-1 ml-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-sky-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {children}
    </div>
  );
}
