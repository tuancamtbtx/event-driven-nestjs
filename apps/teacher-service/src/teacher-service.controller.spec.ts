import { Test, TestingModule } from '@nestjs/testing';
import { TeacherServiceController } from './teacher-service.controller';
import { TeacherServiceService } from './teacher-service.service';

describe('TeacherServiceController', () => {
  let teacherServiceController: TeacherServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TeacherServiceController],
      providers: [TeacherServiceService],
    }).compile();

    teacherServiceController = app.get<TeacherServiceController>(TeacherServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(teacherServiceController.getHello()).toBe('Hello World!');
    });
  });
});
