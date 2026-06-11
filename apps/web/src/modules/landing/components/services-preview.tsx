const SERVICES = [
  {
    id: "jiu-jitsu",
    title: "Jiu-Jitsu Private",
    description:
      "Técnica refinada, preparação para competição e desenvolvimento físico no tatame.",
    accent: "border-brand-blue bg-brand-blue/10",
  },
  {
    id: "defesa-pessoal",
    title: "Defesa Pessoal",
    description:
      "Cenários urbanos reais, proteção efetiva e confiança para o dia a dia.",
    accent: "border-primary/30 bg-primary/5",
  },
] as const;

export function ServicesPreview() {
  return (
    <section
      id="modalidades"
      className="relative z-10 border-t border-border bg-background px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
          Modalidades
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          Duas frentes. Um padrão premium.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className={`group rounded-2xl border p-8 transition-colors hover:border-primary/40 ${service.accent}`}
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
