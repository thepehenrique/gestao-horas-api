import { Module } from '@nestjs/common';
import { UsuarioService } from './service/usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './controller/usuario.controller';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
