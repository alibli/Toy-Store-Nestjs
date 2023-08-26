import { Injectable } from '@nestjs/common';
import { ToyRepository } from 'src/DB/toy-repository';
import { CreateToyDto, UpdateToyDto } from 'src/toys/toy.dto';
import { Toy } from 'src/toys/toy.entity';

@Injectable()
export class ToyFactoryService {
  constructor(private toyRepository: ToyRepository) {}

  createNewToy(toyDto: CreateToyDto) {
    const newToy = new Toy(toyDto);
    return newToy;
  }

  updateToy(toyDto: UpdateToyDto) {
    const newToy = new Toy(toyDto);
    return newToy;
  }
}
