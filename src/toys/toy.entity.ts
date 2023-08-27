import { CreateToyDto, UpdateToyDto } from './toy.dto';
import { ToyType } from './toy.type';

export class Toy {
  type: ToyType;
  brand: string;
  name: string;
  color: string;
  status: boolean;
  constructor(props: CreateToyDto | UpdateToyDto) {
    this.type = props.type;
    this.brand = props.brand;
    this.name = props.name;
    this.color = props.color;
    this.status = true;
  }
}
