import { Product } from './product.interface';

export interface Invoice {
  id?: string;
  customerId: string;
  nit: string;
  fecha: Date;
  total: number;
  formaPago: string;
  productos: Product[];
}
