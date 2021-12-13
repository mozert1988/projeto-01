/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUrl, IsInt } from 'class-validator';
import { Prisma } from '@prisma/client';

export class CreateFilmeDto {
@IsNotEmpty()
@IsString()
nome: string;

@IsUrl()
@IsNotEmpty()
imagem: string;
 
@IsNotEmpty()
@IsString()
data_lancamento: string;

@IsNotEmpty()
@IsString()
tempo_duracao: string;

@IsInt()
genero_id?: number;

Participantes?: Prisma.ParticipantesUncheckedCreateNestedManyWithoutFilmeInput

}

