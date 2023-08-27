import { Body, Controller, Post } from '@nestjs/common';
import { ToyTypeEntity } from 'src/core/entities/toy-type.entity';
import { ToyTypeRepository } from 'src/frameworks/database-services/repository/toy-type-repository';

@Controller('toy-types')
export class ToyTypeController {
  constructor(private typeRepo: ToyTypeRepository) {}

  @Post()
  async createToyType(@Body() body: ToyTypeEntity) {
    return this.typeRepo.create(body);
  }
}
