import { Module } from '@nestjs/common';
import { StudentServiceController } from './student-service.controller';
import { StudentServiceService } from './student-service.service';

@Module({
  imports: [],
  controllers: [StudentServiceController],
  providers: [StudentServiceService],
})
export class StudentServiceModule {}
