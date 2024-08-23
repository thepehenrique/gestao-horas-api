import { EntityManager, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

/* @EntityRepository(Usuario) */
export class UsuarioRepository extends Repository<Usuario> {
  constructor(private readonly entityManager: EntityManager) {
    super(Usuario, entityManager);
  }

  async salvar(usuario: Usuario): Promise<Usuario> {
    return this.entityManager.save(Usuario, usuario);
  }

  async deletar(id: number): Promise<void> {
    await this.entityManager.delete(Usuario, id);
  }

  async listarTodos(): Promise<Usuario[]> {
    return this.entityManager
      .createQueryBuilder(Usuario, 'item')
      .select([
        'item.id',
        'item.nome',
        'item.email',
        'item.senha',
        'item.tipoUsuario',
        'item.status',
        'item.dtCadastro',
        'item.dtAtualizacao',
      ])
      .getMany();
  }

  async getById(id: number): Promise<Usuario> {
    return this.entityManager
      .createQueryBuilder(Usuario, 'item')
      .select([
        'item.id',
        'item.nome',
        'item.email',
        'item.senha',
        'item.tipoUsuario',
        'item.status',
        'item.nuMatricula',
        'item.curso',
        'item.dtCadastro',
        'item.dtAtualizacao',
      ])
      .where('item.id = :id', { id })
      .getOne();
  }

  async findOneByLogin(login: string): Promise<Usuario | undefined> {
    return this.entityManager
      .createQueryBuilder(Usuario, 'item')
      .where('item.login = :login', { login })
      .getOne();
  }
}
