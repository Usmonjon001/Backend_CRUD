import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDirectionDto } from './dto/create-direction.dto';
import { UpdateDirectionDto } from './dto/update-direction.dto';

@Injectable()
export class DirectionsService {
  constructor(private prismaService: PrismaService){}
  create(createDirectionDto: CreateDirectionDto) {
    return this.prismaService.directions.create({
      data: createDirectionDto
    })
  }

  findAll() {
    return this.prismaService.directions.findMany();
  }

  findOne(id: number) {
    return this.prismaService.directions.findUnique({
      where: {id: id}
    });
  }

  update(id: number, updateDirectionDto: UpdateDirectionDto) {
    return this.prismaService.directions.update({ where: {id}, data: updateDirectionDto});
  }

  remove(id: number) {
    return this.prismaService.directions.delete({where: {id}});
  }
}
