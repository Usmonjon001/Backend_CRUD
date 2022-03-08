import { Module } from '@nestjs/common';
import { DirectionsService } from './directions.service';
import { DirectionsController } from './directions.controller';

@Module({
  controllers: [DirectionsController],
  providers: [DirectionsService]
})
export class DirectionsModule {}
