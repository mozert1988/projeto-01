/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmeModule } from './filme/filme.module';
import { GeneroModule } from './genero/genero.module';
import { ParticipantesModule } from './participantes/participantes.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FilmeModule, GeneroModule, FilmeModule, ParticipantesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
