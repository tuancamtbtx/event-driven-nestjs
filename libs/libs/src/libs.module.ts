import { Module } from '@nestjs/common';
import { LibsService } from './libs.service';

@Module({
  providers: [LibsService],
  exports: [LibsService],
})
export class LibsModule {}
