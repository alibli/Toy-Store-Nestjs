import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ToyTypeModel } from './toy-type.entity';

@Entity()
export class Toy {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'toy_id',
  })
  id: number;

  @Column()
  type: string;
  // @ManyToOne(() => ToyTypeModel)
  // @JoinColumn({ referencedColumnName: 'name' })
  // type: ToyTypeModel;

  @Column()
  brand: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  color: string;

  @Column({
    nullable: true,
  })
  count: number;

  @Column()
  status: boolean;
}
