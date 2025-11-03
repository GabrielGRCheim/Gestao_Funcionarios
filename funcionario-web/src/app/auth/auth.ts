import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly EMAIL_KEY = 'auth_email';

  constructor(private router: Router) {}

  login(email: string): void {
    // Gerar token mock
    const token = Math.random().toString(36).substring(2);
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.EMAIL_KEY, email);
    this.router.navigate(['/departamentos']);
  }

  logout(): void {
  localStorage.removeItem('auth_token'); // remover token
  localStorage.removeItem('auth_email'); // remover email
  this.router.navigate(['/login']); // redireciona para login
}


  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getEmail(): string | null {
    return localStorage.getItem(this.EMAIL_KEY);
  }
}
