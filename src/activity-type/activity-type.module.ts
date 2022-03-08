import { Module } from '@nestjs/common';
import { ActivityTypeService } from './activity-type.service';
import { ActivityTypeController } from './activity-type.controller';

@Module({
  controllers: [ActivityTypeController],
  providers: [ActivityTypeService]
})
export class ActivityTypeModule {}
