import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
