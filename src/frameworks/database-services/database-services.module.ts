import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities, { Owner, Toy, ToyTypeModel } from './model';
import { ToyRepository } from './repository/toy-repository';
import { ToyFactoryService } from 'src/use-cases/toy/toy-factory.service';
import { ConfigModule } from '@nestjs/config';
import { ToyTypeRepository } from './repository/toy-type-repository';
import { OwnerFactoryService } from 'src/use-cases/owner/factory.service';
import { OwnerRepository } from './repository/owner.repository';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //to load and parse .env file  // important - without this line we couldn't connect to server
    TypeOrmModule.forFeature([Toy, ToyTypeModel, Owner]), //? Question
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      //   port: 5342,
      port: Number(process.env.DB_PORT), //? Question
      database: process.env.DB_NAME,

      entities: entities,
      synchronize: true,
    }),
  ],
  providers: [
    ToyRepository,
    ToyFactoryService,
    ToyTypeRepository,
    OwnerFactoryService,
    OwnerRepository,
  ],
  exports: [
    ToyRepository,
    ToyFactoryService,
    ToyTypeRepository,
    OwnerFactoryService,
    OwnerRepository,
  ],
})
export class PostgresDatabaseServicesModule {}
