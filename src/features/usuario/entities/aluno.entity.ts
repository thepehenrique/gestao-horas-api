import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CursoEnum } from '../enum/curso.enum';

@Entity({ name: 'aluno' })
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'curso', type: 'char', nullable: false })
  curso: CursoEnum;

  @Column({ name: 'cel', nullable: false })
  cel: string;

  @Column({ name: 'nuMatricula', nullable: false })
  nuMatricula: string;
}
