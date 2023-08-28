import { InjectRepository } from '@nestjs/typeorm';
import { Owner as OwnerModel } from '../model/owner.entity';
import { Repository } from 'typeorm';
import { Owner as OwnerEntity } from 'src/core/entities/owner.entity';

export class OwnerRepository {
  constructor(
    @InjectRepository(OwnerModel)
    private readonly repository: Repository<OwnerModel>,
  ) {}

  async create(data: OwnerEntity) {
    return await this.repository.save(data);
  }

  async update(data: OwnerEntity, id: number) {
    const response = await this.repository.update(id, data);
    if (response.affected) {
      const updatedOwner = this.repository.findOneBy({ id });
      return updatedOwner;
    }
    return 'owner not found!';
  }

  async get(id: number) {
    const response = await this.repository.findOneBy({ id });
    if (response) {
      return response;
    }
    return 'owner not found';
  }

  async delete(id: number) {
    const response = await this.repository.delete(id);
    if (response.affected) {
      return 'Deleted successfully';
    }
    return 'owner not found';
  }
}
