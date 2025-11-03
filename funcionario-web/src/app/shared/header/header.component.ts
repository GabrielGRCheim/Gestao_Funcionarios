import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <span>Usuário: {{ email }}</span>
      <button (click)="logout()">Sair</button>
    </header>
  `,
  styles: [`
    .header { display: flex; justify-content: space-between; align-items: center; padding: 10px 20px; background-color: #f5f5f5; margin-bottom: 20px; }
    button { padding: 5px 10px; }
  `]
})
export class HeaderComponent {
  email: string | null;

  constructor(private auth: AuthService) {
    this.email = this.auth.getEmail();
  }

  logout() {
    this.auth.logout();
  }
}
