import { Module } from '@nestjs/common';
import { GatewayServiceController } from './gateway-service.controller';
import { GatewayServiceService } from './gateway-service.service';

@Module({
  imports: [],
  controllers: [GatewayServiceController],
  providers: [GatewayServiceService],
})
export class GatewayServiceModule {}
