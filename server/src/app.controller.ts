import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/health-check')
  getHello(): string {
    return 'say hello';
  }
}
