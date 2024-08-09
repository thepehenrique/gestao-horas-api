import {
  Controller,
  HttpStatus,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { SalvarUsuarioDto } from '../dtos/salvar-usuario.dto';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../entities/usuario.entity';

@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) {}

  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    // type: ErrorResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    // type: ErrorResponseDto,
  })
  @ApiOperation({
    summary: 'Criação do registro.',
  })
  @Post()
  //@RolesRequired({ code: MATERIA_ROLES.CADASTRAR })
  async salvar(
    @Body() body: SalvarUsuarioDto,
    // @ReqUser() userDto: Usuario,
  ): Promise<number> {
    return this.service.salvar(body);
  }

  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    // type: ErrorResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    // type: ErrorResponseDto,
  })
  @ApiOperation({
    summary: 'Busca do registro pelo Id.',
  })
  // @RolesRequired({ code: MATERIA_ROLES.VISUALIZAR })
  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.service.getById(id);
  }

  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    // type: ErrorResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    // type: ErrorResponseDto,
  })
  @ApiOperation({
    summary: 'Remove o registro pelo Id.',
  })
  // @RolesRequired({ code: MATERIA_ROLES.EXCLUIR })
  @Delete('/:id')
  async deletar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.deletar(id);
  }

  @ApiOperation({
    summary: 'Listagem dos registros cadastrados.',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    // type: ErrorResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    // type: ErrorResponseDto,
  })
  // @ApiOkResponsePaginationQueryGeneric(Usuario)
  // @RolesRequired({ code: MATERIA_ROLES.VISUALIZAR })
  @Get()
  async lista() // @Query() filtros: ,
  : Promise<Usuario[]> {
    return this.service.get();
  }
}
