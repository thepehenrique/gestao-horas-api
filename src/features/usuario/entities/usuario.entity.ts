import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TipoUsuarioEnum } from '../enum/tipo-usuario.enum';
import { StatusEnum } from 'src/features/dominio/enum/status.enum';
import { CursoEnum } from '../enum/curso.enum';

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'senha', nullable: false })
  senha: string;

  @Column({ name: 'nuMatricula', nullable: true })
  nuMatricula?: string;

  @Column({ name: 'tipoUsuario', type: 'char', nullable: false })
  tipoUsuario: TipoUsuarioEnum;

  @Column({ name: 'curso', type: 'char', nullable: true })
  curso?: CursoEnum;

  @Column({ name: 'status', type: 'char', nullable: false })
  status: StatusEnum;

  @CreateDateColumn({ name: 'dtCadastro ' })
  dtCadastro: Date;

  @UpdateDateColumn({ name: 'dtAtualizacao ' })
  dtAtualizacao: Date;
}
