import SideNav from '@/app/ui/dashboard/sidenav';

// here we add metadata for this page specificaly
import { Metadata } from 'next';
// also helpfull for method 2 to overrite metadata title
export const metadata: Metadata = {
  title: 'Dashboard | Acme Dashboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
