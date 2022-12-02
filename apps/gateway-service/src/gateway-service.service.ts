import { Injectable } from '@nestjs/common';

@Injectable()
export class GatewayServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
