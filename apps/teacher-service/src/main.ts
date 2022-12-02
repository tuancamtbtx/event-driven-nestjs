import { NestFactory } from '@nestjs/core';
import { TeacherServiceModule } from './teacher-service.module';

async function bootstrap() {
  const app = await NestFactory.create(TeacherServiceModule);
  await app.listen(3000);
}
bootstrap();
