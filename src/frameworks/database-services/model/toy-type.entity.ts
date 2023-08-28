import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToyTypeModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
