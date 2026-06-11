import { ServiceMediaCard } from "@/modules/landing/components/service-media-card";
import { SERVICE_MEDIA_ASSETS } from "@/modules/landing/data/media-assets";

const SERVICES = [
  {
    id: "jiu-jitsu",
    title: "Jiu-Jitsu Private",
    description:
      "Técnica refinada, preparação para competição e desenvolvimento físico no tatame.",
    accent: "border-brand-blue bg-brand-blue/10",
    asset: SERVICE_MEDIA_ASSETS.jiuJitsu,
  },
  {
    id: "defesa-pessoal",
    title: "Defesa Pessoal",
    description:
      "Cenários urbanos reais, proteção efetiva e confiança para o dia a dia.",
    accent: "border-primary/30 bg-primary/5",
    asset: SERVICE_MEDIA_ASSETS.defesaPessoal,
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
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
          Contêineres de mídia em proporção 16:10 com parallax — prontos para
          receber as fotos finais de alta definição.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceMediaCard
              key={service.id}
              title={service.title}
              description={service.description}
              asset={service.asset}
              accentClass={service.accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
