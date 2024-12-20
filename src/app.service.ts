import { Injectable } from '@nestjs/common';

// const hallo = 0

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
