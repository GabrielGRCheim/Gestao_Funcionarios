# Gestao_Funcionarios

🖥️ Gestão de Funcionários - Frontend Angular
🚀 Executando a aplicação

Clonar o repositório:

git clone <URL_DO_REPOSITORIO>
cd funcionario-web


Instalar dependências:

npm install


⚠️ Se houver conflito de dependências:

npm install --legacy-peer-deps


Rodar a aplicação:

ng serve


Acessar no navegador:

http://localhost:4200

🔐 Fluxo de autenticação

Tela de login com campo de e-mail.

Ao clicar em Entrar:

Valida se o e-mail possui formato correto.

Gera um token mock e armazena no localStorage.

Redireciona para a rota privada principal (/funcionarios).

Se o usuário já estiver logado, ao acessar /login ele será redirecionado automaticamente.

Header visível em todas rotas privadas:

Exibe o e-mail do usuário logado.

Botão Sair limpa o token e redireciona para /login.

🛡️ Guards utilizados
1. AuthGuard (CanActivate)

Protege rotas privadas, bloqueando acesso de usuários não autenticados.

Exemplo de aplicação:
/funcionarios, /funcionarios/novo, /funcionarios/:id

Implementação simplificada:

canActivate(): boolean {
  if (this.auth.isAuthenticated()) return true;
  this.router.navigate(['/login']);
  return false;
}

2. UnsavedGuard (CanDeactivate)

Prevê saída de formulários com dados não salvos.

Antes de navegar para outra rota, pergunta se o usuário deseja continuar.

Aplicado em: FuncionarioFormComponent

Implementação:

canDeactivate(component: UnsavedChanges): boolean {
  if (component.hasUnsavedChanges()) {
    return confirm('Você tem alterações não salvas. Deseja sair mesmo assim?');
  }
  return true;
}

📂 Estrutura das telas privadas
Componente	Descrição
FuncionarioListComponent	Lista de funcionários
FuncionarioFormComponent	Formulário de novo/edição de funcionário
HeaderComponent	Exibe e-mail logado e botão Sair

Todas as telas privadas incluem <app-header> para consistência do layout e logout.

⚠️ Observações

O fluxo de login é simulado (token mock). Em produção, deve ser integrado a um backend seguro.

O AuthGuard e UnsavedGuard garantem navegação segura e proteção das rotas.

O botão Sair limpa o token e impede acesso às rotas privadas até novo login.
