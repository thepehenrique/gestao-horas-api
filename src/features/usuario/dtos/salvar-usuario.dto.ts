import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { Usuario } from '../entities/usuario.entity';
import { StatusEnum } from 'src/features/dominio/enum/status.enum';

export class SalvarUsuarioDto {
  @ApiProperty({
    description: 'Nome do Usuário.',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty({
    description: 'Email do Usuário.',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  /* @ApiProperty({
    description: 'Tipo de Usuário.',
    required: true,
  })
  @IsEnum(TipoUsuarioEnum)
  tipoUsuario: TipoUsuarioEnum; */

  @ApiProperty({
    description: 'Senha do Usuário.',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  senha: string;

  @ApiProperty({
    description: 'Status do Registro | ATIVO / INATIVO.',
    required: true,
    enum: StatusEnum,
  })
  @IsNotEmpty()
  @IsEnum(StatusEnum)
  status: StatusEnum;

  constructor(init?: Partial<SalvarUsuarioDto>) {
    Object.assign(this, init);
  }

  asEntity(date: Date, entidadeReferencia: Usuario): Usuario {
    const entidade = entidadeReferencia;

    if (!entidade.id) {
      entidade.dtCadastro = date;
      entidade.status = StatusEnum.ATIVO;
    }

    entidade.login = this.login;
    entidade.email = this.email;
    entidade.senha = this.senha;
    entidade.status = this.status;
    entidade.dtAtualizacao = date;

    return entidade;
  }
}
