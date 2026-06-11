const TYPOGRAPHY_SAMPLES = [
  {
    label: "Display · Hero",
    className: "font-display text-5xl font-bold uppercase tracking-tight",
    sample: "Aulas Particulares",
  },
  {
    label: "Display · Seção",
    className: "font-display text-3xl font-bold uppercase tracking-tight",
    sample: "Jiu-Jitsu Private",
  },
  {
    label: "Corpo · Lead",
    className: "text-lg leading-7 text-muted-foreground",
    sample:
      "Mais de 15 anos de experiência. Treino individualizado com correção milimétrica.",
  },
  {
    label: "Corpo · Padrão",
    className: "text-sm leading-7 text-foreground",
    sample: "Horários flexíveis, atenção 100% individualizada e metodologia exclusiva.",
  },
  {
    label: "Label · Uppercase",
    className:
      "text-xs font-semibold uppercase tracking-[0.18em] text-primary",
    sample: "Gracie Barra · Faixa Preta 2º Grau",
  },
  {
    label: "Muted · Suporte",
    className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
    sample: "Role para trocar o traje",
  },
] as const;

export function TypographyScale() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
        Tipografia
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-foreground">
        Hierarquia visual
      </h2>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        Bebas Neue para impacto esportivo · DM Sans para leitura confortável.
      </p>

      <div className="mt-8 space-y-8">
        {TYPOGRAPHY_SAMPLES.map((item) => (
          <div
            key={item.label}
            className="border-b border-border pb-8 last:border-b-0 last:pb-0"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {item.label}
            </p>
            <p className={item.className}>{item.sample}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
