import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateIngredienteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsString()
  @IsOptional()
  unidad?: string;

  // ✅ CAMPO AÑADIDO
  @IsNumber()
  @IsOptional() // El peso puede ser opcional
  peso?: number;

  // ✅ CAMPO AÑADIDO
  @IsString()
  @IsOptional() // La unidad de peso también puede ser opcional
  unidadPeso?: string;
}