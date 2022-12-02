import { Test, TestingModule } from '@nestjs/testing';
import { CourseServiceController } from './course-service.controller';
import { CourseServiceService } from './course-service.service';

describe('CourseServiceController', () => {
  let courseServiceController: CourseServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CourseServiceController],
      providers: [CourseServiceService],
    }).compile();

    courseServiceController = app.get<CourseServiceController>(CourseServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(courseServiceController.getHello()).toBe('Hello World!');
    });
  });
});
