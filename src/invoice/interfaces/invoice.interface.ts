export interface Invoice {
  id?: string;
  customerId: string;
  nit: string;
  fecha?: string;
  total: number;
  formaPago: number;
  productos: number;
}
