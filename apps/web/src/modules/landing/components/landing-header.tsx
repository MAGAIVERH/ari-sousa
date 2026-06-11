import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { label: "Autoridade", href: "#autoridade" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Agendar", href: "#agendar" },
] as const;

export function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a href="#" className="font-display text-lg font-bold uppercase tracking-[0.12em] text-foreground">
          Ari Sousa
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button size="sm" className="hidden md:inline-flex">
          Agendar
        </Button>
      </div>
    </header>
  );
}
