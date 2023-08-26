import { InjectRepository } from '@nestjs/typeorm';
import { Toy as ToyEntity } from 'src/toys/toy.entity';
import { Toy as ToyModel } from 'src/typeorm/toy.entity';
import { Repository } from 'typeorm';

export class ToyRepository {
  constructor(
    @InjectRepository(ToyModel)
    private readonly repository: Repository<ToyModel>,
  ) {}

  async create(toy: ToyEntity) {
    const newToy = new ToyModel();
    newToy.brand = toy.brand;
    newToy.color = toy.color;
    newToy.name = toy.name;
    newToy.type = toy.type;
    newToy.status = toy.status;

    return await this.repository.save(newToy);
  }

  async getById(id: number) {
    return await this.repository.findOneBy({ id });
  }

  async updateById(id: number, data: ToyEntity) {
    const response = await this.repository.update(id, data);
    if (response.affected) {
      const myToy = await this.repository.findOneBy({ id });
      if (myToy) {
        if (data.brand) myToy.brand = data.brand;
        if (data.color) myToy.color = data.color;
        if (data.name) myToy.name = data.name;
        if (data.type) myToy.type = data.type;
        return myToy;
      }
    }
    return 'item not found';
  }

  async deleteById(id: number) {
    const response = await this.repository.delete(id);
    if (response.affected) {
      return 'item deleted successfully';
    }
    return 'item not found';
  }
}
