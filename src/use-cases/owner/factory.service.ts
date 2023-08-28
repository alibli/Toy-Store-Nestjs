import { Injectable } from '@nestjs/common';
import { CreateOwnerDto, UpdateOwnerDto } from 'src/core/DTOs/owner.dto';
import { Owner } from 'src/core/entities/owner.entity';

@Injectable() //? Question
export class OwnerFactoryService {
  createUpdateOwner(ownerDto: CreateOwnerDto | UpdateOwnerDto) {
    return new Owner(ownerDto);
  }
}
