import { Module } from '@nestjs/common';
import { PrismaModule } from '@infrastructure/prisma/prisma.module';
import { RedisModule } from '@infrastructure/redis/redis.module';
import { CacheModule } from '@infrastructure/cache/cache.module';
import { LoggerModule } from '@infrastructure/logger/logger.module';
import { HealthModule } from '@infrastructure/health/health.module';

@Module({
  imports: [
    PrismaModule,
    RedisModule,
    CacheModule,
    LoggerModule,
    HealthModule
  ],
})
export class InfrastructureModule {}
