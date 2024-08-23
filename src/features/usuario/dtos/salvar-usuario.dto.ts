import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  ValidateIf,
} from '@nestjs/class-validator';
import { Usuario } from '../entities/usuario.entity';
import { StatusEnum } from 'src/features/dominio/enum/status.enum';
import { TipoUsuarioEnum } from '../enum/tipo-usuario.enum';
import { CursoEnum } from '../enum/curso.enum';

export class SalvarUsuarioDto {
  @ApiProperty({
    description: 'Nome do Usuário.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  nome: string;

  @ApiProperty({
    description: 'Email do Usuário.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  email: string;

  @ApiProperty({
    description: 'Senha do Usuário.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  senha: string;

  @ApiProperty({
    description: 'Tipo de Usuário.',
    required: true,
    enum: TipoUsuarioEnum,
  })
  @IsEnum(TipoUsuarioEnum)
  tipoUsuario: TipoUsuarioEnum;

  @ApiProperty({
    description: 'Status do Registro | ATIVO / INATIVO.',
    required: true,
    enum: StatusEnum,
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @ApiProperty({
    description: 'Número de Matricula.',
    required: true,
  })
  @ValidateIf((o) => o.tipoUsuario === TipoUsuarioEnum.ALUNO)
  @IsString()
  @IsOptional()
  nuMatricula?: string;

  @ApiProperty({
    description: 'Tipo de Curso.',
    required: true,
    enum: CursoEnum,
  })
  @ValidateIf((o) => o.tipoUsuario === TipoUsuarioEnum.ALUNO)
  @IsEnum(CursoEnum)
  curso?: CursoEnum;

  constructor(init?: Partial<SalvarUsuarioDto>) {
    Object.assign(this, init);
  }

  asEntity(date: Date, entidadeReferencia: Usuario): Usuario {
    const entidade = entidadeReferencia;

    if (!entidade.id) {
      entidade.dtCadastro = date;
      entidade.status = StatusEnum.ATIVO;
    }

    entidade.nome = this.nome;
    entidade.email = this.email;
    entidade.senha = this.senha;
    entidade.tipoUsuario = this.tipoUsuario;
    entidade.status = this.status;
    entidade.nuMatricula = this.nuMatricula;
    entidade.curso = this.curso;
    entidade.dtAtualizacao = date;

    return entidade;
  }
}
