import { PartialType } from '@nestjs/mapped-types';
import { CreateCompressionCoefficientDto } from './create-compression-coefficient.dto';

export class UpdateCompressionCoefficientDto extends PartialType(CreateCompressionCoefficientDto) {}
