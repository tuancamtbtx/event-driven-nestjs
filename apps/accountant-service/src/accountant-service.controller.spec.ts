import { Test, TestingModule } from '@nestjs/testing';
import { AccountantServiceController } from './accountant-service.controller';
import { AccountantServiceService } from './accountant-service.service';

describe('AccountantServiceController', () => {
  let accountantServiceController: AccountantServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AccountantServiceController],
      providers: [AccountantServiceService],
    }).compile();

    accountantServiceController = app.get<AccountantServiceController>(AccountantServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(accountantServiceController.getHello()).toBe('Hello World!');
    });
  });
});
