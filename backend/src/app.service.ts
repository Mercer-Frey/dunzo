import { Injectable, OnModuleInit } from '@nestjs/common';
import { CacheService } from '@app/cache/cache.service';

@Injectable()
export class AppService implements OnModuleInit {

  constructor(
    private readonly cache: CacheService,
  ) {}

  getHello() {
    return { message: 'Hello World!' };
  }
  async onModuleInit() {
    await this.cache.set('cache:test', { ok: true }, 30);

    const value = await this.cache.get<{ ok: boolean }>('cache:test');
    console.log('CACHE CHECK:', value);
  }
}
