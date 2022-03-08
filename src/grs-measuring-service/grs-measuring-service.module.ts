import { Module } from '@nestjs/common';
import { GrsMeasuringServiceService } from './grs-measuring-service.service';
import { GrsMeasuringServiceController } from './grs-measuring-service.controller';

@Module({
  controllers: [GrsMeasuringServiceController],
  providers: [GrsMeasuringServiceService]
})
export class GrsMeasuringServiceModule {}
