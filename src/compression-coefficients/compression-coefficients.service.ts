import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompressionCoefficientDto } from './dto/create-compression-coefficient.dto';
import { UpdateCompressionCoefficientDto } from './dto/update-compression-coefficient.dto';


@Injectable()
export class CompressionCoefficientsService {
  constructor(private prismaService: PrismaService){}
  create(createCompressionCoefficientDto: CreateCompressionCoefficientDto) {
    return this.prismaService.compression_Coefficients.create({
      data: createCompressionCoefficientDto
    });
  }

  findAll() {
    return this.prismaService.compression_Coefficients.findMany();
  }

  findOne(id: number) {
    return this.prismaService.compression_Coefficients.findUnique({where: {id}});
  }

  update(id: number, updateCompressionCoefficientDto: UpdateCompressionCoefficientDto) {
    return this.prismaService.compression_Coefficients.update({ where: {id}, data: updateCompressionCoefficientDto})
  }

  remove(id: number) {
    return this.prismaService.compression_Coefficients.delete({where: {id}});
  }
}
