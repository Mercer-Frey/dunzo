import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-db')
  async testDb() {
    try {
      const users = await this.prismaService.user.findMany();
      console.log(users);
      return { ok: true, count: users.length };
    } catch (e) {
      console.error('❌ TEST-DB ERROR:', e);
      return { ok: false, error: String(e) };
    }
  }
}
