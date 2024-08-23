import { Injectable } from '@nestjs/common';
import { UsuarioRepository } from 'src/features/usuario/repository/usuario.repository';
import { DataSource } from 'typeorm';

@Injectable()
export class AuthService {
  private readonly repository: UsuarioRepository;

  constructor(private readonly dataSource: DataSource) {
    this.repository = new UsuarioRepository(this.dataSource.manager);
  }

  private allowedDomains = [
    '@aluno.faeterj-prc.faetec.rj.gov.br',
    '@faeterj-prc.faetec.rj.gov.br',
  ];

  /*  googleLogin(req) {
    if (!req.user) {
      return 'No user from Google';
    }

    const userEmail = req.user.email;

    // Verifica se o email está dentro dos domínios permitidos
    const isAllowed = this.allowedDomains.some((domain) =>
      userEmail.endsWith(domain),
    );

    if (!isAllowed) {
      return 'Email domain not allowed';
    }

    return {
      message: 'User Info from Google',
      user: req.user,
    };
  } */

  googleLogin(req) {
    if (!req.user) {
      return {
        statusCode: 401, // Unauthorized
        message: 'No user from Google',
      };
    }

    const userEmail = req.user.email;

    // Check if the email domain is allowed
    const isAllowed = this.allowedDomains.some((domain) =>
      userEmail.endsWith(domain),
    );

    if (!isAllowed) {
      return {
        statusCode: 403, // Forbidden
        message: 'Email domain not allowed',
      };
    }

    // Redirect URL
    return {
      statusCode: 302, // Redirect
      redirect: 'http://localhost:4200/registro/aluno',
    };
  }

  hello() {
    return 'Hello';
  }
}
