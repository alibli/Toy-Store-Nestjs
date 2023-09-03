import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { ToyTypeEntity } from '../entities/toy-type.entity';

export class CreateToyDto {
  @IsNotEmpty()
  type: ToyTypeEntity;

  @MinLength(3)
  brand: string;

  @MinLength(3)
  @MaxLength(50)
  name: string;

  color: string;

  // count: number;
  ownerId: any;
}

export class UpdateToyDto {
  @IsOptional()
  type: ToyTypeEntity;

  @IsOptional()
  @MinLength(3)
  brand: string;

  @IsOptional()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsOptional()
  color: string;

  // @IsOptional()
  // count: number;
}
