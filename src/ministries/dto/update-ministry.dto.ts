import { PartialType } from '@nestjs/mapped-types';
import { CreateMinistryDto } from './create-ministry.dto';

export class UpdateMinistryDto extends PartialType(CreateMinistryDto) {}