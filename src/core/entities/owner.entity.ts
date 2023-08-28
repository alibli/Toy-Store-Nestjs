import { CreateOwnerDto, UpdateOwnerDto } from '../DTOs/owner.dto';
import { Toy } from './toy.entity';

export class Owner {
  name: string;
  no: number;
  toys: Toy[];

  constructor(props: CreateOwnerDto | UpdateOwnerDto) {
    this.name = props.name;
    this.no = props.no;
    this.toys = props.toys;
  }
}
