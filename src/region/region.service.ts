import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@Injectable()
export class RegionService {
  constructor(private prismaService: PrismaService){}
  create(createRegionDto: CreateRegionDto) {
   return this.prismaService.region.create({
     data: createRegionDto
   })
  }

  findAll() {
    return this.prismaService.region.findMany({
      include: { own_districts: true }
    });
  }

  findOne(id: number) {
    return this.prismaService.region.findUnique({where: {id}});
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.prismaService.region.update({where: {id}, data: updateRegionDto});
  }

  remove(id: number) {
    return this.prismaService.region.delete({where: {id}});
  }
}
