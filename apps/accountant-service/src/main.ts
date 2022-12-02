import { NestFactory } from '@nestjs/core';
import { AccountantServiceModule } from './accountant-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AccountantServiceModule);
  await app.listen(3000);
}
bootstrap();
