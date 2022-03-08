import { PartialType } from '@nestjs/mapped-types';
import { CreateDirectionDto } from './create-direction.dto';

export class UpdateDirectionDto extends PartialType(CreateDirectionDto) {}
