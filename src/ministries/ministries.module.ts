import { Module } from '@nestjs/common';
import { MinistriesService } from './ministries.service';
import { MinistriesController } from './ministries.controller';

@Module({
  controllers: [MinistriesController],
  providers: [MinistriesService]
})
export class MinistriesModule {}
