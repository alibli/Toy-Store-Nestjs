import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CreateOwnerDto, UpdateOwnerDto } from 'src/core/DTOs/owner.dto';
import { OwnerRepository } from 'src/frameworks/database-services/repository/owner.repository';
import { OwnerFactoryService } from 'src/use-cases/owner/factory.service';

@Controller('owner')
export class OwnerController {
  constructor(
    private ownerFS: OwnerFactoryService,
    private ownerRepo: OwnerRepository,
  ) {}

  @Post()
  createOwner(@Body() createOwnerDto: CreateOwnerDto) {
    const ownerEntity = this.ownerFS.createUpdateOwner(createOwnerDto);
    return this.ownerRepo.create(ownerEntity);
  }

  @Put(':id')
  updateOwner(@Body() updateOwnerDto: UpdateOwnerDto, @Param() param: any) {
    const ownerEntity = this.ownerFS.createUpdateOwner(updateOwnerDto);
    return this.ownerRepo.update(ownerEntity, param.id);
  }
}
