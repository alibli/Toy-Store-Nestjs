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
    return await this.repository.save(toy);
  }

  async getById(id: number) {
    return await this.repository.findOneBy({ id });
  }

  async updateById(id: number, data: ToyEntity) {
    const response = await this.repository.update(id, data);
    if (response.affected) {
      const myToy = await this.repository.findOneBy({ id });
      return myToy;
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
