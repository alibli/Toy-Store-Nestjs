import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOwnerDto, UpdateOwnerDto } from 'src/core/DTOs/owner.dto';
import { Toy } from 'src/core/entities/toy.entity';
import { OwnerRepository } from 'src/frameworks/database-services/repository/owner.repository';
import { ToyRepository } from 'src/frameworks/database-services/repository/toy-repository';
import { OwnerFactoryService } from 'src/use-cases/owner/factory.service';

@Controller('owner')
export class OwnerController {
  constructor(
    private ownerFS: OwnerFactoryService,
    private ownerRepo: OwnerRepository,
    private toyRepo: ToyRepository,
  ) {}

  @Post()
  async createOwner(@Body() createOwnerDto: CreateOwnerDto) {
    console.log(createOwnerDto);
    const toys: Toy[] = [];
    for (const toyId of createOwnerDto.toys) {
      console.log(toyId);
      const res = await this.toyRepo.getById(toyId);
      if (res != null) {
        toys.push(res);
      }
    }

    // createOwnerDto.toys.map(async (x: number) => {
    //   const res = await this.toyRepo.getById(x);
    //   if (res !== null) {
    //     toys.push(res);
    //   }
    // });

    console.log(toys);
    console.log(typeof toys);

    createOwnerDto.toys = toys;
    console.log(createOwnerDto);
    const ownerEntity = this.ownerFS.createUpdateOwner(createOwnerDto);
    console.log('-------------------------');

    console.log(ownerEntity);

    try {
      const res = await this.ownerRepo.create(ownerEntity);
      console.log('---------------------------------------');

      console.log(res); //bug
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  @Put(':id')
  updateOwner(@Body() updateOwnerDto: UpdateOwnerDto, @Param() param: any) {
    const ownerEntity = this.ownerFS.createUpdateOwner(updateOwnerDto);
    return this.ownerRepo.update(ownerEntity, param.id);
  }

  @Get(':id')
  async getOwner(@Param() param: any) {
    return await this.ownerRepo.get(param.id);
  }
}
