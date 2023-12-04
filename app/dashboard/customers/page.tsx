// here we add metadata for this page specificaly
import { Metadata } from 'next';
// also helpfull for method 2 to overrite metadata title
export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
};

export default function Page() {
  return <p>Customers Page</p>;
}
