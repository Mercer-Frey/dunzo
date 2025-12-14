import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@prisma/prisma.module';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { RedisModule } from './redis/redis.module';
import { CacheModule } from './cache/cache.module';
import configDev from '@config/config.dev';
import configProd from '@config/config.prod';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      cache: true,
      load: [configDev, configProd]
    }),
    PrismaModule,
    RedisModule,
    CacheModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
