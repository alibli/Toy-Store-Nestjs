import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { ToyType } from './toy.type';

export class CreateToyDto {
  @IsNotEmpty()
  // type: string;
  type: ToyType; //TODO

  @MinLength(3)
  brand: string;

  @MinLength(3)
  @MaxLength(50)
  name: string;

  color: string;
}

export class UpdateToyDto {
  @IsOptional()
  type: ToyType;

  @IsOptional()
  @MinLength(3)
  brand: string;

  @IsOptional()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsOptional()
  color: string;
}
