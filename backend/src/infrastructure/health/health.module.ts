import { Global, Module } from '@nestjs/common';
import { HealthController } from '@infrastructure/health/health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { TerminusOptionsService } from '@infrastructure/health/terminus-options.check';

@Global()
@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [TerminusOptionsService],
})
export class HealthModule {}