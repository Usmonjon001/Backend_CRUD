import { Injectable } from '@nestjs/common';
import { CreateCalculationServiceDto } from './dto/create-calculation-service.dto';
import { UpdateCalculationServiceDto } from './dto/update-calculation-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CalculationServiceService {
  constructor(private prismaService: PrismaService){}
  create(createCalculationServiceDto: CreateCalculationServiceDto) {
    return this.prismaService.calculationService.create({
      data: createCalculationServiceDto
    });
  }

  findAll() {
    return this.prismaService.calculationService.findMany();
  }

  findOne(id: number) {
    return this.prismaService.calculationService.findUnique({
      where: {id}
    });
  }

  update(id: number, updateCalculationServiceDto: UpdateCalculationServiceDto) {
    return this.prismaService.calculationService.update({ where: {id}, data: updateCalculationServiceDto});
  }

  remove(id: number) {
    return this.prismaService.calculationService.delete({where: {id}});
  }
}
