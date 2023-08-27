import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities, { Toy, ToyTypeModel } from './model';
import { ToyRepository } from './repository/toy-repository';
import { ToyFactoryService } from 'src/use-cases/toy/toy-factory.service';
import { ConfigModule } from '@nestjs/config';
import { ToyTypeRepository } from './repository/toy-type-repository';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //to load and parse .env file  // important - without this line we couldn't connect to server
    TypeOrmModule.forFeature([Toy, ToyTypeModel]),
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
  providers: [ToyRepository, ToyFactoryService, ToyTypeRepository],
  exports: [ToyRepository, ToyFactoryService, ToyTypeRepository],
})
export class PostgresDatabaseServicesModule {}
