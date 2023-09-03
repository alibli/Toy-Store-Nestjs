// name: string;
// no: number;
// toys: Toy;

import { IsInt } from 'class-validator';
import { Length } from 'class-validator';
import { IsOptional } from 'class-validator';

export class CreateOwnerDto {
  @Length(3, 30)
  name: string;

  @IsInt()
  no: number;

  toys: any;
}

export class UpdateOwnerDto {
  @Length(3, 30)
  @IsOptional()
  name: string;

  @IsInt()
  @IsOptional()
  no: number;

  @IsOptional()
  toys: any;
}
