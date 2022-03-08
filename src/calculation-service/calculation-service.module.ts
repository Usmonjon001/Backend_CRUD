import { Module } from '@nestjs/common';
import { CalculationServiceService } from './calculation-service.service';
import { CalculationServiceController } from './calculation-service.controller';

@Module({
  controllers: [CalculationServiceController],
  providers: [CalculationServiceService,]
})
export class CalculationServiceModule {}
