import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GasEquipmentsService } from './gas-equipments.service';
import { CreateGasEquipmentDto } from './dto/create-gas-equipment.dto';
import { UpdateGasEquipmentDto } from './dto/update-gas-equipment.dto';

@Controller('gas-equipments')
export class GasEquipmentsController {
  constructor(private readonly gasEquipmentsService: GasEquipmentsService) {}

  @Post()
  create(@Body() createGasEquipmentDto: CreateGasEquipmentDto) {
    return this.gasEquipmentsService.create(createGasEquipmentDto);
  }

  @Get()
  findAll() {
    return this.gasEquipmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gasEquipmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGasEquipmentDto: UpdateGasEquipmentDto) {
    return this.gasEquipmentsService.update(+id, updateGasEquipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gasEquipmentsService.remove(+id);
  }
}
