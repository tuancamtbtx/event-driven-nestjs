import { Test, TestingModule } from '@nestjs/testing';
import { GatewayServiceController } from './gateway-service.controller';
import { GatewayServiceService } from './gateway-service.service';

describe('GatewayServiceController', () => {
  let gatewayServiceController: GatewayServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GatewayServiceController],
      providers: [GatewayServiceService],
    }).compile();

    gatewayServiceController = app.get<GatewayServiceController>(GatewayServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gatewayServiceController.getHello()).toBe('Hello World!');
    });
  });
});
