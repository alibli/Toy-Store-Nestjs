import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToysController } from './controllers/toys.controller';
import { DataServicesModule } from './services/datebase-services/services.module';
import { ToyTypeController } from './controllers/toyType.controller';
import { OwnerController } from './controllers/owner.controller';

@Module({
  imports: [
    DataServicesModule,
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
  ],

  controllers: [
    AppController,
    ToysController,
    ToyTypeController,
    OwnerController,
  ],
  providers: [AppService],
})
export class AppModule {}
