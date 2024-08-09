import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'admin' })
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome', nullable: false })
  nome: string;

  @Column({ name: 'cargo', nullable: false })
  cargo: string;
}
