import {
  integer,
  pgEnum,
  pgTable,
  text,
  time,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const agendamentoStatusEnum = pgEnum("agendamento_status", [
  "pendente",
  "confirmado",
  "cancelado",
]);

export const financeiroTipoEnum = pgEnum("financeiro_tipo", [
  "entrada",
  "saida",
]);

export const professores = pgTable("professores", {
  id: uuid("id").primaryKey().defaultRandom(),
  nome: varchar("nome", { length: 255 }).notNull(),
  graduacao: varchar("graduacao", { length: 100 }).notNull(),
  bio: text("bio"),
  valorHora: integer("valor_hora").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const disponibilidades = pgTable("disponibilidades", {
  id: uuid("id").primaryKey().defaultRandom(),
  professorId: uuid("professor_id")
    .notNull()
    .references(() => professores.id, { onDelete: "cascade" }),
  diaSemana: integer("dia_semana").notNull(),
  horaInicio: time("hora_inicio").notNull(),
  horaFim: time("hora_fim").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const agendamentos = pgTable("agendamentos", {
  id: uuid("id").primaryKey().defaultRandom(),
  professorId: uuid("professor_id")
    .notNull()
    .references(() => professores.id, { onDelete: "cascade" }),
  nomeAluno: varchar("nome_aluno", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  telefone: varchar("telefone", { length: 20 }).notNull(),
  dataHora: timestamp("data_hora", { withTimezone: true }).notNull(),
  status: agendamentoStatusEnum("status").default("pendente").notNull(),
  modalidade: varchar("modalidade", { length: 50 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const financeiro = pgTable("financeiro", {
  id: uuid("id").primaryKey().defaultRandom(),
  professorId: uuid("professor_id")
    .notNull()
    .references(() => professores.id, { onDelete: "cascade" }),
  agendamentoId: uuid("agendamento_id").references(() => agendamentos.id, {
    onDelete: "set null",
  }),
  tipo: financeiroTipoEnum("tipo").notNull(),
  valor: integer("valor").notNull(),
  descricao: text("descricao").notNull(),
  dataLancamento: timestamp("data_lancamento", { withTimezone: true })
    .defaultNow()
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
