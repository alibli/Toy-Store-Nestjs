import { InjectRepository } from '@nestjs/typeorm';
import { ToyTypeModel } from '../model';
import { Repository } from 'typeorm';
import { ToyTypeEntity } from 'src/core/entities/toy-type.entity';

export class ToyTypeRepository {
  constructor(
    @InjectRepository(ToyTypeModel)
    private readonly repository: Repository<ToyTypeModel>,
  ) {}

  async create(newType: ToyTypeEntity) {
    return await this.repository.save(newType);
  }
}
