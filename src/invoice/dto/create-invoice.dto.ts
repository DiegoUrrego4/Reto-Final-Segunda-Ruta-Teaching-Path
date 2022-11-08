import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { v4 as uuid } from 'uuid';
import { InvoiceDetailDto } from './invoice-detail.dto';

export class CreateInvoiceDto {
  @IsUUID()
  @IsOptional()
  customerId?: string = uuid();

  @IsString()
  @IsNotEmpty()
  nit: string;

  @IsArray()
  @IsNotEmpty()
  products: InvoiceDetailDto[];
}
