/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateFilmeDto } from 'src/filme/dto/create-filme.dto';

export class CreateGeneroDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
  @IsString()
  filme?: CreateFilmeDto[];
}