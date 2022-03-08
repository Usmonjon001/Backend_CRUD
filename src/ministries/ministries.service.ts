import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMinistryDto } from './dto/create-ministry.dto';
import { UpdateMinistryDto } from './dto/update-ministry.dto';

@Injectable()
export class MinistriesService {
  constructor(private prismaService: PrismaService){}
  create(createMinistryDto: CreateMinistryDto) {
    return this.prismaService.ministries.create({
      data: createMinistryDto
    })
  }

  findAll() {
    return this.prismaService.ministries.findMany();
  }

  findOne(id: number) {
    return this.prismaService.ministries.findUnique({
      where: {id}
    });
  }

  update(id: number, updateMinistryDto: UpdateMinistryDto) {
    return this.prismaService.ministries.update({
      where: {id},
      data: updateMinistryDto
    })
  }

  remove(id: number) {
    return this.prismaService.ministries.delete({
      where: {id}
    });
  }
}
