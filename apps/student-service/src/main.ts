import { NestFactory } from '@nestjs/core';
import { StudentServiceModule } from './student-service.module';

async function bootstrap() {
  const app = await NestFactory.create(StudentServiceModule);
  await app.listen(3000);
}
bootstrap();
