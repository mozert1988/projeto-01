/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { CreateParticipanteDto } from './dto/create-participante.dto';
import { UpdateParticipanteDto } from './dto/update-participante.dto';

@Controller('participantes')
export class ParticipantesController {
  constructor(private readonly participantesService: ParticipantesService) {}

  @Post()
  async createPrisma(@Body() createParticipanteDto: CreateParticipanteDto) {
    return await this.participantesService.createPrisma(createParticipanteDto);
  }

  @Get()
  async findAllPrisma() {
    return await this.participantesService.findAllPrisma();
  }

  @Get(':id')
  async findOnePrisma(@Param('id') id: string) {
    return await this.participantesService.findOnePrisma(+id);
  }

  @Patch(':id')
  async updatePrisma(
    @Param('id') id: string,
    @Body() updateParticipanteDto: UpdateParticipanteDto,
  ) {
    return await this.participantesService.updatePrisma(
      +id,
      updateParticipanteDto,
    );
  }

  @Delete(':id')
  async removePrisma(@Param('id') id: string) {
    return await this.participantesService.removePrisma(+id);
  }
} 