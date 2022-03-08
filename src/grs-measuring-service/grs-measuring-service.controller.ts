import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrsMeasuringServiceService } from './grs-measuring-service.service';
import { CreateGrsMeasuringServiceDto } from './dto/create-grs-measuring-service.dto';
import { UpdateGrsMeasuringServiceDto } from './dto/update-grs-measuring-service.dto';

@Controller('grs-measuring-service')
export class GrsMeasuringServiceController {
  constructor(private readonly grsMeasuringServiceService: GrsMeasuringServiceService) {}

  @Post()
  create(@Body() createGrsMeasuringServiceDto: CreateGrsMeasuringServiceDto) {
    return this.grsMeasuringServiceService.create(createGrsMeasuringServiceDto);
  }

  @Get()
  findAll() {
    return this.grsMeasuringServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grsMeasuringServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrsMeasuringServiceDto: UpdateGrsMeasuringServiceDto) {
    return this.grsMeasuringServiceService.update(+id, updateGrsMeasuringServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grsMeasuringServiceService.remove(+id);
  }
}
