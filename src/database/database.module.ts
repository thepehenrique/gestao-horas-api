import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/features/usuario/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'usuario',
      entities: [Usuario],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
