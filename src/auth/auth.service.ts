import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private allowedDomains = [
    '@aluno.faeterj-prc.faetec.rj.gov.br',
    '@faeterj-prc.faetec.rj.gov.br',
  ];

  googleLogin(req) {
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
  }

  hello() {
    return 'Hello';
  }
}
