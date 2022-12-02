import { Controller, Get } from '@nestjs/common';
import { GatewayServiceService } from './gateway-service.service';

@Controller()
export class GatewayServiceController {
  constructor(private readonly gatewayServiceService: GatewayServiceService) {}

  @Get()
  getHello(): string {
    return this.gatewayServiceService.getHello();
  }
}
