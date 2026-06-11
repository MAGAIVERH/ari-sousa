import Link from "next/link";

import { ColorPalette } from "@/modules/design-system/components/color-palette";
import { ComponentShowcase } from "@/modules/design-system/components/component-showcase";
import { TypographyScale } from "@/modules/design-system/components/typography-scale";

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Design System
            </p>
            <h1 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
              Ari Sousa
            </h1>
          </div>
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Voltar à landing
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-8 px-6 py-12">
        <section className="rounded-2xl border border-border bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Dia 3
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-foreground">
            Identidade visual premium
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            Referência interna de cores, tipografia e componentes shadcn/ui
            para toda a plataforma de Jiu-Jitsu e Defesa Pessoal.
          </p>
        </section>

        <ColorPalette />
        <TypographyScale />
        <ComponentShowcase />
      </main>
    </div>
  );
}
