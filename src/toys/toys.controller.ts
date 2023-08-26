import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateToyDto, UpdateToyDto } from './toy.dto';
// import { ToysService } from './toys.service';
import { ToyFactoryService } from 'src/FactoryService/toy-factory.service';
import { ToyRepository } from 'src/DB/toy-repository';

@Controller('toys')
export class ToysController {
  constructor(
    private toyFactoryService: ToyFactoryService,
    private toyRepo: ToyRepository,
  ) {}
  @Post()
  async createToy(@Body() createToyDto: CreateToyDto) {
    const toyEntity = this.toyFactoryService.createNewToy(createToyDto);
    return this.toyRepo.create(toyEntity);
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
