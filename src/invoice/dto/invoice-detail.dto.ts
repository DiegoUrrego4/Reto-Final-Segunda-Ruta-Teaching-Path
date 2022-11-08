import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { v4 as uuid } from 'uuid';
import { InvoiceDetail } from '../interfaces';

export class InvoiceDetailDto implements InvoiceDetail {
  @IsUUID()
  @IsOptional()
  id?: string = uuid();

  @IsString()
  @MinLength(1)
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsNumber()
  quantity: number;
}
