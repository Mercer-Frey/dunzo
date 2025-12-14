import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@prisma/prisma.service';
import { AppService } from '@app/app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('test-db')
  testDb() {
    return this.prismaService.user.findMany();
  }

  @Get('test-env')
  getEnv() {
    return { env: this.configService.get<string>(`${process.env.NODE_ENV}.DATABASE_NAME`) };
  }
}