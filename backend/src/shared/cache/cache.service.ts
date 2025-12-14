import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { REDIS_CLIENT } from '@root/shared/tokens/redis.token';

@Injectable()
export class CacheService {
  constructor(
    @Inject(REDIS_CLIENT)
    private readonly redis: Redis,
  ) {}

  async get<T>(key: string): Promise<T | null> {
    const raw = await this.redis.get(key);
    if (!raw) return null;

    return JSON.parse(raw) as T;
  }

  async set<T>(
    key: string,
    value: T,
    ttlSeconds = 60,
  ): Promise<void> {
    await this.redis.set(
      key,
      JSON.stringify(value),
      'EX',
      ttlSeconds,
    );
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }
}
