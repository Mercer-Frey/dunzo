import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import configDev from '@config/config.dev';
import configProd from '@config/config.prod';

import { ApiModule } from '@api/api.module';
import { SharedModule } from '@root/shared/shared.module';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      cache: true,
      load: [configDev, configProd]
    }),
    ApiModule,
    SharedModule,
    InfrastructureModule,
  ],
})
export class AppModule {}
