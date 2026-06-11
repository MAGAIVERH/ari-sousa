# Ari Sousa — Jiu-Jitsu Private OS

Plataforma premium para aulas particulares de Jiu-Jitsu e Defesa Pessoal. Landing page de alta conversão inspirada em [landonorris.com](https://landonorris.com/), com agendamento de alunos e painel administrativo do professor.

## Stack

- **Monorepo:** Turborepo + pnpm
- **Frontend:** Next.js, React 19, TypeScript, Tailwind CSS
- **Animações:** GSAP + Lenis Scroll (próximas fases)
- **Backend:** PostgreSQL, Drizzle ORM (próximas fases)

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

## Comandos

```bash
# Instalar dependências
pnpm install

# Desenvolvimento (app web)
pnpm dev:web

# Build de produção
pnpm build
```

## Documentação

O roteiro completo de desenvolvimento (30 dias) está em `docs/guia-desenvolvimento-jiujitsu.md`.
