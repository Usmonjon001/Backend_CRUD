import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompressionCoefficientsService } from './compression-coefficients.service';
import { CreateCompressionCoefficientDto } from './dto/create-compression-coefficient.dto';
import { UpdateCompressionCoefficientDto } from './dto/update-compression-coefficient.dto';

@Controller('compression-coefficients')
export class CompressionCoefficientsController {
  constructor(private readonly compressionCoefficientsService: CompressionCoefficientsService) {}

  @Post()
  create(@Body() createCompressionCoefficientDto: CreateCompressionCoefficientDto) {
    return this.compressionCoefficientsService.create(createCompressionCoefficientDto);
  }

  @Get()
  findAll() {
    return this.compressionCoefficientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compressionCoefficientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompressionCoefficientDto: UpdateCompressionCoefficientDto) {
    return this.compressionCoefficientsService.update(+id, updateCompressionCoefficientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compressionCoefficientsService.remove(+id);
  }
}
