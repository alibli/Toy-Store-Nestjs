import { CreateToyDto, UpdateToyDto } from '../DTOs/toy.dto';
import { ToyTypeEntity } from './toy-type.entity';

export class Toy {
  type: ToyTypeEntity;
  brand: string;
  name: string;
  color: string;
  // count: number;
  status: boolean;
  constructor(props: CreateToyDto | UpdateToyDto) {
    this.type = props.type;
    this.brand = props.brand;
    this.name = props.name;
    this.color = props.color;
    // this.count = props.count;
    this.status = true;
  }
}
