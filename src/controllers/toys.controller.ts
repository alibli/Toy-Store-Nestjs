import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateToyDto, UpdateToyDto } from '../core/DTOs/toy.dto';
// import { ToysService } from './toys.service';
import { ToyFactoryService } from 'src/use-cases/toy/toy-factory.service';
import { ToyRepository } from 'src/frameworks/database-services/repository/toy-repository';
import { OwnerRepository } from 'src/frameworks/database-services/repository/owner.repository';

@Controller('toys')
export class ToysController {
  constructor(
    private toyFactoryService: ToyFactoryService,
    private toyRepo: ToyRepository,
    private ownerRepo: OwnerRepository,
  ) {}
  @Post()
  async createToy(@Body() createToyDto: CreateToyDto) {
    // const owner = await this.ownerRepo.get(createToyDto.ownerId);
    // createToyDto.ownerId = owner;
    // console.log(createToyDto);
    const toyEntity = this.toyFactoryService.createNewToy(createToyDto);
    return await this.toyRepo.create(toyEntity);
  }
  @Get(':id')
  async getToy(@Param() params: any) {
    return this.toyRepo.getById(params.id);
  }

  @Put(':id')
  async updateToy(@Param() params: any, @Body() updateToyDto: UpdateToyDto) {
    const toyEntity = this.toyFactoryService.updateToy(updateToyDto);
    return this.toyRepo.updateById(params.id, toyEntity);
  }

  @Delete(':id')
  async deleteToy(@Param() param: any) {
    return this.toyRepo.deleteById(param.id);
  }
}
