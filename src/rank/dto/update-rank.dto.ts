import { PartialType } from '@nestjs/mapped-types';
import { CreateRankDto } from './create-rank.dto';

export class UpdateRankDto extends PartialType(CreateRankDto) {}
