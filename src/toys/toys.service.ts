// import { Injectable } from '@nestjs/common';
// import { CreateToyDto } from './toy.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Toy } from 'src/typeorm';
// import { Repository } from 'typeorm';

// @Injectable()
// export class ToysService {
//   // private readonly toys: Toy[] = [];
//   constructor(
//     @InjectRepository(Toy) private readonly toyRepo: Repository<Toy>,
//   ) {}
//   createToy(toyDto: CreateToyDto) {
//     const newToy = this.toyRepo.create(toyDto);

//     // this.toys.push(newToy);
//     // return newToy;
//     return this.toyRepo.save(newToy);
//   }
//   getToy(id: number) {
//     console.log({ id });
//   }
// }
