import { Module } from '@nestjs/common';
import { TeacherServiceController } from './teacher-service.controller';
import { TeacherServiceService } from './teacher-service.service';

@Module({
  imports: [],
  controllers: [TeacherServiceController],
  providers: [TeacherServiceService],
})
export class TeacherServiceModule {}
