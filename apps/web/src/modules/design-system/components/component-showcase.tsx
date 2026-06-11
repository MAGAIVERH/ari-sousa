"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ComponentShowcase() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
        Componentes
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-foreground">
        shadcn/ui
      </h2>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        Base visual adaptada ao tema dark premium do Ari Sousa.
      </p>

      <div className="mt-8 space-y-10">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Botões
          </p>
          <div className="flex flex-wrap gap-3">
            <Button>Primário</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <Separator />

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Badges
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge>Confirmado</Badge>
            <Badge variant="secondary">Pendente</Badge>
            <Badge variant="outline">Jiu-Jitsu</Badge>
            <Badge variant="destructive">Cancelado</Badge>
          </div>
        </div>

        <Separator />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="font-display text-xl uppercase tracking-tight">
                Card com destaque
              </CardTitle>
              <CardDescription>
                Padrão para alertas e informações importantes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Valor hora-aula, avisos e CTAs premium.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Agendar</Button>
            </CardFooter>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="font-display text-xl uppercase tracking-tight">
                Card padrão
              </CardTitle>
              <CardDescription>
                Estrutura base para módulos e seções.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Bordas suaves, fundo card e tipografia hierárquica.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <div className="grid max-w-xl gap-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Formulário
          </p>

          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input id="nome" placeholder="Seu nome" className="rounded-xl" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modalidade">Modalidade</Label>
            <Select>
              <SelectTrigger className="w-full rounded-xl">
                <SelectValue placeholder="Selecione a modalidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jiu-jitsu">Jiu-Jitsu Private</SelectItem>
                <SelectItem value="defesa-pessoal">Defesa Pessoal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              placeholder="Conte seu objetivo com as aulas..."
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
