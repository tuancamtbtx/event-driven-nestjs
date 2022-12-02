import { Controller, Get } from '@nestjs/common';
import { CourseServiceService } from './course-service.service';

@Controller()
export class CourseServiceController {
  constructor(private readonly courseServiceService: CourseServiceService) {}

  @Get()
  getHello(): string {
    return this.courseServiceService.getHello();
  }
}
