/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from '@prisma/client';

@Controller('filme')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  async createPrisma(@Body() data: CreateFilmeDto,): Promise<Filme>{
    return this.filmeService.createPrisma(data);
  }

  @Get()
  async findAllPrisma() {
    return await this.filmeService.findAllPrisma();
  }

  @Get(':id')
  async findOnePrisma(@Param('id') id: string) {
    return await this.filmeService.findOnePrisma(+id);
  }

  @Patch(':id')
  async updatePrisma(
    @Param('id') id: string,
    @Body() updateFilmeDto: UpdateFilmeDto,
  ) {
    return await this.filmeService.updatePrisma(+id, updateFilmeDto);
  }

  @Delete(':id')
  async removePrisma(@Param('id') id: string) {
    return await this.filmeService.removePrisma(+id);
  }
}
