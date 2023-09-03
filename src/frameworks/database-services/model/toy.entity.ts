import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ToyTypeModel } from './toy-type.entity';
import { Owner } from './owner.entity';

@Entity()
export class Toy {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'toyId',
  })
  id: number;

  @ManyToOne(() => ToyTypeModel)
  @JoinColumn({ referencedColumnName: 'name' })
  type: ToyTypeModel;

  @Column()
  brand: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  color: string;

  @ManyToOne(() => Owner) //Optinal: (Owner) => Owner.Toys
  owner: Owner;

  // @Column({
  //   nullable: true,
  // })
  // count: number;

  @Column()
  status: boolean;
}
