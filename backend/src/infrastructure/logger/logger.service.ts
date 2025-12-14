import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export class Context {
  module: string;
  method: string;
}

@Injectable()
export class LoggerService extends Logger {
  private readonly host: string = '';

  constructor(
    private readonly configService: ConfigService,
  ) {
    super();
    this.host = this.configService.get<string>(`${process.env.NODE_ENV}.APP_HOST`)!;
  }

  logger(message: any, context?: Context) {
    const now = new Date();
    const standard = {
      server: this.host,
      type: 'INFO',
      timestamp: now.toISOString(),
      epochMs: now.getTime(),
    };
    const data = { ...standard, ...context, message };
    super.log(data);
  }

  err(message: any, context: Context) {
    const now = new Date();
    const standard = {
      server: this.host,
      type: 'ERROR',
      timestamp: now.toISOString(),
      epochMs: now.getTime(),
    };
    const data = { ...standard, ...context, message };
    super.error(data);
  }

  warning(message: any, context: Context) {
    const now = new Date();
    const standard = {
      server: this.host,
      type: 'WARNING',
      timestamp: now.toISOString(),
      epochMs: now.getTime(),
    };
    const data = { ...standard, ...context, message };
    super.warn(data);
  }
} 