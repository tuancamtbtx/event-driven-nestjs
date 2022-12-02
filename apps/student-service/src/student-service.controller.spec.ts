import { Test, TestingModule } from '@nestjs/testing';
import { StudentServiceController } from './student-service.controller';
import { StudentServiceService } from './student-service.service';

describe('StudentServiceController', () => {
  let studentServiceController: StudentServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StudentServiceController],
      providers: [StudentServiceService],
    }).compile();

    studentServiceController = app.get<StudentServiceController>(StudentServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(studentServiceController.getHello()).toBe('Hello World!');
    });
  });
});
