import { Global, Module } from '@nestjs/common';
import { HealthController } from '@infrastructure/health/health.controller';

@Global()
@Module({
  controllers: [HealthController],
})
export class HealthModule {}