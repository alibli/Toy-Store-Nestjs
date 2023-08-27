import { Module } from '@nestjs/common';
import { PostgresDatabaseServicesModule } from 'src/frameworks/database-services/database-services.module';

@Module({
  imports: [PostgresDatabaseServicesModule],
  exports: [PostgresDatabaseServicesModule],
})
export class DataServicesModule {}
