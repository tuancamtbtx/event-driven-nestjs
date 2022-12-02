import { Controller, Get } from '@nestjs/common';
import { StudentServiceService } from './student-service.service';

@Controller()
export class StudentServiceController {
  constructor(private readonly studentServiceService: StudentServiceService) {}

  @Get()
  getHello(): string {
    return this.studentServiceService.getHello();
  }
}
