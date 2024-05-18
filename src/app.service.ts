import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  create(body?: any): string {
    return JSON.stringify(body);
  }
}
