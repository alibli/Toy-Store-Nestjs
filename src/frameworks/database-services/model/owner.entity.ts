import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Toy } from './toy.entity';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn({
    name: 'ownerId',
  })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  no: number;

  @OneToMany(() => Toy, (Toy) => Toy.owner)
  toys: Toy[];
}
