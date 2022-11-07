import { Product } from './../interfaces/product.interface';
export class InvoiceDetailDto implements Product {
  id?: string;
  invoiceId?: string;
  nombre?: string;
  marca?: string;
  valor?: number;
}
