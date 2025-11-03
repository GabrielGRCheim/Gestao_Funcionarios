import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="entrar()">
        <input type="email" [(ngModel)]="email" name="email" placeholder="E-mail" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  `,
  styles: [`
    .login-container { max-width: 400px; margin: 100px auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2); }
    input { display: block; width: 100%; margin-bottom: 10px; padding: 8px; }
    button { width: 100%; padding: 10px; background-color: #007bff; color: white; border: none; border-radius: 5px; }
  `]
})
export class LoginComponent implements OnInit {
  email = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    // Se já estiver logado, redireciona automaticamente
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/departamentos']);
    }
  }

  entrar() {
    if (!this.email || !this.email.includes('@')) {
      alert('Digite um e-mail válido!');
      return;
    }
    this.auth.login(this.email);
  }

}
