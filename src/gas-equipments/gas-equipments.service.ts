import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGasEquipmentDto } from './dto/create-gas-equipment.dto';
import { UpdateGasEquipmentDto } from './dto/update-gas-equipment.dto';

@Injectable()
export class GasEquipmentsService {
  constructor(private prismaService: PrismaService){}
  create(createGasEquipmentDto: CreateGasEquipmentDto) {
    return this.prismaService.gazEquipments.create({
      data: createGasEquipmentDto
    });
  }

  findAll() {
    return this.prismaService.gazEquipments.findMany();
  }

  findOne(id: number) {
    return this.prismaService.gazEquipments.findUnique({
      where: {id}
    });
  }

  update(id: number, updateGasEquipmentDto: UpdateGasEquipmentDto) {
    return this.prismaService.gazEquipments.update({ where: {id}, data: updateGasEquipmentDto} );
  }

  remove(id: number) {
    return this.prismaService.gazEquipments.delete({where: {id}});
  }
}
