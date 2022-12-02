import { Controller, Get } from '@nestjs/common';
import { AccountantServiceService } from './accountant-service.service';

@Controller()
export class AccountantServiceController {
  constructor(private readonly accountantServiceService: AccountantServiceService) {}

  @Get()
  getHello(): string {
    return this.accountantServiceService.getHello();
  }
}
