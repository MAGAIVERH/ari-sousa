# Ari Sousa — Jiu-Jitsu Private OS

Plataforma premium para aulas particulares de Jiu-Jitsu e Defesa Pessoal. Landing page de alta conversão inspirada em [landonorris.com](https://landonorris.com/), com agendamento de alunos e painel administrativo do professor.

## Stack

- **Monorepo:** Turborepo + pnpm
- **Frontend:** Next.js, React 19, TypeScript, Tailwind CSS
- **Animações:** GSAP + Lenis Scroll (próximas fases)
- **Backend:** PostgreSQL (Neon), Drizzle ORM

## Pré-requisitos

- Node.js 20+
- pnpm 9+

## Estrutura

```
ari-sousa/
├── apps/
│   └── web/          # Landing page + agendamento do aluno
├── packages/         # Pacotes compartilhados (db, shared, ui)
├── docs/
│   ├── guia-desenvolvimento-jiujitsu.md
│   └── assets/
└── README.md
```

## Configuração

1. Copie `.env.example` para `.env` na raiz do monorepo
2. Preencha `DATABASE_URL` com a connection string do Neon

## Comandos

```bash
# Instalar dependências
pnpm install

# Desenvolvimento (app web)
pnpm dev:web

# Build de produção
pnpm build

# Banco de dados (Drizzle)
pnpm db:generate   # gerar migrações
pnpm db:push       # aplicar schema no Neon
pnpm db:studio     # interface visual do banco
```

## Documentação

O roteiro completo de desenvolvimento (30 dias) está em `docs/guia-desenvolvimento-jiujitsu.md`.
