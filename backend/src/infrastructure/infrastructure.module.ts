import { Module } from '@nestjs/common';
import { PrismaModule } from '@infrastructure/prisma/prisma.module';
import { RedisModule } from '@infrastructure/redis/redis.module';

@Module({
  imports: [
    PrismaModule,
    RedisModule,
  ],
})
export class InfrastructureModule {}
