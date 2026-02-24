# 📝 Todo List - Angular 21 + NestJS + Prisma

Aplicação fullstack de lista de tarefas desenvolvida com Angular 21 (Signals - modo zoneless) no frontend e NestJS com Prisma no backend.

O projeto implementa um CRUD completo com atualização reativa moderna e persistência em banco de dados.

---

## 🚀 Tecnologias Utilizadas

### Frontend
- Angular 21
- Signals (WritableSignal)
- Standalone Components
- HttpClient

### Backend
- NestJS
- Prisma ORM
- TypeScript
- API REST
- Banco de Dados PostgreSQL
- Docker
- Testes End-to-End (E2E)    

---

## ⚙️ Funcionalidades

- ✅ Criar tarefa
- 📄 Listar tarefas
- ❌ Remover tarefa
- 🔄 Atualização reativa com Signals
- 💾 Persistência com banco de dados via Prisma

---


# ▶️ Como rodar o projeto

## 🔹 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```
---
## 🔹 2. Configurar o Backend

Entre na pasta do Backend:

```bash
cd todo-backend
```

Instale as dependências:

```bash
npm install
```

### Configurar Banco de Dados com Docker 

O projeto utiliza PostgreSQL rodando via Docker.

1. Subir o banco de dados

- Na raiz do projeto, execute:
```bash
docker-compose up -d
```
- Isso iniciará o container do PostgreSQL na porta configurada (ex: 5432).

- Crie um arquivo .env com:
```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/todo_db?schema=public"
```
(Ajuste conforme as credenciais definidas no docker-compose.yml.)


### Rodar o Prisma

Depois que o banco estiver rodando:
```bash
npx prisma generate
npx prisma migrate dev
```
### Iniciar o servidor
```bash
npm run start:dev
```
### Backend rodando em:
```bash
http://localhost:3000
```
Para verificar as TODOs:
```bash
http://localhost:3000/todos
```
---
## 🔹 3. Configurar o Frontend

Entre na pasta do Frontend
```bash
cd todo-front
```
Instale as dependências:
```bash
npm install
```
Inicie a aplicação:
```bash
ng serve
```
Fontend disponível em:
```bash
http://localhost:4200
```
---

# 🧪 Testes End-to-End (E2E)

O backend possui testes E2E utilizando Jest e Supertest, validando os principais endpoints do CRUD da aplicação.

Os testes cobrem:

✅ Criação de tarefa (POST /todos)

📄 Listagem de tarefas (GET /todos)

🔄 Atualização de tarefa (PATCH /todos/:id)

❌ Remoção de tarefa (DELETE /todos/:id)


## ▶️ Executar os testes

Na pasta backend, execute:

```bash 
npm run test:e2e
```
Os testes são executados em ambiente isolado utilizando o módulo principal da aplicação e ValidationPipe configurado globalmente.

---
# 🧠 Arquitetura

Frontend:
Angular 21 utilizando Signals para gerenciamento de estado reativo sem dependência de Zone.js.

Backend:
NestJS com Prisma ORM para persistência de dados.

Fluxo:

Frontend → HttpClient → API REST (NestJS) → Prisma → Banco de Dados

---

# 📦 Por que utilizar Docker?

O uso do Docker permite que o banco de dados seja executado de forma isolada, garantindo reprodutibilidade do ambiente em qualquer máquina, sem necessidade de instalação manual do PostgreSQL.

---
# 📚 Aprendizados

- Uso de Angular Signals no modo zoneless
- Resolução de problemas de Change Detection
- Integração entre frontend e backend
- Utilização do Prisma ORM