import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateActivityTypeDto } from './dto/create-activity-type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity-type.dto';

@Injectable()
export class ActivityTypeService {
  constructor(private prismaService: PrismaService){}
  create(createActivityTypeDto: CreateActivityTypeDto) {
    return this.prismaService.activity_Type.create({
      data: createActivityTypeDto
    });
  }

  findAll() {
    return this.prismaService.activity_Type.findMany();
  }

  findOne(id: number) {
    return this.prismaService.activity_Type.findUnique({where: {id}});
  }

  update(id: number, updateActivityTypeDto: UpdateActivityTypeDto) {
    return this.prismaService.activity_Type.update({ where: {id}, data: updateActivityTypeDto})
  }

  remove(id: number) {
    return this.prismaService.activity_Type.delete({where: {id}});
  }
}
