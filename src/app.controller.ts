import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hello world';
  }

  @Post()
  create(@Body() body: any): string {
    return this.appService.create(body);
  }
}
