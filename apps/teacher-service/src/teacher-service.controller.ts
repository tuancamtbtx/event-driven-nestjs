import { Controller, Get } from '@nestjs/common';
import { TeacherServiceService } from './teacher-service.service';

@Controller()
export class TeacherServiceController {
  constructor(private readonly teacherServiceService: TeacherServiceService) {}

  @Get()
  getHello(): string {
    return this.teacherServiceService.getHello();
  }
}
