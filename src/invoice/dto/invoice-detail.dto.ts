import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class InvoiceDetailDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsNumber()
  readonly quantity: number;
}
