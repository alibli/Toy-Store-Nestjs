import { CreateToyDto, UpdateToyDto } from '../DTOs/toy.dto';

export class Toy {
  // type: ToyType;
  type: string;
  // type: ToyTypeModel;
  // type: ToyTypeEntity;
  brand: string;
  name: string;
  color: string;
  count: number;
  status: boolean;
  constructor(props: CreateToyDto | UpdateToyDto) {
    this.type = props.type;
    this.brand = props.brand;
    this.name = props.name;
    this.color = props.color;
    this.count = props.count;
    this.status = true;
  }
}
