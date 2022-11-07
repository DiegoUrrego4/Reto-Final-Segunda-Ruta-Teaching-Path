import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';
import { Invoice } from '../interfaces';

export class CreateInvoiceDto implements Invoice {
  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  customerId: string;

  @IsString()
  nit: string;

  @IsString()
  @IsOptional()
  fecha?: string;

  @IsNumber()
  total: number;

  @IsNumber()
  formaPago: number;

  @IsNumber()
  productos: number;
}
