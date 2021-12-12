/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Participantes } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Injectable()
export class ParticipantesService {
  constructor(private prisma: PrismaService) {}

  async createPrisma(
    createParticipanteDto: CreateParticipanteDto,
  ): Promise<Participantes> {
    return await this.prisma.participantes.create({
      data: { ...createParticipanteDto },
    });
  }

  async findAllPrisma(): Promise<Participantes[]> {
    return await this.prisma.participantes.findMany();
  }

  async findOnePrisma(id: number): Promise<Participantes> {
    return await this.prisma.participantes.findUnique({ where: { id } });
  }

  async updatePrisma(
    id: number,
    updateParticipanteDto: UpdateParticipanteDto,
  ): Promise<Participantes> {
    return await this.prisma.update({
      id,
      updateParticipanteDtodata: { ...updateParticipanteDto },
      where: { id },
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.delete({ where: { id } });
  }
} 