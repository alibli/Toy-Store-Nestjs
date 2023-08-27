import { ToyType } from 'src/toys/toy.type';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Toy {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'toy_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  type: ToyType;

  @Column()
  brand: string;

  @Column({ nullable: false })
  name: string;

  @Column()
  color: string;

  @Column()
  status: boolean;
}
