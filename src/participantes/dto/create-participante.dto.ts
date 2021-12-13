/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { CreateFilmeDto} from 'src/filme/dto/create-filme.dto';


export class CreateParticipanteDto {
@IsNotEmpty()
@IsString()
  nome: string;

@IsUrl()
@IsNotEmpty()
imagem: string;

@IsNotEmpty()
@IsString()
data_nascimento: string;

@IsNotEmpty()
@IsString()
ator: string;

@IsString()
filme: CreateFilmeDto[];
}
