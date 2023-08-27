import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateToyDto {
  @IsNotEmpty()
  type: string;
  // type: ToyType;
  // type: ToyTypeModel;
  // type: ToyTypeEntity;

  @MinLength(3)
  brand: string;

  @MinLength(3)
  @MaxLength(50)
  name: string;

  color: string;

  count: number;
}

export class UpdateToyDto {
  @IsOptional()
  type: string;

  @IsOptional()
  @MinLength(3)
  brand: string;

  @IsOptional()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsOptional()
  color: string;

  @IsOptional()
  count: number;
}
