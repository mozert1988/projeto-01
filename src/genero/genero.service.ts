/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from './entities/genero.entity';

@Injectable()
export class GeneroService {
  create: any;
  findAll: any;
  findOne: any;
  update: any;
  remove: any;
  constructor(private prisma: PrismaService) {}

  async createPrisma(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    return await this.prisma.genero.create({
      data: { ...createGeneroDto },
    });
  }

  async findAllPrisma(): Promise<Genero[]> {
    return await this.prisma.genero.findMany();
  }

  async findOnePrisma(id: number): Promise<Genero> {
    return await this.prisma.genero.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    updateGeneroDto: UpdateGeneroDto,
  ): Promise<Genero> {
    return await this.prisma.update({
      id,
      updateGeneroDtodata: { ...updateGeneroDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.delete({ where: { id } });
  }
}