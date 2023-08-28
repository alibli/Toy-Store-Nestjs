import { Injectable } from '@nestjs/common';
// import { ToyRepository } from 'src/frameworks/database-services/repository/toy-repository';
import { CreateToyDto, UpdateToyDto } from 'src/core/DTOs/toy.dto';
import { Toy } from 'src/core/entities/toy.entity';

@Injectable()
export class ToyFactoryService {
  // constructor(private toyRepository: ToyRepository) {}

  createNewToy(toyDto: CreateToyDto) {
    const newToy = new Toy(toyDto);
    return newToy;
  }

  updateToy(toyDto: UpdateToyDto) {
    const newToy = new Toy(toyDto);
    return newToy;
  }
}
