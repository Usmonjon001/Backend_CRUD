import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MinistriesModule } from './ministries/ministries.module';
import { SectionsModule } from './sections/sections.module';
import { GasEquipmentsModule } from './gas-equipments/gas-equipments.module';
import { DirectionsModule } from './directions/directions.module';
import { CalculationServiceModule } from './calculation-service/calculation-service.module';
import { RankModule } from './rank/rank.module';
import { ServicesModule } from './services/services.module';
import { CompressionCoefficientsModule } from './compression-coefficients/compression-coefficients.module';
import { ActivityTypeModule } from './activity-type/activity-type.module';
import { GrsMeasuringServiceModule } from './grs-measuring-service/grs-measuring-service.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';

@Module({
  imports: [PrismaModule, MinistriesModule, SectionsModule, GasEquipmentsModule, DirectionsModule, CalculationServiceModule, RankModule, ServicesModule, CompressionCoefficientsModule, ActivityTypeModule, GrsMeasuringServiceModule, RegionModule, DistrictModule, ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
