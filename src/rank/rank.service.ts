import { Injectable } from '@nestjs/common';
import { CreateRankDto } from './dto/create-rank.dto';
import { UpdateRankDto } from './dto/update-rank.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RankService {
  constructor(private prismaService: PrismaService){}
  create(createRankDto: CreateRankDto) {
    return this.prismaService.rank.create({
      data: createRankDto
    })
  }

  findAll() {
    return this.prismaService.rank.findMany();
  }

  findOne(id: number) {
    return this.prismaService.rank.findUnique({
      where: {id}
    });
  }

  update(id: number, updateRankDto: UpdateRankDto) {
    return this.prismaService.rank.update({ where: {id}, data: updateRankDto});
  }

  remove(id: number) {
    return this.prismaService.rank.delete({where: {id}});
  }
}
