import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsuarioRepository } from '../repository/usuario.repository';
import { DataSource } from 'typeorm';
import { SalvarUsuarioDto } from '../dtos/salvar-usuario.dto';
import { Usuario } from '../entities/usuario.entity';
import { TipoUsuarioEnum } from '../enum/tipo-usuario.enum';

@Injectable()
export class UsuarioService {
  private readonly repository: UsuarioRepository;

  private readonly service: UsuarioService;

  constructor(private readonly dataSource: DataSource) {
    this.repository = new UsuarioRepository(this.dataSource.manager);
  }

  async salvar(bodyDto: SalvarUsuarioDto): Promise<number> {
    const data = new Date();
    const UsuarioEntity = new Usuario();

    const registro = new SalvarUsuarioDto(bodyDto).asEntity(
      data,
      UsuarioEntity,
    );
    registro.tipoUsuario = TipoUsuarioEnum.ALUNO;

    await this.repository.salvar(registro);

    return registro.id;
  }

  async get() // filtros: FiltroMateriaDto,
  : Promise<Usuario[]> {
    return this.repository.listarTodos();
  }

  async getById(id: number): Promise<Usuario> {
    return this.repository.getById(id);
  }

  async deletar(id: number): Promise<void> {
    const registro = await this.getById(id);
    if (!registro) throw new NotFoundException('Registro não encontrado');

    try {
      await this.repository.deletar(id);
    } catch (error) {
      throw new BadRequestException(
        'Ocorreu um erro ao tentar excluir os dados.',
      );
    }
  }

  async findOneByLogin(login: string): Promise<Usuario | undefined> {
    return this.repository.findOne({ where: { login } });
  }
}
