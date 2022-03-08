import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Injectable()
export class SectionsService {
  constructor(private prismaService: PrismaService){}
  create(createSectionDto: CreateSectionDto) {
    return this.prismaService.sections.create({
      data: createSectionDto
    });
  }

  findAll() {
    return this.prismaService.sections.findMany();
  }

  findOne(id: number) {
    return this.prismaService.sections.findUnique({where: {id: id}});
  }

  update(id: number, updateSectionDto: UpdateSectionDto) {
    return this.prismaService.sections.update({
      where: {id},
      data: updateSectionDto
    });
  }

  remove(id: number) {
    return this.prismaService.sections.delete({where: {id}});
  }
}