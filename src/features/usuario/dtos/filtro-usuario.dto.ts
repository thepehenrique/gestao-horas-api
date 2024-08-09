import { IsOptional, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FiltroUsuarioDto {
  @ApiProperty({
    description: 'Nome do Usuário.',
    required: false,
  })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({
    description: 'Email do Usuário.',
    required: false,
  })
  @IsOptional()
  @IsString()
  email?: string;

  constructor(init?: Partial<FiltroUsuarioDto>) {
    Object.assign(this, init);
  }
}
