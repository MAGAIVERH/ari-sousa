import { ParallaxMediaContainer } from "@/modules/landing/components/parallax-media-container";
import type { MediaAsset } from "@/modules/landing/data/media-assets";

type ServiceMediaCardProps = {
  title: string;
  description: string;
  asset: MediaAsset;
  accentClass: string;
  hoverOverlayClass: string;
};

export function ServiceMediaCard({
  title,
  description,
  asset,
  accentClass,
  hoverOverlayClass,
}: ServiceMediaCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:border-primary/50 hover:shadow-[0_24px_80px_hsl(var(--brand-blue-deep)/0.35)] ${accentClass}`}
    >
      <div className="relative">
        <ParallaxMediaContainer
          asset={asset}
          parallaxOffset={40}
          className="rounded-none border-0 border-b border-border transition-[filter] duration-500 group-hover:brightness-110"
          imageClassName="transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div
          className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${hoverOverlayClass}`}
        />
      </div>

      <div className="relative p-8 transition-colors duration-500 group-hover:bg-card/90">
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
          {description}
        </p>
      </div>
    </article>
  );
}
