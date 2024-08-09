import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TipoUsuarioEnum } from '../enum/tipo-usuario.enum';
import { StatusEnum } from 'src/features/dominio/enum/status.enum';

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'login', nullable: false })
  login: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'senha', nullable: false })
  senha: string;

  @Column({ name: 'tipoUsuario', type: 'char', length: 5, nullable: true })
  tipoUsuario?: TipoUsuarioEnum;

  @Column({ name: 'status', type: 'char', nullable: false })
  status: StatusEnum;

  @CreateDateColumn({ name: 'dtCadastro ' })
  dtCadastro: Date;

  @UpdateDateColumn({ name: 'dtAtualizacao ' })
  dtAtualizacao: Date;
}
