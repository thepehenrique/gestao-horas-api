import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class AuthModule {}
