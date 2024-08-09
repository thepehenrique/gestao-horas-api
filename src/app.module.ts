import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsuarioModule } from './features/usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuarioModule, DatabaseModule, AuthModule],
})
export class AppModule {}
