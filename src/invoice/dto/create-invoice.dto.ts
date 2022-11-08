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
  readonly customerId?: string = uuid();

  @IsString()
  @IsNotEmpty()
  readonly nit: string;

  @IsArray()
  @IsNotEmpty()
  readonly products: InvoiceDetailDto[];
}
