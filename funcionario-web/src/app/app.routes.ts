import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { FuncionarioListComponent } from "./components/funcionario-list/funcionario-list.component";
import { FuncionarioFormComponent } from "./components/funcionario-form/funcionario-form.component";
import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [
  // rota de login (acesso livre)
  { path: 'login', component: LoginComponent },

  // rotas protegidas pelo AuthGuard
  { path: 'funcionarios', component: FuncionarioListComponent, canActivate: [AuthGuard] },
  { path: 'funcionarios/novo', component: FuncionarioFormComponent, canActivate: [AuthGuard] },
  { path: 'funcionarios/:id', component: FuncionarioFormComponent, canActivate: [AuthGuard] },

  // redirecionamentos
  { path: '', redirectTo: 'funcionarios', pathMatch: 'full' },
  { path: '**', redirectTo: 'funcionarios' },
];
