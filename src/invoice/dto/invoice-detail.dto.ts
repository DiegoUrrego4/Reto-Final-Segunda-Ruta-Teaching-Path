import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class InvoiceDetailDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsNumber()
  readonly quantity: number;
}
