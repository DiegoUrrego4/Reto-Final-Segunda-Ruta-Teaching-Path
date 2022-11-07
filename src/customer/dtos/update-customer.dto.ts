import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { CustomerToUpdate } from './../interfaces';

export class UpdateCustomerDto implements CustomerToUpdate {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  nombres?: string;

  @IsString()
  @IsOptional()
  apellidos?: string;

  @IsString()
  @IsOptional()
  dni?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsEmail()
  @IsOptional()
  correo?: string;
}
