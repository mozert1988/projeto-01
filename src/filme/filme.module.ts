/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { FilmeController } from './filme.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FilmeController],
  providers: [FilmeService],
  imports: [PrismaModule],
})
export class FilmeModule {}