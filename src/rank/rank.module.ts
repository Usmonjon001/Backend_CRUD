import { Module } from '@nestjs/common';
import { RankService } from './rank.service';
import { RankController } from './rank.controller';

@Module({
  controllers: [RankController],
  providers: [RankService]
})
export class RankModule {}
