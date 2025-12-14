import { Module } from '@nestjs/common';
import { CacheModule } from '@shared/cache/cache.module';

@Module({
  imports: [CacheModule],
})
export class SharedModule {}