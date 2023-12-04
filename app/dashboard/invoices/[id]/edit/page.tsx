import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { customers } from '@/app/lib/placeholder-data';
import { getCustomInvoices } from '@/app/lib/utils';
import { notFound } from 'next/navigation';

// here we add metadata for this page specificaly
import { Metadata } from 'next';
// also helpfull for method 2 to overrite metadata title
export const metadata: Metadata = {
  title: 'Edit Invoices | Acme Dashboard',
};

export default async function Page({ params }: { params: { id: string } }) {
  /* const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]); */
  const id = params?.id;
  const invoice: any = await new Promise((res) => {
    // fetchInvoiceById(id),
    //     fetchCustomers(),
    let response = getCustomInvoices().find((item) => item?.id == id);
    if (response?.id !== undefined) res(response);
    // else throw new Error('Failed to fetch invoice.');// to show error
    else notFound(); // to show notfound page
  });
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
