import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountantServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
