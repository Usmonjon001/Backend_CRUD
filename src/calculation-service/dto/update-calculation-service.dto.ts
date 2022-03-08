import { PartialType } from '@nestjs/mapped-types';
import { CreateCalculationServiceDto } from './create-calculation-service.dto';

export class UpdateCalculationServiceDto extends PartialType(CreateCalculationServiceDto) {}
