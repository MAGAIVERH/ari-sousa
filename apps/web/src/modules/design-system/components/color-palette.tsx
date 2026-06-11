type ColorSwatch = {
  name: string;
  variable: string;
  backgroundClass: string;
  foregroundClass: string;
};

const PALETTE: ColorSwatch[] = [
  {
    name: "Background",
    variable: "--background",
    backgroundClass: "bg-background",
    foregroundClass: "text-foreground",
  },
  {
    name: "Card",
    variable: "--card",
    backgroundClass: "bg-card",
    foregroundClass: "text-card-foreground",
  },
  {
    name: "Primary · Vermelho",
    variable: "--primary",
    backgroundClass: "bg-primary",
    foregroundClass: "text-primary-foreground",
  },
  {
    name: "Brand Blue",
    variable: "--brand-blue",
    backgroundClass: "bg-brand-blue",
    foregroundClass: "text-brand-white",
  },
  {
    name: "Brand Blue Deep",
    variable: "--brand-blue-deep",
    backgroundClass: "bg-brand-blue-deep",
    foregroundClass: "text-brand-white",
  },
  {
    name: "Secondary",
    variable: "--secondary",
    backgroundClass: "bg-secondary",
    foregroundClass: "text-secondary-foreground",
  },
  {
    name: "Muted",
    variable: "--muted",
    backgroundClass: "bg-muted",
    foregroundClass: "text-muted-foreground",
  },
  {
    name: "Accent",
    variable: "--accent",
    backgroundClass: "bg-accent",
    foregroundClass: "text-accent-foreground",
  },
  {
    name: "Success",
    variable: "--success",
    backgroundClass: "bg-success",
    foregroundClass: "text-brand-white",
  },
  {
    name: "Warning",
    variable: "--warning",
    backgroundClass: "bg-warning",
    foregroundClass: "text-background",
  },
  {
    name: "Destructive",
    variable: "--destructive",
    backgroundClass: "bg-destructive",
    foregroundClass: "text-destructive-foreground",
  },
  {
    name: "Border",
    variable: "--border",
    backgroundClass: "bg-border",
    foregroundClass: "text-foreground",
  },
];

export function ColorPalette() {
  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
        Cores
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-foreground">
        Paleta da marca
      </h2>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        Azul escuro premium, branco gelo e vermelho Gracie Barra — todos via
        tokens em globals.css.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PALETTE.map((swatch) => (
          <div
            key={swatch.variable}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <div
              className={`flex h-24 items-end p-4 ${swatch.backgroundClass} ${swatch.foregroundClass}`}
            >
              <span className="text-sm font-semibold">{swatch.name}</span>
            </div>
            <div className="bg-background px-4 py-3">
              <p className="font-mono text-xs text-muted-foreground">
                {swatch.variable}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
