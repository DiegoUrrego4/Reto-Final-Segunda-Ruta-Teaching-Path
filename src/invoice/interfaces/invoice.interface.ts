// import { InvoiceDetail } from './invoice-detail.interface';
import { InvoiceDetailDto } from '../dto/invoice-detail.dto';

export interface Invoice {
  id: string;
  customerId?: string;
  generateAt: number;
  nit: string;
  updatedAt?: number;
  products: InvoiceDetailDto[];
}
