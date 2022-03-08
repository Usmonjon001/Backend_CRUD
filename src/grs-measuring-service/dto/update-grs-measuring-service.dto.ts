import { PartialType } from '@nestjs/mapped-types';
import { CreateGrsMeasuringServiceDto } from './create-grs-measuring-service.dto';

export class UpdateGrsMeasuringServiceDto extends PartialType(CreateGrsMeasuringServiceDto) {}
