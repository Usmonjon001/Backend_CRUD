import { Module } from '@nestjs/common';
import { CompressionCoefficientsService } from './compression-coefficients.service';
import { CompressionCoefficientsController } from './compression-coefficients.controller';

@Module({
  controllers: [CompressionCoefficientsController],
  providers: [CompressionCoefficientsService]
})
export class CompressionCoefficientsModule {}
