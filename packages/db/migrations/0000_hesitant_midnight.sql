CREATE TYPE "public"."agendamento_status" AS ENUM('pendente', 'confirmado', 'cancelado');--> statement-breakpoint
CREATE TYPE "public"."financeiro_tipo" AS ENUM('entrada', 'saida');--> statement-breakpoint
CREATE TABLE "agendamentos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"professor_id" uuid NOT NULL,
	"nome_aluno" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"telefone" varchar(20) NOT NULL,
	"data_hora" timestamp with time zone NOT NULL,
	"status" "agendamento_status" DEFAULT 'pendente' NOT NULL,
	"modalidade" varchar(50),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "disponibilidades" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"professor_id" uuid NOT NULL,
	"dia_semana" integer NOT NULL,
	"hora_inicio" time NOT NULL,
	"hora_fim" time NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "financeiro" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"professor_id" uuid NOT NULL,
	"agendamento_id" uuid,
	"tipo" "financeiro_tipo" NOT NULL,
	"valor" integer NOT NULL,
	"descricao" text NOT NULL,
	"data_lancamento" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "professores" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nome" varchar(255) NOT NULL,
	"graduacao" varchar(100) NOT NULL,
	"bio" text,
	"valor_hora" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_professor_id_professores_id_fk" FOREIGN KEY ("professor_id") REFERENCES "public"."professores"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "disponibilidades" ADD CONSTRAINT "disponibilidades_professor_id_professores_id_fk" FOREIGN KEY ("professor_id") REFERENCES "public"."professores"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "financeiro" ADD CONSTRAINT "financeiro_professor_id_professores_id_fk" FOREIGN KEY ("professor_id") REFERENCES "public"."professores"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "financeiro" ADD CONSTRAINT "financeiro_agendamento_id_agendamentos_id_fk" FOREIGN KEY ("agendamento_id") REFERENCES "public"."agendamentos"("id") ON DELETE set null ON UPDATE no action;