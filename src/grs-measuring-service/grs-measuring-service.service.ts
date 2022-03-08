import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGrsMeasuringServiceDto } from './dto/create-grs-measuring-service.dto';
import { UpdateGrsMeasuringServiceDto } from './dto/update-grs-measuring-service.dto';

@Injectable()
export class GrsMeasuringServiceService {
  constructor(private prismaService: PrismaService) { }
  create(createGrsMeasuringServiceDto: CreateGrsMeasuringServiceDto) {
    return this.prismaService.gRS_Measuring_Devices.create({
      data: createGrsMeasuringServiceDto
    })
  }

  findAll() {
    return this, this.prismaService.gRS_Measuring_Devices.findMany();
  }

  findOne(id: number) {
    return this.prismaService.gRS_Measuring_Devices.findUnique({ where: { id } })
  }

  update(id: number, updateGrsMeasuringServiceDto: UpdateGrsMeasuringServiceDto) {
    return this.prismaService.gRS_Measuring_Devices.update({ where: { id }, data: updateGrsMeasuringServiceDto })
  }

  remove(id: number) {
    return this.prismaService.gRS_Measuring_Devices.delete({ where: { id } });
  }
}
