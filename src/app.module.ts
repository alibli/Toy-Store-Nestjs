import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ToysService } from './toys/toys.service';
import { ToysController } from './toys/toys.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToysModule } from './DB/toys.module';
import entities from './typeorm';

@Module({
  imports: [
    ToysModule,
    ConfigModule.forRoot({ isGlobal: true }), //to load and parse .env file
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],

  controllers: [AppController, ToysController],
  providers: [AppService],
})
export class AppModule {}
