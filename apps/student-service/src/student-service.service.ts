import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
