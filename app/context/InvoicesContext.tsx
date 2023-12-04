'use client';
import { createContext, useState } from 'react';
import { getCustomInvoices } from '../lib/utils';

export const InvoicesContext = createContext(null);

export const InvoicesContextProvider = ({ children }: any) => {
  const [invoices, setInvoices] = useState(getCustomInvoices());

  return (
    <InvoicesContext.Provider value={{ invoices, setInvoices }}>
      {children}
    </InvoicesContext.Provider>
  );
};
