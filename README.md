# Segredos do Corte (Barbershop Web App)

### 🚀 Sobre o Projeto
Aplicação web interativa para agendamento de serviços em barbearia/salão. Conta com interface do cliente para agendamentos e um painel administrativo integrado para gestão de horários.

### 🛠️ Arquitetura e Stack Técnica
* **Frontend:** HTML5 semântico com estilização CSS3 customizada (`style.css`).
* **Lógica do Cliente:** JavaScript (`script.js`) gerenciando lógica de agendamento local, validação de campos e controle de estado de interface.
* **Backend:** Desacoplado no diretório `agendamentos-backend` para controle e persistência de dados.

### 📂 Estrutura de Arquivos Principal
* `index.html` - Landing page comercial de apresentação.
* `agendamento.html` - Fluxo passo a passo de reserva do cliente.
* `painel.html` - Dashboard do administrador para visualização de reservas.
* `script.js` - Controlador de estado e chamadas de API.
* `style.css` - Design visual customizado responsivo.

### 🔧 Como Executar Localmente
1. Abra as páginas estáticas diretamente no navegador ou via servidor local (ex: Live Server).
2. Configure a API apontando o `script.js` para o endpoint ativo do backend em `agendamentos-backend`.
