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
    console.log(this.configService.get<string>('DATABASE_NAME'));
    return this.appService.getHello();
  }

  @Get('test-db')
  testDb() {
    return this.prismaService.user.findMany();
  }
}