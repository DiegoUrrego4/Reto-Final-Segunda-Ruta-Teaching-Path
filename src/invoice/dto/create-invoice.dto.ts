import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
  ValidateNested,
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

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  readonly storeName: string;

  // @IsArray()
  // @IsNotEmpty()
  // @ValidateNested()
  // @Type(() => InvoiceDetailDto)
  // readonly products: InvoiceDetailDto[];
}
