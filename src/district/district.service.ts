import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictService {
  constructor(private prismaService: PrismaService){}
  create(createDistrictDto: CreateDistrictDto) {
    return this.prismaService.districts.create({
      data: createDistrictDto
    });
  }

  findAll() {
    return this.prismaService.districts.findMany();
  }

  findOne(id: number) {
    return this.prismaService.districts.findUnique({where: {id: id}});
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.prismaService.districts.update({ where: {id: id}, data: updateDistrictDto});
  }

  remove(id: number) {
    return this.prismaService.districts.delete({where: {id: id}});
  }
}
