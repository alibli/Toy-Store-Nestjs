import { Module } from '@nestjs/common';
// import { ToysService } from '../toys/toys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Toy } from 'src/typeorm/toy.entity';
import { ToyFactoryService } from 'src/FactoryService/toy-factory.service';
import { ToyRepository } from './toy-repository';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import entities from '../typeorm';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }), //to load and parse .env file
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get('DB_HOST'),
    //     port: configService.get<number>('DB_PORT'),
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     database: configService.get('DB_NAME'),
    //     entities: entities,
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    // ,
    TypeOrmModule.forFeature([Toy]),
  ],
  providers: [ToyRepository, ToyFactoryService],
  exports: [ToyRepository, ToyFactoryService],
})
export class ToysModule {}
