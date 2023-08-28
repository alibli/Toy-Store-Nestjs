import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Toy } from './toy.entity';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn({
    name: 'owner_id',
  })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  no: number;

  @OneToMany(() => Toy, (Toy) => Toy.owner)
  @JoinColumn()
  toys: Toy[];
}
