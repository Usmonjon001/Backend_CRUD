import { PartialType } from '@nestjs/mapped-types';
import { CreateGasEquipmentDto } from './create-gas-equipment.dto';

export class UpdateGasEquipmentDto extends PartialType(CreateGasEquipmentDto) {}
