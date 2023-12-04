import '@/app/ui/global.css';
import Link from 'next/link';
import Head from './head';
import { inter } from './ui/fonts';
import { InvoicesContextProvider } from './context/InvoicesContext';
import { Metadata } from 'next';

// ============
// this is our root layout file...
// ============

// method 1
// export const metadata: Metadata = {
//   title: 'Acme Dashboard',
//   description: 'The official Next.js Course Dashboard, built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

// method 2
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <InvoicesContextProvider>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </InvoicesContextProvider>
    </html>
  );
}
