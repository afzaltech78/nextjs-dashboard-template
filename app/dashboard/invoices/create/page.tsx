import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { customers } from '@/app/lib/placeholder-data';
// import { fetchCustomers } from '@/app/lib/data';

// here we add metadata for this page specificaly
import { Metadata } from 'next';
// also helpfull for method 2 to overrite metadata title
export const metadata: Metadata = {
  title: 'Create Invoice | Acme Dashboard',
};

export default async function Page() {
  //   const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
