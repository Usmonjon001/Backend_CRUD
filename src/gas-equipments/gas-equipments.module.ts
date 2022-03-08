import { Module } from '@nestjs/common';
import { GasEquipmentsService } from './gas-equipments.service';
import { GasEquipmentsController } from './gas-equipments.controller';

@Module({
  controllers: [GasEquipmentsController],
  providers: [GasEquipmentsService]
})
export class GasEquipmentsModule {}
