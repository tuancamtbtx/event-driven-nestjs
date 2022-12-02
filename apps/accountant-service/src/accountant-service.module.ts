import { Module } from '@nestjs/common';
import { AccountantServiceController } from './accountant-service.controller';
import { AccountantServiceService } from './accountant-service.service';

@Module({
  imports: [],
  controllers: [AccountantServiceController],
  providers: [AccountantServiceService],
})
export class AccountantServiceModule {}
