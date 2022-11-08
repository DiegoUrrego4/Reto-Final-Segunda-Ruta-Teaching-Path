import { InvoiceDetail } from './invoice-detail.interface';

export interface Invoice {
  id: string;
  customerId?: string;
  generateAt: number;
  nit: string;
  updatedAt?: number;
  products: InvoiceDetail[];
}
