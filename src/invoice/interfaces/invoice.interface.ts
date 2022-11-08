import { Product } from './product.interface';

export interface Invoice {
  id: string;
  customerId?: string;
  generateAt: number;
  nit: string;
  updatedAt?: number;
  products: Product[];
}
