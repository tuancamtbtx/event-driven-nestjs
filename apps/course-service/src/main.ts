import { NestFactory } from '@nestjs/core';
import { CourseServiceModule } from './course-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CourseServiceModule);
  await app.listen(3000);
}
bootstrap();
