import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalculationServiceService } from './calculation-service.service';
import { CreateCalculationServiceDto } from './dto/create-calculation-service.dto';
import { UpdateCalculationServiceDto } from './dto/update-calculation-service.dto';

@Controller('calculation-service')
export class CalculationServiceController {
  constructor(private readonly calculationServiceService: CalculationServiceService) {}

  @Post()
  create(@Body() createCalculationServiceDto: CreateCalculationServiceDto) {
    return this.calculationServiceService.create(createCalculationServiceDto);
  }

  @Get()
  findAll() {
    return this.calculationServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calculationServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalculationServiceDto: UpdateCalculationServiceDto) {
    return this.calculationServiceService.update(+id, updateCalculationServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calculationServiceService.remove(+id);
  }
}
